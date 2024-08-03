<script lang="ts">
  import type { Slice } from '../utils/slice.type';
  import Fa from 'svelte-fa/src/fa.svelte';
  import {
    faAngleLeft,
    faAngleRight,
    faEye,
    faEyeSlash,
    faGripLinesVertical,
    faMinus,
    faPencil,
    faPlus,
    faScaleBalanced,
    faSearch,
  } from '@fortawesome/free-solid-svg-icons';
  import * as d3 from 'd3';
  import {
    areObjectsEqual,
    areSetsEqual,
    randomStringRep,
    sortMetrics,
  } from '../utils/utils';
  import { createEventDispatcher } from 'svelte';
  import SliceTable from './SliceTable.svelte';
  import SliceFeatureEditor from './SliceFeatureEditor.svelte';
  import { featureToString, parseFeature } from '../utils/slice_parsing';
  import SliceFeature from './SliceFeature.svelte';
  import SliceLegendGlyph from '../overlap_views/SliceLegendGlyph.svelte';

  const dispatch = createEventDispatcher();

  export let sliceColorMap: { [key: string]: string } = {};

  export let runningSampler = false;
  export let numSamples = 10;
  export let shouldCancel = false;
  export let samplerRunProgress = 0.0;

  export let slices: Array<Slice> = [];

  export let baseSlice: Slice = null;
  export let sliceRequests: { [key: string]: any } = {};
  export let sliceRequestResults: { [key: string]: Slice } = {};
  export let customSliceResults: Slice[] = [];

  export let hoveredSlice: Slice | null = null;

  export let scoreWeights: any = {};

  export let fixedFeatureOrder: Array<any> = [];
  export let searchBaseSlice: any = null;

  export let allowDragAndDrop: boolean = true;

  export let showScores = false;
  export let positiveOnly = false;

  export let allowedValues: { [key: string]: string[] } = {};

  export let searchScopeInfo: {
    within_slice?: any;
    within_selection?: number[];
    intersection?: { slices: number[] };
    proportion?: number;
  } = {};

  export let selectedSlices: Slice[] = [];
  export let savedSlices: Slice[] = [];
  export let customSlices: Slice[] = [];

  export let hiddenMetrics: string[] = [];

  let metricNames = [];
  let metricInfo: { [key: string]: any } = {};
  let scoreNames = [];
  let scoreWidthScalers = {};

  let allSlices: Array<Slice> = [];
  $: allSlices = [...(!!baseSlice ? [baseSlice] : []), ...slices];

  $: if (allSlices.length > 0) {
    let testSlice = allSlices.find((s) => !s.isEmpty);
    if (!testSlice) testSlice = allSlices[0];
    if (!!testSlice.scoreValues) {
      // tabulate score names and normalize
      let newScoreNames = Object.keys(testSlice.scoreValues);
      if (!areSetsEqual(new Set(scoreNames), new Set(newScoreNames))) {
        scoreNames = newScoreNames;
        scoreNames.sort();
      }

      scoreWidthScalers = {};
      scoreNames.forEach((n) => {
        let maxScore =
          allSlices.reduce(
            (curr, next) => Math.max(curr, next.scoreValues[n]),
            -1e9
          ) + 0.01;
        let minScore =
          allSlices.reduce(
            (curr, next) => Math.min(curr, next.scoreValues[n]),
            1e9
          ) - 0.01;
        scoreWidthScalers[n] = (v: number) =>
          (v - minScore) / (maxScore - minScore);
      });

      // tabulate metric names and normalize
      if (!!testSlice.metrics) {
        let newMetricNames = Object.keys(testSlice.metrics);
        if (!areSetsEqual(new Set(metricNames), new Set(newMetricNames))) {
          metricNames = newMetricNames;
          metricNames.sort(sortMetrics);
        }
        updateMetricInfo(testSlice.metrics);
      }
    }
  } else {
    scoreNames = [];
    scoreWidthScalers = {};
    metricNames = [];
    metricInfo = {};
  }

  function updateMetricInfo(testMetrics) {
    let oldMetricInfo = metricInfo;
    metricInfo = {};
    metricNames.forEach((n) => {
      if (testMetrics[n].type == 'binary' || testMetrics[n].type == 'count') {
        let maxScore =
          testMetrics[n].type == 'count'
            ? allSlices.reduce(
                (curr, next) => Math.max(curr, next.metrics[n].mean),
                -1e9
              ) + 0.01
            : 1;
        let minScore =
          allSlices.reduce(
            (curr, next) => Math.min(curr, next.metrics[n].mean),
            1e9
          ) - 0.01;
        metricInfo[n] = { scale: (v: number) => v / maxScore };
      } else if (testMetrics[n].type == 'categorical') {
        let uniqueKeys: Set<string> = new Set();
        allSlices.forEach((s) =>
          Object.keys(s.metrics[n].counts).forEach((v) => uniqueKeys.add(v))
        );
        let order = Array.from(uniqueKeys);
        order.sort(
          (a, b) => testMetrics[n].counts[b] - testMetrics[n].counts[a]
        );
        metricInfo[n] = { order };
      } else {
        metricInfo[n] = {};
      }
      metricInfo[n].visible = (
        oldMetricInfo[n] || { visible: !hiddenMetrics.includes(n) }
      ).visible;
    });
    console.log('metric info:', metricInfo, testMetrics);
  }

  let oldHiddenMetrics: string[] = [];
  $: if (oldHiddenMetrics !== hiddenMetrics) {
    metricInfo = Object.fromEntries(
      Object.entries(metricInfo).map((e) => [
        e[0],
        { ...e[1], visible: !hiddenMetrics.includes(e[0]) },
      ])
    );
  }

  let searchViewHeader;
  let samplerPanel;
  let sizeObserver: ResizeObserver;

  $: if (!!searchViewHeader && !!samplerPanel) {
    samplerPanel.style.top = `${searchViewHeader.clientHeight}px`;
    if (!!sizeObserver) sizeObserver.disconnect();

    sizeObserver = new ResizeObserver(() => {
      if (
        !samplerPanel ||
        samplerPanel.style.top == `${searchViewHeader.clientHeight}px`
      )
        return;
      setTimeout(
        () => (samplerPanel.style.top = `${searchViewHeader.clientHeight}px`)
      );
    });
    sizeObserver.observe(samplerPanel);
    sizeObserver.observe(searchViewHeader);
  }

  /*let savedSliceRequests: { [key: string]: any } = {};
  let savedSliceRequestResults: { [key: string]: Slice } = {};

  $: {
    sliceRequests = Object.assign(
      Object.fromEntries(
        Object.entries(sliceRequests).filter(
          ([k, v]) => !k.startsWith('saved:')
        )
      ),
      Object.fromEntries(
        Object.entries(savedSliceRequests).map(([k, v]) => ['saved:' + k, v])
      )
    );
    console.log('updated slice requests:', sliceRequests);
  }

  $: savedSliceRequestResults = Object.fromEntries(
    Object.entries(sliceRequestResults)
      .filter(([k, v]) => k.startsWith('saved:'))
      .map(([k, v]) => [k.slice('saved:'.length), v])
  );*/

  // show slices that are selected but not in the main table here
  let selectedInvisibleSlices: Slice[] = [];
  $: selectedInvisibleSlices = selectedSlices.filter(
    (s) => !slices.find((s2) => s2.stringRep === s.stringRep)
  );

  let dragOver = false;
