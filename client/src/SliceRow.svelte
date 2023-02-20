<script lang="ts">
  import type { Slice } from './slice.type';
  import { format } from 'd3-format';
  import { interpolateBlues } from 'd3-scale-chromatic';
  import TableCellBar from './TableCellBar.svelte';

  export let slice: Slice;
  export let maxFeatures: number = 0;
  export let scoreNames: Array<string> = [];
  export let showScores = false;

  export let scoreCellWidth = 100;
  export let scoreWidthScalers = {};

  let featureOrder = [];
  $: if (slice) {
    featureOrder = Object.keys(slice.featureValues);
    featureOrder.sort();
    while (featureOrder.length < maxFeatures) featureOrder.push('');
  }
</script>

{#if !!slice}
  <tr class="hover:bg-slate-100">
    {#each featureOrder as col}
      <td class="py-3 px-2">
        {#if col.length > 0}
          <span class="bg-sky-100 px-2 py-1 mr-1 rounded shadow-sm font-mono"
            >{col}</span
          >
          {slice.featureValues[col]}
        {/if}
      </td>
    {/each}
    {#if showScores}
      {#each scoreNames as scoreName}
        <td class="p-2">
          {#if !!scoreWidthScalers[scoreName]}
            <TableCellBar
              maxWidth={scoreCellWidth}
              fraction={scoreWidthScalers[scoreName](
                slice.scoreValues[scoreName]
              )}
              colorScale={interpolateBlues}
            />
          {/if}
          <div class="text-xs text-slate-800">
            {format('.3')(slice.scoreValues[scoreName])}
          </div>
        </td>
      {/each}
    {/if}
  </tr>
{/if}

<style>
  tr {
    height: 1px;
  }
  td {
    height: inherit;
  }
</style>
