<script lang="ts">
  import SliceTable from './SliceTable.svelte';
  import { traitlet } from './stores';
  import { format } from 'd3-format';
  import IncrementButtons from './IncrementButtons.svelte';

  export let model;

  let numSlices = traitlet(model, 'num_slices', 10);
  let numSamples = traitlet(model, 'num_samples', 10);
  let shouldRerun = traitlet(model, 'should_rerun', false);
  let numSamplesDrawn = traitlet(model, 'num_samples_drawn', 0);
  let runningSampler = traitlet(model, 'running_sampler', false);
  let samplerRunProgress = traitlet(model, 'sampler_run_progress', 0.0);

  let slices = traitlet(model, 'slices', []);
  let overallSlice = traitlet(model, 'overall_slice', {});

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
  {#if $runningSampler}
    <div class="pt-2 pb-4">
      <div class="text-sm text-gray-700">
        Running sampler ({$numSamplesDrawn} total samples drawn)...
      </div>
      <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1 dark:bg-gray-700">
        <div
          class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 duration-100"
          style="width: {($samplerRunProgress * 100).toFixed(1)}%"
        />
      </div>
    </div>
  {:else}
    <h1 class="text-2xl font-bold mt-2 mb-3">Slice Finder</h1>
  {/if}
  <div class="flex h-96" class:disable-div={$runningSampler}>
    <div class="h-full overflow-y-scroll mr-4 shrink-0" style="width: 250px;">
      <div class="p-4 bg-slate-200 rounded w-full min-h-full">
        <div class="text-sm font-bold">Number of samples</div>
        <div class="mt-1 flex items-center w-full">
          <div style="width: 24px;">{$numSamples}</div>
          <input
            class="flex-auto ml-3"
            type="range"
            bind:value={$numSamples}
            min="1"
            max="100"
            step="1"
          />
        </div>
        <div class="mt-2 mb-4">
          <button
            class="btn btn-blue disabled:opacity-50"
            disabled={$runningSampler}
            on:click={() => ($shouldRerun = true)}>Find Slices</button
          >
        </div>
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
      {#if $slices.length > 0}
        <SliceTable
          slices={[
            ...(Object.keys($overallSlice).length > 0 ? [$overallSlice] : []),
            ...$slices,
          ]}
          bind:sliceRequests={$sliceScoreRequests}
          bind:sliceRequestResults={$sliceScoreResults}
        />
        <div class="mt-2">
          <button
            class="btn btn-blue disabled:opacity-50"
            on:click={() => ($numSlices += 10)}>Load More</button
          >
        </div>
      {:else}
        <div class="w-full h-full flex items-center justify-center p-6">
          <div class="text-slate-500">No slices yet!</div>
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
