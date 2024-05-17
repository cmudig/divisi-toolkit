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
  import SliceCurationView from './overlap_views/SliceCurationView.svelte';
  import SliceOverlapPlot from './overlap_views/SliceOverlapPlot.svelte';
  import SliceUpsetPlot from './overlap_views/SliceUpsetPlot.svelte';
  import SliceRow from './slice_table/SliceRow.svelte';
  import SliceSearchView from './slice_table/SliceSearchView.svelte';
  import { areObjectsEqual, areSetsEqual } from './utils/utils';
  import SliceCurationTable from './slice_table/SliceCurationTable.svelte';
  import ResizablePanel from './utils/ResizablePanel.svelte';

  export let model;

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

  let valueNames = traitlet(model, 'value_names', {});

  let scoreWeights = traitlet(model, 'score_weights', {});

  let sliceScoreRequests = traitlet(model, 'slice_score_requests', {});
  let sliceScoreResults = traitlet(model, 'slice_score_results', {});

  let enabledSliceControls = traitlet(model, 'enabled_slice_controls', {});
  let containsSlice = traitlet(model, 'contains_slice', {});
  let containedInSlice = traitlet(model, 'contained_in_slice', {});
  let similarToSlice = traitlet(model, 'similar_to_slice', {});
  let subsliceOfSlice = traitlet(model, 'subslice_of_slice', {});

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
  let selectedIntersectionIndex = traitlet(
    model,
    'selected_intersection_index',
    -1
  );

  let viewingTab = 0; // 0 = search, 1 = curation

  let scoreNames: Array<string>;
  $: {
    scoreNames = Object.keys($scoreWeights);
    scoreNames.sort();
  }

  let metricNames: Array<string> = [];
  let binaryMetrics: Array<string> = [];
  $: {
    let testSlice = $slices.find((s) => !s.isEmpty);

    if (!!testSlice && !!testSlice.metrics) {
      let newMetricNames = Object.keys(testSlice.metrics);
      if (!areSetsEqual(new Set(metricNames), new Set(newMetricNames))) {
        metricNames = newMetricNames;
        metricNames.sort();
        binaryMetrics = metricNames.filter(
          (m) => testSlice.metrics[m].type == 'binary'
        );
        if (binaryMetrics.length > 0) overlapPlotMetric = binaryMetrics[0];
        else overlapPlotMetric = null;
      }
    }
    console.log('overlap metric:', overlapPlotMetric);
  }
  let overlapPlotMetric: string | null = null;

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
</script>

<main
  class="w-full flex flex-col"
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
      maxWidth="50%"
      width={400}
      height="100%"
      class="border-x border-b border-slate-500 {!isFullScreen
        ? 'rounded-b'
        : ''}"
    >
      <div class="overflow-x-auto overflow-y-auto w-full h-full">
        <div style="min-width: 300px;">
          <ScoreWeightMenu
            collapsible={false}
            bind:weights={$scoreWeights}
            {scoreNames}
          />
        </div>
      </div>
    </ResizablePanel>
    <div class="flex-1 h-full overflow-auto" class:p-2={isFullScreen}>
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
          {valueNames}
          baseSlice={$baseSlice}
          bind:sliceRequests={$sliceScoreRequests}
          bind:sliceRequestResults={$sliceScoreResults}
          bind:enabledSliceControls={$enabledSliceControls}
          bind:containsSlice={$containsSlice}
          bind:containedInSlice={$containedInSlice}
          bind:similarToSlice={$similarToSlice}
          bind:subsliceOfSlice={$subsliceOfSlice}
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
      minWidth={240}
      maxWidth="50%"
      height="100%"
      width={300}
      class="border-x border-b border-slate-500 {!isFullScreen
        ? 'rounded-b'
        : ''}"
    >
      <div class="w-full h-full relative">
        <div class="absolute top-0 left-0 bottom-0 right-0">
          {#if overlapPlotMetric != null}
            <SliceOverlapPlot
              errorKey={overlapPlotMetric}
              colorBySlice={true}
              intersectionCounts={$sliceIntersectionCounts}
              labels={$sliceIntersectionLabels}
            />
          {/if}
        </div>
        {#if metricNames.length > 0}
          <div class="absolute top-0 left-0 mt-4 ml-4">
            <select bind:value={overlapPlotMetric}>
              {#each binaryMetrics as metric}
                <option value={metric}>{metric}</option>
              {/each}
            </select>
          </div>
        {/if}
      </div>
    </ResizablePanel>
  </div>
</main>

<style>
  .disable-div {
    @apply opacity-50;
    pointer-events: none;
  }
</style>
