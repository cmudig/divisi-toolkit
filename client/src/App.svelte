<script lang="ts">
  import SliceTable from './SliceTable.svelte';
  import { traitlet } from './stores';
  import { format } from 'd3-format';
  import IncrementButtons from './IncrementButtons.svelte';
  import ScoreWeightSlider from './ScoreWeightSlider.svelte';
  import ScoreWeightMenu from './ScoreWeightMenu.svelte';
  import Fa from 'svelte-fa/src/fa.svelte';
  import {
    faChevronLeft,
    faCompress,
    faExpand,
  } from '@fortawesome/free-solid-svg-icons';
  import { onMount } from 'svelte';

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
  let positiveOnly = traitlet(model, 'positive_only', false);

  let valueNames = traitlet(model, 'value_names', {});

  let scoreWeights = traitlet(model, 'score_weights', {});

  let sliceScoreRequests = traitlet(model, 'slice_score_requests', {});
  let sliceScoreResults = traitlet(model, 'slice_score_results', {});

  let searchSpecStack = traitlet(model, 'search_spec_stack', []);

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
  <div
    class="px-3 py-3 rounded w-full flex items-center mb-2 transition-colors duration-300 {$searchSpecStack.length >
    1
      ? 'bg-indigo-600 text-white indigo'
      : 'bg-slate-200 text-gray-700'}"
  >
    {#if $runningSampler}
      <button
        class="ml-2 mr-4 btn btn-blue disabled:opacity-50"
        disabled={$shouldCancel}
        on:click={() => ($shouldCancel = true)}>Stop</button
      >
      <div class="flex-auto">
        <div class="text-sm">
          {#if $shouldCancel}
            Canceling...
          {:else}
            Running sampler ({($samplerRunProgress * 100).toFixed(1)}%
            complete)...
          {/if}
        </div>
        <div
          class="w-full bg-slate-300 rounded-full h-1.5 mt-1 indigo:bg-slate-700"
        >
          <div
            class="bg-blue-600 h-1.5 rounded-full indigo:bg-indigo-200 duration-100"
            style="width: {($samplerRunProgress * 100).toFixed(1)}%"
          />
        </div>
      </div>
    {:else}
      {#if $searchSpecStack.length > 1}
        <button
          class="ml-1 p-2 rounded hover:bg-indigo-500 bg-transparent"
          on:click={(e) =>
            ($searchSpecStack = $searchSpecStack.slice(
              0,
              $searchSpecStack.length - 1
            ))}
        >
          <span class="my-0.5 block"> <Fa icon={faChevronLeft} /></span>
        </button>
      {/if}

      <button
        class="ml-1 btn btn-blue disabled:opacity-50"
        disabled={$runningSampler}
        on:click={() => ($shouldRerun = true)}>Find Slices</button
      >
      <div class="flex-auto ml-2">
        in <strong>{@html searchScopeDescription}</strong> by drawing
        <input
          class="mx-2 p-1 rounded bg-slate-50 indigo:bg-indigo-500 w-16 focus:ring-1 focus:ring-blue-600"
          type="number"
          min="0"
          max="500"
          step="5"
          bind:value={$numSamples}
        />
        samples from <strong>{@html searchSampleDescription}</strong>
      </div>
      <button
        class="mr-2 p-3 rounded indigo:hover:bg-indigo-500 bg-transparent hover:bg-slate-300"
        on:click={isFullScreen ? exitFullScreen : enterFullScreen}
      >
        <span class="my-0.5 block">
          <Fa icon={isFullScreen ? faCompress : faExpand} /></span
        >
      </button>
    {/if}
  </div>
  <div class="flex flex-1 w-full h-0" class:disable-div={$runningSampler}>
    <div class="h-full overflow-y-scroll mr-4 shrink-0" style="width: 250px;">
      <div class="p-4 bg-slate-200 rounded w-full min-h-full">
        <ScoreWeightMenu bind:weights={$scoreWeights} {scoreNames} />
      </div>
    </div>
    <div class="flex-auto overflow-scroll h-full">
      <SliceTable
        slices={$slices}
        bind:customSlices={$customSlices}
        bind:customSliceResults={$customSliceResults}
        bind:sliceRequests={$sliceScoreRequests}
        bind:sliceRequestResults={$sliceScoreResults}
        positiveOnly={$positiveOnly}
        {valueNames}
        on:newsearch={(e) => {
          if (!e.detail.score_weights) e.detail.score_weights = $scoreWeights;
          $searchSpecStack = [...$searchSpecStack, e.detail];
        }}
      />
      {#if $slices.length > 0}
        <div class="mt-2">
          <button
            class="btn btn-blue disabled:opacity-50"
            on:click={() => ($numSlices += 10)}>Load More</button
          >
        </div>
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
