<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Checkbox from '../utils/Checkbox.svelte';
  import SteppedSlider from '../utils/SteppedSlider.svelte';
  import Fa from 'svelte-fa/src/fa.svelte';
  import * as d3 from 'd3';
  import { faTrash, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
  import MetricExpressionEditor from './MetricExpressionEditor.svelte';

  const dispatch = createEventDispatcher();

  export let name: string;
  export let config: {
    type: string;
    metric?: string;
    ideal_fraction?: number;
    spread?: number;
    inverse?: boolean;
  };
  export let weight: number;

  export let metricExpressionRequest: {
    expression: string;
    metrics: string[];
  } | null = null;
  export let metricExpressionResponse: {
    success: boolean;
    error?: string;
  } | null = null;
  export let metricNames: string[] = [];

  export let editing = false;
  let editingName: string | null = null;
  let editingConfig: {
    type: string;
    metric?: string;
    ideal_fraction?: number;
    spread?: number;
    inverse?: boolean;
  } | null = null;

  let wasEditing = false;
  $: if (!wasEditing && editing) {
    editingName = name;
    editingConfig = config;
    editingConfig.inverse = editingConfig.inverse ?? false;
    wasEditing = true;
  } else if (!editing) {
    wasEditing = false;
  }
</script>

<button
  on:click={(e) => (editing = true)}
  class="bg-transparent w-full text-left rounded {editing
    ? 'outline outline-1 outline-slate-400 mb-2'
    : 'hover:bg-slate-100'}"
>
  <div
    class="px-2 py-1 flex flex-wrap items-center text-sm w-full cursor-pointer"
  >
    <div class="flex-auto shrink-0 mr-2">
      {#if editing}
        <input
          type="text"
          bind:value={editingName}
          placeholder="Score function name"
          class="w-full flat-text-input-small"
        />
      {:else}
        {name}
      {/if}
    </div>
    {#if !editing}
      <div class="flex items-center">
        <Checkbox
          colorClass={weight > 0.0 ? 'bg-blue-600' : null}
          checked={weight > 0.0}
          on:change={(e) => {
            if (!e.detail) {
              weight = 0.0;
              dispatch('reweight', weight);
            } else {
              weight = 1.0;
              dispatch('reweight', weight);
            }
          }}
        />
        <SteppedSlider
          class="ml-2 w-32"
          min={0.5}
          max={2.0}
          step={0.5}
          value={weight}
          on:change={(e) => {
            dispatch('reweight', e.detail);
          }}
        />
        <button
          class="bg-transparent ml-1 p-2"
          on:click|stopPropagation={() => dispatch('delete')}
          ><Fa
            icon={faTrash}
            class="inline text-slate-400 hover:text-slate-600"
          /></button
        >
      </div>
    {/if}
  </div>
  {#if editing}
    <div class="px-2 my-2 flex gap-2 items-center">
      <div class="font-bold">Type</div>
      <select class="flat-select flex-auto" bind:value={editingConfig.type}>
        <option value="OutcomeRateScore">Outcome Rate</option>
        <option value="MeanDifferenceScore">Mean Difference</option>
        <option value="SliceSizeScore">Slice Size</option>
        <option value="NumFeaturesScore">Slice Complexity</option>
      </select>
    </div>
    <div class="px-2 w-full">
      {#if editingConfig.type == 'OutcomeRateScore'}
        <div class="text-xs text-slate-700 mb-2">
          Prioritize slices where the binary expression is more often <select
            class="mx-1 flat-select-small flex-auto"
            bind:value={editingConfig.inverse}
          >
            <option value={false}>true</option>
            <option value={true}>false</option>
          </select>:
        </div>
        <MetricExpressionEditor
          bind:metricExpressionRequest
          bind:metricExpressionResponse
          bind:expression={editingConfig.metric}
          placeholder="Type a binary expression using metrics"
          {metricNames}
        />
      {:else if editingConfig.type == 'MeanDifferenceScore'}
        <div class="text-xs text-slate-700 mb-2">
          Prioritize slices where the mean of the expression is different than
          average:
        </div>
        <MetricExpressionEditor
          bind:metricExpressionRequest
          bind:metricExpressionResponse
          bind:expression={editingConfig.metric}
          placeholder="Type a continuous expression using metrics"
          {metricNames}
        />
      {:else if editingConfig.type == 'SliceSizeScore'}
        <div class="text-xs text-slate-700 mb-2">
          Prioritize slices that match approximately <strong
            >{d3.format('.0%')(editingConfig.ideal_fraction)}</strong
          > of the dataset.
        </div>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          bind:value={editingConfig.ideal_fraction}
          class="w-full"
        />
      {:else if editingConfig.type == 'NumFeaturesScore'}
        <div class="text-xs text-slate-700">
          Prioritize slices with fewer features in the rule.
        </div>
      {/if}
    </div>

    <div class="px-2 mt-2 mb-1 flex justify-end gap-2">
      <button
        class="my-1 py-1 btn btn-slate text-sm"
        on:click|stopPropagation={() => {
          editing = false;
          dispatch('cancel');
        }}>Cancel</button
      >
      <button
        class="my-1 py-1 btn btn-blue text-sm"
        on:click|stopPropagation={() => {
          dispatch('save', {
            name: editingName,
            config: editingConfig,
            weight: weight,
          });
          editing = false;
        }}>Save</button
      >
    </div>
  {/if}
</button>
