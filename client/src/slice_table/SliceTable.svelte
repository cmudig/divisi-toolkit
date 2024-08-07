<script lang="ts">
  import type { Slice, SliceFeatureBase } from '../utils/slice.type';
  import SliceRow from './SliceRow.svelte';
  import Fa from 'svelte-fa/src/fa.svelte';
  import Hoverable from '../utils/Hoverable.svelte';
  import {
    faAngleLeft,
    faAngleRight,
    faEye,
    faEyeSlash,
    faGripLinesVertical,
  } from '@fortawesome/free-solid-svg-icons';
  import {
    areObjectsEqual,
    areSetsEqual,
    randomStringRep,
    withToggledFeature,
  } from '../utils/utils';
  import { TableWidths } from './tablewidths';
  import { createEventDispatcher } from 'svelte';
  import type { SliceFeature } from '../utils/slice.type';
  import SliceFeature from './SliceFeature.svelte';

  const dispatch = createEventDispatcher();

  export let showHeader = true;

  export let slices: Array<Slice> = [];
  export let selectedSlices: Array<Slice> = [];
  export let savedSlices: Array<Slice> = [];
  export let customSlices: Array<Slice> = [];
  export let custom: boolean = false; // if true, all slices will be considered custom slices
  export let allowDragAndDrop: boolean = true;

  export let sliceColorMap: { [key: string]: string } = {};

  export let baseSlice: Slice = null;
  export let sliceRequests: { [key: string]: any } = {};
  export let sliceRequestResults: { [key: string]: Slice } = {};

  export let fixedFeatureOrder: Array<any> = [];
  export let searchBaseSlice: any = null;

  export let showScores = false;
  export let positiveOnly = false;

  export let valueNames: any = {};
  export let allowedValues: any = {};

  export let metricNames = [];
  export let metricInfo = {};
  export let scoreNames = [];
  export let scoreWidthScalers = {};

  let editingSlice = null;
  let tempRevertedSlice = null;

  // Drag and drop metrics logic

  let clickingColumn = null; // prepare for drag
  let draggingColumn = null; // track drag action
  let droppingColumn = null;
  let dropRight = false;

  function metricDragStart(e, colName) {
    e.dataTransfer.effectAllowed = 'move';
    draggingColumn = colName;
  }

  function metricDragEnd(e: any, colName: string) {
    draggingColumn = null;
  }

  function metricDragEnter(e: any, colName: string) {
    if (colName == draggingColumn) {
      droppingColumn = null;
      return false;
    }
    let startIdx = metricNames.indexOf(draggingColumn);
    let endIdx = metricNames.indexOf(colName);
    dropRight = startIdx < endIdx;
    e.target.classList.add('drop-zone');
    e.target.classList.add(dropRight ? 'drop-zone-r' : 'drop-zone-l');
  }

  function metricDragLeave(e: any, colName: string) {
    e.target.classList.remove('drop-zone');
    e.target.classList.remove('drop-zone-r');
    e.target.classList.remove('drop-zone-l');
  }

  function metricDrop(e: any, colName: string) {
    e.target.classList.remove('drop-zone');
    if (draggingColumn != colName) {
      let startIdx = metricNames.indexOf(draggingColumn);
      let endIdx = metricNames.indexOf(colName);
      let newOrder = Array.from(metricNames);
      newOrder.splice(startIdx, 1);
      metricNames = [
        ...newOrder.slice(0, endIdx),
        draggingColumn,
        ...newOrder.slice(endIdx),
      ];
    }
    droppingColumn = null;
    return false;
  }

  function setSliceFeatureValues(
    slice: Slice,
    feature: SliceFeature,
    newFeature: SliceFeature
  ) {
    let allRequests = Object.assign({}, sliceRequests);
    let r;
    if (!!allRequests[slice.stringRep]) r = allRequests[slice.stringRep];
    else r = slice.feature;
    r = withToggledFeature(r, slice.feature, feature, newFeature);
    allRequests[slice.stringRep] = r;
    sliceRequests = allRequests;
    console.log('slice requests:', sliceRequests);
  }

  function resetSlice(slice: Slice) {
    let allRequests = Object.assign({}, sliceRequests);
    delete allRequests[slice.stringRep];
    sliceRequests = allRequests;
  }

  function editSliceFeature(slice: Slice, newFeature: SliceFeatureBase) {
    if (custom) {
      // edit the slice directly
      let index = slices.indexOf(slice);
      dispatch('customize', {
        index,
        slice: Object.assign({ ...slice, feature: newFeature }),
      });
      return;
    }
    let allRequests = Object.assign({}, sliceRequests);
    let r;
    if (!!allRequests[slice.stringRep]) r = allRequests[slice.stringRep];
    else r = slice.feature;
    r = newFeature;
    allRequests[slice.stringRep] = r;
    sliceRequests = allRequests;
    console.log('slice requests:', sliceRequests);
  }

  function selectSlice(slice: Slice, selected: boolean = true) {
    if (selected) selectedSlices = [...selectedSlices, slice];
    else {
      let idx = selectedSlices.findIndex((s) =>
        areObjectsEqual(s.feature, slice.feature)
      );
      if (idx >= 0)
        selectedSlices = [
          ...selectedSlices.slice(0, idx),
          ...selectedSlices.slice(idx + 1),
        ];
    }
  }

  $: console.log('color map in SliceTable:', sliceColorMap);

  function saveSlice(slice: Slice) {
    // if unsaving, remove any customizations
    if (!!savedSlices.find((s) => areObjectsEqual(s.feature, slice.feature)))
      resetSlice(slice);
    dispatch('saveslice', slice);
  }
