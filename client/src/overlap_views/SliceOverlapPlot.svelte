<script lang="ts">
  import { LayerCake, Canvas } from 'layercake';
  import ForceScatterPlot from './ForceScatterPlot.svelte';
  import * as d3 from 'd3';
  import SliceMetricBar from '../metric_charts/SliceMetricBar.svelte';
  import { onMount } from 'svelte';
  import SliceLegendGlyph from './SliceLegendGlyph.svelte';
  import { areObjectsEqual, featureNeedsParentheses } from '../utils/utils';
  import type { Slice } from '../utils/slice.type';
  import Hoverable from '../utils/Hoverable.svelte';
  import Fa from 'svelte-fa';
  import { faTrash } from '@fortawesome/free-solid-svg-icons';
  import { OutcomeColors } from './slice_glyphs';

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

  export let colorScale = d3.scaleOrdinal(d3.schemeCategory10);

  function assignColorToSlice(selectedSlices: Slice[]) {
    console.log('assigning colors:', selectedSlices);
    sliceColorMap = Object.fromEntries(
      selectedSlices.map((slice, ind) => [slice.stringRep, colorScale(ind)])
    );
  }
  $: assignColorToSlice(selectedSlices);

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

  function describeSlice(slice: any) {
    if (slice.type == 'base') return 'Evaluation Set';
    if (slice.type == 'feature') {
      return `<span class='font-mono'>${slice.col}</span> = <strong>${slice.vals.join(', ')}</strong>`;
    }
    if (slice.type == 'negation') {
      let base = describeSlice(slice.feature);
      if (featureNeedsParentheses(slice.feature, slice))
        base = '(' + base + ')';
      return `!${base}`;
    }
    if (slice.type == 'and' || slice.type == 'or') {
      let lhs = describeSlice(slice.lhs);
      if (featureNeedsParentheses(slice.lhs, slice)) lhs = '(' + lhs + ')';
      let rhs = describeSlice(slice.rhs);
      if (featureNeedsParentheses(slice.rhs, slice)) rhs = '(' + rhs + ')';
      return `${lhs} ${slice.type == 'and' ? '&' : '|'} ${rhs}`;
    }
  }

  let container: HTMLElement;
  let sizeObserver: ResizeObserver | null = null;
  let wideMode: boolean = true;
  $: if (!!container) {
    if (!!sizeObserver) {
      sizeObserver.disconnect();
    }
    sizeObserver = new ResizeObserver(() => {
      if (!container) return;
      wideMode = container.clientWidth > 400;
    });
    sizeObserver.observe(container);
  } else if (!!sizeObserver) {
    sizeObserver.disconnect();
    sizeObserver = null;
  }

  let dragOriginIndex: number | null = null;
  let dragOverSliceIndex: number | null = null;

  function handleDrop(e: DragEvent) {
    if (!!e.dataTransfer.getData('slice')) {
      e.preventDefault();
      e.stopPropagation();
      let slice = JSON.parse(e.dataTransfer.getData('slice'));
      let existingIdx = selectedSlices.findIndex((s) =>
        areObjectsEqual(s.feature, slice.feature)
      );
      console.log(slice, selectedSlices, existingIdx);
      if (existingIdx >= 0) {
        // swap the slices if the dragged one is already in the selection
        let newSlices = [...selectedSlices];
        let swapped = newSlices[existingIdx];
        newSlices[existingIdx] = newSlices[dragOverSliceIndex];
        newSlices[dragOverSliceIndex] = swapped;
        selectedSlices = newSlices;
      } else if (
        dragOverSliceIndex != null &&
        dragOverSliceIndex < selectedSlices.length
      ) {
        // replace the item at the index
        selectedSlices = [
          ...selectedSlices.slice(0, dragOverSliceIndex),
          slice,
          ...selectedSlices.slice(dragOverSliceIndex + 1),
        ];
      } else {
        // add the new selection
        selectedSlices = [...selectedSlices, slice];
      }
      console.log('dropping', slice, selectedSlices, sliceColors);
    }
    dragOverSliceIndex = null;
  }
</script>

