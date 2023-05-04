<script lang="ts">
  import type { Slice } from '../utils/slice.type';
  import SliceMetricBar from '../metric_charts/SliceMetricBar.svelte';
  import { format } from 'd3-format';
  import SliceMetricHistogram from '../metric_charts/SliceMetricHistogram.svelte';
  import SliceMetricCategoryBar from '../metric_charts/SliceMetricCategoryBar.svelte';
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
  import ActionMenuButton from '../utils/ActionMenuButton.svelte';
  import { TableWidths } from './tablewidths';

  const dispatch = createEventDispatcher();

  export let slice: Slice = null;
  export let maxFeatures: number = 0;
  export let scoreNames: Array<string> = [];
  export let showScores = false;
  export let metricNames: Array<string> = [];
  export let positiveOnly = false;
  export let valueNames: any = {}; // svelte store

  export let fixedFeatureOrder: Array<any> = [];

  export let customSlice: Slice = null; // if the slice is custom-created
  export let temporarySlice: Slice = null; // if a variable is adjusted dynamically

  export let scoreCellWidth = 100;
  export let scoreWidthScalers = {};
  export let metricInfo = {};

  export let rowClass = '';
  export let maxIndent = 0;
  export let indent = 0;

  const indentAmount = 24;

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
    featureOrder.sort((a, b) => {
      let aIndex = fixedFeatureOrder.indexOf(a);
      let bIndex = fixedFeatureOrder.indexOf(b);
      if (aIndex < 0) aIndex = featureOrder.length;
      if (bIndex < 0) bIndex = featureOrder.length;
      if (aIndex == bIndex) return a.localeCompare(b);
      return b - a;
    });
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
    console.log(newFeatureValues);
    dispatch('edit', newFeatureValues);
  }

  function searchSubslices() {
    if (!customSlice) dispatch('customize');
    dispatch('newsearch', {
      type: 'subslice',
      base_slice: sliceToShow.featureValues,
      feature_order: featureOrder,
    });
  }

  function searchSimilarSlices() {
    if (!customSlice) dispatch('customize');
    dispatch('newsearch', {
      type: 'related',
      base_slice: sliceToShow.featureValues,
    });
  }

  function searchExcludingSlice() {
    if (!customSlice) dispatch('customize');
    dispatch('newsearch', {
      type: 'exclude',
      base_slice: sliceToShow.featureValues,
    });
  }

  function searchCounterfactualSlices() {
    if (!customSlice) dispatch('customize');
    dispatch('newsearch', {
      type: 'counterfactual',
      base_slice: sliceToShow.featureValues,
    });
  }
</script>

