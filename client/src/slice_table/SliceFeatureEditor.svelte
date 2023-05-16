<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import type { SliceFeatureBase } from '../utils/slice.type';
  import { featureNeedsParentheses } from '../utils/utils';
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
  import { parseFeature } from '../utils/slice_parsing';
  import TextareaAutocomplete from '../utils/TextareaAutocomplete.svelte';

  const dispatch = createEventDispatcher();

  export let featureText: string = '';
  export let positiveOnly = false;
  export let allowedValues = null;

  let errorText = null;
  let showingAutocomplete = false;

  let inputItem;

  onMount(() => {
    if (!!inputItem) {
      inputItem.focus();
    }
  });

  let scheduledParse = false;

  $: if (!!featureText && featureText.length > 0 && !scheduledParse) {
    scheduledParse = true;
    setTimeout(validateFeature, 1000);
  }

  function validateFeature() {
    try {
      let parseResult = parseFeature(featureText.trim(), allowedValues);
      errorText = null;
    } catch (e) {
      errorText = e;
    }
    scheduledParse = false;
  }

  function onBlur() {
    dispatch('cancel');
  }

  function getAutocompleteOptions(searchQuery, fullPrefix) {
    if (!allowedValues) return [];
    // check for equals sign
    let result = fullPrefix.match(
      /['"]([^'"]+)['"]\s*=\s*\[?(\s*['"][^'"]+['"]\s*,\s*)*?['"][^'"]*$/
    );
    if (!result) {
      return Object.keys(allowedValues)
        .filter((v) =>
          v.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
        )
        .map((v) => ({ value: v, type: 'col' }));
    }

    let featureColumn = result[1];
    return allowedValues[featureColumn]
      .filter((v) =>
        v.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
      )
      .map((v) => ({ value: v, type: 'val' }));
  }

  function performAutocomplete(item, trigger, fullPrefix) {
    if (positiveOnly) return `${trigger}${item.value}${trigger}`;
    if (item.type == 'col') return `${trigger}${item.value}${trigger} = `;
    return `${trigger}${item.value}${trigger}`;
  }
</script>

<div class="w-full">
  <div class="flex w-full">
    <div class="relative w-full flex-auto mr-2">
      <textarea
        bind:this={inputItem}
        class="bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded text-gray-700 font-mono text-xs p-2 leading-tight focus:outline-none focus:border-blue-600 focus:bg-white"
        placeholder="Enter a slice definition..."
        bind:value={featureText}
        on:blur={onBlur}
        on:keydown={(e) => {
          if (e.key === 'Enter') {
            if (!errorText && !showingAutocomplete)
              dispatch('save', featureText.trim());
            return false;
          }
        }}
      />
      <TextareaAutocomplete
        ref={inputItem}
        resolveFn={getAutocompleteOptions}
        replaceFn={performAutocomplete}
        menuItemTextFn={(v) => v.value}
        maxItems={3}
        menuItemClass="p-2"
        bind:visible={showingAutocomplete}
        on:replace={(e) => {
          featureText = e.detail;
          validateFeature();
        }}
      />
    </div>
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
