<script lang="ts">
  import { LayerCake, Canvas } from 'layercake';
  import ForceScatterPlot from './ForceScatterPlot.svelte';
  import * as d3 from 'd3';
  import SliceMetricBar from '../metric_charts/SliceMetricBar.svelte';
  import { onMount } from 'svelte';
  import SliceLegendGlyph from './SliceLegendGlyph.svelte';

  export let intersectionCounts: any[] = [];
  export let labels: { stringRep: string; feature: any }[] = [];

  export let searchScopeInfo: any = {};

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

  let selectedClusters: number[] = [];

  let sliceCount = 0;
  let maxIntersectionSize = 1;
  let totalInstances = 1;

  let pointData = [];

  function generatePointData() {
    maxIntersectionSize = intersectionCounts.reduce(
      (prev, int) => Math.max(prev, int.count),
      1
    );
    totalInstances = intersectionCounts.reduce(
      (prev, int) => prev + int.count,
      0
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
      sortedIntersections = intersectionCounts.sort(
        (a, b) => b.count - a.count
      );

      if (!!sliceColorMap)
        sliceColors = labels.map((l) => sliceColorMap[l.stringRep]);
      else sliceColors = [];

      oldLabels = labels;
      oldErrorKey = errorKey;
      oldGroupedLayout = groupedLayout;
    }
  }

  $: if (hoveredSlices != null)
    hoveredSliceInfo = intersectionCounts.find((item) =>
      item.slices.every((s, i) => hoveredSlices[i] == s)
    );
  else hoveredSliceInfo = null;

  function clearSelectedSlices() {
    selectedSlices = [];
  }

  function selectSavedSlices() {
    selectedSlices = savedSlices;
  }

  function setSearchScopeToSlice(intersection: {
    slices: number[];
    count: number;
  }) {
    // construct an intersection slice
    if (labels.length > 0) {
      let negateIfNeeded: (label: { feature: any }, index: number) => any = (
        label,
        index
      ) => {
        console.log('negating if needed:', label, intersection.slices[index]);
        if (!intersection.slices[index])
          return { type: 'negation', feature: label.feature };
        return label.feature;
      };
      console.log('Setting search scope to slice');
      searchScopeInfo = {
        // within_slice: labels.slice(1).reduce(
        //   (prev, curr, i) => ({
        //     type: 'and',
        //     lhs: prev,
        //     rhs: negateIfNeeded(curr, i + 1),
        //   }),
        //   negateIfNeeded(labels[0], 0)
        // ),
        within_selection: pointData
          .filter((d) => d.slices.every((s, i) => intersection.slices[i] == s))
          .map((d) => d.cluster),
        proportion: intersection.count / totalInstances,
      };
    } else searchScopeInfo = {};
    // searchScopeInfo = { within_slice}
  }

  $: console.log('Search scope INFO:', searchScopeInfo);

  let oldSearchScopeInfo: any = {};
  $: if (oldSearchScopeInfo !== searchScopeInfo) {
    console.log(
      '(Selected clusters) setting search scope info:',
      searchScopeInfo
    );
    if (!!searchScopeInfo.within_selection)
      selectedClusters = searchScopeInfo.within_selection;
    // else if (!!searchScopeInfo.intersection) {
    //   let selected = searchScopeInfo.intersection.slices;
    //   console.log('looking at search scope info', selected);
    //   selectedClusters = pointData
    //     .filter(
    //       (d) =>
    //         d.slices.length == selected.length &&
    //         d.slices.every((s, i) => s == selected[i])
    //     )
    //     .map((d) => d.cluster);
    //   console.log('selected:', selectedClusters);
    else selectedClusters = [];
  }

  let sortedIntersections: any[] = [];
  let sliceColors: string[] = [];

  // this appears to be needed when the overlap plot is visible on load
  let loaded = false;
  onMount(() => setTimeout(() => (loaded = true), 10));
</script>

{#if pointData.length > 0}
  <div class="w-full h-full relative bg-slate-100">
    {#if loaded}
      <div class="w-full h-full select-none">
        <LayerCake
          padding={{ top: 0, right: 0, bottom: 0, left: 0 }}
          data={pointData}
        >
          <Canvas>
            <ForceScatterPlot
              bind:hoveredSlices
              {selectedClusters}
              on:selectClusters={(e) => {
                console.log(
                  'Select clusters from force scatter plot',
                  e.detail
                );
                if (e.detail.ids.length > 0)
                  searchScopeInfo = {
                    within_selection: e.detail.ids,
                    proportion: e.detail.num_instances / totalInstances,
                  };
                else searchScopeInfo = {};
              }}
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
        <button
          class="text-left bg-transparent flex items-center justify-end gap-2 transition-opacity duration-700 delay-100"
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
          on:click={() => setSearchScopeToSlice(intersection)}
          title="{intersection.count} points included in {numSlices} slice{numSlices !=
          1
            ? 's'
            : ''}, with an error rate of {errorRateString}"
        >
          <SliceLegendGlyph {intersection} {sliceColors} />
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
        </button>
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
