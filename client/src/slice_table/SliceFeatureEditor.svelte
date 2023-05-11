<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import type { SliceFeatureBase } from '../utils/slice.type';
  import { featureNeedsParentheses } from '../utils/utils';
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
  import { parseFeature } from '../utils/slice_parsing';

  const dispatch = createEventDispatcher();

  export let featureText: string = '';
  export let positiveOnly = false;
  export let allowedValues = null;

  let errorText = null;

  let inputItem;
  onMount(() => {
    if (!!inputItem) inputItem.focus();
  });

  let scheduledParse = false;

  $: if (!!featureText && featureText.length > 0 && !scheduledParse) {
    scheduledParse = true;
    setTimeout(validateFeature, 1000);
  }

  function validateFeature() {
    try {
      let parseResult = parseFeature(featureText, allowedValues);
      errorText = null;
    } catch (e) {
      errorText = e;
    }
    scheduledParse = false;
  }
</script>

<div class="w-full">
  <div class="flex w-full">
    <textarea
      bind:this={inputItem}
      class="flex-auto mr-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full text-gray-700 font-mono text-xs p-2 leading-tight focus:outline-none focus:border-blue-600 focus:bg-white"
      placeholder="Enter a slice definition..."
      bind:value={featureText}
      on:blur={() => dispatch('cancel')}
      on:keyup={(e) => {
        if (e.key === 'Enter') {
          dispatch('save', featureText.trim());
          return false;
        }
      }}
    />
    <button
      class="bg-transparent hover:opacity-60 mx-1 text-slate-600 text-lg"
      on:click={() => dispatch('cancel')}
      title="Cancel the edit"><Fa icon={faXmark} /></button
    >
    <button
      class="bg-transparent hover:opacity-60 mx-1 text-slate-600 text-lg disabled:opacity-50"
      disabled={!!errorText}
      on:mousedown|preventDefault|stopPropagation={() => {}}
      on:click|preventDefault={() => {
        dispatch('save', featureText.trim());
      }}
      title="Save the slice definition"><Fa icon={faCheck} /></button
    >
  </div>
  {#if !!errorText}
    <div class="mt-1 text-red-600 text-xs">{errorText}</div>
  {/if}
</div>
