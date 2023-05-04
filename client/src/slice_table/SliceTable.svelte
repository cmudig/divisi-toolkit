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

  const dispatch = createEventDispatcher();

  export let slices: Array<Slice> = [];

  export let overallSlice: Slice = null;
  export let sliceRequests: { [key: string]: any } = {};
  export let sliceRequestResults: { [key: string]: Slice } = {};

  export let fixedFeatureOrder: Array<any> = [];
  export let searchBaseSlice: any = null;

  export let showScores = false;
  export let positiveOnly = false;

  export let valueNames: any = {};

  let maxFeatures = 1;
  let metricNames = [];
  let metricInfo = {};
  let scoreNames = [];
  let scoreWidthScalers = {};

  let allSlices: Array<Slice> = [];
  $: allSlices = [...(!!overallSlice ? [overallSlice] : []), ...slices];

  $: if (allSlices.length > 0) {
    let testSlice = allSlices.find((s) => !s.isEmpty);
    if (!testSlice) testSlice = allSlices[0];

    maxFeatures = allSlices.reduce(
      (curr, next) => Math.max(curr, Object.keys(next.featureValues).length),
      1
    );

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
    maxFeatures = 0;
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

  // Drag and drop metrics logic

  let clickingColumn = null; // prepare for drag
  let draggingColumn = null; // track drag action
  let droppingColumn = null;
  let dropRight = false;

  function metricDragStart(e, colName) {
    e.dataTransfer.effectAllowed = 'move';
    draggingColumn = colName;
  }

  function metricDragEnd(e: any, colName: string) {
    draggingColumn = null;
  }

  function metricDragEnter(e: any, colName: string) {
    if (colName == draggingColumn) {
      droppingColumn = null;
      return false;
    }
    let startIdx = metricNames.indexOf(draggingColumn);
    let endIdx = metricNames.indexOf(colName);
    dropRight = startIdx < endIdx;
    e.target.classList.add('drop-zone');
    e.target.classList.add(dropRight ? 'drop-zone-r' : 'drop-zone-l');
  }

  function metricDragLeave(e: any, colName: string) {
    e.target.classList.remove('drop-zone');
    e.target.classList.remove('drop-zone-r');
    e.target.classList.remove('drop-zone-l');
  }

  function metricDrop(e: any, colName: string) {
    e.target.classList.remove('drop-zone');
    if (draggingColumn != colName) {
      let startIdx = metricNames.indexOf(draggingColumn);
      let endIdx = metricNames.indexOf(colName);
      let newOrder = Array.from(metricNames);
      newOrder.splice(startIdx, 1);
      metricNames = [
        ...newOrder.slice(0, endIdx),
        draggingColumn,
        ...newOrder.slice(endIdx),
      ];
    }
    droppingColumn = null;
    return false;
  }

  function toggleSliceFeature(slice: Slice, feature: string) {
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
  }
</script>

<div>
  <div class="relative">
    <div
      class="text-left flex font-bold slice-header whitespace-nowrap bg-slate-100 rounded-t border-b border-slate-600"
    >
      <div style="width: {TableWidths.ActionMenus}px;">
        <div class="p-2 w-full h-full" />
      </div>
      <div style="width: {TableWidths.FeatureList}px;">
        <div class="p-2">Slice</div>
      </div>
      {#each metricNames as name}
        <div
          class="bg-slate-100 hover:bg-slate-200"
          style="width: {metricInfo[name].visible
            ? TableWidths.Metric
            : TableWidths.CollapsedMetric}px;"
          class:opacity-30={draggingColumn == name}
          draggable={clickingColumn == name}
          on:dragstart={(e) => metricDragStart(e, name)}
          on:dragend={(e) => metricDragEnd(e, name)}
          on:dragover|preventDefault={() => false}
          on:dragenter={(e) => metricDragEnter(e, name)}
          on:dragleave={(e) => metricDragLeave(e, name)}
          on:drop|preventDefault|stopPropagation={(e) => metricDrop(e, name)}
        >
          <Hoverable class="potential-drop-zone p-2 " let:hovering>
            {#if metricInfo[name].visible}
              <div class="flex items-center">
                <div>{name}</div>
                <div class="flex-1" />
                <button
                  class="bg-transparent hover:opacity-60"
                  class:opacity-0={!hovering}
                  class:disabled={!hovering}
                  on:click={(e) => {
                    let mi = Object.assign({}, metricInfo);
                    mi[name].visible = !mi[name].visible;
                    metricInfo = mi;
                  }}><Fa icon={faEye} /></button
                >
                <button
                  class="ml-2 bg-transparent text-slate-400 cursor-move"
                  on:mousedown={() => (clickingColumn = name)}
                  on:mouseup={() => (clickingColumn = null)}
                  class:opacity-0={!hovering}
                  class:disabled={!hovering}
                  ><Fa icon={faGripLinesVertical} /></button
                >
              </div>
            {:else}
              <button
                class="bg-transparent opacity-30 hover:opacity-60"
                on:click={(e) => {
                  let mi = Object.assign({}, metricInfo);
                  mi[name].visible = !mi[name].visible;
                  metricInfo = mi;
                }}><Fa icon={faEyeSlash} /></button
              >
            {/if}
          </Hoverable>
        </div>
      {/each}
      {#if showScores}
        {#each scoreNames as score, i}
          <div class="bg-slate-100" style="width: {TableWidths.Score}px;">
            <div class="p-2">
              {score}
            </div>
          </div>
        {/each}
      {/if}
      <div
        class="bg-slate-100 hover:bg-slate-200"
        on:click={() => (showScores = !showScores)}
      >
        <div class="w-full h-full px-4 flex justify-center items-center">
          {#if showScores}
            <Fa icon={faAngleLeft} />
          {:else}
            <Fa icon={faAngleRight} />
          {/if}
        </div>
      </div>
    </div>
    {#if !!overallSlice}
      <SliceRow
        slice={overallSlice}
        {maxFeatures}
        {scoreNames}
        {positiveOnly}
        scoreCellWidth={100}
        {scoreWidthScalers}
        {showScores}
        {metricNames}
        {metricInfo}
        {valueNames}
        rowClass="{!!searchBaseSlice &&
        areObjectsEqual(searchBaseSlice, overallSlice.featureValues)
          ? 'bg-indigo-100'
          : 'bg-slate-100'} border-b-2 border-dotted"
        temporarySlice={sliceRequestResults[overallSlice.stringRep]}
        {fixedFeatureOrder}
        on:edit={(e) => editSliceFeature(overallSlice, e.detail)}
        on:toggle={(e) => toggleSliceFeature(overallSlice, e.detail)}
        on:newsearch
        on:saveslice
      />
    {/if}
    {#each slices as slice, i (slice.stringRep || i)}
      <SliceRow
        {slice}
        {maxFeatures}
        {scoreNames}
        {positiveOnly}
        scoreCellWidth={100}
        {scoreWidthScalers}
        {showScores}
        {metricNames}
        {metricInfo}
        {valueNames}
        {fixedFeatureOrder}
        rowClass={!!searchBaseSlice &&
        areObjectsEqual(searchBaseSlice, slice.featureValues)
          ? 'bg-indigo-100 hover:bg-indigo-200'
          : 'hover:bg-slate-100'}
        temporarySlice={sliceRequestResults[slice.stringRep]}
        on:edit={(e) => editSliceFeature(slice, e.detail)}
        on:toggle={(e) => toggleSliceFeature(slice, e.detail)}
        on:newsearch
        on:saveslice
      />
    {/each}
  </div>
</div>

<style>
  .slice-header {
    min-width: 100%;
  }
  .slice-header > * {
    flex: 0 0 auto;
  }
</style>
