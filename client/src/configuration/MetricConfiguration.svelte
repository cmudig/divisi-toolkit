<script lang="ts">
  import Fa from 'svelte-fa/src/fa.svelte';
  import {
    faEye,
    faEyeSlash,
    faTrash,
  } from '@fortawesome/free-solid-svg-icons';
  import { createEventDispatcher } from 'svelte';
  import MetricExpressionEditor from './MetricExpressionEditor.svelte';

  const dispatch = createEventDispatcher();

  export let metricName: string;
  export let metricInfo: {
    [key: string]: any;
  } | null = null;

  export let config: { expression: string } | null = null;
  export let isHidden: boolean = false;
  export let tailwindColor: string | null = null;

  export let metricExpressionRequest: {
    expression: string;
    metrics: string[];
  } | null = null;
  export let metricExpressionResponse: {
    success: boolean;
    error?: string;
  } | null = null;

  export let editing: boolean = false;
  let editingName: string | null = null;
  let editingConfig: { expression: string } | null = null;

  let wasEditing: boolean = false;
  $: if (!wasEditing && editing) {
    editingName = metricName;
    editingConfig = { ...config };
    wasEditing = true;
  } else if (!editing) {
    wasEditing = false;
  }
</script>

<button
  on:click={(e) => (editing = true)}
  class="bg-transparent w-full text-left rounded pointer-events-all {editing
    ? 'outline outline-1 outline-slate-400 mb-2 pt-1'
    : 'hover:bg-slate-100'}"
>
  <div class="px-2 py-1 flex items-center text-sm w-full cursor-pointer">
    <button
      class="{isHidden
        ? 'text-slate-300 hover:text-slate-400'
        : 'hover:opacity-70 text-' +
          (tailwindColor ?? 'blue-600')} bg-transparent mr-2"
      on:click|stopPropagation={() => dispatch('toggle')}
      ><Fa icon={isHidden ? faEyeSlash : faEye} class="inline" /></button
    >
    <div class="flex-auto shrink-0">
      {#if editing}
        <input
          type="text"
          disabled={!!metricInfo[metricName]}
          bind:value={editingName}
          placeholder="Metric name"
          class:opacity-60={!!metricInfo[metricName]}
          class="w-full flat-text-input-small"
        />
      {:else}
        {metricName}
      {/if}
    </div>
    {#if !metricInfo || !metricInfo[metricName]}
      <button
        class="bg-transparent ml-1 px-2"
        on:click|stopPropagation={() => dispatch('delete')}
        ><Fa
          icon={faTrash}
          class="inline text-slate-400 hover:text-slate-600"
        /></button
      >
    {/if}
  </div>
  {#if editing && !!editingConfig}
    <div class="px-2 my-1 w-full">
      <MetricExpressionEditor
        disabled={!!metricInfo[metricName]}
        bind:metricExpressionRequest
        bind:metricExpressionResponse
        bind:expression={editingConfig.expression}
        placeholder="Type an expression using the input metrics"
        metricNames={Object.keys(metricInfo)}
      />
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
        class:opacity-50={editingName.length == 0}
        disabled={editingName.length == 0}
        on:click|stopPropagation={() => {
          dispatch('save', {
            name: editingName,
            config: editingConfig,
          });
          editing = false;
        }}>Save</button
      >
    </div>
  {/if}
</button>