</script>

<div class="relative">
  {#if showHeader}
    <div
      class="w-full text-left inline-flex align-top font-bold slice-header whitespace-nowrap bg-slate-100 border-b border-slate-600"
    >
      <div style="width: {TableWidths.Checkbox}px;">
        <div class="p-2 w-full h-full" />
      </div>
      <div class="flex-auto">
        <div class="p-2">Slice</div>
      </div>
      <div style="width: {TableWidths.AllMetrics}px;">
        <div class="p-2">Metrics</div>
      </div>
    </div>
  {/if}
  {#if !!baseSlice}
    {@const sliceToShow = sliceRequestResults[baseSlice.stringRep] ?? baseSlice}
    <div class="w-full px-2 mb-2">
      <SliceRow
        slice={baseSlice}
        {sliceColorMap}
        {scoreNames}
        {positiveOnly}
        scoreCellWidth={100}
        {scoreWidthScalers}
        {showScores}
        {metricNames}
        {metricInfo}
        {valueNames}
        {allowedValues}
        showFavoriteButton={false}
        showEditButtons={false}
        isSaved={!!savedSlices.find((s) =>
          areObjectsEqual(s.feature, baseSlice.feature)
        )}
        isSelected={!!selectedSlices.find((s) =>
          areObjectsEqual(s.feature, baseSlice.feature)
        )}
        temporarySlice={tempRevertedSlice == baseSlice.stringRep
          ? baseSlice
          : sliceToShow}
        {fixedFeatureOrder}
        isEditing={baseSlice.stringRep == editingSlice}
        on:beginedit={(e) => (editingSlice = baseSlice.stringRep)}
        on:endedit={(e) => (editingSlice = null)}
        on:edit={(e) => editSliceFeature(baseSlice, e.detail)}
        on:toggle={(e) =>
          setSliceFeatureValues(baseSlice, e.detail.old, e.detail.new)}
        on:reset={(e) => resetSlice(baseSlice)}
        on:temprevert={(e) =>
          (tempRevertedSlice = e.detail ? baseSlice.stringRep : null)}
        on:newsearch
        on:saveslice={(e) => saveSlice(e.detail)}
        on:select={(e) =>
          selectSlice(
            sliceRequestResults[baseSlice.stringRep] || baseSlice,
            e.detail
          )}
      />
    </div>
  {/if}
  {#each slices as slice, i (slice.stringRep || i)}
    {@const sliceToShow =
      !!sliceRequestResults[slice.stringRep] &&
      areObjectsEqual(
        sliceRequestResults[slice.stringRep].feature,
        sliceRequests[slice.stringRep]
      )
        ? sliceRequestResults[slice.stringRep]
        : slice}
    <div class="w-full px-2 mb-2">
      <SliceRow
        {slice}
        {sliceColorMap}
        {scoreNames}
        {positiveOnly}
        {custom}
        scoreCellWidth={100}
        {scoreWidthScalers}
        {showScores}
        {metricNames}
        {metricInfo}
        {valueNames}
        {allowedValues}
        {fixedFeatureOrder}
        draggable={allowDragAndDrop}
        rowClass="rounded hover:bg-slate-100 shadow border border-slate-100"
        isSaved={!!savedSlices.find((s) =>
          areObjectsEqual(s.feature, slice.feature)
        )}
        isSelected={!!selectedSlices.find((s) =>
          areObjectsEqual(s.feature, slice.feature)
        )}
        temporarySlice={tempRevertedSlice == slice.stringRep
          ? slice
          : sliceToShow}
        isEditing={slice.stringRep == editingSlice}
        on:beginedit={(e) => (editingSlice = slice.stringRep)}
        on:endedit={(e) => (editingSlice = null)}
        on:edit={(e) => editSliceFeature(slice, e.detail)}
        on:toggle={(e) =>
          setSliceFeatureValues(slice, e.detail.old, e.detail.new)}
        on:reset={(e) => resetSlice(slice)}
        on:temprevert={(e) =>
          (tempRevertedSlice = e.detail ? slice.stringRep : null)}
        on:newsearch
        on:saveslice={(e) => saveSlice(e.detail)}
        on:select={(e) => selectSlice(sliceToShow, e.detail)}
        on:duplicate={(e) => {
          customSlices = [
            ...customSlices,
            {
              rawFeature: sliceToShow.rawFeature,
              isEmpty: sliceToShow.isEmpty,
              stringRep: randomStringRep(),
              feature: sliceToShow.feature,
              scoreValues: {},
              metrics: {},
            },
          ];
        }}
        on:delete={(e) => {
          if (!custom) return;
          let idx = customSlices.findIndex((s) =>
            areObjectsEqual(s.stringRep, slice.stringRep)
          );
          if (idx >= 0)
            customSlices = [
              ...customSlices.slice(0, idx),
              ...customSlices.slice(idx + 1),
            ];
        }}
        on:hover
      />
    </div>
  {/each}
</div>

<style>
  .slice-header {
    min-width: 100%;
  }
</style>
