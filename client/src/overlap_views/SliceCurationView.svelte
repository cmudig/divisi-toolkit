<script lang="ts">
  import Checkbox from '../utils/Checkbox.svelte';
  import SliceOverlapPlot from './SliceOverlapPlot.svelte';
  import SliceMetricBar from '../metric_charts/SliceMetricBar.svelte';
  import type { Slice } from '../utils/slice.type';
  import * as d3 from 'd3';
  import SliceFeature from '../slice_table/SliceFeature.svelte';

  export let sliceIntersectionCounts: any[] = [];
  export let sliceIntersectionLabels: Slice[] = [];
  export let overallSlice: Slice = null;

  export let errorKey = 'Error Rate';
  export let positiveOnly = false;

  let hoveredIndex = null;
  let hoveredSlices = null;

  let filteredSlices = [];
  let isFiltered = false;

  let sliceOverlapData = [];
  let overallSliceOverlap = null;

  $: filteredSlices = new Array(sliceIntersectionLabels.length).fill(false);
  $: isFiltered = filteredSlices.reduce((a, b) => a + b) > 0;

  $: if (sliceIntersectionCounts.length > 0 && !!overallSlice) {
    sliceOverlapData = new Array(sliceIntersectionLabels.length)
      .fill(undefined)
      .map((i) => ({
        unique: { count: 0, [errorKey]: 0 },
        shared: { count: 0, [errorKey]: 0 },
      }));
    overallSliceOverlap = { count: 0, [errorKey]: 0 };

    sliceIntersectionCounts.forEach((item) => {
      let numSlicesInSel = item.slices.reduce(
        (prev, curr, idx) =>
          prev + (!isFiltered || filteredSlices[idx] ? curr : 0),
        0
      );
      item.slices.forEach((s, i) => {
        if (s) {
          let isUnique: boolean;
          if (!isFiltered || filteredSlices[i]) isUnique = numSlicesInSel == 1;
          else isUnique = numSlicesInSel == 0;
          let counter = sliceOverlapData[i][isUnique ? 'unique' : 'shared'];
          counter.count += item.count;
          counter[errorKey] += item[errorKey];
        }
      });
      if (numSlicesInSel > 0) {
        overallSliceOverlap.count += item.count;
        overallSliceOverlap[errorKey] += item[errorKey];
      }
    });
  } else {
    sliceOverlapData = [];
    overallSliceOverlap = null;
  }

  let overallCount = 0;
  $: if (!!overallSlice) overallCount = overallSlice.metrics['Count'].count;

  let overallErrors = 0;
  $: if (!!overallSlice) overallErrors = overallSlice.metrics[errorKey].count;

  const countFormat = d3.format(',');
  const percentFormat = d3.format('.0%');

  function filterSlice(index: number, value: boolean) {
    filteredSlices = [
      ...filteredSlices.slice(0, index),
      value,
      ...filteredSlices.slice(index + 1),
    ];
  }
</script>

<div class="relative h-full w-full">
  <div class="w-full h-full">
    <SliceOverlapPlot
      intersectionCounts={sliceIntersectionCounts}
      labels={sliceIntersectionLabels}
      selectedIndexes={hoveredIndex != null
        ? d3.range(sliceIntersectionLabels.length).map((i) => i == hoveredIndex)
        : isFiltered
        ? filteredSlices
        : null}
      bind:hoveredSlices
      centerYRatio={2 / 3}
      {errorKey}
    />
  </div>
  <div class="absolute top-0 left-0 right-0 h-1/3 m-2 overflow-scroll">
    {#if sliceOverlapData.length > 0}
      {#each sliceIntersectionLabels as label, i (label.stringRep || i)}
        {@const sliceCount = label.metrics['Count'].count}
        {@const sliceErrorCount = label.metrics[errorKey].count}
        <div
          class="flex items-center {(hoveredSlices != null &&
            hoveredSlices[i]) ||
          (hoveredIndex != null && hoveredIndex == i)
            ? 'bg-slate-100'
            : ''}"
          on:mouseenter={(e) => (hoveredIndex = i)}
          on:mouseleave={(e) => (hoveredIndex = null)}
        >
          <div class="p-2">
            <Checkbox
              checked={filteredSlices[i]}
              on:change={(e) => filterSlice(i, e.detail)}
            />
          </div>
          <div class="py-2 pl-2 flex text-sm whitespace-nowrap">
            <SliceFeature
              feature={label.feature}
              currentFeature={label.feature}
              {positiveOnly}
            />
            <!-- {#if Object.keys(label.featureValues).length == 0}
                    <div class="text-gray-700">&lt;empty slice&gt;</div>
                  {:else}
                    {#each Object.entries(label.featureValues) as feature}
                      <div class="mr-3">
                        <div class="font-mono p-1 px-2 rounded bg-blue-50">
                          {feature[0]}
                        </div>
                        <div class="ml-1 mt-1 text-xs text-gray-700">
                          {feature[1]}
                        </div>
                      </div>
                    {/each}
                  {/if} -->
          </div>
        </div>
      {/each}
    {/if}
  </div>
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
    min-width: 360px;
  }

  th.metric {
    min-width: 220px;
  }

  tr {
    height: 1px;
  }

  th.button-menu {
    min-width: 36px;
  }
</style>
