<script lang="ts">
  import { createEventDispatcher, getContext, onDestroy } from 'svelte';
  import * as d3 from 'd3';
  import { Canvas, LayerCake, scaleCanvas } from 'layercake';
  import { areObjectsEqual, createWebWorker } from '../utils/utils';
  import {
    Attribute,
    Mark,
    MarkRenderGroup,
    PositionMap,
    Scales,
    Ticker,
  } from 'counterpoint-vis';
  import WorkerScript from './force_layout_worker?raw';
  import BubbleChart from './BubbleChart.canvas.svelte';
  import BubbleSelection from './BubbleSelection.canvas.svelte';

  const dispatch = createEventDispatcher();

  export let pointData: any[] = [];
  export let pointRadius = 7; // 4;
  export let hoveredSlices = null;

  export let hoveredMousePosition = null;
  export let hoveredPointIndex = null;
  export let hoveredClusters: Set<number> = new Set();
  export let selectedClusters: number[] = [];

  export let sliceColors: string[] = [];

  let mouseDown = false;
  let isMultiselecting = false;
  let disableClick = false;
  let multiselectPath: Attribute<[number, number][]> = new Attribute([]);

  const layoutWidth = 800;
  const layoutHeight = 800;

  let scales = new Scales({ animationDuration: 500 })
    .xDomain([-layoutWidth * 0.5, layoutWidth * 0.5])
    .yDomain([-layoutHeight * 0.5, layoutHeight * 0.5])
    .onUpdate(() => {
      if (!container) return;
      // When the scales update, we also need to let the d3 zoom object know that
      // the zoom transform has changed. Otherwise performing a zoom gesture after
      // a programmatic update will result in an abrupt transform change
      let sel = d3.select(container);
      let currentT = d3.zoomTransform(container);
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

  let bubbleChart: BubbleChart;
  let selectionLayer: BubbleSelection;

  function makeMark(id: any) {
    let width = container?.clientWidth ?? layoutWidth;
    let height = container?.clientHeight ?? layoutHeight;
    return new Mark(id, {
      x: { value: width * 0.5, transform: scales.xScale },
      y: { value: height * 0.5, transform: scales.yScale },
      size: 0,
      entranceProgress: 0,
      radius: {
        valueFn: (mark) => mark.attr('entranceProgress') * mark.attr('size'),
        transform: (v) =>
          (v * scales.transform().k * Math.min(width, height)) / 400,
      },
      slices: [],
      numSlices: 0,
      outcome: false,
      outlineWidth: (mark) =>
        (selectedClusters.length > 0 &&
        selectedClusters.includes(mark.represented)
          ? 5
          : 0) +
        (hoveredPointIndex != null && hoveredPointIndex == mark.represented
          ? 2
          : 0),
      alpha: (mark) => {
        let slices = mark.attr('slices');
        let base = mark.attr('entranceProgress');
        // if (selectedClusters.length > 0) {
        //   return (
        //     base *
        //     (selectedClusters.includes(mark.represented) ||
        //     (hoveredPointIndex != null && hoveredPointIndex == mark.id)
        //       ? 1.0
        //       : 0.4)
        //   );
        // }

        if (hoveredClusters.size > 0)
          return base * (hoveredClusters.has(mark.represented) ? 1.0 : 0.2);
        if (hoveredSlices !== null)
          return (
            base *
            (slices.length != hoveredSlices.length ||
            !slices.every((s, i) => hoveredSlices[i] == s)
              ? 0.2
              : 1.0)
          );
        return base;
      },
    });
  }

  let ticker = new Ticker([markSet, scales, multiselectPath]).onChange(() => {
    if (!!bubbleChart) bubbleChart.draw();
    if (!!selectionLayer) selectionLayer.draw();
    positionMap.invalidate();
  });

  // We use a d3 zoom object to simplify the gesture handling, but supply the
  // output transform to our Scales instance
  let zoom = d3
    .zoom()
    .scaleExtent([0.1, 10])
    .filter(
      (event) =>
        (!event.ctrlKey || event.type === 'wheel') &&
        !event.button &&
        !event.shiftKey &&
        !isMultiselecting
    )
    .on('zoom', (e) => {
      // important to make sure the source event exists, filtering out our
      // programmatic changes
      if (e.sourceEvent != null) scales.transform(e.transform);
    });

  onDestroy(() => {
    cleanUp();
    if (!!ticker) ticker.stop();
  });

  $: if (pointData.length > 0 && !!container) {
    cleanUp();
    initSimulation(Object.fromEntries(pointData.map((d) => [d.id, d])));
  } else {
    cleanUp();
  }

  let container: HTMLElement;
  $: if (!!container) {
    d3.select(container).call(zoom);
  }

  function cleanUp() {
    if (!!worker) worker.terminate();
  }

  let worker = null;
  let currentWorkerID = null;
  let workerURL: string | null = null;

  async function getWorker() {
    if (!!worker) worker.terminate();
    if (!!workerURL) window.URL.revokeObjectURL(workerURL);
    workerURL = null;

    let workerInfo = createWebWorker(WorkerScript);
    worker = workerInfo.worker;
    workerURL = workerInfo.url;

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
    cleanUp();

    sliceCounts = Array.apply(null, Array(pointData[0].slices.length)).map(
      () => 0
    );
    pointData.forEach((d) => {
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
        mark.represented = d.cluster;
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
      mark.represented = d.cluster;
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

  function handleMouseover(e: PointerEvent) {
    let rect = e.target.getBoundingClientRect();
    hoveredMousePosition = [e.clientX - rect.left, e.clientY - rect.top];
    if (mouseDown && (e.shiftKey || isMultiselecting)) {
      container.setPointerCapture(e.pointerId);
      console.log('multiselecting');
      isMultiselecting = true;
      multiselectPath.set([...multiselectPath.get(), hoveredMousePosition]);
      e.stopImmediatePropagation();
      e.preventDefault();
      disableClick = true;
      return;
    }

    isMultiselecting = false;
    let closest = positionMap.hitTest(hoveredMousePosition);
    if (!!closest) {
      hoveredPointIndex = closest.represented;
      hoveredSlices = closest.attr('slices');
    } else {
      hoveredPointIndex = null;
      hoveredSlices = null;
    }
  }

  function handleMouseup(e: PointerEvent) {
    console.log('mouseup');
    if (isMultiselecting) {
      let polygon = multiselectPath.get();
      let newSelection = markSet
        .filter((m) => d3.polygonContains(polygon, [m.attr('x'), m.attr('y')]))
        .map((m) => m.represented);
      console.log('selection', newSelection);
      dispatch('selectClusters', {
        ids: newSelection,
        num_instances:
          newSelection.length == 0
            ? 0
            : pointData.reduce(
                (sum, d) =>
                  sum + (newSelection.includes(d.cluster) ? d.size : 0),
                0
              ),
      });

      isMultiselecting = false;
      multiselectPath.set([]);
    }
    mouseDown = false;
  }

  function handleClick(e: MouseEvent, delayed = false) {
    if (!delayed) {
      setTimeout(() => {
        if (disableClick) {
          setTimeout(() => (disableClick = false), 200);
          return;
        }
        handleClick(e, true);
      }, 200);
      return;
    }

    mouseDown = false;
    if (disableClick) {
      disableClick = false;
      return;
    }
    let rect = e.target.getBoundingClientRect();
    let pos = [e.clientX - rect.left, e.clientY - rect.top];
    let closest = positionMap.hitTest(pos);
    let newSelection = [...selectedClusters];
    if (!!closest) {
      if (e.shiftKey || e.ctrlKey || e.metaKey) {
        let idx = selectedClusters.indexOf(closest.represented);
        if (idx >= 0) newSelection.splice(idx, 1);
        else newSelection.push(closest.represented);
      } else newSelection = [closest.represented];
    } else {
      newSelection = [];
    }
    selectedClusters = newSelection;
    setTimeout(
      () =>
        dispatch('selectClusters', {
          ids: newSelection,
          num_instances:
            newSelection.length == 0
              ? 0
              : pointData.reduce(
                  (sum, d) =>
                    sum + (newSelection.includes(d.cluster) ? d.size : 0),
                  0
                ),
        }),
      200
    );
  }

  function handleDoubleClick(e: MouseEvent) {
    mouseDown = false;
    disableClick = true;
    let rect = e.target.getBoundingClientRect();
    let pos = [e.clientX - rect.left, e.clientY - rect.top];
    let closest = positionMap.hitTest(pos);
    let newSelection = [...selectedClusters];
    if (!!closest) {
      let newSlices = closest.attr('slices');
      let matchingClusters: Set<number> = new Set(
        pointData
          .filter((d) => d.slices.every((s, i) => newSlices[i] == s))
          .map((d) => d.cluster)
      );
      if (e.shiftKey || e.ctrlKey || e.metaKey) {
        let containsSlices = selectedClusters.find((c) =>
          matchingClusters.has(c)
        );
        if (containsSlices) {
          newSelection = newSelection.filter((c) => !matchingClusters.has(c));
        } else newSelection = [...newSelection, ...matchingClusters];
      } else newSelection = [...matchingClusters];
    } else {
      return;
    }
    dispatch('selectClusters', {
      ids: newSelection,
      num_instances:
        newSelection.length == 0
          ? 0
          : pointData.reduce(
              (sum, d) => sum + (newSelection.includes(d.cluster) ? d.size : 0),
              0
            ),
    });
    e.stopImmediatePropagation();
  }

  let oldHoverIdx = null;
  let oldHoverSlices = null;
  let oldHoverClusters = null;
  $: if (
    oldHoverIdx != hoveredPointIndex ||
    !areObjectsEqual(hoveredSlices, oldHoverSlices) ||
    oldHoverClusters !== hoveredClusters
  ) {
    console.log('hovering');
    markSet
      .animate('alpha', { duration: 500 })
      .animate('outlineWidth', { duration: 200 });
    oldHoverIdx = hoveredPointIndex;
    oldHoverSlices = hoveredSlices;
    oldHoverClusters = hoveredClusters;
  }

  let oldSelectedClusters: number[] = [];
  // let oldSelectedSlices: number[] | null = null;
  $: if (
    oldSelectedClusters !== selectedClusters
    // oldSelectedSlices !== selectedSlices
  ) {
    markSet
      // .animate('alpha', { duration: 200 })
      .animate('outlineWidth', { duration: 200 });
    oldSelectedClusters = selectedClusters;
    // oldSelectedSlices = selectedSlices;
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="w-full h-full select-none"
  bind:this={container}
  on:pointerdown={(e) => (mouseDown = true)}
  on:pointermove={handleMouseover}
  on:pointerup={handleMouseup}
  on:pointerleave={(e) => {
    hoveredPointIndex = null;
    hoveredSlices = null;
  }}
  on:click={handleClick}
  on:dblclick={handleDoubleClick}
>
  <LayerCake
    padding={{ top: 0, right: 0, bottom: 0, left: 0 }}
    data={pointData}
  >
    <Canvas>
      <BubbleSelection {markSet} {scales} bind:this={selectionLayer} />
    </Canvas>
    <Canvas>
      <BubbleChart
        {markSet}
        {scales}
        {sliceColors}
        {isMultiselecting}
        {multiselectPath}
        bind:this={bubbleChart}
      />
    </Canvas>
  </LayerCake>
</div>
