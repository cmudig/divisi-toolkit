<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { SliceFeatureBase } from '../utils/slice.type';
  import { featureNeedsParentheses } from '../utils/utils';

  const dispatch = createEventDispatcher();

  export let feature: SliceFeatureBase;
  export let positiveOnly = false;
  export let currentFeature: SliceFeatureBase;
  export let needsParentheses = false;
  export let canToggle = true;

  let featureDisabled = false;

  $: if (!!feature) {
    featureDisabled = currentFeature.type == 'base' && feature.type != 'base';
  } else featureDisabled = false;
</script>

<div class="inline-block align-middle text-slate-400 font-bold">
  {#if feature.type == 'feature'}
    <div class="px-2">
      {#if positiveOnly}
        <button
          class="bg-transparent hover:opacity-70 font-mono text-sm font-normal text-black text-left break-words whitespace-normal"
          style="max-width: 240px;"
          disabled={!canToggle}
          class:opacity-30={featureDisabled}
          class:line-through={featureDisabled}
          title={featureDisabled
            ? 'Reset slice'
            : 'Test effect of removing this feature from the slice'}
          on:click={() => dispatch('toggle', feature)}>{feature.col}</button
        >
      {:else}
        <button
          class="bg-transparent text-sm font-mono text-black font-normal hover:opacity-70"
          disabled={!canToggle}
          class:opacity-50={featureDisabled}
          title={featureDisabled
            ? 'Reset slice'
            : 'Test effect of removing this feature from the slice'}
          on:click={() => dispatch('toggle', feature)}>{feature.col}</button
        >
      {/if}
      {#if !positiveOnly}
        <div class="flex items-center text-xs font-normal">
          {#if featureDisabled}
            <span class="opacity-50">(any value)</span>
          {:else}
            <span class="text-gray-600">{feature.vals.join(', ')}</span>
          {/if}
        </div>
      {/if}
    </div>
  {:else if feature.type == 'negation'}
    ! <svelte:self
      feature={feature.feature}
      currentFeature={currentFeature.feature}
      needsParentheses={featureNeedsParentheses(feature.feature, feature)}
      {canToggle}
      {positiveOnly}
      on:toggle
    />
  {:else if feature.type == 'and'}
    {needsParentheses ? '(' : ''}<svelte:self
      feature={feature.lhs}
      currentFeature={currentFeature.lhs}
      needsParentheses={featureNeedsParentheses(feature.lhs, feature)}
      {canToggle}
      {positiveOnly}
      on:toggle
    />
    <span class="px-1">&</span>
    <svelte:self
      feature={feature.rhs}
      currentFeature={currentFeature.rhs}
      needsParentheses={featureNeedsParentheses(feature.rhs, feature)}
      {canToggle}
      {positiveOnly}
      on:toggle
    />{needsParentheses ? ')' : ''}
  {:else if feature.type == 'or'}
    {needsParentheses ? '(' : ''}<svelte:self
      feature={feature.lhs}
      currentFeature={currentFeature.lhs}
      needsParentheses={featureNeedsParentheses(feature.lhs, feature)}
      {canToggle}
      {positiveOnly}
      on:toggle
    />
    <span class="px-1">|</span>
    <svelte:self
      feature={feature.rhs}
      currentFeature={currentFeature.rhs}
      needsParentheses={featureNeedsParentheses(feature.rhs, feature)}
      {canToggle}
      {positiveOnly}
      on:toggle
    />{needsParentheses ? ')' : ''}
  {:else}
    <span class="text-slate-600 text-base font-normal px-2">Evaluation Set</span
    >
  {/if}
</div>
