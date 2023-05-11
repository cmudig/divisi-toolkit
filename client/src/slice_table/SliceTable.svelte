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
    withToggledFeature,
  } from '../utils/utils';
  import { TableWidths } from './tablewidths';
  import { createEventDispatcher } from 'svelte';
  import type { SliceFeature } from '../utils/slice.type';

  const dispatch = createEventDispatcher();

  export let showHeader = true;

  export let slices: Array<Slice> = [];

  export let baseSlice: Slice = null;
  export let sliceRequests: { [key: string]: any } = {};
  export let sliceRequestResults: { [key: string]: Slice } = {};

  export let fixedFeatureOrder: Array<any> = [];
  export let searchBaseSlice: any = null;

  export let showScores = false;
  export let positiveOnly = false;

  export let valueNames: any = {};

  export let metricNames = [];
  export let metricInfo = {};
  export let scoreNames = [];
  export let scoreWidthScalers = {};

  let editingSlice = null;

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

  function toggleSliceFeature(slice: Slice, feature: SliceFeature) {
    let allRequests = Object.assign({}, sliceRequests);
    let r;
    if (!!allRequests[slice.stringRep]) r = allRequests[slice.stringRep];
    else r = slice.feature;
    r = withToggledFeature(r, slice.feature, feature);
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
    let allRequests = Object.assign({}, sliceRequests);
    let r;
    if (!!allRequests[slice.stringRep]) r = allRequests[slice.stringRep];
    else r = slice.feature;
    r = newFeature;
    allRequests[slice.stringRep] = r;
    sliceRequests = allRequests;
    console.log('slice requests:', sliceRequests);
  }

  let allowedValues;
  $: if (!!valueNames && valueNames.hasOwnProperty('subscribe')) {
    allowedValues = {};
    Object.entries($valueNames).forEach((item) => {
      allowedValues[item[1][0]] = Object.values(item[1][1]);
    });
  } else {
    allowedValues = null;
  }
</script>

<div class="relative">
  {#if showHeader}
    <div
      class="text-left inline-flex align-top font-bold slice-header whitespace-nowrap bg-slate-100 rounded-t border-b border-slate-600"
    >
      <div style="width: {TableWidths.ActionMenus}px;">
        <div class="p-2 w-full h-full" />
      </div>
      <div style="width: {TableWidths.FeatureList}px;">
        <div class="p-2">Slice</div>
      </div>
      {#each metricNames as name}
        <div
          class="bg-slate-100 hover:bg-slate-200"
          style="width: {metricInfo[name].visible
            ? TableWidths.Metric
            : TableWidths.CollapsedMetric}px;"
          class:opacity-30={draggingColumn == name}
          draggable={clickingColumn == name}
          on:dragstart={(e) => metricDragStart(e, name)}
          on:dragend={(e) => metricDragEnd(e, name)}
          on:dragover|preventDefault={() => false}
          on:dragenter={(e) => metricDragEnter(e, name)}
          on:dragleave={(e) => metricDragLeave(e, name)}
          on:drop|preventDefault|stopPropagation={(e) => metricDrop(e, name)}
        >
          <Hoverable class="potential-drop-zone p-2 " let:hovering>
            {#if metricInfo[name].visible}
              <div class="flex items-center">
                <div>{name}</div>
                <div class="flex-1" />
                <button
                  class="bg-transparent hover:opacity-60"
                  class:opacity-0={!hovering}
                  class:disabled={!hovering}
                  on:click={(e) => {
                    let mi = Object.assign({}, metricInfo);
                    mi[name].visible = !mi[name].visible;
                    metricInfo = mi;
                  }}><Fa icon={faEye} /></button
                >
                <button
                  class="ml-2 bg-transparent text-slate-400 cursor-move"
                  on:mousedown={() => (clickingColumn = name)}
                  on:mouseup={() => (clickingColumn = null)}
                  class:opacity-0={!hovering}
                  class:disabled={!hovering}
                  ><Fa icon={faGripLinesVertical} /></button
                >
              </div>
            {:else}
              <button
                class="bg-transparent opacity-30 hover:opacity-60"
                on:click={(e) => {
                  let mi = Object.assign({}, metricInfo);
                  mi[name].visible = !mi[name].visible;
                  metricInfo = mi;
                }}><Fa icon={faEyeSlash} /></button
              >
            {/if}
          </Hoverable>
        </div>
      {/each}
      {#if showScores}
        {#each scoreNames as score, i}
          <div class="bg-slate-100" style="width: {TableWidths.Score}px;">
            <div class="p-2">
              {score}
            </div>
          </div>
        {/each}
      {/if}
      <div
        class="bg-slate-100 hover:bg-slate-200"
        on:click={() => (showScores = !showScores)}
      >
        <div class="w-full h-full px-4 flex justify-center items-center">
          {#if showScores}
            <Fa icon={faAngleLeft} />
          {:else}
            <Fa icon={faAngleRight} />
          {/if}
        </div>
      </div>
    </div>
  {/if}
  {#if !!baseSlice}
    <SliceRow
      slice={baseSlice}
      {scoreNames}
      {positiveOnly}
      scoreCellWidth={100}
      {scoreWidthScalers}
      {showScores}
      {metricNames}
      {metricInfo}
      {valueNames}
      {allowedValues}
      temporarySlice={sliceRequestResults[baseSlice.stringRep]}
      {fixedFeatureOrder}
      isEditing={baseSlice.stringRep == editingSlice}
      on:beginedit={(e) => (editingSlice = baseSlice.stringRep)}
      on:endedit={(e) => (editingSlice = null)}
      on:edit={(e) => editSliceFeature(baseSlice, e.detail)}
      on:toggle={(e) => toggleSliceFeature(baseSlice, e.detail)}
      on:reset={(e) => resetSlice(baseSlice)}
      on:newsearch
      on:saveslice
    />
  {/if}
  {#each slices as slice, i (slice.stringRep || i)}
    <SliceRow
      {slice}
      {scoreNames}
      {positiveOnly}
      scoreCellWidth={100}
      {scoreWidthScalers}
      {showScores}
      {metricNames}
      {metricInfo}
      {valueNames}
      {allowedValues}
      {fixedFeatureOrder}
      rowClass={!!searchBaseSlice &&
      areObjectsEqual(searchBaseSlice, slice.feature)
        ? 'bg-indigo-100 hover:bg-indigo-200'
        : 'hover:bg-slate-100'}
      temporarySlice={sliceRequestResults[slice.stringRep]}
      isEditing={slice.stringRep == editingSlice}
      on:beginedit={(e) => (editingSlice = slice.stringRep)}
      on:endedit={(e) => (editingSlice = null)}
      on:edit={(e) => editSliceFeature(slice, e.detail)}
      on:toggle={(e) => toggleSliceFeature(slice, e.detail)}
      on:reset={(e) => resetSlice(slice)}
      on:newsearch
      on:saveslice
    />
  {/each}
</div>

<style>
  .slice-header {
    min-width: 100%;
  }
  .slice-header > * {
    flex: 0 0 auto;
  }
</style>
