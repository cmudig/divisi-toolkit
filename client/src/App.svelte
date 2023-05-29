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
  import { areObjectsEqual } from './utils/utils';
  import SliceCurationTable from './slice_table/SliceCurationTable.svelte';

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
    class="h-12 bg-slate-500 text-white flex items-center px-2"
    class:rounded-t={!isFullScreen}
  >
    <button
      class="mr-1 px-3 py-2 rounded {viewingTab == 0
        ? 'bg-slate-600'
        : 'bg-transparent hover:opacity-60'} text-white font-bold"
      disabled={viewingTab == 0}
      on:click={() => (viewingTab = 0)}
    >
      <Fa icon={faSearch} class="inline mr-1" /> Search
    </button>
    <button
      class="px-3 py-2 rounded {viewingTab == 1
        ? 'bg-slate-600'
        : 'bg-transparent hover:opacity-60'} text-white font-bold"
      class:bg-slate-600={viewingTab == 1}
      disabled={viewingTab == 1}
      on:click={() => (viewingTab = 1)}
    >
      <Fa icon={faHeart} class="inline mr-1" /> Curate
    </button>

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
    <div class="flex-1 h-full overflow-auto" class:p-2={isFullScreen}>
      {#if viewingTab == 0}
        <SliceSearchView
          runningSampler={$runningSampler}
          numSamples={$numSamples}
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
    <!-- <div class="h-full overflow-y-scroll mr-4 shrink-0" style="width: 280px;">
        <div class="p-4 bg-slate-200 rounded w-full min-h-full">
          <ScoreWeightMenu bind:weights={$scoreWeights} {scoreNames} />
        </div>
      </div> -->

    <div
      class="w-1/3 h-full border-x border-b border-slate-500"
      class:rounded-b={!isFullScreen}
    >
      {#if $sliceIntersectionCounts.length > 0}
        <SliceOverlapPlot
          errorKey="Error Rate"
          colorBySlice={true}
          intersectionCounts={$sliceIntersectionCounts}
          labels={$sliceIntersectionLabels}
        />
      {/if}
    </div>
  </div>
</main>

<style>
  .disable-div {
    @apply opacity-50;
    pointer-events: none;
  }
</style>
