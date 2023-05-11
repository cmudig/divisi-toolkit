<script lang="ts">
  import type { Slice } from '../utils/slice.type';
  import SliceRow from './SliceRow.svelte';
  import Fa from 'svelte-fa/src/fa.svelte';
  import Hoverable from '../utils/Hoverable.svelte';
  import {
    faAngleLeft,
    faAngleRight,
    faEye,
    faEyeSlash,
    faGripLinesVertical,
  } from '@fortawesome/free-solid-svg-icons';
  import { areObjectsEqual, areSetsEqual } from '../utils/utils';
  import { TableWidths } from './tablewidths';
  import { createEventDispatcher } from 'svelte';
  import SliceTable from './SliceTable.svelte';

  const dispatch = createEventDispatcher();

  export let searchSpec: any = null;
  export let runningSampler = false;
  export let numSamples = 10;
  export let shouldCancel = false;
  export let samplerRunProgress = 0.0;

  export let slices: Array<Slice> = [];

  export let baseSlice: Slice = null;
  export let sliceRequests: { [key: string]: any } = {};
  export let sliceRequestResults: { [key: string]: Slice } = {};

  export let fixedFeatureOrder: Array<any> = [];
  export let searchBaseSlice: any = null;

  export let showScores = false;
  export let positiveOnly = false;

  export let valueNames: any = {};

  let metricNames = [];
  let metricInfo = {};
  let scoreNames = [];
  let scoreWidthScalers = {};

  let allSlices: Array<Slice> = [];
  $: allSlices = [...(!!baseSlice ? [baseSlice] : []), ...slices];

  $: if (allSlices.length > 0) {
    let testSlice = allSlices.find((s) => !s.isEmpty);
    if (!testSlice) testSlice = allSlices[0];

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
        metricNames.sort();
      }
      updateMetricInfo(testSlice.metrics);
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
      metricInfo[n].visible = (oldMetricInfo[n] || { visible: true }).visible;
    });
    console.log('metric info:', metricInfo, testMetrics);
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

  $: if (!!searchViewHeader && !!samplerPanel) {
    samplerPanel.style.top = `${searchViewHeader.clientHeight}px`;
    searchViewHeader.addEventListener('resize', () => {
      samplerPanel.style.top = `${searchViewHeader.clientHeight}px`;
    });
  }
</script>

<div class="search-view-parent h-full min-w-full overflow-auto">
  <div class="search-view-header bg-white" bind:this={searchViewHeader}>
    <SliceTable
      slices={[]}
      {baseSlice}
      bind:sliceRequests
      bind:sliceRequestResults
      {positiveOnly}
      fixedFeatureOrder={!!searchSpec ? searchSpec.feature_order || [] : []}
      searchBaseSlice={!!searchSpec ? searchSpec.base_slice || null : null}
      {valueNames}
      bind:metricInfo
      bind:metricNames
      bind:scoreNames
      bind:scoreWidthScalers
      bind:showScores
      on:newsearch
      on:saveslice
    />
  </div>
  <div
    class="sampler-panel w-full px-3 py-3 rounded flex items-center mb-2 transition-colors duration-300 bg-slate-200 text-gray-700"
    bind:this={samplerPanel}
  >
    {#if runningSampler}
      <button
        class="ml-2 mr-4 btn btn-blue disabled:opacity-50"
        disabled={shouldCancel}
        on:click={() => (shouldCancel = true)}>Stop</button
      >
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
    {:else}
      <button
        class="ml-1 btn btn-blue disabled:opacity-50"
        disabled={runningSampler}
        on:click={() => dispatch('runsampler')}>Find Slices</button
      >
      <div class="flex-auto ml-2">
        by drawing
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
    {/if}
  </div>
  <div class="flex-1 min-h-0" class:disable-div={runningSampler}>
    <SliceTable
      {slices}
      bind:sliceRequests
      bind:sliceRequestResults
      {positiveOnly}
      fixedFeatureOrder={!!searchSpec ? searchSpec.feature_order || [] : []}
      searchBaseSlice={!!searchSpec ? searchSpec.base_slice || null : null}
      {valueNames}
      showHeader={false}
      bind:metricInfo
      bind:metricNames
      bind:scoreNames
      bind:scoreWidthScalers
      bind:showScores
      on:newsearch
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
    z-index: 1;
  }
</style>
