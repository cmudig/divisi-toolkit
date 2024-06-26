<script lang="ts">
  import SliceTable from './slice_table/SliceTable.svelte';
  import { traitlet } from './stores';
  import ScoreWeightMenu from './utils/ScoreWeightMenu.svelte';
  import Fa from 'svelte-fa/src/fa.svelte';
  import {
    faBookBookmark,
    faChevronLeft,
    faCompress,
    faExpand,
    faHeart,
    faSearch,
  } from '@fortawesome/free-solid-svg-icons';
  import ConfigurationView from './configuration/ConfigurationView.svelte';
  import SliceOverlapPlot from './overlap_views/SliceOverlapPlot.svelte';
  import SliceSearchView from './slice_table/SliceSearchView.svelte';
  import { areObjectsEqual, areSetsEqual } from './utils/utils';
  import SliceCurationTable from './slice_table/SliceCurationTable.svelte';
  import ResizablePanel from './utils/ResizablePanel.svelte';
  import * as d3 from 'd3';

  export const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
  // const sliceColorScale = d3.scaleOrdinal(d3.schemeCategory10);
  // export let sliceColorMap = writable({});
  export let model;

  // export const sliceColorMap = writable({});
  let sliceColorMap = traitlet(model, 'slice_color_map', {});

  let numSlices = traitlet(model, 'num_slices', 10);
  let numSamples = traitlet(model, 'num_samples', 50);
  let shouldRerun = traitlet(model, 'should_rerun', false);
  let numSamplesDrawn = traitlet(model, 'num_samples_drawn', 0);
  let runningSampler = traitlet(model, 'running_sampler', false);
  let shouldCancel = traitlet(model, 'should_cancel', false);
  let samplerRunProgress = traitlet(model, 'sampler_run_progress', 0.0);

  let slices = traitlet(model, 'slices', []);
  let customSlices = traitlet(model, 'custom_slices', []);
  let customSliceResults = traitlet(model, 'custom_slice_results', []);
  let savedSlices = traitlet(model, 'saved_slices', []);
  let selectedSlices = traitlet(model, 'selected_slices', []);
  let baseSlice = traitlet(model, 'base_slice', {});
  let positiveOnly = traitlet(model, 'positive_only', false);

  let metricInfo = traitlet(model, 'metric_info', {});
  let derivedMetricConfigs = traitlet(model, 'derived_metric_config', {});
  let scoreFunctionConfigs = traitlet(model, 'score_function_config', {});
  let metricExpressionRequest = traitlet(
    model,
    'metric_expression_request',
    null
  );
  let metricExpressionResponse = traitlet(
    model,
    'metric_expression_response',
    null
  );

  let valueNames = traitlet(model, 'value_names', {});

  let scoreWeights = traitlet(model, 'score_weights', {});

  let searchScopeInfo = traitlet(model, 'search_scope_info', {});
  let sliceScoreRequests = traitlet(model, 'slice_score_requests', {});
  let sliceScoreResults = traitlet(model, 'slice_score_results', {});

  let sliceIntersectionCounts = traitlet(
    model,
    'slice_intersection_counts',
    []
  );
  let sliceIntersectionLabels = traitlet(
    model,
    'slice_intersection_labels',
    []
  );
  let overlapPlotMetric = traitlet(model, 'overlap_plot_metric', '');
  let groupedMapLayout = traitlet(model, 'grouped_map_layout', {});

  let viewingTab = 0; // 0 = search, 1 = curation

  let scoreNames: Array<string>;
  $: {
    scoreNames = Object.keys($scoreWeights);
    scoreNames.sort();
  }

  let metricNames: Array<string> = [];
  let binaryMetrics: Array<string> = [];
  $: {
    let testSlice = $slices.find((s) => !s.isEmpty) ?? $baseSlice;

    if (!!testSlice && !!testSlice.metrics) {
      let newMetricNames = Object.keys(testSlice.metrics);
      if (!areSetsEqual(new Set(metricNames), new Set(newMetricNames))) {
        metricNames = newMetricNames;
        metricNames.sort();
        binaryMetrics = metricNames.filter(
          (m) => testSlice.metrics[m].type == 'binary'
        );
        if (binaryMetrics.length > 0) $overlapPlotMetric = binaryMetrics[0];
        else $overlapPlotMetric = null;
      }
    }
    console.log('overlap metric:', $overlapPlotMetric);
  }
  let hiddenMetrics: string[] | null = null;

  $: if (!!$metricInfo && hiddenMetrics === null) {
    console.log('metric info obj:', $metricInfo);
    hiddenMetrics = [];
    Object.entries($metricInfo).forEach(([n, info]) => {
      if (!(info.visible ?? true) && !hiddenMetrics.includes(n)) {
        hiddenMetrics.push(n);
      }
    });
  }

  let parentElement: Element;
  let isFullScreen = false;
  let ignoreFullScreenEvent = false;

  function enterFullScreen() {
    let fn;
    if (parentElement.requestFullscreen) {
      fn = parentElement.requestFullscreen;
    } else if (parentElement.mozRequestFullscreen) {
      fn = parentElement.mozRequestFullscreen;
    } else if (parentElement.webkitRequestFullscreen) {
      fn = parentElement.webkitRequestFullscreen;
    }
    fn = fn.bind(parentElement);
    fn();
    isFullScreen = true;
    ignoreFullScreenEvent = true;

    parentElement.addEventListener('fullscreenchange', handleFullScreenChange);
    parentElement.addEventListener(
      'webkitfullscreenchange',
      handleFullScreenChange
    );
    parentElement.addEventListener(
      'mozfullscreenchange',
      handleFullScreenChange
    );
    parentElement.addEventListener(
      'msfullscreenchange',
      handleFullScreenChange
    );
  }

  function exitFullScreen() {
    let fn;
    if (document.exitFullscreen) {
      fn = document.exitFullscreen;
    } else if (document.mozExitFullscreen) {
      fn = document.mozExitFullscreen;
    } else if (document.webkitExitFullscreen) {
      fn = document.webkitExitFullscreen;
    }
    fn = fn.bind(document);
    fn();
    isFullScreen = false;
  }

  $: if (!isFullScreen && !!parentElement) {
    parentElement.removeEventListener(
      'fullscreenchange',
      handleFullScreenChange
    );
    parentElement.removeEventListener(
      'webkitfullscreenchange',
      handleFullScreenChange
    );
    parentElement.removeEventListener(
      'mozfullscreenchange',
      handleFullScreenChange
    );
    parentElement.removeEventListener(
      'msfullscreenchange',
      handleFullScreenChange
    );
  }

  function handleFullScreenChange(e) {
    if (isFullScreen && !ignoreFullScreenEvent) isFullScreen = false;
    console.log('is full screen', isFullScreen);
    ignoreFullScreenEvent = false;
  }

  $: updateViewingTab(viewingTab);

  function updateViewingTab(tab) {
    if (tab == 0) {
      $selectedSlices = [];
    } else {
      $selectedSlices = $savedSlices;
    }
  }

  $: {
    console.log('selected slices from App.svelte');
    console.log($selectedSlices);
  }

  function assignColorToSlice(selectedSlices) {
    $sliceColorMap = Object.fromEntries(
      selectedSlices.map((slice, ind) => [slice.stringRep, colorScale(ind)])
    );
  }

  $: {
    assignColorToSlice($selectedSlices);
    console.log($sliceColorMap);
  }
