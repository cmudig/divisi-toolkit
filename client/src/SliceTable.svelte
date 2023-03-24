<script lang="ts">
  import type { Slice } from './slice.type';
  import SliceRow from './SliceRow.svelte';
  import Fa from 'svelte-fa/src/fa.svelte';
  import Hoverable from './Hoverable.svelte';
  import {
    faAngleLeft,
    faAngleRight,
    faEye,
    faEyeSlash,
    faGripLinesVertical,
  } from '@fortawesome/free-solid-svg-icons';
  import { areSetsEqual } from './utils';

  export let slices: Array<Slice> = [];

  export let sliceRequests: { [key: string]: any } = {};
  export let sliceRequestResults: { [key: string]: Slice } = {};

  export let showScores = false;
  export let positiveOnly = false;

  export let valueNames: any = {};

  export let customSlices: any[] = [];
  export let customSliceResults: Slice[] = [];

  let maxFeatures = 1;
  let metricNames = [];
  let metricInfo = {};
  let scoreNames = [];
  let scoreWidthScalers = {};
  let addingFeatureSize = 0;

  let allSlices: Array<Slice> = [];
  $: allSlices = [...customSliceResults, ...slices];

  $: if (allSlices.length > 0) {
    console.log('slices', allSlices);
    let testSlice = allSlices[0];

    maxFeatures = allSlices.reduce(
      (curr, next) => Math.max(curr, Object.keys(next.featureValues).length),
      1
    );
    maxFeatures = Math.max(maxFeatures, addingFeatureSize);

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

  function editCustomSlice(i: number, featureValues: any) {
    let newRequests = [...customSlices];
    // if there was a toggled feature on this custom slice, remove it
    if (
      customSliceResults.length > i &&
      sliceRequests.hasOwnProperty(customSliceResults[i].stringRep)
    ) {
      let allRequests = Object.assign({}, sliceRequests);
      delete allRequests[customSliceResults[i].stringRep];
      sliceRequests = allRequests;
    }
    if (Object.keys(featureValues).length == 0 && newRequests.length > 1)
      newRequests.splice(i, 1);
    else newRequests[i] = featureValues;
    customSlices = newRequests;
  }

  function deleteCustomSlice(i: number) {
    let newRequests = [...customSlices];
    // if there was a toggled feature on this custom slice, remove it
    if (
      customSliceResults.length > i &&
      sliceRequests.hasOwnProperty(customSliceResults[i].stringRep)
    ) {
      let allRequests = Object.assign({}, sliceRequests);
      delete allRequests[customSliceResults[i].stringRep];
      sliceRequests = allRequests;
    }
    newRequests.splice(i, 1);
    if (newRequests.length == 0) newRequests = [{}];
    customSlices = newRequests;
  }

  function createCustomSlice(featureValues = {}) {
    customSlices = [...customSlices, Object.assign({}, featureValues)];
  }
</script>

<div>
  <table class="relative" cellspacing="0" cellpadding="0">
    <thead class="text-left">
      <tr>
        <th class="bg-slate-100 button-menu rounded-tl">
          <div class="p-2 border-b border-slate-600 w-full h-full" />
        </th>
        {#each Array(maxFeatures) as _, i}
          <th class="bg-slate-100 feature">
            <div class="p-2 border-b border-slate-600">
              Feature {i + 1}
            </div></th
          >
        {/each}
        {#each metricNames as name}
          <th
            class="bg-slate-100 hover:bg-slate-200"
            class:metric={metricInfo[name].visible}
            class:opacity-30={draggingColumn == name}
            draggable={clickingColumn == name}
            on:dragstart={(e) => metricDragStart(e, name)}
            on:dragend={(e) => metricDragEnd(e, name)}
            on:dragover|preventDefault={() => false}
            on:dragenter={(e) => metricDragEnter(e, name)}
            on:dragleave={(e) => metricDragLeave(e, name)}
            on:drop|preventDefault|stopPropagation={(e) => metricDrop(e, name)}
          >
            <Hoverable
              class="potential-drop-zone p-2 border-b border-slate-600"
              let:hovering
            >
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
          </th>
        {/each}
        {#if showScores}
          {#each scoreNames as score, i}
            <th class="bg-slate-100 score">
              <div class="p-2 border-b border-slate-600">
                {score}
              </div></th
            >
          {/each}
        {/if}
        <th
          class="bg-slate-100 hover:bg-slate-200 rounded-tr"
          on:click={() => (showScores = !showScores)}
        >
          <div
            class="w-full h-full px-4 flex justify-center items-center border-b border-slate-600"
          >
            {#if showScores}
              <Fa icon={faAngleLeft} />
            {:else}
              <Fa icon={faAngleRight} />
            {/if}
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      {#each customSliceResults as slice, i (i)}
        <SliceRow
          customSlice={slice}
          {maxFeatures}
          {scoreNames}
          {positiveOnly}
          scoreCellWidth={100}
          {scoreWidthScalers}
          {showScores}
          {metricNames}
          {metricInfo}
          {valueNames}
          rowClass="bg-slate-100 {i == customSliceResults.length - 1
            ? 'border-b-2 border-dotted'
            : ''}"
          temporarySlice={sliceRequestResults[slice.stringRep]}
          showCreateSliceButton={i == customSliceResults.length - 1}
          focusOnMount={i > 0 && i == customSliceResults.length - 1}
          on:edit={(e) => editCustomSlice(i, e.detail)}
          on:toggle={(e) => toggleSliceFeature(slice, e.detail)}
          on:beginedit={(e) => (addingFeatureSize = e.detail + 1)}
          on:endedit={() => (addingFeatureSize = 0)}
          on:create={() => createCustomSlice()}
          on:delete={() => deleteCustomSlice(i)}
          on:duplicate={() => createCustomSlice(slice.featureValues)}
        />
      {/each}
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
          rowClass="hover:bg-slate-100"
          temporarySlice={sliceRequestResults[slice.stringRep]}
          on:edit={(e) => editSliceFeature(slice, e.detail)}
          on:toggle={(e) => toggleSliceFeature(slice, e.detail)}
          on:customize={() => createCustomSlice(slice.featureValues)}
        />
      {/each}
    </tbody>
  </table>
</div>

<style>
  th {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 1;
    height: inherit;
  }

  th.feature {
    min-width: 240px;
  }

  th.metric {
    min-width: 160px;
  }

  th.score {
    min-width: 100px;
  }

  tr {
    height: 1px;
  }

  th.button-menu {
    min-width: 36px;
  }
</style>
