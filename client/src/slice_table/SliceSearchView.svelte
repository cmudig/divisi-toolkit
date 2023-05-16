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
    faMinus,
    faPencil,
    faPlus,
  } from '@fortawesome/free-solid-svg-icons';
  import { areObjectsEqual, areSetsEqual } from '../utils/utils';
  import { TableWidths } from './tablewidths';
  import { createEventDispatcher } from 'svelte';
  import SliceTable from './SliceTable.svelte';
  import SliceFeatureEditor from './SliceFeatureEditor.svelte';
  import { featureToString, parseFeature } from '../utils/slice_parsing';
  import SliceFeature from './SliceFeature.svelte';

  const dispatch = createEventDispatcher();

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

  export let enabledSliceControls: any = {};
  export let containsSlice: any = {};
  export let containedInSlice: any = {};
  export let similarToSlice: any = {};
  export let subsliceOfSlice: any = {};

  const SliceControlStrings = {
    containsSlice: 'Contains Slice',
    containedInSlice: 'Contained in Slice',
    similarToSlice: 'Similar to Slice',
    subsliceOfSlice: 'Subslice of Slice',
  };

  const SliceControlEnableNames = {
    containsSlice: 'contains_slice',
    containedInSlice: 'contained_in_slice',
    similarToSlice: 'similar_to_slice',
    subsliceOfSlice: 'subslice_of_slice',
  };

  let controlFeatures;
  $: controlFeatures = {
    containsSlice,
    containedInSlice,
    similarToSlice,
    subsliceOfSlice,
  };

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

  function toggleSliceControl(field, value = null) {
    let flagField = SliceControlEnableNames[field];
    let newControls = Object.assign({}, enabledSliceControls);
    if (value == null) newControls[flagField] = !newControls[flagField];
    else newControls[flagField] = value;
    enabledSliceControls = newControls;
    if (newControls[flagField] && controlFeatures[field].type == 'base')
      editingControl = flagField;
  }

  let editingControl = null;

  function updateEditingControl(control, feature) {
    if (control == 'containsSlice') containsSlice = feature;
    else if (control == 'containedInSlice') containedInSlice = feature;
    else if (control == 'similarToSlice') similarToSlice = feature;
    else if (control == 'subsliceOfSlice') subsliceOfSlice = feature;
    controlFeatures[control] = feature;
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
      {valueNames}
      {allowedValues}
      bind:metricInfo
      bind:metricNames
      bind:scoreNames
      bind:scoreWidthScalers
      bind:showScores
      on:newsearch={(e) => {
        updateEditingControl(e.detail.type, e.detail.base_slice);
        toggleSliceControl(SliceControlEnableNames[e.detail.type], true);
      }}
      on:saveslice
    />
  </div>
  <div
    class="sampler-panel w-full px-3 rounded mb-2 transition-colors duration-300 bg-slate-200 text-gray-700"
    bind:this={samplerPanel}
  >
    <div class="flex items-center py-3">
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
        <div class="ml-2">
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

        {#each Object.keys(SliceControlEnableNames) as control}
          {#if !enabledSliceControls[SliceControlEnableNames[control]]}
            <div class="ml-2">
              <button
                style="padding-left: 1rem;"
                class="ml-1 btn btn-slate"
                on:click={() => toggleSliceControl(control)}
                ><Fa icon={faPlus} class="inline mr-1" />
                {SliceControlStrings[control]}</button
              >
            </div>
          {/if}
        {/each}
      {/if}
    </div>
    {#each Object.keys(SliceControlEnableNames) as control}
      {#if enabledSliceControls[SliceControlEnableNames[control]]}
        <div class="flex items-center pb-3">
          <button
            style="padding-left: 1rem;"
            class="ml-1 btn btn-dark-slate flex-0 mr-3"
            on:click={() => toggleSliceControl(control)}
            ><Fa icon={faMinus} class="inline mr-1" />
            {SliceControlStrings[control]}</button
          >
          <div class="flex-auto flex items-center">
            {#if editingControl == SliceControlEnableNames[control]}
              <SliceFeatureEditor
                featureText={featureToString(controlFeatures[control])}
                {positiveOnly}
                {allowedValues}
                on:cancel={(e) => {
                  editingControl = null;
                }}
                on:save={(e) => {
                  let newFeature = parseFeature(e.detail, allowedValues);
                  updateEditingControl(control, newFeature);
                  editingControl = null;
                }}
              />
            {:else}
              <SliceFeature
                feature={controlFeatures[control]}
                currentFeature={controlFeatures[control]}
                canToggle={false}
              />
              <button
                class="bg-transparent hover:opacity-60 pr-1 pl-2 py-3 text-slate-600"
                on:click={() => {
                  editingControl = SliceControlEnableNames[control];
                }}
                title="Modify the slice definition"
                ><Fa icon={faPencil} /></button
              >
            {/if}
          </div>
        </div>
      {/if}
    {/each}
  </div>
  <div class="flex-1 min-h-0" class:disable-div={runningSampler}>
    <SliceTable
      {slices}
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
    z-index: 1;
  }
</style>
