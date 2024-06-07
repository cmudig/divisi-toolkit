<script lang="ts">
  import { LayerCake, Canvas } from 'layercake';
  import ForceScatterPlot from './ForceScatterPlot.svelte';
  import * as d3 from 'd3';
  import { shuffle } from '../utils/utils';
  import SliceMetricBar from '../metric_charts/SliceMetricBar.svelte';
  import { drawSliceGlyphHTML } from './slice_glyphs';
  import { onMount } from 'svelte';

  export let intersectionCounts: any[] = [];
  export let labels: { stringRep: string }[] = [];
  export let selectedIndexes = null;

  export let selectedSlices = [];
  export let savedSlices = [];

  export let sliceColorMap: { [key: string]: string } = {};

  export let errorKey: string | null = null;
  export let errorKeyOptions: string[] = [];

  export let groupedLayout: {
    labels?: { stringRep: string }[];
    overlap_plot_metric?: string;
    layout?: {
      [key: string]: {
        slices: boolean[];
        outcome: boolean;
        x: number;
        y: number;
      };
    };
  } = {};

  export let hoveredSlices = null;
  let hoveredMousePosition = null;
  let hoveredSliceInfo = null;

  let sliceCount = 0;
  let maxIntersectionSize = 1;

  let pointData = [];

  function generatePointData() {
    maxIntersectionSize = intersectionCounts.reduce(
      (prev, int) => Math.max(prev, int.count),
      1
    );
    if (Object.keys(groupedLayout?.layout ?? {}).length > 0) {
      console.log('grouped layout!');
      pointData = Object.entries(groupedLayout.layout).map(
        ([id, layoutItem]) => ({
          ...layoutItem,
          id: parseInt(id),
        })
      );
    } else {
      pointData = [];
    }
  }

  // regenerate point data when a property changes, and the grouped layout reflects the new properties
  let oldLabels = [];
  let oldErrorKey = '';
  let oldGroupedLayout = null;
  $: if (
    intersectionCounts.length > 0 &&
    (labels !== oldLabels ||
      oldErrorKey !== errorKey ||
      oldGroupedLayout !== groupedLayout)
  ) {
    sliceCount = intersectionCounts[0].slices.length;

    if (
      sliceCount == labels.length &&
      (Object.keys(groupedLayout.layout ?? {}).length == 0 ||
        (groupedLayout.overlap_plot_metric == errorKey &&
          (groupedLayout.labels ?? []).length == labels.length &&
          groupedLayout.labels.every(
            (l, i) => l.stringRep == labels[i].stringRep
          )))
    ) {
      if (oldErrorKey !== errorKey) pointData = [];

      generatePointData();
      oldLabels = labels;
      oldErrorKey = errorKey;
      oldGroupedLayout = groupedLayout;
    }
  }

  $: if (hoveredSlices != null)
    hoveredSliceInfo = intersectionCounts.find((item) =>
      item.slices.every((s, i) => hoveredSlices[i] == s)
    );
  else if (selectedIndexes != null)
    hoveredSliceInfo = intersectionCounts
      .filter((item) => selectedIndexes.some((s, i) => item.slices[i] && s))
      .reduce(
        (prev, curr) => ({
          count: prev.count + curr.count,
          [errorKey]: prev[errorKey] + curr[errorKey],
        }),
        { count: 0, [errorKey]: 0 }
      );
  else hoveredSliceInfo = null;

  function clearSelectedSlices() {
    selectedSlices = [];
  }

  function selectSavedSlices() {
    selectedSlices = savedSlices;
  }

  let sortedIntersections: any[] = [];
  let sliceColors: string[] = [];
  $: sortedIntersections = intersectionCounts.sort((a, b) => b.count - a.count);
  $: if (!!sliceColorMap)
    sliceColors = labels.map((l) => sliceColorMap[l.stringRep]);
  else sliceColors = [];

  let sliceGlyphContainers: HTMLElement[] = [];
  $: if (
    sortedIntersections.length == intersectionCounts.length &&
    sliceGlyphContainers.length == sortedIntersections.length &&
    sliceColors.length == labels.length
  )
    sliceGlyphContainers.forEach((container, i) => {
      let intersection = sortedIntersections[i];
      drawSliceGlyphHTML(container, intersection.slices, sliceColors, 8);
    });

  // this appears to be needed when the overlap plot is visible on load
  let loaded = false;
  onMount(() => setTimeout(() => (loaded = true), 10));
</script>

{#if pointData.length > 0}
  <div class="w-full h-full relative bg-slate-100">
    {#if loaded}
      <div class="w-full h-full">
        <LayerCake
          padding={{ top: 0, right: 0, bottom: 0, left: 0 }}
          data={pointData}
        >
          <Canvas>
            <ForceScatterPlot
              bind:hoveredSlices
              {sliceColors}
              {hoveredMousePosition}
            />
          </Canvas>
        </LayerCake>
      </div>
    {/if}
    <div
      class="absolute bottom-0 left-0 right-0 mb-2 mx-2 flex items-center gap-2"
    >
      <button
        on:click={clearSelectedSlices}
        class="btn btn-blue disabled:opacity-50"
      >
        Clear All Selected
      </button>
      <button
        on:click={selectSavedSlices}
        class="btn btn-blue disabled:opacity-50"
      >
        Select All Saved
      </button>
    </div>

    <div class="absolute top-0 right-0 mt-2 mr-2 p-1 bg-slate-100/80 rounded">
      {#each sortedIntersections as intersection, intIndex}
        {@const numSlices = intersection.slices.reduce((a, b) => a + b, 0)}
        {@const errorRateString = d3.format('.1%')(
          intersection[errorKey] / intersection.count
        )}
        <div
          class="flex items-center justify-end gap-2 transition-opacity duration-700 delay-100"
          class:opacity-30={!!hoveredSliceInfo &&
            !hoveredSliceInfo.slices.every(
              (s, i) => intersection.slices[i] == s
            )}
          on:mouseenter={() => {
            hoveredSlices = intersection.slices;
          }}
          on:mouseleave={() => {
            hoveredSlices = intersection.slices;
          }}
          title="{intersection.count} points included in {numSlices} slice{numSlices !=
          1
            ? 's'
            : ''}, with an error rate of {errorRateString}"
        >
          <div
            style="width: 16px; height: 16px;"
            bind:this={sliceGlyphContainers[intIndex]}
          />
          <!-- <p class="flex-auto">{intersection.slices}</p> -->
          <SliceMetricBar
            value={intersection[errorKey] / intersection.count}
            color="#94a3b8"
            width={64}
            showFullBar
            fullBarColor="white"
            horizontalLayout
            ><div slot="caption" class="ml-1" style="width: 100px;">
              {d3.format(',')(intersection.count)} ({errorRateString}
              <span
                class="inline-block rounded-full w-2 h-2 align-middle"
                style="background-color: #94a3b8;"
              />)
            </div></SliceMetricBar
          >
        </div>
      {/each}
    </div>
  </div>

  {#if errorKeyOptions.length > 0}
    <div class="absolute top-0 left-0 mt-2 ml-2 p-1 bg-slate-100/60 rounded">
      <span
        class="inline-block rounded-full w-4 h-4 align-text-top"
        style="background-color: #94a3b8;"
      />
      &nbsp;=&nbsp;
      <select class="flat-select" bind:value={errorKey}>
        {#each errorKeyOptions as metric}
          <option value={metric}>{metric}</option>
        {/each}
      </select>
    </div>
  {/if}
{/if}
