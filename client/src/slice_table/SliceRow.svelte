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
    faTrash,
    faCopy,
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
  export let draggable: boolean = false;
  export let custom: boolean = false;

  export let fixedFeatureOrder: Array<any> = [];

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
  export let showEditButtons = true;

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

  let sliceToShow: Slice;
  $: sliceToShow = temporarySlice || slice;

  let sliceForScores: Slice;
  $: sliceForScores = revertedScores ? slice : sliceToShow;

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

  let dragging = false;

  let justMounted = false;
  onMount(() => (justMounted = true));
  $: if (
    justMounted &&
    custom &&
    !!sliceToShow &&
    areObjectsEqual(sliceToShow.feature, { type: 'base' })
  ) {
    isEditing = true;
    dispatch('beginedit');
    justMounted = false;
  }

  let oldSliceToShow: Slice;
  $: if (oldSliceToShow !== sliceToShow) {
    if (hovering && !!sliceToShow) dispatch('hover', sliceToShow);
    oldSliceToShow = sliceToShow;
  }
</script>

{#if !!sliceToShow}
  <div
    class="slice-row w-full py-1 px-2 {draggable ? 'cursor-grab' : ''} {rowClass
      ? rowClass
      : 'bg-white'} inline-flex items-center justify-center flex-wrap-reverse relative overflow-hidden"
    style="padding-left: calc(0.5rem + {indentAmount *
      (maxIndent - indent)}px); {!!sliceColorMap[slice.stringRep]
      ? `border: 3px solid ${sliceColorMap[slice.stringRep]};`
      : ''}"
    on:mouseenter={() => {
      hovering = !dragging;
      dispatch('hover', sliceToShow);
    }}
    on:mouseleave={() => {
      hovering = false;
      dispatch('hover', {});
    }}
    {draggable}
    on:dragstart={(e) => {
      e.dataTransfer.setData('slice', JSON.stringify(sliceToShow));
      hovering = false;
      dragging = true;
    }}
    on:dragend={() => (dragging = false)}
    on:dragover|stopPropagation|preventDefault={dragging
      ? (e) => (e.dataTransfer.dropEffect = 'none')
      : undefined}
    on:drop={dragging ? (e) => e.preventDefault() : undefined}
  >
    {#if isEditing}
      <div class="py-1 pr-2 w-full h-full">
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
      </div>
    {:else}
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
          style="width: 40%; min-width: 300px; max-width: {TableWidths.AllMetrics}px; grid-template-columns: max-content auto 108px;"
        >
          {#each metricNames as name, i (name)}
            {@const metric = sliceForScores.metrics[name]}

            {#if !!metric && !!metricInfo[name] && metricInfo[name].visible}
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
                  {#if hovering && !!metric.share}
                    <span
                      style="font-size: 0.7rem;"
                      class="italic text-gray-700"
                      >({format('.0%')(metric.share)} of total)</span
                    >
                  {/if}
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
                  {#if hovering}
                    <span
                      style="font-size: 0.7rem;"
                      class="italic text-gray-700"
                      >({format('.0%')(metric.share)})</span
                    >
                  {/if}
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
        <div class="grow-0 shrink-0" style="width: {TableWidths.Checkbox}px;">
          {#if showFavoriteButton}
            <button
              class="bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600 py-2"
              title="Add a new custom slice"
              on:click={() => dispatch('saveslice', slice)}
              ><Fa icon={isSaved ? faHeart : faHeartOutline} /></button
            >
          {/if}
        </div>

        <div class="py-2 text-xs min-w-0" class:opacity-50={revertedScores}>
          <div class="flex items-center h-full whitespace-nowrap">
            <div style="flex: 0 1 auto;" class="overflow-auto text-sm">
              <SliceFeature
                feature={featuresHaveSameTree(
                  slice.feature,
                  sliceToShow.feature,
                  true
                ) && slice.feature.type != 'base'
                  ? slice.feature
                  : sliceToShow.feature}
                currentFeature={sliceToShow.feature}
                canToggle={featuresHaveSameTree(
                  slice.feature,
                  sliceToShow.feature,
                  true
                )}
                {positiveOnly}
                {allowedValues}
                on:toggle
              />
            </div>
            {#if showButtons || hovering}
              {#if showCreateSliceButton}
                <button
                  class="bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600 py-2"
                  title="Add a new custom slice"
                  on:click={() => dispatch('create')}
                  ><Fa icon={faPlus} /></button
                >
              {/if}
              {#if showEditButtons}
                <button
                  class="bg-transparent hover:opacity-60 ml-1 px-1 py-3 text-slate-600"
                  on:click={() => {
                    isEditing = true;
                    dispatch('beginedit');
                  }}
                  title="Temporarily modify the slice definition"
                  ><Fa icon={faPencil} /></button
                >
                {#if !!temporarySlice && !areObjectsEqual(temporarySlice.feature, slice.feature)}
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
                <button
                  class="bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600"
                  on:click={() => dispatch('duplicate')}
                  title="Create a copy of this slice"
                  ><Fa icon={faCopy} /></button
                >
              {/if}
              {#if custom}
                <button
                  class="bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600"
                  on:click={() => {
                    dispatch('hover', {});
                    dispatch('delete');
                  }}
                  title="Delete this custom slice"><Fa icon={faTrash} /></button
                >
              {/if}
            {/if}
          </div>
        </div>
      </div>
    {/if}
  </div>
{/if}

<style>
  .slice-row {
    min-width: 100%;
  }
</style>
