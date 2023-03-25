<script lang="ts">
  import type { Slice } from './slice.type';
  import SliceMetricBar from './metric_charts/SliceMetricBar.svelte';
  import { format } from 'd3-format';
  import SliceMetricHistogram from './metric_charts/SliceMetricHistogram.svelte';
  import SliceMetricCategoryBar from './metric_charts/SliceMetricCategoryBar.svelte';
  import { createEventDispatcher, onMount } from 'svelte';
  import Select from 'svelte-select';
  import Fa from 'svelte-fa/src/fa.svelte';
  import {
    faTrash,
    faPencil,
    faPlus,
    faChevronDown,
    faRotateLeft,
    faCirclePlus,
    faEllipsisVertical,
  } from '@fortawesome/free-solid-svg-icons';
  import ActionMenuButton from './ActionMenuButton.svelte';

  const dispatch = createEventDispatcher();

  export let slice: Slice = null;
  export let maxFeatures: number = 0;
  export let scoreNames: Array<string> = [];
  export let showScores = false;
  export let metricNames: Array<string> = [];
  export let positiveOnly = false;
  export let valueNames: any = {}; // svelte store

  export let customSlice: Slice = null; // if the slice is custom-created
  export let temporarySlice: Slice = null; // if a variable is adjusted dynamically

  export let scoreCellWidth = 100;
  export let scoreWidthScalers = {};
  export let metricInfo = {};

  export let rowClass = '';

  export let showCreateSliceButton = false;
  export let focusOnMount = false;

  onMount(() => {
    if (
      !slice &&
      Object.keys(sliceToShow.featureValues).length == 0 &&
      focusOnMount
    )
      editingColumn = 0;
  });

  let featureOrder = [];
  $: {
    let sliceForFeatures = slice || customSlice || temporarySlice;
    featureOrder = Object.keys(sliceForFeatures.featureValues);
    featureOrder.sort();
    while (featureOrder.length < maxFeatures) featureOrder.push('');
  }

  let baseSlice: Slice;
  $: baseSlice = customSlice || slice;
  let sliceToShow: Slice;
  $: sliceToShow = temporarySlice || customSlice || slice;

  let columnOptions = [];
  $: if (editingColumn != null) {
    // valueNames format: {raw_col_name: [col_name, {index: col_value, ...}]}
    columnOptions = Object.values($valueNames)
      .map((v) => v[0])
      .filter(
        (v) =>
          featureOrder[editingColumn] == v ||
          !Object.keys(baseSlice.featureValues).includes(v)
      );
    columnOptions.sort();
  } else columnOptions = [];

  let editingColumn = null;

  function deleteFeatureValue(col) {
    let newFeatureValues = Object.assign({}, baseSlice.featureValues);
    delete newFeatureValues[col];
    dispatch('edit', newFeatureValues);
  }

  function editFeatureValue(oldCol: string, col: string, newValue: any) {
    let newFeatureValues = Object.assign({}, baseSlice.featureValues);
    if (oldCol != col) delete newFeatureValues[oldCol];
    newFeatureValues[col] = newValue;
    dispatch('edit', newFeatureValues);
  }
</script>

