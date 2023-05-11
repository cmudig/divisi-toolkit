<script lang="ts">
  import SliceTable from './slice_table/SliceTable.svelte';
  import { traitlet } from './stores';
  import ScoreWeightMenu from './utils/ScoreWeightMenu.svelte';
  import Fa from 'svelte-fa/src/fa.svelte';
  import {
    faChevronLeft,
    faCompress,
    faExpand,
  } from '@fortawesome/free-solid-svg-icons';
  import SliceCurationView from './overlap_views/SliceCurationView.svelte';
  import SliceOverlapPlot from './overlap_views/SliceOverlapPlot.svelte';
  import SliceUpsetPlot from './overlap_views/SliceUpsetPlot.svelte';
  import SliceRow from './slice_table/SliceRow.svelte';
  import SliceSearchView from './slice_table/SliceSearchView.svelte';

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
  let selectedSlices = traitlet(model, 'selected_slices', []);
  let baseSlice = traitlet(model, 'base_slice', {});
  let positiveOnly = traitlet(model, 'positive_only', false);

  let valueNames = traitlet(model, 'value_names', {});

  let scoreWeights = traitlet(model, 'score_weights', {});

  let sliceScoreRequests = traitlet(model, 'slice_score_requests', {});
  let sliceScoreResults = traitlet(model, 'slice_score_results', {});

  let searchSpecStack = traitlet(model, 'search_spec_stack', []);

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

  let scoreNames: Array<string>;
  $: {
    scoreNames = Object.keys($scoreWeights);
    scoreNames.sort();
  }

  let searchScopeDescription = 'all slices';
  let searchSampleDescription = 'entire dataset';

  function describeSlice(slice: { [key: string]: any }): string {
    let descriptions = Object.entries(slice).map(
      (e) => `<span class='font-mono'>${e[0]}</span> = ${e[1]}`
    );
    if (descriptions.length == 0) return '<empty slice>';
    return '<span class="font-normal">' + descriptions.join(', ') + '</span>';
  }

  $: if ($searchSpecStack.length > 0) {
    let searchSpec = $searchSpecStack[$searchSpecStack.length - 1];
    if (searchSpec.type == 'default') {
      searchScopeDescription = 'all slices';
      searchSampleDescription = 'entire dataset'; // TODO update to reflect source mask
    } else if (searchSpec.type == 'subslice') {
      searchScopeDescription =
        'subslices of <span class="slice-description">' +
        describeSlice(searchSpec.base_slice) +
        '</span>';
      searchSampleDescription = 'within slice';
    } else if (searchSpec.type == 'related') {
      searchScopeDescription =
        'slices similar to <span class="slice-description">' +
        describeSlice(searchSpec.base_slice) +
        '</span>';
      searchSampleDescription = 'within slice';
    } else if (searchSpec.type == 'exclude') {
      searchScopeDescription =
        'slices excluding features from <span class="slice-description">' +
        describeSlice(searchSpec.base_slice) +
        '</span>';
      searchSampleDescription = 'entire dataset';
    } else if (searchSpec.type == 'counterfactual') {
      searchScopeDescription =
        'slices counterfactual to <span class="slice-description">' +
        describeSlice(searchSpec.base_slice) +
        '</span>';
      searchSampleDescription = 'entire dataset';
    }
  }

  $: $searchSpecStack[$searchSpecStack.length - 1].score_weights =
    $scoreWeights;

  let parentElement: Element;
  let isFullScreen = false;

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

    setTimeout(() => {
      parentElement.addEventListener(
        'fullscreenchange',
        handleFullScreenChange
      );
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
    }, 100);
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
    if (isFullScreen && !document.fullscreenElement) isFullScreen = false;
    console.log('is full screen', isFullScreen, document.fullscreenElement);
  }
</script>

<main
  class="w-full flex flex-col"
  class:p-4={isFullScreen}
  style={isFullScreen ? 'height: 100vh;' : 'height: 640px; max-height: 90vh;'}
  bind:this={parentElement}
>
  <div class="h-12 rounded-t bg-slate-500 text-white flex items-center px-2">
    <button
      class="mr-2 p-3 rounded indigo:hover:bg-indigo-500 bg-transparent hover:bg-slate-300"
      on:click={isFullScreen ? exitFullScreen : enterFullScreen}
    >
      <span class="my-0.5 block">
        <Fa icon={isFullScreen ? faCompress : faExpand} /></span
      >
    </button>
  </div>
  <div class="flex-1 w-full min-h-0 overflow-auto">
    <SliceSearchView
      searchSpec={$searchSpecStack[$searchSpecStack.length - 1]}
      runningSampler={$runningSampler}
      numSamples={$numSamples}
      positiveOnly={$positiveOnly}
      bind:shouldCancel={$shouldCancel}
      samplerRunProgress={$samplerRunProgress}
      slices={$slices}
      {valueNames}
      baseSlice={$baseSlice}
      bind:sliceRequests={$sliceScoreRequests}
      bind:sliceRequestResults={$sliceScoreResults}
      on:runsampler={() => ($shouldRerun = true)}
      on:loadmore={() => ($numSlices += 10)}
      on:newsearch={(e) => {
        if (!e.detail.score_weights) e.detail.score_weights = $scoreWeights;
        $searchSpecStack = [...$searchSpecStack, e.detail];
      }}
      on:saveslice={(e) => {
        $selectedSlices = [...$selectedSlices, e.detail];
      }}
    />
  </div>
  <!-- <div class="h-full overflow-y-scroll mr-4 shrink-0" style="width: 280px;">
        <div class="p-4 bg-slate-200 rounded w-full min-h-full">
          <ScoreWeightMenu bind:weights={$scoreWeights} {scoreNames} />
        </div>
      </div> -->

  <!-- <div class="flex-1 h-full">
    {#if $sliceIntersectionCounts.length > 0}
      <SliceOverlapPlot
        errorKey="Error Rate"
        intersectionCounts={$sliceIntersectionCounts}
        labels={$sliceIntersectionLabels}
        colorByError
      />
    {/if}
  </div> -->
</main>

<style>
  .disable-div {
    @apply opacity-50;
    pointer-events: none;
  }
</style>
