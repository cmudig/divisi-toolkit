<script lang="ts">
  import { getContext, onDestroy } from 'svelte';
  import * as d3 from 'd3';
  import { scaleCanvas } from 'layercake';
  import { createWebWorker } from '../utils/utils';
  import {
    Attribute,
    Mark,
    MarkRenderGroup,
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
  let markSet = new MarkRenderGroup(makeMark);

  function makeMark(id: any) {
    return new Mark(id, {
      x: new Attribute({ value: $width * 0.5, transform: scales.xScale }),
      y: new Attribute({ value: $height * 0.5, transform: scales.yScale }),
      radius: new Attribute({
        value: pointRadius,
        transform: (v) =>
          Math.min(
            Math.max(
              (v * scales.transform().k * Math.min($width, $height)) / 400,
              3
            ),
            12
          ),
      }),
      slices: new Attribute({ value: [] }),
      numSlices: new Attribute(0),
      outcome: new Attribute(false),
      alpha: new Attribute(0.0),
    });
  }

  let ticker = new Ticker([markSet, scales]).onChange(draw);

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

  $: if (!!$ctx) {
    // set up the d3 zoom object
    d3.select($ctx.canvas as Element).call(zoom);
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
      console.log(e.data.id, currentWorkerID, e.data);
      if (e.data.id != currentWorkerID) {
        worker.terminate();
        return;
      }
      if (e.data.positions.length != markSet.count()) {
        console.warn('Wrong number of positions in worker-returned layout');
        worker.terminate();
        return;
      }
      console.log(e.data.positions[0].x);
      markSet
        .animateTo('x', (m, i) => e.data.positions[i].x)
        .animateTo('y', (m, i) => e.data.positions[i].y)
        .animateTo('alpha', 1.0);

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

    console.log('initializing simulation', Object.keys(ds).length);
    let marksToRemove = markSet.filter((m) => !ds[m.id]).getMarks();
    marksToRemove.forEach((m) => markSet.removeMark(m));

    Object.values(ds).forEach((d, i) => {
      if (!markSet.has(d.id)) {
        let mark = makeMark(d.id);
        let pos = generateRandomPosition(d);
        mark.setAttr('x', pos.x).setAttr('y', pos.y);
        markSet.addMark(mark);
      }
      let mark = markSet.getMarkByID(d.id);
      mark
        .setAttr('slices', d.slices)
        .setAttr(
          'numSlices',
          d.slices.reduce((prev, curr) => prev + curr, 0)
        )
        .setAttr('outcome', d.outcome);
    });

    console.log('new mark set has', markSet.count());

    currentWorkerID = (+new Date()).toString(36).slice(-10);
    getWorker().then((w) => {
      w.postMessage({
        id: currentWorkerID,
        w: layoutWidth,
        h: layoutHeight,
        // make sure data is in order of the markset
        data: markSet.getMarks().map((m) => ds[m.id]),
        pointRadius,
      });
    });
  }

  function draw(colorF) {
    colorF = colorF || colorFn;

    scaleCanvas($ctx, $width, $height);
    $ctx.clearRect(0, 0, $width, $height);

    /* --------------------------------------------
     * Draw our scatterplot
     */
    markSet.forEach((mark, i) => {
      let itemSlices = mark.attr('slices');
      let x = mark.attr('x');
      let y = mark.attr('y');
      let alpha = mark.attr('alpha');
      let radius = mark.attr('radius');
      let outcome = mark.attr('outcome');
      // if (hovered != null && i == hoveredPointIndex) radius *= 1.5;

      let numSlices = mark.attr('numSlices');

      $ctx.globalAlpha = alpha;

      if (colorBySlice) {
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
          $ctx.fillStyle = '#cbd5e1';
          $ctx.fill();
        }
        let lw = radius * 0.4; // outcome ? 4 : 2;
        $ctx.lineWidth = lw;
        // if (numSlices == 0) $ctx.globalAlpha = 0.7;
        if (numSlices > 0) {
          itemSlices.forEach((s, j) => {
            if (!s) return;
            $ctx.beginPath();
            $ctx.strokeStyle = sliceColorScale(j);
            $ctx.arc(
              x,
              y,
              radius * 0.6, // (numSlices > 0 ? radius : radius * 0.5) + (outcome ? 1 : 0),
              -Math.PI * 0.5 + (j * Math.PI * 2.0) / itemSlices.length,
              -Math.PI * 0.5 + ((j + 1) * Math.PI * 2.0) / itemSlices.length,
              false
            );
            $ctx.stroke();
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

  $: if (!!hoveredMousePosition && !!simulation) {
    let closest = simulation.find(
      hoveredMousePosition[0],
      hoveredMousePosition[1],
      pointRadius * 2
    );
    if (!!closest) {
      hoveredSlices = $data[closest.index].slices;
      hoveredPointIndex = closest.index;
    } else {
      hoveredSlices = null;
      hoveredPointIndex = null;
    }
  } else {
    hoveredSlices = null;
    hoveredPointIndex = null;
  }
</script>
