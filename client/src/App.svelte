<script lang="ts">
  import SliceTable from './SliceTable.svelte';
  import { traitlet } from './stores';
  import { format } from 'd3-format';
  import IncrementButtons from './IncrementButtons.svelte';

  export let model;

  let numSlices = traitlet(model, 'num_slices', 10);
  let numSamples = traitlet(model, 'num_samples', 50);
  let shouldRerun = traitlet(model, 'should_rerun', false);
  let numSamplesDrawn = traitlet(model, 'num_samples_drawn', 0);
  let runningSampler = traitlet(model, 'running_sampler', false);
  let shouldCancel = traitlet(model, 'should_cancel', false);
  let samplerRunProgress = traitlet(model, 'sampler_run_progress', 0.0);

  let slices = traitlet(model, 'slices', []);
  let focusedSlice = traitlet(model, 'focused_slice', {});
  let focusedSliceDescription = traitlet(
    model,
    'focused_slice_description',
    {}
  );
  let positiveOnly = traitlet(model, 'positive_only', false);

  let valueNames = traitlet(model, 'value_names', {});

  let scoreWeights = traitlet(model, 'score_weights', {});

  let sliceScoreRequests = traitlet(model, 'slice_score_requests', {});
  let sliceScoreResults = traitlet(model, 'slice_score_results', {});

  let scoreNames: Array<string>;
  $: {
    scoreNames = Object.keys($scoreWeights);
    scoreNames.sort();
  }

  function updateScoreWeight(scoreName: string, value: number) {
    let newScoreWeights = Object.assign({}, $scoreWeights);
    newScoreWeights[scoreName] = value;
    $scoreWeights = newScoreWeights;
  }
</script>

<main class="w-full">
  <div class="px-4 py-3 bg-slate-200 rounded w-full flex items-center mb-2">
    {#if $runningSampler}
      <div class="flex-auto">
        <div class="text-sm text-gray-700">
          {#if $shouldCancel}
            Canceling...
          {:else}
            Running sampler ({($samplerRunProgress * 100).toFixed(1)}%
            complete)...
          {/if}
        </div>
        <div
          class="w-full bg-gray-200 rounded-full h-1.5 mt-1 dark:bg-gray-700"
        >
          <div
            class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 duration-100"
            style="width: {($samplerRunProgress * 100).toFixed(1)}%"
          />
        </div>
      </div>
      <button
        class="ml-4 btn btn-blue disabled:opacity-50"
        disabled={$shouldCancel}
        on:click={() => ($shouldCancel = true)}>Stop</button
      >
    {:else}
      <div class="flex-auto">
        Searching <strong>all slices</strong> by drawing
        <input
          class="mx-2 p-1 rounded bg-slate-50 w-16"
          type="number"
          min="0"
          max="500"
          step="5"
          bind:value={$numSamples}
        />
        samples from <strong>entire dataset</strong>
      </div>
      <button
        class="btn btn-blue disabled:opacity-50"
        disabled={$runningSampler}
        on:click={() => ($shouldRerun = true)}>Find Slices</button
      >
    {/if}
  </div>
  <div
    class="flex"
    style="height: 640px; max-height: 90vh;"
    class:disable-div={$runningSampler}
  >
    <div class="h-full overflow-y-scroll mr-4 shrink-0" style="width: 250px;">
      <div class="p-4 bg-slate-200 rounded w-full min-h-full">
        <div>
          <div class="text-sm font-bold">Score weights</div>
          {#each scoreNames as score}
            <div class="mb-1 flex flex-wrap items-center text-sm">
              <div class="flex-auto">
                {score}
              </div>
              <div class="font-bold mr-2">
                {format('.1f')($scoreWeights[score])}
              </div>
              <IncrementButtons
                value={$scoreWeights[score]}
                on:change={(e) => updateScoreWeight(score, e.detail)}
                min={0}
                max={5}
                step={0.1}
              />
            </div>
          {/each}
        </div>
      </div>
    </div>
    <div class="flex-auto overflow-scroll h-full">
      <SliceTable
        slices={$slices}
        bind:focusedSlice={$focusedSlice}
        bind:focusedSliceDescription={$focusedSliceDescription}
        bind:sliceRequests={$sliceScoreRequests}
        bind:sliceRequestResults={$sliceScoreResults}
        positiveOnly={$positiveOnly}
        {valueNames}
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
