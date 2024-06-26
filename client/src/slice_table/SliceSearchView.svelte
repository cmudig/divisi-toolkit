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
  import { areSetsEqual, sortMetrics } from '../utils/utils';
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

  export let scoreWeights: any = {};

  export let fixedFeatureOrder: Array<any> = [];
  export let searchBaseSlice: any = null;

  export let showScores = false;
  export let positiveOnly = false;

  export let valueNames: any = {};

  export let searchScopeInfo: {
    within_slice?: any;
    within_selection?: number[];
    intersection?: { slices: number[] };
    proportion?: number;
  } = {};
  let editingSearchScope: boolean = false;

  export let selectedSlices: Slice[] = [];
  export let savedSlices: Slice[] = [];

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

  let allowedValues;
  $: if (!!valueNames && valueNames.hasOwnProperty('subscribe')) {
    allowedValues = {};
    Object.entries($valueNames).forEach((item) => {
      allowedValues[item[1][0]] = Object.values(item[1][1]);
    });
  } else {
    allowedValues = null;
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

  /*function toggleSliceFeature(slice: Slice, feature: string) {
    let allRequests = Object.assign({}, sliceRequests);
    let r;
    if (!!allRequests[slice.stringRep]) r = allRequests[slice.stringRep];
    else r = Object.assign({}, slice.featureValues);
    if (r.hasOwnProperty(feature)) delete r[feature];
    else r[feature] = slice.featureValues[feature];
    allRequests[slice.stringRep] = r;
    sliceRequests = allRequests;
    console.log('slice requests:', sliceRequests);
  }

  function editSliceFeature(slice: Slice, newFeatureValues: any) {
    let allRequests = Object.assign({}, sliceRequests);
    let r;
    if (!!allRequests[slice.stringRep]) r = allRequests[slice.stringRep];
    else r = Object.assign({}, slice.featureValues);
    Object.assign(r, newFeatureValues);
    allRequests[slice.stringRep] = r;
    sliceRequests = allRequests;
  }*/

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
</script>

<div class="flex-auto min-h-0 h-full min-w-full overflow-auto relative">
  {#if !!baseSlice}
    <div class="bg-white sticky top-0 z-10" bind:this={searchViewHeader}>
      <SliceTable
        slices={[]}
        {savedSlices}
        {sliceColorMap}
        bind:selectedSlices
        {baseSlice}
        bind:sliceRequests
        bind:sliceRequestResults
        {positiveOnly}
        {valueNames}
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
  {#if selectedSlices.length > 0}
    <SliceTable
      slices={selectedSlices}
      {savedSlices}
      {sliceColorMap}
      bind:selectedSlices
      showHeader={false}
      bind:sliceRequests
      bind:sliceRequestResults
      {positiveOnly}
      {valueNames}
      {allowedValues}
      bind:metricInfo
      bind:metricNames
      bind:scoreNames
      bind:scoreWidthScalers
      on:newsearch={(e) => {
        searchScopeInfo = { within_slice: e.detail.base_slice };
      }}
      on:saveslice
    />
  {/if}
  <div class="sampler-panel w-full mb-2 bg-white" bind:this={samplerPanel}>
    <div class="bg-slate-200 text-gray-700">
      {#if runningSampler}
        <div class="flex items-center px-4 py-3">
          <div class="flex-auto">
            <div class="text-sm">
              {#if shouldCancel}
                Canceling...
              {:else}
                Running sampler ({(samplerRunProgress * 100).toFixed(1)}%
                complete)...
              {/if}
            </div>
            <div
              class="w-full bg-slate-300 rounded-full h-1.5 mt-1 indigo:bg-slate-700"
            >
              <div
                class="bg-blue-600 h-1.5 rounded-full indigo:bg-indigo-200 duration-100"
                style="width: {(samplerRunProgress * 100).toFixed(1)}%"
              />
            </div>
          </div>
          <button
            class="ml-2 btn btn-blue disabled:opacity-50"
            disabled={shouldCancel}
            on:click={() => (shouldCancel = true)}>Stop</button
          >
        </div>
      {:else}
        <div class="flex px-4 items-center whitespace-nowrap gap-3">
          <div class="text-slate-500 font-bold flex-auto text-base">
            Slice Search
          </div>
          {#if !!searchScopeInfo.within_slice}
            <button
              style="padding-left: 1rem;"
              class="ml-1 btn btn-dark-slate flex-0 mr-3 whitespace-nowrap"
              on:click={() => (searchScopeInfo = {})}
              ><Fa icon={faMinus} class="inline mr-1" />
              Within Slice</button
            >
            <div class="text-slate-600">
              {d3.format('.1~%')(searchScopeInfo.proportion ?? 0)} of dataset
            </div>
          {:else if !!searchScopeInfo.within_selection}
            <button
              style="padding-left: 1rem;"
              class="ml-1 btn btn-dark-slate flex-0 mr-3 whitespace-nowrap"
              on:click={() => (searchScopeInfo = {})}
              ><Fa icon={faMinus} class="inline mr-1" />
              Within Selection</button
            >
            <div class="text-slate-600">
              {d3.format('.1~%')(searchScopeInfo.proportion ?? 0)} of dataset
            </div>
          {/if}

          <div>
            <input
              class="mx-2 p-1 rounded bg-slate-50 indigo:bg-indigo-500 w-16 focus:ring-1 focus:ring-blue-600"
              type="number"
              min="0"
              max="500"
              step="5"
              bind:value={numSamples}
            />
            samples
          </div>
          <button
            class="my-3 ml-1 btn btn-blue disabled:opacity-50"
            disabled={runningSampler}
            on:click={() => dispatch('runsampler')}>Find Slices</button
          >
        </div>
      {/if}
    </div>
  </div>
  <div class="flex-1 min-h-0" class:disable-div={runningSampler}>
    <SliceTable
      {slices}
      {savedSlices}
      {sliceColorMap}
      bind:selectedSlices
      bind:sliceRequests
      bind:sliceRequestResults
      {positiveOnly}
      {valueNames}
      {allowedValues}
      showHeader={false}
      bind:metricInfo
      bind:metricNames
      bind:scoreNames
      bind:scoreWidthScalers
      bind:showScores
      on:newsearch={(e) => {
        updateEditingControl(e.detail.type, e.detail.base_slice);
        toggleSliceControl(e.detail.type, true);
      }}
      on:saveslice
    />
    {#if slices.length > 0}
      <div class="mt-2">
        <button
          class="btn btn-blue disabled:opacity-50"
          on:click={() => dispatch('loadmore')}>Load More</button
        >
      </div>
    {/if}
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