{#if !!sliceToShow}
  <tr class={rowClass}>
    <td class="py-2 px-2">
      <div class="flex items-center h-full">
        <ActionMenuButton>
          {#if !!customSlice}
            <a
              href="#"
              tabindex="0"
              role="menuitem"
              on:click={() => dispatch('duplicate')}>Duplicate</a
            >
            <a
              href="#"
              tabindex="0"
              role="menuitem"
              on:click={() => dispatch('delete')}>Delete</a
            >
          {:else}
            <a
              href="#"
              tabindex="0"
              role="menuitem"
              on:click={() => dispatch('customize')}>Customize</a
            >
          {/if}
        </ActionMenuButton>
        {#if showCreateSliceButton}
          <button
            class="bg-transparent hover:opacity-60 mx-1 text-slate-600 py-2"
            on:click={() => dispatch('create')}><Fa icon={faPlus} /></button
          >
        {/if}
      </div>
    </td>
    {#each featureOrder as col, i}
      <td class="py-2 px-2 text-xs">
        {#if editingColumn != null && editingColumn == i}
          <Select
            class="p-2 focus:ring-1 focus:ring-blue-600"
            --font-size="13px"
            placeholder="Select variable"
            value={sliceToShow[col]}
            items={columnOptions}
            focused
            on:change={(e) => {
              if (e.detail.value != col) {
                editFeatureValue(
                  col,
                  e.detail.value,
                  $valueNames[e.detail.value][1][0]
                );
              }
              editingColumn = null;
              dispatch('endedit', i);
            }}
            on:blur={() => {
              editingColumn = null;
              console.log('blur');
              dispatch('endedit', i);
            }}
          />
        {:else if !slice && i == 0 && Object.keys(baseSlice.featureValues).length == 0}
          <button
            class="bg-slate-200 hover:bg-slate-300 px-2 py-2 mr-1 rounded text-sm font-bold w-full"
            on:click={() => (editingColumn = 0)}>Define Slice</button
          >
        {:else if col.length > 0}
          {@const featureDisabled =
            !sliceToShow.featureValues.hasOwnProperty(col) &&
            baseSlice.featureValues.hasOwnProperty(col)}
          {#if positiveOnly}
            <button
              class="bg-transparent hover:opacity-70 font-mono text-sm text-left"
              class:opacity-30={featureDisabled}
              class:line-through={featureDisabled}
              on:click={() => dispatch('toggle', col)}>{col}</button
            >
          {:else}
            <button
              class="bg-sky-100 hover:bg-sky-200 px-2 py-1 mr-1 rounded text-sm shadow-sm font-mono"
              class:opacity-50={featureDisabled}
              on:click={() => dispatch('toggle', col)}>{col}</button
            >
            {#if !slice}
              <button
                class="bg-transparent hover:opacity-60 mx-1 text-slate-600"
                on:click={() => (editingColumn = i)}
                ><Fa icon={faPencil} /></button
              >
              <button
                class="bg-transparent hover:opacity-60 mx-1 text-slate-600"
                on:click={() => deleteFeatureValue(col)}
                ><Fa icon={faTrash} /></button
              >
              {#if i == Object.keys(baseSlice.featureValues).length - 1}
                <button
                  class="bg-transparent hover:opacity-60 mx-1 text-slate-600"
                  on:click={() => {
                    editingColumn = i + 1;
                    dispatch('beginedit', i + 1);
                  }}><Fa icon={faPlus} /></button
                >
              {/if}
            {/if}
            <div class="flex items-center mt-1">
              {#if featureDisabled}
                <span class="mt-1 mb-1 ml-1 opacity-50">(any value)</span>
              {:else}
                <div
                  class="hover:bg-slate-200 hover:transition-colors hover:duration-200 p-1 rounded relative"
                  style="width: fit-content;"
                >
                  <select
                    value={sliceToShow.featureValues[col]}
                    class="flat-select bg-transparent {!!slice &&
                    sliceToShow.featureValues[col] != slice.featureValues[col]
                      ? 'text-orange-700'
                      : 'text-slate-900'} text-xs focus:ring-blue-500 focus:border-blue-500 block px-1 pr-6"
                    on:change={(e) => {
                      if (!slice) {
                        editFeatureValue(col, col, e.currentTarget.value);
                      } else {
                        dispatch('edit', {
                          [col]: e.currentTarget.value,
                        });
                      }
                    }}
                  >
                    {#each Object.entries($valueNames[featureOrder[i]][1]) as possibleValue}
                      <option value={possibleValue[1]}
                        >{possibleValue[1]}</option
                      >
                    {/each}
                  </select>
                  <div
                    class="absolute right-0 pr-2 top-0 bottom-0 my-auto pointer-events-none {!!slice &&
                    sliceToShow.featureValues[col] != slice.featureValues[col]
                      ? 'text-orange-700'
                      : 'text-slate-900'}"
                    style="height: 12px;"
                  >
                    <Fa icon={faChevronDown} />
                  </div>
                </div>
                {#if !!slice && sliceToShow.featureValues[col] != slice.featureValues[col]}
                  <button
                    class="bg-transparent hover:opacity-60 ml-2 text-slate-600"
                    on:click={() =>
                      dispatch('edit', {
                        [col]: slice.featureValues[col],
                      })}><Fa icon={faRotateLeft} /></button
                  >
                {/if}
              {/if}
            </div>
          {/if}
        {/if}
      </td>
    {/each}
    {#each metricNames as name}
      {@const metric = sliceToShow.metrics[name]}
      <td class="p-2">
        {#if sliceToShow.isEmpty}
          <span class="text-slate-600">Empty</span>
        {:else if !!metricInfo[name] && metricInfo[name].visible}
          {#if metric.type == 'binary'}
            <SliceMetricBar
              value={metric.mean}
              scale={metricInfo[name].scale}
              width={scoreCellWidth}
            >
              <span slot="caption">
                <strong>{format('.1%')(metric.mean)}</strong>
                {#if metric.hasOwnProperty('share')}
                  ({format('.1%')(metric.share)} of total)
                {/if}
              </span>
            </SliceMetricBar>
          {:else if metric.type == 'count'}
            <SliceMetricBar value={metric.share} width={scoreCellWidth}>
              <span slot="caption">
                <strong>{format(',')(metric.count)}</strong> ({format('.1%')(
                  metric.share
                )})
              </span>
            </SliceMetricBar>
          {:else if metric.type == 'continuous'}
            <SliceMetricHistogram
              mean={metric.mean}
              histValues={metric.hist}
              width={scoreCellWidth}
            />
          {:else if metric.type == 'categorical'}
            <SliceMetricCategoryBar
              order={metricInfo[name].order}
              counts={metric.counts}
              width={scoreCellWidth}
            />
          {/if}
        {/if}
      </td>
    {/each}
    {#if showScores}
      {#each scoreNames as scoreName}
        <td class="p-2">
          <SliceMetricBar
            value={sliceToShow.scoreValues[scoreName]}
            scale={scoreWidthScalers[scoreName] || ((v) => v)}
            width={scoreCellWidth}
          />
        </td>
      {/each}
    {:else}
      <td />
    {/if}
  </tr>
{/if}

<style>
  tr {
    height: 1px;
  }
  td {
    height: inherit;
  }
</style>
