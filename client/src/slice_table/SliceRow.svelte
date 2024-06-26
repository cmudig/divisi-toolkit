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
    faPencil,
    faPlus,
    faRotateRight,
    faDownload,
    faSearch,
    faHeart,
  } from '@fortawesome/free-solid-svg-icons';
  import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';
  import ActionMenuButton from '../utils/ActionMenuButton.svelte';
  import { TableWidths } from './tablewidths';
  import SliceFeature from './SliceFeature.svelte';
  import { areObjectsEqual, featuresHaveSameTree } from '../utils/utils';
  import SliceFeatureEditor from './SliceFeatureEditor.svelte';
  import { featureToString, parseFeature } from '../utils/slice_parsing';
  import Checkbox from '../utils/Checkbox.svelte';
  import { ColorWheel } from '../utils/colorwheel';
  import * as d3 from 'd3';

  const dispatch = createEventDispatcher();

  export let sliceColorMap: { [key: string]: string } = {};

  export let slice: Slice = null;
  export let scoreNames: Array<string> = [];
  export let showScores = false;
  export let metricNames: Array<string> = [];
  export let positiveOnly = false;
  export let valueNames: any = {}; // svelte store
  export let allowedValues: any = null;

  export let fixedFeatureOrder: Array<any> = [];

  export let customSlice: Slice = null; // if the slice is custom-created
  export let temporarySlice: Slice = null; // if a variable is adjusted dynamically

  export let scoreCellWidth = 100;
  export let scoreWidthScalers = {};
  export let metricInfo = {};

  export let rowClass = '';
  export let maxIndent = 0;
  export let indent = 0;

  export let isSaved = false;
  export let isSelected = false;
  export let isEditing = false;
  let hovering = false;

  const indentAmount = 24;

  export let showButtons = false;
  export let showCreateSliceButton = false;
  export let showFavoriteButton = true;

  /*let featureOrder = [];
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
  }*/

  let baseSlice: Slice;
  $: baseSlice = customSlice || slice;
  let sliceToShow: Slice;
  $: sliceToShow = temporarySlice || customSlice || slice;

  let sliceForScores: Slice;
  $: sliceForScores = revertedScores ? customSlice || slice : sliceToShow;

  function searchContainsSlice() {
    dispatch('newsearch', {
      type: 'containsSlice',
      base_slice: sliceToShow.feature,
    });
  }

  function searchContainedInSlice() {
    dispatch('newsearch', {
      type: 'containedInSlice',
      base_slice: sliceToShow.feature,
    });
  }

  function searchSubslices() {
    dispatch('newsearch', {
      type: 'subsliceOfSlice',
      base_slice: sliceToShow.feature,
    });
  }

  function searchSimilarSlices() {
    dispatch('newsearch', {
      type: 'similarToSlice',
      base_slice: sliceToShow.feature,
    });
  }

  let revertedScores = false;
  function temporaryRevertSlice(revert) {
    revertedScores = revert;
  }

  function makeCategoricalColorScale(baseColor: string): (v: number) => string {
    let scale = d3.interpolateHsl(baseColor, '#ffffff');
    // shift away from white a little bit
    return (v: number) => {
      return scale(v * 0.9);
    };
  }
</script>