</script>

<div
  class="w-full h-full flex flex-col relative {dragOver
    ? 'border-4 border-blue-400'
    : ''}"
  on:dragover|preventDefault={(e) => {
    dragOver = true;
    e.dataTransfer.dropEffect = 'copy';
  }}
  on:dragleave|preventDefault={() => (dragOver = false)}
  on:drop={(e) => {
    dragOver = false;
    if (!e.dataTransfer.getData('slice')) return;
    console.log(e.dataTransfer.getData('slice'));
    e.preventDefault();
    e.stopPropagation();
    let newSlice = JSON.parse(e.dataTransfer.getData('slice'));
    customSlices = [
      ...customSlices,
      {
        ...newSlice,
        stringRep: randomStringRep(),
      },
    ];
  }}
>
  {#if !!baseSlice}
    <div class="bg-white w-full" bind:this={searchViewHeader}>
      <SliceTable
        slices={[]}
        {savedSlices}
        {sliceColorMap}
        bind:selectedSlices
        bind:customSlices
        {baseSlice}
        {allowDragAndDrop}
        bind:sliceRequests
        bind:sliceRequestResults
        {positiveOnly}
        {allowedValues}
        showHeader={false}
        bind:metricInfo
        bind:metricNames
        bind:scoreNames
        bind:scoreWidthScalers
        bind:showScores
        on:newsearch={(e) => {
          searchScopeInfo = { within_slice: e.detail.base_slice };
        }}
        on:saveslice
      />
    </div>
  {/if}
  <div class="flex-auto min-h-0 h-full min-w-full overflow-auto relative">
    <SliceTable
      slices={customSlices.map((s, i) =>
        !!customSliceResults[s.stringRep] &&
        areObjectsEqual(customSliceResults[s.stringRep].feature, s.feature)
          ? customSliceResults[s.stringRep]
          : s
      )}
      custom
      {savedSlices}
      {sliceColorMap}
      bind:selectedSlices
      bind:customSlices
      showHeader={false}
      bind:sliceRequests
      bind:sliceRequestResults
      {allowDragAndDrop}
      {positiveOnly}
      {allowedValues}
      bind:metricInfo
      bind:metricNames
      bind:scoreNames
      bind:scoreWidthScalers
      on:newsearch={(e) => {
        searchScopeInfo = { within_slice: e.detail.base_slice };
      }}
      on:saveslice
      on:customize={(e) => {
        let newCustom = [...customSlices];
        newCustom[e.detail.index] = e.detail.slice;
        customSlices = newCustom;
      }}
      on:hover={(e) => (hoveredSlice = e.detail)}
    />
    {#if slices.length > 0}
      <div
        class="mx-2 mb-2 px-3 py-2 bg-slate-100 text-slate-700 text-sm rounded sticky top-0 z-10"
      >
        Search Results
      </div>
    {:else}
      <div class="text-center text-slate-500 my-8 mx-6">
        Click Find Slices to begin an automatic search.
      </div>
    {/if}
    <div class="flex-1 min-h-0" class:disable-div={runningSampler}>
      <SliceTable
        {slices}
        {savedSlices}
        {sliceColorMap}
        bind:selectedSlices
        bind:customSlices
        bind:sliceRequests
        bind:sliceRequestResults
        {allowDragAndDrop}
        {positiveOnly}
        {allowedValues}
        showHeader={false}
        bind:metricInfo
        bind:metricNames
        bind:scoreNames
        bind:scoreWidthScalers
        bind:showScores
        on:newsearch={(e) => {
          searchScopeInfo = { within_slice: e.detail.base_slice };
        }}
        on:saveslice
        on:hover={(e) => (hoveredSlice = e.detail)}
      />
      {#if slices.length > 0}
        <div class="m-2">
          <button
            class="btn btn-blue disabled:opacity-50"
            on:click={() => dispatch('loadmore')}>Load More</button
          >
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .search-view-header {
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .sampler-panel {
    position: sticky;
    left: 0;
    bottom: 0;
    z-index: 1;
  }
</style>
