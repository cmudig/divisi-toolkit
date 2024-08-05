<script lang="ts">
  import { LayerCake, Canvas } from 'layercake';
  import ForceScatterPlot from './ForceScatterPlot.svelte';
  import * as d3 from 'd3';
  import SliceMetricBar from '../metric_charts/SliceMetricBar.svelte';
  import { onMount } from 'svelte';
  import SliceLegendGlyph from './SliceLegendGlyph.svelte';
  import {
    areObjectsEqual,
    featureNeedsParentheses,
    randomStringRep,
  } from '../utils/utils';
  import type { Slice } from '../utils/slice.type';
  import Hoverable from '../utils/Hoverable.svelte';
  import Fa from 'svelte-fa';
  import {
    faChevronDown,
    faChevronUp,
    faHeart,
    faTrash,
  } from '@fortawesome/free-solid-svg-icons';
  import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';

  import { OutcomeColors } from './slice_glyphs';

  export let intersectionCounts: any[] = [];
  export let labels: { stringRep: string; feature: any }[] = [];

  export let searchScopeInfo: any = {};
  export let searchScopeEnrichedFeatures: string[] = [];

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
    enriched_cluster_features: { [key: string]: string[] };
  } = {};

  export let hoveredSlices = null;
  export let hoveredClusters: Set<number> = new Set();
  let hoveredMousePosition = null;
  let hoveredSliceInfo = null;
  let hoveredPointIndex: number | null = null;

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
    console.log(sliceColorMap);
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

  function clustersMatchingSlice(sliceIndex: number): {
    ids: number[];
    size: number;
  } {
    let matchingPoints = pointData.filter((d) => d.slices[sliceIndex] > 0);
    console.log(matchingPoints);
    return {
      ids: matchingPoints.map((d) => d.cluster),
      size: matchingPoints.reduce((a, b) => a + b.size, 0),
    };
  }

  function getSliceForIntersection(intersection: {
    slices: number[];
    count: number;
  }): Slice {
    let feature = { type: 'base' };
    if (labels.length > 0) {
      let negateIfNeeded: (label: { feature: any }, index: number) => any = (
        label,
        index
      ) => {
        if (!intersection.slices[index])
          return { type: 'negation', feature: label.feature };
        return label.feature;
      };
      feature = labels.slice(1).reduce(
        (prev, curr, i) => ({
          type: 'and',
          lhs: prev,
          rhs: negateIfNeeded(curr, i + 1),
        }),
        negateIfNeeded(labels[0], 0)
      );
    }
    return {
      stringRep: randomStringRep(),
      rawFeature: { type: 'base' },
      scoreValues: {},
      metrics: {},
      feature,
      isEmpty: feature.type != 'base',
    };
  }

  function setSearchScopeToSlice(intersection: {
    slices: number[];
    count: number;
  }) {
    let intersectionSlice = getSliceForIntersection(intersection);
    if (intersectionSlice.isEmpty) searchScopeInfo = {};
    else searchScopeInfo = { within_slice: intersectionSlice.feature };
  }

  $: console.log('Search scope INFO:', searchScopeInfo);

  let oldSearchScopeInfo: any = {};
  $: if (oldSearchScopeInfo !== searchScopeInfo) {
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
  let collapseIntersections: boolean = false;
  let collapseSlices: boolean = false;
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
  let draggingOverContainer: boolean = false;

  function handleDrop(e: DragEvent) {
    if (!draggingOverContainer) return;
    draggingOverContainer = false;
    if (!!e.dataTransfer.getData('slice')) {
      e.stopPropagation();
      let slice = JSON.parse(e.dataTransfer.getData('slice'));
      let existingIdx = selectedSlices.findIndex((s) =>
        areObjectsEqual(s.feature, slice.feature)
      );
      console.log(slice, selectedSlices, existingIdx);
      if (existingIdx >= 0) {
        if (dragOriginIndex == null) {
          dragOverSliceIndex = null;
          return;
        }
        e.preventDefault();
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
        e.preventDefault();
        // replace the item at the index
        selectedSlices = [
          ...selectedSlices.slice(0, dragOverSliceIndex),
          slice,
          ...selectedSlices.slice(dragOverSliceIndex + 1),
        ];
      } else {
        e.preventDefault();
        // add the new selection
        selectedSlices = [...selectedSlices, slice];
      }
      console.log('dropping', slice, selectedSlices, sliceColors);
    }
    dragOverSliceIndex = null;
  }

  function formatEnrichedFeature(feature: string): string {
    return feature.replace(
      /^([^=]*) = (.*)$/,
      "<span class='font-mono'>$1</span> = <strong>$2</strong>"
    );
  }
</script>

{#if pointData.length > 0}
  <div
    class="w-full h-full relative bg-slate-100 {draggingOverContainer
      ? 'border-2 border-blue-400'
      : ''}"
    bind:this={container}
    on:dragover={(e) => {
      if (dragOriginIndex != null) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
      draggingOverContainer = true;
    }}
    on:dragleave|preventDefault={(e) => (draggingOverContainer = false)}
    on:drop={handleDrop}
  >
    {#if loaded}
      <ForceScatterPlot
        {pointData}
        {hoveredClusters}
        bind:hoveredPointIndex
        bind:hoveredSlices
        {selectedClusters}
        on:selectClusters={(e) => {
          console.log('Select clusters from force scatter plot', e.detail);
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
    {/if}
    <div class="absolute top-0 left-0 right-0 pt-2 px-2">
      <div class="flex items-start flex-wrap gap-2">
        {#each d3.range(labels.length + 1) as sliceIndex (sliceIndex)}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <Hoverable
            class={collapseSlices && labels.length > sliceIndex
              ? 'w-8 h-8 aspect-square'
              : wideMode
                ? 'basis-2/5 grow'
                : 'basis-full'}
          >
            <div
              slot="default"
              let:hovering
              class="flex {collapseSlices
                ? 'justify-center items-center h-full'
                : 'items-start'} rounded-md w-full p-2 select-none duration-500 {!!hoveredSlices &&
              !hoveredSlices[sliceIndex]
                ? 'opacity-30'
                : ''} {labels.length > sliceIndex
                ? 'hover:bg-slate-100 cursor-grab'
                : ''} {labels.length > sliceIndex
                ? 'bg-white'
                : 'bg-slate-200/80'} {dragOverSliceIndex == sliceIndex
                ? 'border-2 border-blue-400'
                : ''}"
              style={labels.length > sliceIndex
                ? `border: 2px solid ${sliceColors[sliceIndex]};`
                : ''}
              on:mouseenter={() => {
                if (labels.length > sliceIndex)
                  hoveredClusters = new Set(
                    clustersMatchingSlice(sliceIndex).ids
                  );
              }}
              on:mouseleave={() => {
                hoveredClusters = new Set();
              }}
              on:click={() => {
                if (labels.length > sliceIndex) {
                  let clusters = clustersMatchingSlice(sliceIndex);
                  searchScopeInfo = {
                    within_selection: clusters.ids,
                    proportion: clusters.size / totalInstances,
                  };
                }
              }}
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
                {#if !collapseSlices}
                  <div
                    class="flex-auto text-xs mr-2 {hovering
                      ? ''
                      : 'line-clamp-1'}"
                  >
                    {@html describeSlice(labels[sliceIndex].feature)}
                  </div>
                {/if}
                {#if hovering}
                  {#if !collapseSlices}
                    {@const saveIdx = savedSlices.findIndex((s) =>
                      areObjectsEqual(s.feature, labels[sliceIndex].feature)
                    )}
                    <button
                      class="bg-transparent hover:opacity-60 p-1 text-xs text-slate-600"
                      title="Save this slice"
                      on:click|stopPropagation={() => {
                        if (saveIdx >= 0)
                          savedSlices = [
                            ...savedSlices.slice(0, saveIdx),
                            ...savedSlices.slice(saveIdx + 1),
                          ];
                        else
                          savedSlices = [
                            ...savedSlices,
                            selectedSlices[sliceIndex],
                          ];
                      }}
                      ><Fa
                        icon={saveIdx >= 0 ? faHeart : faHeartOutline}
                      /></button
                    >
                  {/if}
                  <button
                    class="bg-transparent p-1 hover:opacity-50 text-xs text-slate-600"
                    on:click|stopPropagation={(e) => {
                      selectedSlices = [
                        ...selectedSlices.slice(0, sliceIndex),
                        ...selectedSlices.slice(sliceIndex + 1),
                      ];
                      hoveredClusters = new Set();
                    }}><Fa icon={faTrash} /></button
                  >
                {/if}
              {:else}
                <div
                  class="self-stretch flex-auto text-xs text-slate-500 text-center"
                >
                  Drag and drop a slice
                </div>
              {/if}
            </div>
          </Hoverable>
        {/each}
      </div>
      <button
        class="bg-transparent p-1 hover:opacity-50 text-slate-600"
        on:click|stopPropagation={(e) => (collapseSlices = !collapseSlices)}
        ><Fa
          icon={collapseSlices ? faChevronDown : faChevronUp}
          class="inline"
        /></button
      >
    </div>

    <div
      class="absolute bottom-0 right-0 mb-2 mx-2 pointer-events-none {hoveredPointIndex !=
        null || searchScopeEnrichedFeatures.length > 0
        ? 'left-0 flex gap-2 justify-between items-end'
        : ''}"
      on:dragover|preventDefault|stopPropagation={(e) =>
        (draggingOverContainer = false)}
      on:dragleave|preventDefault|stopPropagation={() =>
        (draggingOverContainer = true)}
    >
      {#if hoveredPointIndex != null || searchScopeEnrichedFeatures.length > 0}
        <div class="p-1 bg-slate-100/80 rounded">
          <div class="text-xs font-bold text-slate-500 mb-1">Top Feature</div>
          {#each hoveredPointIndex != null ? groupedLayout.enriched_cluster_features[hoveredPointIndex] : searchScopeEnrichedFeatures as f}
            <div class="mb-1 text-xs">{@html formatEnrichedFeature(f)}</div>
          {/each}
        </div>
      {/if}
      <div class="p-1 bg-slate-100/80 rounded pointer-events-auto select-none">
        <div class="flex items-center w-full">
          <div class="flex-auto text-xs font-bold text-slate-500">
            Slice Intersections
          </div>
          <button
            class="bg-transparent p-1 hover:opacity-50 text-slate-600"
            on:click|stopPropagation={(e) =>
              (collapseIntersections = !collapseIntersections)}
            ><Fa
              icon={collapseIntersections ? faChevronUp : faChevronDown}
            /></button
          >
        </div>
        {#if !collapseIntersections}
          <div style="max-height: 160px;" class="w-full mr-4 overflow-y-auto">
            {#each sortedIntersections as intersection, intIndex}
              {@const numSlices = intersection.slices.reduce(
                (a, b) => a + b,
                0
              )}
              {@const errorRateString = d3.format('.1%')(
                intersection[errorKey] / intersection.count
              )}
              <div
                class="text-left bg-transparent flex items-center w-full justify-end gap-2 transition-opacity duration-700 delay-100 cursor-pointer"
                class:opacity-30={!!hoveredSliceInfo &&
                  !hoveredSliceInfo.slices.every(
                    (s, i) => intersection.slices[i] == s
                  )}
                on:mouseenter={() => {
                  hoveredSlices = intersection.slices;
                }}
                on:mouseleave={() => {
                  hoveredSlices = null;
                }}
                on:click={() => setSearchScopeToSlice(intersection)}
                draggable={true}
                on:dragstart|stopPropagation={(e) => {
                  hoveredSlices = null;
                  e.dataTransfer.setData(
                    'slice',
                    JSON.stringify(getSliceForIntersection(intersection))
                  );
                }}
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
              </div>
            {/each}
          </div>
        {/if}
        {#if errorKeyOptions.length > 0}
          <div class="mt-1 flex items-center w-full">
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
  </div>
{/if}