</script>

<main
  class="w-full flex flex-col bg-white"
  style={isFullScreen ? 'height: 100vh;' : 'height: 640px; max-height: 90vh;'}
  bind:this={parentElement}
>
  <div
    class="h-12 bg-slate-500 text-white flex items-center px-4"
    class:rounded-t={!isFullScreen}
  >
    <div class="font-bold text-lg">DIVISI</div>

    <div class="flex-1" />
    <button
      class="p-3 rounded indigo:hover:bg-indigo-500 bg-transparent hover:opacity-50"
      on:click={isFullScreen ? exitFullScreen : enterFullScreen}
    >
      <span class="my-0.5 block">
        <Fa icon={isFullScreen ? faCompress : faExpand} /></span
      >
    </button>
  </div>
  <div class="flex flex-1 w-full min-h-0">
    <ResizablePanel
      rightResizable
      minWidth={240}
      maxWidth="70%"
      height="100%"
      width={260}
      class="border-x border-b border-slate-500 {!isFullScreen
        ? 'rounded-bl'
        : ''}"
    >
      <div class="w-full h-full overflow-y-auto">
        <ConfigurationView
          metricInfo={$metricInfo}
          bind:derivedMetricConfigs={$derivedMetricConfigs}
          bind:hiddenMetrics
          bind:scoreFunctionConfigs={$scoreFunctionConfigs}
          bind:scoreWeights={$scoreWeights}
          bind:metricExpressionRequest={$metricExpressionRequest}
          bind:metricExpressionResponse={$metricExpressionResponse}
        />
      </div>
    </ResizablePanel>

    <div
      class="flex-1 h-full overflow-auto"
      class:pl-2={isFullScreen}
      class:py-2={isFullScreen}
    >
      {#if viewingTab == 0}
        <SliceSearchView
          runningSampler={$runningSampler}
          bind:numSamples={$numSamples}
          positiveOnly={$positiveOnly}
          bind:shouldCancel={$shouldCancel}
          bind:scoreWeights={$scoreWeights}
          samplerRunProgress={$samplerRunProgress}
          slices={$slices}
          bind:selectedSlices={$selectedSlices}
          savedSlices={$savedSlices}
          sliceColorMap={$sliceColorMap}
          {valueNames}
          baseSlice={$baseSlice}
          bind:hiddenMetrics
          bind:sliceRequests={$sliceScoreRequests}
          bind:sliceRequestResults={$sliceScoreResults}
          bind:searchScopeInfo={$searchScopeInfo}
          on:runsampler={() => ($shouldRerun = true)}
          on:loadmore={() => ($numSlices += 10)}
          on:saveslice={(e) => {
            let idx = $savedSlices.findIndex((s) =>
              areObjectsEqual(s.feature, e.detail.feature)
            );
            if (idx >= 0)
              $savedSlices = [
                ...$savedSlices.slice(0, idx),
                ...$savedSlices.slice(idx + 1),
              ];
            else $savedSlices = [...$savedSlices, e.detail];
          }}
        />
      {:else}
        <SliceCurationTable
          positiveOnly={$positiveOnly}
          slices={$savedSlices}
          bind:selectedSlices={$selectedSlices}
          savedSlices={$savedSlices}
          {valueNames}
          baseSlice={$baseSlice}
          bind:sliceRequests={$sliceScoreRequests}
          bind:sliceRequestResults={$sliceScoreResults}
          on:saveslice={(e) => {
            let idx = $savedSlices.findIndex((s) =>
              areObjectsEqual(s.feature, e.detail.feature)
            );
            if (idx >= 0)
              $savedSlices = [
                ...$savedSlices.slice(0, idx),
                ...$savedSlices.slice(idx + 1),
              ];
            else $savedSlices = [...$savedSlices, e.detail];
          }}
        />
      {/if}
    </div>

    <ResizablePanel
      leftResizable
      minWidth={300}
      maxWidth="70%"
      height="100%"
      width={500}
      class="border-x border-b border-slate-500 {!isFullScreen
        ? 'rounded-br'
        : ''}"
    >
      <div class="w-full h-full relative">
        {#if $overlapPlotMetric != null}
          <SliceOverlapPlot
            bind:errorKey={$overlapPlotMetric}
            bind:selectedSlices={$selectedSlices}
            bind:searchScopeInfo={$searchScopeInfo}
            errorKeyOptions={binaryMetrics}
            savedSlices={$savedSlices}
            sliceColorMap={$sliceColorMap}
            intersectionCounts={$sliceIntersectionCounts}
            labels={$sliceIntersectionLabels}
            groupedLayout={$groupedMapLayout}
          />
        {/if}
      </div></ResizablePanel
    >
  </div>
</main>

<style>
  .disable-div {
    @apply opacity-50;
    pointer-events: none;
  }
</style>
