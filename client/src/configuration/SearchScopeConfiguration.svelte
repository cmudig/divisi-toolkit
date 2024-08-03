<script lang="ts">
  import { faMinus, faPencil } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';
  import * as d3 from 'd3';
  import Hoverable from '../utils/Hoverable.svelte';
  import SliceFeature from '../slice_table/SliceFeature.svelte';
  import SliceFeatureEditor from '../slice_table/SliceFeatureEditor.svelte';
  import { featureToString, parseFeature } from '../utils/slice_parsing';

  export let searchScopeInfo: any = {};
  export let positiveOnly: boolean = false;
  export let allowedValues: { [key: string]: string[] } | null = null;

  let dragOver: boolean = false;
  let editingSlice: boolean = false;

  function handleDrop(e: DragEvent) {
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
  class="w-full p-1 border-2 rounded-md {dragOver
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
  {#if !!searchScopeInfo.within_slice || editingSlice}
    {#if !!searchScopeInfo.within_slice}
      <div class="flex items-center w-full mb-2">
        <button
          style="padding-left: 1rem;"
          class="ml-1 btn btn-slate flex-0 mr-3 whitespace-nowrap"
          on:click={() => (searchScopeInfo = {})}
          ><Fa icon={faMinus} class="inline mr-1" />
          Within Slice</button
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
      class="w-full h-full flex items-center gap-2 rounded-md p-2 select-none bg-slate-200/80"
    >
      <div class="my-1 flex-auto text-xs text-slate-500 text-center">
        Drag and drop a slice or <a
          class="text-blue-600"
          href="#"
          on:click={() => (editingSlice = true)}>define manually</a
        >
      </div>
    </div>
  {/if}
</div>