{#if !!sliceToShow}
  <div
    class="slice-row w-full py-1 px-2 {rowClass
      ? rowClass
      : 'bg-white'} inline-flex items-center justify-center flex-wrap-reverse"
    style="margin-left: {indentAmount * (maxIndent - indent)}px;"
    on:mouseenter={() => (hovering = true)}
    on:mouseleave={() => (hovering = false)}
  >
    {#if sliceForScores.isEmpty}
      <div
        class="p-2 pt-3 whitespace-nowrap shrink-0 text-slate-600"
        style="width: {TableWidths.AllMetrics}px;"
      >
        Empty
      </div>
    {:else}
      <div
        class="p-2 whitespace-nowrap shrink-0 grid auto-rows-max text-xs gap-x-2 gap-y-0 items-center"
        style="width: 40%; min-width: 300px; max-width: {TableWidths.AllMetrics}px; grid-template-columns: max-content auto 96px;"
      >
        {#each metricNames as name, i}
          {@const metric = sliceForScores.metrics[name]}

          {#if !!metricInfo[name] && metricInfo[name].visible}
            {#if metric.type == 'binary'}
              <div class="font-bold text-right">{name}</div>
              <SliceMetricBar
                value={metric.mean}
                color={ColorWheel[i]}
                width={null}
                showFullBar
                horizontalLayout
                showTooltip={false}
              />
              <div>
                <strong>{format('.1%')(metric.mean)}</strong>
              </div>
            {:else if metric.type == 'count'}
              <div class="font-bold text-right">{name}</div>
              <SliceMetricBar
                value={metric.share}
                width={null}
                color={ColorWheel[i]}
                showFullBar
                horizontalLayout
                showTooltip={false}
              />
              <div>
                <strong>{format(',')(metric.count)}</strong>
                <span style="font-size: 0.7rem;" class="italic text-gray-700"
                  >({format('.1%')(metric.share)})</span
                >
              </div>
            {:else if metric.type == 'continuous'}
              <SliceMetricHistogram
                noParent
                title={name}
                width={null}
                horizontalLayout
                mean={metric.mean}
                color={ColorWheel[i]}
                histValues={metric.hist}
              />
            {:else if metric.type == 'categorical'}
              <SliceMetricCategoryBar
                noParent
                width={null}
                title={name}
                horizontalLayout
                colorScale={makeCategoricalColorScale(ColorWheel[i])}
                order={metricInfo[name].order}
                counts={metric.counts}
              />
            {/if}
          {/if}
        {/each}
      </div>
    {/if}
    <div class="ml-2 flex flex-auto items-center" style="width: 200px;">
      <div class="grow-0 shrink-0">
        <Checkbox
          checked={isSelected}
          on:change={(e) => dispatch('select', !isSelected)}
          color={isSelected ? sliceColorMap[slice.stringRep] : null}
        />
      </div>

      <div
        class="py-2 text-xs overflow-x-auto min-w-0"
        class:opacity-50={revertedScores}
      >
        {#if isEditing}
          <SliceFeatureEditor
            featureText={featureToString(
              featuresHaveSameTree(slice.feature, sliceToShow.feature) &&
                slice.feature.type != 'base'
                ? slice.feature
                : sliceToShow.feature,
              false,
              positiveOnly
            )}
            {positiveOnly}
            {allowedValues}
            on:cancel={(e) => {
              isEditing = false;
              dispatch('endedit');
            }}
            on:save={(e) => {
              let newFeature = parseFeature(e.detail, allowedValues);
              console.log('new feature:', newFeature);
              isEditing = false;
              dispatch('endedit');
              dispatch('edit', newFeature);
            }}
          />
        {:else}
          <div class="flex items-center h-full whitespace-nowrap">
            <div style="flex: 0 1 auto;" class="overflow-x-auto">
              <SliceFeature
                feature={featuresHaveSameTree(
                  slice.feature,
                  sliceToShow.feature
                ) && slice.feature.type != 'base'
                  ? slice.feature
                  : sliceToShow.feature}
                currentFeature={sliceToShow.feature}
                canToggle={featuresHaveSameTree(
                  slice.feature,
                  sliceToShow.feature
                )}
                {positiveOnly}
                on:toggle
              />
            </div>
            {#if showButtons || hovering || isSaved}
              <button
                class="bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600 py-2"
                title="Add a new custom slice"
                on:click={() => dispatch('saveslice', slice)}
                ><Fa icon={isSaved ? faHeart : faHeartOutline} /></button
              >
            {/if}
            {#if showButtons || hovering}
              {#if showCreateSliceButton}
                <button
                  class="bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600 py-2"
                  title="Add a new custom slice"
                  on:click={() => dispatch('create')}
                  ><Fa icon={faPlus} /></button
                >
              {/if}
              <button
                class="bg-transparent hover:opacity-60 ml-1 px-1 py-3 text-slate-600"
                on:click={() => {
                  isEditing = true;
                  dispatch('beginedit');
                }}
                title="Temporarily modify the slice definition"
                ><Fa icon={faPencil} /></button
              >
              {#if !!temporarySlice && !areObjectsEqual(temporarySlice, slice)}
                <button
                  class="bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600"
                  on:click={() => {
                    temporaryRevertSlice(false);
                    dispatch('reset');
                  }}
                  on:mouseenter={() => temporaryRevertSlice(true)}
                  on:mouseleave={() => temporaryRevertSlice(false)}
                  title="Reset the slice definition"
                  ><Fa icon={faRotateRight} /></button
                >
              {/if}
            {/if}
          </div>
        {/if}
        <!-- {#each featureOrder as col, i}
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
      {/each} -->
      </div>
    </div>
  </div>
{/if}

<style>
  .slice-row {
    min-width: 100%;
  }
</style>
