<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { SliceFeatureBase } from '../utils/slice.type';
  import { areObjectsEqual, featureNeedsParentheses } from '../utils/utils';
  import ActionMenuButton from '../utils/ActionMenuButton.svelte';
  import Checkbox from '../utils/Checkbox.svelte';
  import Hoverable from '../utils/Hoverable.svelte';
  import Fa from 'svelte-fa';
  import {
    faChevronDown,
    faRotateRight,
  } from '@fortawesome/free-solid-svg-icons';

  const dispatch = createEventDispatcher();

  export let feature: SliceFeatureBase;
  export let positiveOnly = false;
  export let currentFeature: SliceFeatureBase;
  export let needsParentheses = false;
  export let canToggle = true;
  export let allowedValues: any | null = null; // svelte store

  let featureDisabled = false;

  $: if (!!currentFeature && !!feature && !!allowedValues) {
    featureDisabled =
      currentFeature.type == 'feature' &&
      currentFeature.vals.length == allowedValues[feature.col].length;
  } else featureDisabled = false;

  function toggleFeatureValue(val: any) {
    if (featureDisabled) {
      // we want to just toggle off one specific feature
      dispatch('toggle', {
        old: feature,
        new: Object.assign(
          { ...feature },
          { vals: allowedValues[feature.col].filter((v) => v != val) }
        ),
      });
      return;
    }
    let isEnabled = currentFeature.vals.includes(val);
    console.log('toggling', val, isEnabled);
    let newFeature = Object.assign(
      { ...currentFeature },
      isEnabled
        ? { vals: currentFeature.vals.filter((v) => v != val) }
        : { vals: [...currentFeature.vals, val].sort() }
    );
    dispatch('toggle', {
      old: feature,
      new: newFeature,
    });
  }

  function toggleFeature() {
    if (featureDisabled) {
      dispatch('toggle', { old: feature, new: feature });
    } else {
      dispatch('toggle', {
        old: feature,
        new: Object.assign(
          { ...feature },
          { vals: allowedValues[feature.col] }
        ),
      });
    }
  }

  function onlyFeatureValue(val: any) {
    dispatch('toggle', {
      old: feature,
      new: Object.assign({ ...feature }, { vals: [val] }),
    });
  }
</script>

<div class="inline-block align-middle text-slate-400 font-bold">
  {#if feature.type == 'feature'}
    <div class="px-2">
      {#if positiveOnly}
        <button
          class="bg-transparent hover:opacity-70 font-mono font-normal text-black text-left break-words whitespace-normal"
          style="max-width: 240px;"
          disabled={!canToggle}
          class:opacity-30={featureDisabled}
          class:line-through={featureDisabled}
          title={featureDisabled
            ? 'Reset slice'
            : 'Test effect of removing this feature from the slice'}
          on:click={toggleFeature}>{feature.col}</button
        >
      {:else}
        <button
          class="bg-transparent font-mono text-slate-800 font-normal hover:opacity-50"
          disabled={!canToggle}
          class:opacity-50={featureDisabled}
          title={featureDisabled
            ? 'Reset slice'
            : 'Test effect of removing this feature from the slice'}
          on:click={toggleFeature}>{feature.col}</button
        >
      {/if}
      {#if !positiveOnly}
        {@const valueText =
          featureDisabled ||
          (!!allowedValues &&
            !!allowedValues[feature.col] &&
            currentFeature.vals.length == allowedValues[feature.col].length)
            ? '(any value)'
            : currentFeature.vals.join(', ')}
        <div class="font-normal" style="font-size: 0.875em;">
          {#if !allowedValues || !allowedValues[feature.col]}
            <span class="text-slate-500 font-bold">{valueText}</span>
          {:else}
            <ActionMenuButton
              buttonClass="text-slate-500 bg-transparent font-bold hover:opacity-70 {featureDisabled
                ? 'opacity-50'
                : ''}"
              buttonTitle="Test alternative values for this feature"
              buttonActiveClass="text-slate-800"
              singleClick={false}
              ><span slot="button-content"
                >{valueText}
                <Fa
                  icon={faChevronDown}
                  style="transform: translateY(-2px); font-size: 0.6em;"
                  class="inline"
                /></span
              >
              <div slot="options">
                {#each allowedValues[feature.col] as val}
                  <Hoverable>
                    <span slot="default" let:hovering>
                      <a
                        class="w-full items-center gap-2"
                        style="display: flex;"
                        href="#"
                        on:click={() => toggleFeatureValue(val)}
                      >
                        <Checkbox
                          checked={featureDisabled ||
                            currentFeature.vals.includes(val)}
                          on:change={() => toggleFeatureValue(val)}
                        />
                        <div class="flex-auto">{val}</div>
                        {#if hovering}
                          <button
                            on:click|stopPropagation={() =>
                              onlyFeatureValue(val)}
                            class="rounded text-slate-500 text-xs px-2 py-0.5 hover:bg-slate-200"
                            >Only</button
                          >
                        {/if}
                      </a>
                    </span>
                  </Hoverable>
                {/each}
                {#if !areObjectsEqual(feature, currentFeature)}
                  <div class="flex justify-end w-full px-2 py-1">
                    <button
                      class="px-2 py-0.5 text-slate-500 font-bold rounded hover:bg-slate-100"
                      style="font-size: 0.875em;"
                      on:click={() =>
                        dispatch('toggle', { old: feature, new: feature })}
                      ><Fa icon={faRotateRight} class="inline mr-1" /> Reset Feature</button
                    >
                  </div>
                {/if}
              </div></ActionMenuButton
            >
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
      {allowedValues}
      on:toggle
    />
  {:else if feature.type == 'and'}
    {needsParentheses ? '(' : ''}<svelte:self
      feature={feature.lhs}
      currentFeature={currentFeature.lhs}
      needsParentheses={featureNeedsParentheses(feature.lhs, feature)}
      {canToggle}
      {positiveOnly}
      {allowedValues}
      on:toggle
    />
    <span class="px-1">&</span>
    <svelte:self
      feature={feature.rhs}
      currentFeature={currentFeature.rhs}
      needsParentheses={featureNeedsParentheses(feature.rhs, feature)}
      {canToggle}
      {positiveOnly}
      {allowedValues}
      on:toggle
    />{needsParentheses ? ')' : ''}
  {:else if feature.type == 'or'}
    {needsParentheses ? '(' : ''}<svelte:self
      feature={feature.lhs}
      currentFeature={currentFeature.lhs}
      needsParentheses={featureNeedsParentheses(feature.lhs, feature)}
      {canToggle}
      {positiveOnly}
      {allowedValues}
      on:toggle
    />
    <span class="px-1">|</span>
    <svelte:self
      feature={feature.rhs}
      currentFeature={currentFeature.rhs}
      needsParentheses={featureNeedsParentheses(feature.rhs, feature)}
      {canToggle}
      {positiveOnly}
      {allowedValues}
      on:toggle
    />{needsParentheses ? ')' : ''}
  {:else}
    <span class="text-slate-600 text-base font-normal px-2">Evaluation Set</span
    >
  {/if}
</div>
