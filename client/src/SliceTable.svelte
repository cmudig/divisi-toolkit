<script lang="ts">
  import type { Slice } from './slice.type';
  import SliceRow from './SliceRow.svelte';
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

  export let slices: Array<Slice> = [];

  export let showScores = false;

  let maxFeatures = 0;
  let scoreNames = [];
  let scoreWidthScalers = {};

  $: if (slices.length > 0) {
    maxFeatures = slices.reduce(
      (curr, next) => Math.max(curr, Object.keys(next.featureValues).length),
      0
    );
    scoreNames = Object.keys(slices[0].scoreValues);
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
  } else {
    maxFeatures = 0;
    scoreNames = [];
    scoreWidthScalers = {};
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
        {#each slices as slice}
          <SliceRow
            {slice}
            {maxFeatures}
            {scoreNames}
            scoreCellWidth={100}
            {scoreWidthScalers}
            {showScores}
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

  th.score {
    width: 100px;
  }

  tr {
    height: 1px;
  }
</style>
