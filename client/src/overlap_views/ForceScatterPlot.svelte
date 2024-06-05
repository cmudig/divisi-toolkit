<script lang="ts">
  import { getContext, onDestroy } from 'svelte';
  import * as d3 from 'd3';
  import { scaleCanvas } from 'layercake';
  import { createWebWorker } from '../utils/utils';
  import {
    Attribute,
    Mark,
    MarkRenderGroup,
    PositionMap,
    Scales,
    Ticker,
    markBox,
  } from 'counterpoint-vis';

  const { data, width, height } = getContext('LayerCake');

  export let pointRadius = 7; // 4;
  export let colorFn = null;
  export let hoveredSlices = null;

  export let hoveredMousePosition = null;
  export let hoveredPointIndex = null;

  export let colorByError = false;
  export let colorBySlice = true;

  const sliceColorScale = d3.scaleOrdinal(d3.schemeCategory10);

  const { ctx } = getContext('canvas');

  const layoutWidth = 800;
  const layoutHeight = 800;

  let scales = new Scales({ animationDuration: 500 })
    .xDomain([-layoutWidth * 0.5, layoutWidth * 0.5])
    .yDomain([-layoutHeight * 0.5, layoutHeight * 0.5])
    .onUpdate(() => {
      // When the scales update, we also need to let the d3 zoom object know that
      // the zoom transform has changed. Otherwise performing a zoom gesture after
      // a programmatic update will result in an abrupt transform change
      let sel = d3.select($ctx.canvas as Element);
      let currentT = d3.zoomTransform($ctx.canvas);
      let t = scales.transform();
      if (t.k != currentT.k || t.x != currentT.x || t.y != currentT.y) {
        sel.call(zoom.transform, new d3.ZoomTransform(t.k, t.x, t.y));
      }
    });
  let markSet = new MarkRenderGroup()
    .configure({
      hitTest: (mark, location) => {
        return (
          Math.sqrt(
            Math.pow(mark.attr('x') - location[0], 2.0) +
              Math.pow(mark.attr('y') - location[1], 2.0)
          ) <=
          mark.attr('size') + 4
        );
      },
    })
    .configureStaging({
      initialize: (element) => element.setAttr('entranceProgress', 0),
      enter: async (element) =>
        await element
          .animateTo('entranceProgress', 1.0)
          .wait('entranceProgress'),
      exit: async (element) =>
        await element
          .animateTo('entranceProgress', 0.0)
          .wait('entranceProgress'),
    });
  let positionMap = new PositionMap().add(markSet);

  function makeMark(id: any) {
    return new Mark(id, {
      x: { value: $width * 0.5, transform: scales.xScale },
      y: { value: $height * 0.5, transform: scales.yScale },
      size: 0,
      entranceProgress: 0,
      radius: {
        valueFn: (mark) => mark.attr('entranceProgress') * mark.attr('size'),
        transform: (v) =>
          (v * scales.transform().k * Math.min($width, $height)) / 400,
      },
      slices: [],
      numSlices: 0,
      outcome: false,
      alpha: (mark) => {
        let slices = mark.attr('slices');
        return (
          mark.attr('entranceProgress') *
          (hoveredSlices !== null &&
          (slices.length != hoveredSlices.length ||
            !slices.every((s, i) => hoveredSlices[i] == s))
            ? 0.2
            : 1.0)
        );
      },
    });
  }

  let ticker = new Ticker([markSet, scales]).onChange(() => {
    positionMap.invalidate();
    draw();
  });

  // We use a d3 zoom object to simplify the gesture handling, but supply the
  // output transform to our Scales instance
  let zoom = d3
    .zoom()
    .scaleExtent([0.1, 10])
    .on('zoom', (e) => {
      // important to make sure the source event exists, filtering out our
      // programmatic changes
      console.log('zoom');
      if (e.sourceEvent != null) scales.transform(e.transform);
    });

  export let simulationProgress = 0;

  let simulation;

  let showConvexHulls = false;

  onDestroy(cleanUp);

  $: if ($data.length > 0) {
    cleanUp();
    initSimulation(Object.fromEntries($data.map((d) => [d.id, d])));
  } else {
    cleanUp();
  }

  $: $width,
    $height,
    (() => {
      scales
        .xDomain([-layoutWidth * 0.6, layoutWidth * 0.6])
        .yDomain([-layoutHeight * 0.6, layoutHeight * 0.6])
        .xRange([0, $width])
        .yRange([0, $height])
        .makeSquareAspect()
        .reset();
    })();

  let oldCtx = null;
  $: if (!!$ctx && $ctx !== oldCtx) {
    // set up the d3 zoom object
    console.log('setting up canvas');
    d3.select($ctx.canvas as Element)
      .on('mousemove', handleMouseover)
      .on('mouseleave', () => {
        hoveredMousePosition = null;
        hoveredPointIndex = null;
        hoveredSlices = null;
      })
      .call(zoom);
    oldCtx = $ctx;
  }

  function cleanUp() {
    if (!!simulation) simulation.stop();
    if (!!worker) worker.terminate();
    simulation = null;
  }

  let worker = null;
  let currentWorkerID = null;

  async function getWorker() {
    if (!!worker) worker.terminate();

    let workerURL = new URL(
      import.meta.url.substring(0, import.meta.url.lastIndexOf('/')) +
        '/force_layout_worker.js'
    );

    worker = await createWebWorker(workerURL);

    worker.onmessage = (e) => {
      if (e.data.id != currentWorkerID) {
        worker.terminate();
        return;
      }
      if (e.data.positions.length != markSet.count()) {
        console.warn('Wrong number of positions in worker-returned layout');
        worker.terminate();
        return;
      }
      markSet
        .animateTo('x', (m, i) => e.data.positions[i].x)
        .animateTo('y', (m, i) => e.data.positions[i].y);

      if (e.data.tick == e.data.totalTicks) {
        simulationProgress = null;
      } else {
        simulationProgress = e.data.tick / e.data.totalTicks;
      }
    };
    return worker;
  }

  let slicePositions = {}; // put nodes with the same least-common slice in the same coordinates
  let sliceCounts: number[] = [];

  function generateRandomPosition(datum) {
    let numSlices = datum.slices.reduce((prev, curr) => prev + curr, 0);

    if (numSlices > 0) {
      let leastCommonSlice = datum.slices.reduce(
        (prev, curr, idx) =>
          sliceCounts[idx] < sliceCounts[prev] ? idx : prev,
        0
      );
      if (!!slicePositions[leastCommonSlice])
        return Object.assign({}, slicePositions[leastCommonSlice]);
      let newPos = {
        x: Math.random() * 50 - 25,
        y: Math.random() * 50 - 25,
      };
      slicePositions[leastCommonSlice] = newPos;
      return newPos;
    }
    return {
      x: Math.random() * layoutWidth - layoutWidth / 2,
      y: Math.random() * layoutHeight - layoutHeight / 2,
    };
  }

  function initSimulation(ds: { [key: string]: any }) {
    if (!!simulation) cleanUp();

    sliceCounts = Array.apply(null, Array($data[0].slices.length)).map(() => 0);
    $data.forEach((d) => {
      d.slices.forEach((x, i) => {
        if (x) sliceCounts[i] += 1;
      });
    });
    let maxSize = Object.values(ds).reduce(
      (prev, curr) => Math.max(prev, Math.sqrt(curr.size) ?? 1),
      1
    );
    console.log('max size:', maxSize);

    let marksToRemove = markSet.filter((m) => !ds[m.id]).getMarks();
    marksToRemove.forEach((m) => markSet.deleteMark(m));

    Object.values(ds).forEach((d, i) => {
      if (!markSet.has(d.id)) {
        let mark = makeMark(d.id);
        let pos = !!d.x
          ? {
              x: d.x * layoutWidth - layoutWidth * 0.5,
              y: -d.y * layoutHeight + layoutHeight * 0.5,
            }
          : generateRandomPosition(d);
        mark.setAttr('x', pos.x).setAttr('y', pos.y);
        markSet.addMark(mark);
      } else markSet.get(d.id).animate('radius');
      let mark = markSet.get(d.id);
      if (!!d.x) {
        mark.animateTo('x', d.x * layoutWidth - layoutWidth * 0.5);
        mark.animateTo('y', -d.y * layoutHeight + layoutHeight * 0.5);
      }
      mark
        .setAttr('slices', d.slices)
        .setAttr('size', 1 + (Math.sqrt(d.size) * 20) / maxSize)
        .setAttr(
          'numSlices',
          d.slices.reduce((prev, curr) => prev + curr, 0)
        )
        .setAttr('outcome', d.outcome);
    });

    console.log('new mark set has', markSet.count());

    currentWorkerID = (+new Date()).toString(36).slice(-10);
    getWorker().then((w) => {
      console.log('posting message');
      w.postMessage({
        id: currentWorkerID,
        w: layoutWidth,
        h: layoutHeight,
        updateInterval: 10,
        // make sure data is in order of the markset
        data: markSet.getMarks().map((m) => ({
          x: ds[m.id].x * layoutWidth - layoutWidth * 0.5,
          y: -ds[m.id].y * layoutHeight + layoutHeight * 0.5,
          size: m.attr('size'),
          outcome: ds[m.id].outcome,
          slices: ds[m.id].slices,
        })),
        pointRadius,
      });
    });
  }

  function draw(colorF = null) {
    colorF = colorF || colorFn;

    scaleCanvas($ctx, $width, $height);
    $ctx.clearRect(0, 0, $width, $height);

    /* --------------------------------------------
     * Draw our scatterplot
     */
    markSet.stage.forEach((mark, i) => {
      let itemSlices = mark.attr('slices');
      let x = mark.attr('x');
      let y = mark.attr('y');
      let alpha = mark.attr('alpha');
      let radius = mark.attr('radius');
      let outcome = mark.attr('outcome');
      // if (hovered != null && i == hoveredPointIndex) radius *= 1.5;

      let numSlices = mark.attr('numSlices');

      $ctx.globalAlpha = alpha;

      /*if (false) {
        $ctx.beginPath();
        if (outcome) {
          $ctx.strokeStyle = '#333';
          $ctx.lineWidth = radius * 0.2;
          $ctx.ellipse(x, y, radius * 0.5, radius * 0.5, 0, 2 * Math.PI, false);
          $ctx.stroke();
        }
        let lw = radius * 0.4; // outcome ? 4 : 2;
        $ctx.lineWidth = lw;
        // if (numSlices == 0) $ctx.globalAlpha = 0.7;
        if (numSlices > 0) {
          let sliceIdx = 0;
          itemSlices.forEach((s, j) => {
            if (!s) return;
            $ctx.beginPath();
            $ctx.fillStyle = sliceColorScale(j);
            $ctx.moveTo(x, y);
            $ctx.arc(
              x,
              y,
              radius * 0.4, // (numSlices > 0 ? radius : radius * 0.5) + (outcome ? 1 : 0),
              -Math.PI * 0.5 + (sliceIdx * Math.PI * 2.0) / numSlices,
              -Math.PI * 0.5 + ((sliceIdx + 1) * Math.PI * 2.0) / numSlices,
              false
            );
            $ctx.closePath();
            $ctx.fill();
            sliceIdx++;
          });
        } else {
          $ctx.beginPath();
          $ctx.fillStyle = '#e2e8f0';
          $ctx.ellipse(x, y, radius * 0.4, radius * 0.4, 0, 2 * Math.PI, false);
          $ctx.fill();
        }
      } else */ if (colorBySlice) {
        $ctx.beginPath();
        let color =
          colorFn != null ? colorFn({ slices: itemSlices, outcome }) : null;
        $ctx.strokeStyle = '#cbd5e1';
        $ctx.lineWidth = 1;
        $ctx.arc(
          x,
          y,
          radius * (numSlices > 0 ? 0.4 : 0.5),
          0,
          2 * Math.PI,
          false
        );
        $ctx.stroke();
        if (outcome) {
          $ctx.fillStyle = '#94a3b8';
        } else $ctx.fillStyle = 'white';
        $ctx.fill();
        let lw = radius * 0.3; // outcome ? 4 : 2;
        $ctx.lineWidth = lw;
        // if (numSlices == 0) $ctx.globalAlpha = 0.7;
        if (numSlices > 0) {
          let sliceIdx = 0;
          itemSlices.forEach((s, j) => {
            if (!s) return;
            $ctx.beginPath();
            $ctx.strokeStyle = sliceColorScale(j);
            $ctx.arc(
              x,
              y,
              radius * 0.55, // (numSlices > 0 ? radius : radius * 0.5) + (outcome ? 1 : 0),
              -Math.PI * 0.5 + (sliceIdx * Math.PI * 2.0) / numSlices,
              -Math.PI * 0.5 + ((sliceIdx + 1) * Math.PI * 2.0) / numSlices,
              false
            );
            $ctx.stroke();
            sliceIdx++;
          });
        }
      } else if (colorByError) {
        $ctx.beginPath();
        let color =
          colorFn != null
            ? colorFn({ slices: itemSlices, outcome })
            : 'steelblue';
        radius = numSlices > 0 ? radius : radius * 0.5;
        $ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        $ctx.strokeStyle = color;
        $ctx.stroke();
        // if (numSlices == 0) $ctx.globalAlpha = 0.7;
        if (numSlices > 0) {
          $ctx.beginPath();
          $ctx.moveTo(x, y);
          itemSlices.forEach((s, j) => {
            if (!s) return;
            $ctx.arc(
              x,
              y,
              radius, // (numSlices > 0 ? radius : radius * 0.5) + (outcome ? 1 : 0),
              -Math.PI * 0.5 + (j * Math.PI * 2.0) / itemSlices.length,
              -Math.PI * 0.5 + ((j + 1) * Math.PI * 2.0) / itemSlices.length,
              false
            );
            $ctx.lineTo(x, y);
          });
          $ctx.fillStyle = color;
          $ctx.fill();
        }
      } else {
        $ctx.beginPath();
        $ctx.arc(x, y, radius + (outcome ? 1 : 0), 0, 2 * Math.PI, false);
        if (outcome) {
          $ctx.fillStyle =
            colorFn != null
              ? colorFn({ slices: itemSlices, outcome })
              : 'steelblue';
          $ctx.fill();
        } else {
          $ctx.strokeStyle =
            colorFn != null
              ? colorFn({ slices: itemSlices, outcome })
              : 'steelblue';
          $ctx.stroke();
        }
      }
    });

    /*if (showConvexHulls) {
      renderConvexHulls();
    }*/
  }

  /*function renderConvexHulls() {
    let numSlices = $data[0].slices.length;
    d3.range(numSlices).forEach((sliceIndex) => {
      let hull = d3.polygonHull(
        nodePositions
          .map((d) => [d.x, d.y])
          .filter((d, i) => $data[i].slices[sliceIndex])
      );
      if (hull.length == 0) return;
      $ctx.beginPath();
      $ctx.moveTo(hull[0][0], hull[0][1]);
      hull.slice(1).forEach((p) => {
        $ctx.lineTo(p[0], p[1]);
      });
      $ctx.fillStyle = '#bbbbbb';
      $ctx.globalAlpha = 0.3;
      $ctx.fill();
    });
    $ctx.globalAlpha = 1.0;
  }*/

  function handleMouseover(e: MouseEvent) {
    let rect = e.target.getBoundingClientRect();
    hoveredMousePosition = [e.clientX - rect.left, e.clientY - rect.top];
    let closest = positionMap.hitTest(hoveredMousePosition);
    let oldHover = hoveredPointIndex;
    if (!!closest) {
      hoveredPointIndex = closest.id;
      hoveredSlices = closest.attr('slices');
    } else {
      hoveredPointIndex = null;
      hoveredSlices = null;
    }
    if (oldHover != hoveredPointIndex)
      markSet.animate('alpha', { duration: 500 });
  }
</script>
