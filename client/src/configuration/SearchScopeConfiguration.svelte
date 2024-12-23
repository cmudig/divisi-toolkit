<script lang="ts">
  import {
    faChevronDown,
    faChevronRight,
    faMinus,
    faPencil,
  } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';
  import * as d3 from 'd3';
  import Hoverable from '../utils/Hoverable.svelte';
  import SliceFeature from '../slice_table/SliceFeature.svelte';
  import SliceFeatureEditor from '../slice_table/SliceFeatureEditor.svelte';
  import { featureToString, parseFeature } from '../utils/slice_parsing';

  export let searchScopeInfo: any = {};
  export let searchScopeNeedsRerun: boolean = false;
  export let positiveOnly: boolean = false;
  export let allowedValues: { [key: string]: string[] } | null = null;

  let dragOver: boolean = false;
  let editingSlice: boolean = false;
  let expanded: boolean = false;

  function handleDrop(e: DragEvent) {
    expanded = true;
    let slice = e.dataTransfer.getData('slice');
    if (!slice) return;
    e.preventDefault();
    searchScopeInfo = {
      within_slice: JSON.parse(slice).feature,
    };
    dragOver = false;
  }
</script>

<div
  class="px-2 mt-4 mb-2 flex items-center gap-2 border-2 rounded-md {dragOver
    ? 'border-blue-400'
    : 'border-transparent'}"
  on:dragover={(e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    dragOver = true;
  }}
  on:dragleave|preventDefault={(e) => (dragOver = false)}
  on:drop={handleDrop}
>
  <button
    class="hover:text-slate-600 text-slate-400 bg-transparent py-1 pr-1 shrink-0 grow-0"
    on:click={(e) => (expanded = !expanded)}
    ><Fa
      icon={expanded ? faChevronDown : faChevronRight}
      class="inline"
    /></button
  >
  <div class="flex-auto">
    <div class="font-bold">SEARCH SCOPE</div>
    <div class="text-xs text-slate-600">Find subgroups within a selection.</div>
  </div>
</div>
{#if expanded}
  <div
    class="w-full p-1 rounded-md {searchScopeNeedsRerun ? 'bg-orange-100' : ''}"
  >
    {#if !!searchScopeInfo.within_slice || editingSlice}
      {#if !!searchScopeInfo.within_slice}
        <div class="flex items-center w-full mb-2">
          <button
            style="padding-left: 1rem;"
            class="ml-1 btn btn-slate flex-0 mr-3 whitespace-nowrap"
            on:click={() => (searchScopeInfo = {})}
            ><Fa icon={faMinus} class="inline mr-1" />
            Within Subgroup</button
          >
          <div class="text-slate-600">
            {d3.format('.1~%')(searchScopeInfo.proportion ?? 0)} of dataset
          </div>
        </div>
      {/if}
      <div class="w-full flex">
        {#if editingSlice}
          <div class="py-1 pr-2 w-full h-full">
            <SliceFeatureEditor
              featureText={!!searchScopeInfo.within_slice
                ? featureToString(
                    searchScopeInfo.within_slice,
                    false,
                    positiveOnly
                  )
                : ''}
              {positiveOnly}
              {allowedValues}
              on:cancel={(e) => {
                editingSlice = false;
              }}
              on:save={(e) => {
                let newFeature = parseFeature(e.detail, allowedValues);
                console.log('new feature:', newFeature);
                editingSlice = false;
                searchScopeInfo = {
                  within_slice: newFeature,
                };
              }}
            />
          </div>
        {:else}
          <div class="shrink overflow-x-auto whitespace-nowrap text-sm">
            <SliceFeature
              feature={searchScopeInfo.within_slice}
              currentFeature={searchScopeInfo.within_slice}
              canToggle={false}
              {positiveOnly}
            />
          </div>
          <button
            class="bg-transparent hover:opacity-60 ml-1 px-1 py-3 text-slate-600"
            on:click={() => {
              editingSlice = true;
            }}
            title="Change the search scope slice"><Fa icon={faPencil} /></button
          >
        {/if}
      </div>
    {:else if !!searchScopeInfo.within_selection}
      <div class="flex items-center w-full">
        <button
          style="padding-left: 1rem;"
          class="ml-1 btn btn-slate flex-0 mr-3 whitespace-nowrap"
          on:click={() => (searchScopeInfo = {})}
          ><Fa icon={faMinus} class="inline mr-1" />
          Within Selection</button
        >
        <div class="text-slate-600">
          {d3.format('.1~%')(searchScopeInfo.proportion ?? 0)} of dataset
        </div>
      </div>
    {:else}
      <div
        class="w-full h-full rounded-md p-4 select-none bg-slate-200/80 text-xs text-center text-slate-500"
      >
        Drag and drop a subgroup, select in the overlap plot, or <a
          class="text-blue-600"
          href="#"
          on:click={() => (editingSlice = true)}>define manually</a
        >
      </div>
    {/if}
    {#if searchScopeNeedsRerun}
      <div class="w-full p-2 text-orange-700 text-xs">
        Click <strong>Find Subgroups Here</strong> above to search within this scope.
      </div>
    {/if}
  </div>
{/if}
