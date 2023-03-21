<script lang="ts">
  import type { Slice } from './slice.type';
  import SliceMetricBar from './metric_charts/SliceMetricBar.svelte';
  import { format } from 'd3-format';
  import SliceMetricHistogram from './metric_charts/SliceMetricHistogram.svelte';
  import SliceMetricCategoryBar from './metric_charts/SliceMetricCategoryBar.svelte';
  import { createEventDispatcher } from 'svelte';
  import Select from 'svelte-select';
  import Fa from 'svelte-fa/src/fa.svelte';
  import {
    faTrash,
    faPencil,
    faPlus,
    faChevronDown,
    faRotateLeft,
  } from '@fortawesome/free-solid-svg-icons';

  const dispatch = createEventDispatcher();

  export let slice: Slice;
  export let maxFeatures: number = 0;
  export let scoreNames: Array<string> = [];
  export let showScores = false;
  export let metricNames: Array<string> = [];
  export let positiveOnly = false;
  export let valueNames: any = {}; // svelte store

  export let temporarySlice: Slice = null; // if a variable is adjusted dynamically

  export let scoreCellWidth = 100;
  export let scoreWidthScalers = {};
  export let metricInfo = {};

  export let focusedSliceFeatureCount = 1;

  let featureOrder = [];
  $: if (slice) {
    featureOrder = Object.keys(slice.featureValues);
    if (!isFocusedSlice) featureOrder.sort();
    while (featureOrder.length < maxFeatures) featureOrder.push('');
  }

  export let isFocusedSlice = false;

  let sliceToShow: Slice;
  $: sliceToShow = temporarySlice || slice;

  let columnOptions = [];
  $: if (editingColumn != null) {
    // valueNames format: {raw_col_name: [col_name, {index: col_value, ...}]}
    columnOptions = Object.values($valueNames)
      .map((v) => v[0])
      .filter((v) => !editingFeatureValuesList.find((item) => item[0] == v));
    columnOptions.sort();
  } else columnOptions = [];

  let editingColumn = null;

  let editingFeatureValuesList: [string, any][] = [];
  $: if (!!slice && isFocusedSlice) {
    updateEditingFeatureList(slice);
  } else editingFeatureValuesList = [];

  function updateEditingFeatureList(slice) {
    editingFeatureValuesList = Object.entries(slice.featureValues);
    while (editingFeatureValuesList.length < maxFeatures)
      editingFeatureValuesList.push([null, null]);
  }

  $: if (isFocusedSlice) {
    focusedSliceFeatureCount = editingFeatureValuesList.length;
  }

  function deleteFeatureValue(i) {
    let newList = [
      ...editingFeatureValuesList.slice(0, i),
      ...editingFeatureValuesList.slice(i + 1),
    ];
    while (editingFeatureValuesList.length < maxFeatures)
      newList.push([null, null]);
    editingFeatureValuesList = newList;
    submitEditedSlice();
  }

  function submitEditedSlice() {
    dispatch(
      'edit',
      Object.fromEntries(editingFeatureValuesList.filter((v) => v[0] != null))
    );
  }
</script>

{#if !!sliceToShow}
  <tr
    class:hover:bg-slate-100={!isFocusedSlice}
    class:border-b-2={isFocusedSlice}
    class:border-dotted={isFocusedSlice}
  >
    {#each featureOrder as col, i}
      <td class="py-2 px-2 text-xs">
        {#if editingColumn != null && editingColumn == i}
          <Select
            class="p-2"
            --font-size="13px"
            placeholder="Select variable"
            value={editingFeatureValuesList[i][0]}
            items={columnOptions}
            focused
            on:change={(e) => {
              editingFeatureValuesList[i] = [
                e.detail.value,
                $valueNames[e.detail.value][1][0],
              ];
              console.log('new editing list', editingFeatureValuesList);
              submitEditedSlice();
              editingColumn = null;
            }}
            on:blur={() => (editingColumn = null)}
          />
        {:else if isFocusedSlice && i == 0 && editingFeatureValuesList[i][0] == null}
          <button
            class="bg-slate-200 hover:bg-slate-300 px-2 py-2 mr-1 rounded text-sm font-bold w-full"
            on:click={() => (editingColumn = i)}>Create Slice</button
          >
        {:else if col.length > 0}
          {@const featureDisabled =
            !sliceToShow.featureValues.hasOwnProperty(col) &&
            slice.featureValues.hasOwnProperty(col)}
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
            {#if isFocusedSlice}
              <button
                class="bg-transparent hover:opacity-60 mx-1 text-slate-600"
                on:click={() => (editingColumn = i)}
                ><Fa icon={faPencil} /></button
              >
              <button
                class="bg-transparent hover:opacity-60 mx-1 text-slate-600"
                on:click={() => deleteFeatureValue(i)}
                ><Fa icon={faTrash} /></button
              >
              {#if editingFeatureValuesList
                .slice(i + 1)
                .every((v) => v[0] == null)}
                <button
                  class="bg-transparent hover:opacity-60 mx-1 text-slate-600"
                  on:click={() => {
                    if (editingFeatureValuesList.length <= i + 1)
                      editingFeatureValuesList = [
                        ...editingFeatureValuesList,
                        [null, null],
                      ];
                    console.log(editingFeatureValuesList);
                    editingColumn = i + 1;
                  }}><Fa icon={faPlus} /></button
                >
              {/if}
            {/if}
            <div class="flex items-center">
              {#if featureDisabled}
                <span class="mt-1 ml-1 opacity-50">(any value)</span>
              {:else}
                <div
                  class="hover:bg-slate-200 hover:transition-colors hover:duration-200 p-1 mt-1 rounded relative"
                  style="width: fit-content;"
                >
                  <select
                    value={sliceToShow.featureValues[col]}
                    class="flat-select bg-transparent text-slate-900 text-xs focus:ring-blue-500 focus:border-blue-500 block px-1 pr-6"
                    on:change={(e) => {
                      if (isFocusedSlice) {
                        editingFeatureValuesList[i] = [
                          editingFeatureValuesList[i][0],
                          e.currentTarget.value,
                        ];
                        submitEditedSlice();
                      } else {
                        dispatch('edit', {
                          feature: col,
                          value: e.currentTarget.value,
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
                    class="absolute right-0 pr-2 top-0 bottom-0 my-auto pointer-events-none"
                    style="height: 12px;"
                  >
                    <Fa icon={faChevronDown} />
                  </div>
                </div>
                {#if !isFocusedSlice && sliceToShow.featureValues[col] != slice.featureValues[col]}
                  <button
                    class="bg-transparent hover:opacity-60 ml-2 text-slate-600"
                    on:click={() =>
                      dispatch('edit', {
                        feature: col,
                        value: slice.featureValues[col],
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
