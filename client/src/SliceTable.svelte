<script lang="ts">
  import type { Slice } from './slice.type';
  import SliceRow from './SliceRow.svelte';
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

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
    scoreNames.sort();

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
      metricNames = Object.keys(testSlice.metrics);
      metricNames.sort();

      metricInfo = {};
      metricNames.forEach((n) => {
        if (
          testSlice.metrics[n].type == 'binary' ||
          testSlice.metrics[n].type == 'count'
        ) {
          let maxScore =
            testSlice.metrics[n].type == 'count'
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
        } else if (testSlice.metrics[n].type == 'categorical') {
          let uniqueKeys: Set<string> = new Set();
          slices.forEach((s) =>
            Object.keys(s.metrics[n].counts).forEach((v) => uniqueKeys.add(v))
          );
          let order = Array.from(uniqueKeys);
          order.sort(
            (a, b) =>
              testSlice.metrics[n].counts[b] - testSlice.metrics[n].counts[a]
          );
          metricInfo[n] = { order };
        }
      });
      console.log('metric info:', metricInfo, testSlice.metrics);
    }
  } else {
    maxFeatures = 0;
    scoreNames = [];
    scoreWidthScalers = {};
    metricNames = [];
    metricInfo = {};
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
            <th class="bg-slate-100 metric">
              <div class="p-2 border-b border-slate-600">
                {name}
              </div></th
            >
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