{#if !!sliceToShow}
  <div
    class="slice-row {rowClass} flex"
    style="margin-left: {indentAmount * (maxIndent - indent)}px;"
  >
    <div class="py-2 px-2" style="width: {TableWidths.ActionMenus}px;">
      <div class="flex items-center h-full">
        <ActionMenuButton>
          {#if !!customSlice}
            <a
              href="#"
              tabindex="0"
              role="menuitem"
              title="Create a new custom slice based on this slice"
              on:click={() => dispatch('duplicate')}>Duplicate</a
            >
            <a
              href="#"
              tabindex="0"
              role="menuitem"
              title="Delete this custom slice"
              on:click={() => dispatch('delete')}>Delete</a
            >
          {:else}
            <a
              href="#"
              tabindex="0"
              role="menuitem"
              title="Save this slice"
              on:click={() => dispatch('saveslice', sliceToShow.featureValues)}
              >Save Slice</a
            >
          {/if}
          <a
            href="#"
            tabindex="0"
            role="menuitem"
            title="Search among slices that are contained within this slice (i.e. more specific)"
            on:click={searchSubslices}>Search Subslices</a
          >
          <a
            href="#"
            tabindex="0"
            role="menuitem"
            title="Search among slices that have high overlap with this slice"
            on:click={searchSimilarSlices}>Search Similar Slices</a
          >
          <a
            href="#"
            tabindex="0"
            role="menuitem"
            title="Search among slices that do not share any feature values with this slice"
            on:click={searchExcludingSlice}>Search Excluding Slice</a
          >
          <a
            href="#"
            tabindex="0"
            role="menuitem"
            title="Search among slices that overlap with this slice without using this slice's features"
            on:click={searchCounterfactualSlices}
            >Search Counterfactual Slices</a
          >
        </ActionMenuButton>
        {#if showCreateSliceButton}
          <button
            class="bg-transparent hover:opacity-60 mx-1 text-slate-600 py-2"
            title="Add a new custom slice"
            on:click={() => dispatch('create')}><Fa icon={faPlus} /></button
          >
        {/if}
      </div>
    </div>
    <div
      class="py-2 px-2 text-xs flex items-center overflow-x-scroll whitespace-nowrap"
      style="width: {TableWidths.FeatureList -
        indentAmount * (maxIndent - indent)}px;"
    >
      {#if featureOrder.every((f) => f.length == 0)}
        <span class="text-slate-600 text-base">Overall Dataset</span>
      {/if}
      {#each featureOrder as col, i}
        {@const featureDisabled =
          !sliceToShow.featureValues.hasOwnProperty(col) &&
          baseSlice.featureValues.hasOwnProperty(col)}
        {#if col.length > 0}
          <div class="pt-1">
            {#if positiveOnly}
              <button
                class="bg-transparent hover:opacity-70 font-mono text-sm text-left"
                class:opacity-30={featureDisabled}
                class:line-through={featureDisabled}
                title={featureDisabled
                  ? 'Reset slice'
                  : 'Test effect of removing this feature from the slice'}
                on:click={() => dispatch('toggle', col)}>{col}</button
              >
            {:else}
              <button
                class="bg-transparent mr-1 text-sm font-mono hover:opacity-70"
                class:opacity-50={featureDisabled}
                title={featureDisabled
                  ? 'Reset slice'
                  : 'Test effect of removing this feature from the slice'}
                on:click={() => dispatch('toggle', col)}>{col}</button
              >
            {/if}
            <div class="flex items-center">
              {#if !positiveOnly}
                {#if featureDisabled}
                  <span class="mt-1 mb-1 opacity-50">(any value)</span>
                {:else if !customSlice}
                  <span class="mt-1 text-gray-600 mb-1"
                    >{sliceToShow.featureValues[col]}</span
                  >
                {/if}
                {#if !slice}
                  <button
                    class="bg-transparent hover:opacity-60 mx-1 text-slate-600"
                    on:click={() => (editingColumn = i)}
                    title="Choose a different feature to slice by"
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
                      title="Slice by an additional feature"
                      on:click={() => {
                        editingColumn = i + 1;
                        dispatch('beginedit', i + 1);
                      }}><Fa icon={faPlus} /></button
                    >
                  {/if}
                {/if}
              {/if}
            </div>
          </div>
          {#if !featureOrder.slice(i + 1).every((f) => f.length == 0)}
            <div class="w-0.5 mx-3 h-1/3 bg-slate-300 rounded-full" />
          {/if}
        {/if}
      {/each}
    </div>
    {#each metricNames as name}
      {@const metric = sliceToShow.metrics[name]}
      <div
        class="p-2 pt-3"
        style="width: {!!metricInfo[name] && metricInfo[name].visible
          ? TableWidths.Metric
          : TableWidths.CollapsedMetric}px;"
      >
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
                  <br />
                  <span style="font-size: 0.7rem;" class="italic text-gray-700"
                    >({format('.1%')(metric.share)} of total)</span
                  >
                {/if}
              </span>
            </SliceMetricBar>
          {:else if metric.type == 'count'}
            <SliceMetricBar value={metric.share} width={scoreCellWidth}>
              <span slot="caption">
                <strong>{format(',')(metric.count)}</strong><br /><span
                  style="font-size: 0.7rem;"
                  class="italic text-gray-700"
                  >({format('.1%')(metric.share)})</span
                >
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
      </div>
    {/each}
    {#if showScores}
      {#each scoreNames as scoreName}
        <div class="p-2 pt-3" style="width: {TableWidths.Score}px;">
          <SliceMetricBar
            value={sliceToShow.scoreValues[scoreName]}
            scale={scoreWidthScalers[scoreName] || ((v) => v)}
            width={scoreCellWidth}
          />
        </div>
      {/each}
    {:else}
      <div />
    {/if}
  </div>
{/if}

<style>
  .slice-row > * {
    flex: 0 0 auto;
  }
</style>
