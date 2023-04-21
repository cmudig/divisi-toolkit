<script lang="ts">
  import Checkbox from './Checkbox.svelte';
  import SliceOverlapPlot from './SliceOverlapPlot.svelte';
  import SliceMetricBar from './metric_charts/SliceMetricBar.svelte';
  import type { Slice } from './slice.type';
  import * as d3 from 'd3';

  export let sliceIntersectionCounts: any[] = [];
  export let sliceIntersectionLabels: Slice[] = [];
  export let overallSlice: Slice = null;

  const errorKey = 'Error Rate';

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

<div class="flex h-full w-full">
  <div class="w-2/5 flex-0 h-full">
    <SliceOverlapPlot
      intersectionCounts={sliceIntersectionCounts}
      labels={sliceIntersectionLabels}
      selectedIndexes={hoveredIndex != null
        ? d3.range(sliceIntersectionLabels.length).map((i) => i == hoveredIndex)
        : isFiltered
        ? filteredSlices
        : null}
      bind:hoveredSlices
      {errorKey}
    />
  </div>
  <div class="flex-1 h-full pl-2 overflow-scroll">
    <table class="relative w-full" cellspacing="0" cellpadding="0">
      <thead class="text-left">
        <tr>
          <th class="bg-slate-100 button-menu rounded-tl">
            <div class="p-2 border-b border-slate-600 w-full h-full" />
          </th>
          <th class="bg-slate-100 metric"
            ><div class="p-2 border-b border-slate-600 w-full h-full">
              Count
            </div></th
          >
          <th class="bg-slate-100 metric">
            <div class="p-2 border-b border-slate-600 w-full h-full">
              {errorKey}
            </div>
          </th>
          <th class="bg-slate-100 feature">
            <div class="p-2 border-b border-slate-600">Slice</div>
          </th>
        </tr>
      </thead>
      <tbody>
        {#if overallSliceOverlap != null}
          <tr class="border-b-2 border-dotted">
            <td
              ><div class="p-2">
                <Checkbox
                  checked={filteredSlices.every((x) => x)}
                  on:change={(e) => {
                    if (e.detail)
                      filteredSlices = filteredSlices.map((x) => true);
                    else filteredSlices = filteredSlices.map((x) => false);
                  }}
                />
              </div></td
            >
            <td
              ><div class="py-1 pl-2">
                <SliceMetricBar
                  values={[overallSliceOverlap.count]}
                  width={200}
                  hoverable
                  colors={['#a7f3d0']}
                  showFullBar
                  scale={(v) => v / overallCount}
                >
                  <span class="mt-1" slot="caption" let:hoveringIndex>
                    {#if hoveringIndex == 0}
                      {countFormat(overallSliceOverlap.count)} in {isFiltered
                        ? 'selection'
                        : 'any slice'}
                    {:else}
                      <strong>{countFormat(overallCount)}</strong>
                      ({countFormat(overallSliceOverlap.count)} in {isFiltered
                        ? 'selection'
                        : 'any slice'})
                    {/if}
                  </span>
                </SliceMetricBar>
              </div></td
            >
            <td
              ><div class="py-1 pl-2">
                <SliceMetricBar
                  values={[overallSliceOverlap[errorKey]]}
                  width={200}
                  hoverable
                  colors={['#fdba74']}
                  showFullBar
                  scale={(v) => v / overallErrors}
                >
                  <span class="mt-1" slot="caption" let:hoveringIndex>
                    {#if hoveringIndex == 0}
                      {countFormat(overallSliceOverlap[errorKey])}/{countFormat(
                        overallCount
                      )} in {isFiltered ? 'selection' : 'any slice'}
                    {:else}
                      <strong
                        >{percentFormat(overallErrors / overallCount)}</strong
                      >
                      ({countFormat(
                        overallSliceOverlap[errorKey]
                      )}/{countFormat(overallErrors)} in {isFiltered
                        ? 'selection'
                        : 'any slice'})
                    {/if}
                  </span>
                </SliceMetricBar>
              </div></td
            >
            <td
              ><div class="py-5 pl-2 flex text-sm whitespace-nowrap">
                {isFiltered ? 'Selected Slices' : 'All Slices'}
              </div></td
            >
          </tr>
        {/if}
        {#if sliceOverlapData.length > 0}
          {#each sliceIntersectionLabels as label, i (label.stringRep || i)}
            {@const sliceCount = label.metrics['Count'].count}
            {@const sliceErrorCount = label.metrics[errorKey].count}
            <tr
              class={(hoveredSlices != null && hoveredSlices[i]) ||
              (hoveredIndex != null && hoveredIndex == i)
                ? 'bg-slate-100'
                : ''}
              on:mouseenter={(e) => (hoveredIndex = i)}
              on:mouseleave={(e) => (hoveredIndex = null)}
            >
              <td
                ><div class="p-2">
                  <Checkbox
                    checked={filteredSlices[i]}
                    on:change={(e) => filterSlice(i, e.detail)}
                  />
                </div></td
              >
              <td
                ><div class="py-1 pl-2">
                  <SliceMetricBar
                    values={[
                      sliceOverlapData[i].shared.count,
                      sliceOverlapData[i].unique.count,
                    ]}
                    width={200}
                    hoverable
                    colors={['#a7f3d0', '#047857']}
                    showFullBar
                    scale={(v) => v / overallCount}
                  >
                    <span class="mt-1" slot="caption" let:hoveringIndex>
                      {#if hoveringIndex == 0}
                        {countFormat(sliceOverlapData[i].shared.count)}
                        {isFiltered
                          ? 'shared with selection'
                          : 'shared with other slices'}
                      {:else if hoveringIndex == 1}
                        {countFormat(sliceOverlapData[i].unique.count)}
                        {isFiltered
                          ? filteredSlices[i]
                            ? 'unique to slice'
                            : 'not in selection'
                          : 'unique to slice'}
                      {:else}
                        <strong>{countFormat(sliceCount)}</strong>
                        ({countFormat(sliceOverlapData[i].unique.count)}
                        {isFiltered
                          ? filteredSlices[i]
                            ? 'unique to slice'
                            : 'not in selection'
                          : 'unique to slice'})
                      {/if}
                    </span>
                  </SliceMetricBar>
                </div></td
              >
              <td
                ><div class="py-1 pl-2">
                  <SliceMetricBar
                    values={[
                      sliceOverlapData[i].shared[errorKey],
                      sliceOverlapData[i].unique[errorKey],
                    ]}
                    width={200}
                    hoverable
                    colors={['#fdba74', '#c2410c']}
                    showFullBar
                    scale={(v) => v / overallErrors}
                  >
                    <span class="mt-1" slot="caption" let:hoveringIndex>
                      {#if hoveringIndex == 0}
                        {countFormat(
                          sliceOverlapData[i].shared[errorKey]
                        )}/{countFormat(sliceErrorCount)}
                        {isFiltered
                          ? 'shared with selection'
                          : 'shared with other slices'}
                      {:else if hoveringIndex == 1}
                        {countFormat(
                          sliceOverlapData[i].unique[errorKey]
                        )}/{countFormat(sliceErrorCount)}
                        {isFiltered
                          ? filteredSlices[i]
                            ? 'unique to slice'
                            : 'not in selection'
                          : 'unique to slice'}
                      {:else}
                        <strong
                          >{percentFormat(sliceErrorCount / sliceCount)}</strong
                        >
                        ({countFormat(
                          sliceOverlapData[i].unique[errorKey]
                        )}/{countFormat(sliceErrorCount)}
                        {isFiltered
                          ? filteredSlices[i]
                            ? 'unique to slice'
                            : 'not in selection'
                          : 'unique to slice'})
                      {/if}
                    </span>
                  </SliceMetricBar>
                </div></td
              >
              <td
                ><div class="py-2 pl-2 flex text-sm whitespace-nowrap">
                  {#if Object.keys(label.featureValues).length == 0}
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
                  {/if}
                </div></td
              >
            </tr>
          {/each}
        {/if}
      </tbody>
    </table>
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