{#if pointData.length > 0}
  <div
    class="w-full h-full relative bg-slate-100"
    bind:this={container}
    on:dragover={(e) => {
      if (dragOriginIndex != null) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
    }}
    on:drop={handleDrop}
  >
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
      class="absolute top-0 left-0 right-0 pt-2 px-2 flex justify-stretch items-stretch flex-wrap gap-2"
    >
      {#each d3.range(labels.length + 1) as sliceIndex}
        <Hoverable class="basis-2/5 grow">
          <div
            slot="default"
            let:hovering
            class="w-full h-full flex items-center gap-2 rounded-md p-2 select-none {labels.length >
            sliceIndex
              ? 'hover:bg-slate-100 cursor-grab'
              : ''} {labels.length > sliceIndex
              ? 'bg-white'
              : 'bg-slate-200/80'} {dragOverSliceIndex == sliceIndex
              ? 'border-2 border-blue-400'
              : ''}"
            style={labels.length > sliceIndex
              ? `border: 2px solid ${sliceColors[sliceIndex]};`
              : ''}
            draggable={labels.length > sliceIndex}
            on:dragstart={(e) => {
              dragOriginIndex = sliceIndex;
              e.dataTransfer.setData(
                'slice',
                JSON.stringify(selectedSlices[sliceIndex])
              );
            }}
            on:dragend={() => (dragOriginIndex = null)}
            on:dragover={(e) => {
              if (labels.length <= sliceIndex && dragOriginIndex != null)
                return;
              e.preventDefault();
              e.dataTransfer.dropEffect = 'copy';
              dragOverSliceIndex = sliceIndex;
            }}
            on:dragleave|preventDefault={(e) => (dragOverSliceIndex = null)}
            on:drop={handleDrop}
          >
            {#if labels.length > sliceIndex}
              <div class="flex-auto text-xs line-clamp-3">
                {@html describeSlice(labels[sliceIndex].feature)}
              </div>
              <button
                class:invisible={!hovering}
                class="p-1 hover:opacity-50 text-slate-600"
                on:click={(e) => {
                  selectedSlices = [
                    ...selectedSlices.slice(0, sliceIndex),
                    ...selectedSlices.slice(sliceIndex + 1),
                  ];
                }}><Fa icon={faTrash} class="inline" /></button
              >
            {:else}
              <div class="my-1 flex-auto text-xs text-slate-500 text-center">
                Drag and drop a slice to plot it on the map
              </div>
            {/if}
          </div>
        </Hoverable>
      {/each}
    </div>

    <div
      class="absolute bottom-0 right-0 mb-2 mr-2 p-1 bg-slate-100/80 rounded"
    >
      <div class="text-xs font-bold text-slate-500 mb-1">
        Slice Intersections
      </div>
      {#each sortedIntersections as intersection, intIndex}
        {@const numSlices = intersection.slices.reduce((a, b) => a + b, 0)}
        {@const errorRateString = d3.format('.1%')(
          intersection[errorKey] / intersection.count
        )}
        <button
          class="text-left bg-transparent flex items-center w-full justify-end gap-2 transition-opacity duration-700 delay-100"
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
          <div class="flex-auto">
            <SliceMetricBar
              value={intersection[errorKey] / intersection.count}
              color={OutcomeColors.True}
              width={wideMode ? 64 : null}
              showFullBar
              fullBarColor={OutcomeColors.False}
              horizontalLayout
              ><div
                slot="caption"
                class="ml-1"
                style="width: {wideMode ? '100px' : '0'};"
              >
                {#if wideMode}
                  {d3.format(',')(intersection.count)} ({errorRateString}
                  <span
                    class="inline-block rounded-full w-2 h-2 align-middle"
                    style="background-color: #94a3b8;"
                  />)
                {/if}
              </div></SliceMetricBar
            >
          </div>
        </button>
      {/each}
      {#if errorKeyOptions.length > 0}
        <div class="mt-2 flex items-center w-full">
          <div
            class="rounded-full"
            style="width: 12px; height: 12px; background-color: {OutcomeColors.True};"
          />
          <div>&nbsp;=&nbsp;</div>
          <select class="flat-select-small flex-auto" bind:value={errorKey}>
            {#each errorKeyOptions as metric}
              <option value={metric}>{metric}</option>
            {/each}
          </select>
        </div>
      {/if}
    </div>
  </div>
{/if}
