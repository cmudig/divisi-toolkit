<script lang="ts">
  import type { Slice } from './slice.type';
  import SliceMetricBar from './metric_charts/SliceMetricBar.svelte';
  import { format } from 'd3-format';
  import SliceMetricHistogram from './metric_charts/SliceMetricHistogram.svelte';
  import SliceMetricCategoryBar from './metric_charts/SliceMetricCategoryBar.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let slice: Slice;
  export let maxFeatures: number = 0;
  export let scoreNames: Array<string> = [];
  export let showScores = false;
  export let metricNames: Array<string> = [];
  export let positiveOnly = false;

  export let temporarySlice: Slice = null; // if a variable is adjusted dynamically

  export let scoreCellWidth = 100;
  export let scoreWidthScalers = {};
  export let metricInfo = {};

  let featureOrder = [];
  $: if (slice) {
    featureOrder = Object.keys(slice.featureValues);
    featureOrder.sort();
    while (featureOrder.length < maxFeatures) featureOrder.push('');
  }

  let isEntireDataset = false;
  $: isEntireDataset = Object.keys(slice.featureValues).length == 0;

  let sliceToShow: Slice;
  $: sliceToShow = temporarySlice || slice;
</script>

{#if !!sliceToShow}
  <tr
    class:hover:bg-slate-100={!isEntireDataset}
    class:border-b-2={isEntireDataset}
    class:border-dotted={isEntireDataset}
  >
    {#each featureOrder as col, i}
      <td class="py-3 px-2">
        {#if isEntireDataset && i == 0}
          <span class="text-slate-600 text-base">Evaluation Dataset</span>
        {:else if col.length > 0}
          {@const featureDisabled =
            !sliceToShow.featureValues.hasOwnProperty(col) &&
            slice.featureValues.hasOwnProperty(col)}
          {#if positiveOnly}
            <button
              class="bg-transparent hover:opacity-70 font-mono text-left"
              class:opacity-30={featureDisabled}
              class:line-through={featureDisabled}
              on:click={() => dispatch('toggle', col)}>{col}</button
            >
          {:else}
            <button
              class="bg-sky-100 hover:bg-sky-200 px-2 py-1 mr-1 rounded shadow-sm font-mono"
              class:opacity-50={featureDisabled}
              on:click={() => dispatch('toggle', col)}>{col}</button
            >
            {#if featureDisabled}
              <span class="opacity-50">(any value)</span>
            {:else}
              {sliceToShow.featureValues[col]}
            {/if}
          {/if}
        {/if}
      </td>
    {/each}
    {#each metricNames as name}
      {@const metric = sliceToShow.metrics[name]}
      <td class="p-2">
        {#if !!metricInfo[name] && metricInfo[name].visible}
          {#if metric.type == 'binary'}
            <SliceMetricBar
              value={metric.mean}
              scale={metricInfo[name].scale}
              width={scoreCellWidth}
            >
              <span slot="caption">
                <strong>{format('.1%')(metric.mean)}</strong>
                {#if metric.hasOwnProperty('share')}
                  ({format('.1%')(metric.share)} of total)
                {/if}
              </span>
            </SliceMetricBar>
          {:else if metric.type == 'count'}
            <SliceMetricBar value={metric.share} width={scoreCellWidth}>
              <span slot="caption">
                <strong>{format(',')(metric.count)}</strong> ({format('.1%')(
                  metric.share
                )})
              </span>
            </SliceMetricBar>
          {:else if metric.type == 'continuous'}
            <SliceMetricHistogram
              mean={metric.mean}
              histValues={metric.hist}
              width={scoreCellWidth}
            />
          {:else if metric.type == 'categorical'}
            <SliceMetricCategoryBar
              order={metricInfo[name].order}
              counts={metric.counts}
              width={scoreCellWidth}
            />
          {/if}
        {/if}
      </td>
    {/each}
    {#if showScores}
      {#each scoreNames as scoreName}
        <td class="p-2">
          <SliceMetricBar
            value={sliceToShow.scoreValues[scoreName]}
            scale={scoreWidthScalers[scoreName] || ((v) => v)}
            width={scoreCellWidth}
          />
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
