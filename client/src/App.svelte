<script lang="ts">
  import SliceTable from './SliceTable.svelte';
  import { traitlet } from './stores';

  export let model;

  let numSlices = traitlet(model, 'num_slices', 10);
  let numSamples = traitlet(model, 'num_samples', 10);
  let shouldRerun = traitlet(model, 'should_rerun', false);
  let slices = traitlet(model, 'slices', []);
  let numSamplesDrawn = traitlet(model, 'num_samples_drawn', 0);
  let runningSampler = traitlet(model, 'running_sampler', false);
  let samplerRunProgress = traitlet(model, 'sampler_run_progress', 0.0);

  $: console.log('drawn', $numSamplesDrawn, 'samples');
</script>

<main class="w-full">
  <h1 class="text-2xl font-bold mb-2">Slice Finder</h1>
  {#if $runningSampler}
    <div class="pt-2 pb-4">
      <div class="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <div
          class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 duration-100"
          style="width: {($samplerRunProgress * 100).toFixed(1)}%"
        />
        <div class="text-sm text-gray-700">
          Running sampler ({$numSamplesDrawn} total samples drawn)...
        </div>
      </div>
    </div>
  {/if}
  <div class="flex h-full" class:disable-div={$runningSampler}>
    <div class="p-4 mr-4 bg-slate-200 rounded w-300">
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
      <div class="mt-2">
        <button
          class="btn btn-blue disabled:opacity-50"
          disabled={$runningSampler}
          on:click={() => ($shouldRerun = true)}>Find Slices</button
        >
      </div>
    </div>
    <div class="flex-auto overflow-scroll h-96">
      {#if $slices.length > 0}
        <SliceTable slices={$slices} />
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
