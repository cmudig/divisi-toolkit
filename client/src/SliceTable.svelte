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

  let maxFeatures = 0;
  let metricNames = [];
  let metricInfo = {};
  let scoreNames = [];
  let scoreWidthScalers = {};

  $: if (slices.length > 0) {
    console.log('slices', slices);
    let testSlice = slices[0];

    maxFeatures = slices.reduce(
      (curr, next) => Math.max(curr, Object.keys(next.featureValues).length),
      0
    );

    // tabulate score names and normalize
    scoreNames = Object.keys(testSlice.scoreValues);

    scoreWidthScalers = {};
    scoreNames.forEach((n) => {
      let maxScore =
        slices.reduce(
          (curr, next) => Math.max(curr, next.scoreValues[n]),
          -1e9
        ) + 0.01;
      let minScore =
        slices.reduce(
          (curr, next) => Math.min(curr, next.scoreValues[n]),
          1e9
        ) - 0.01;
      scoreWidthScalers[n] = (v: number) =>
        (v - minScore) / (maxScore - minScore);
    });

    // tabulate metric names and normalize
    if (!!testSlice.metrics) {
      updateMetricInfo(testSlice.metrics);
    }
  } else {
    maxFeatures = 0;
    scoreNames = [];
    scoreWidthScalers = {};
    metricNames = [];
    metricInfo = {};
  }

  let oldScoreNames = new Set();
  $: if (!areSetsEqual(oldScoreNames, new Set(scoreNames))) {
    scoreNames.sort();
    oldScoreNames = new Set(scoreNames);
  }

  let oldMetricNames = new Set();
  $: if (!areSetsEqual(oldMetricNames, new Set(metricNames))) {
    metricNames.sort();
    oldMetricNames = new Set(metricNames);
  }

  function updateMetricInfo(testMetrics) {
    metricNames = Object.keys(testMetrics);

    let oldMetricInfo = metricInfo;
    metricInfo = {};
    metricNames.forEach((n) => {
      if (testMetrics[n].type == 'binary' || testMetrics[n].type == 'count') {
        let maxScore =
          testMetrics[n].type == 'count'
            ? slices.reduce(
                (curr, next) => Math.max(curr, next.metrics[n].mean),
                -1e9
              ) + 0.01
            : 1;
        let minScore =
          slices.reduce(
            (curr, next) => Math.min(curr, next.metrics[n].mean),
            1e9
          ) - 0.01;
        metricInfo[n] = { scale: (v: number) => v / maxScore };
      } else if (testMetrics[n].type == 'categorical') {
        let uniqueKeys: Set<string> = new Set();
        slices.forEach((s) =>
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
</script>

<div>
  {#if slices.length > 0}
    <table class="relative" cellspacing="0" cellpadding="0">
      <thead class="text-left">
        <tr>
          {#each Array(maxFeatures) as _, i}
            <th class="bg-slate-100 feature" class:rounded-tl={i == 0}>
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
              on:drop|preventDefault|stopPropagation={(e) =>
                metricDrop(e, name)}
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
        {#each slices as slice, i (slice.stringRep || i)}
          <SliceRow
            {slice}
            {maxFeatures}
            {scoreNames}
            scoreCellWidth={100}
            {scoreWidthScalers}
            {showScores}
            {metricNames}
            {metricInfo}
            temporarySlice={sliceRequestResults[slice.stringRep]}
            on:toggle={(e) => {
              let allRequests = Object.assign({}, sliceRequests);
              let r;
              if (!!allRequests[slice.stringRep])
                r = allRequests[slice.stringRep];
              else r = Object.assign({}, slice.featureValues);
              if (r.hasOwnProperty(e.detail)) delete r[e.detail];
              else r[e.detail] = slice.featureValues[e.detail];
              allRequests[slice.stringRep] = r;
              sliceRequests = allRequests;
              console.log(sliceRequests);
            }}
          />
        {/each}
      </tbody>
    </table>
  {/if}
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
</style>
