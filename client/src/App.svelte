<script lang="ts">
  import { traitlet } from './stores';

  export let model;

  let numSamples = traitlet(model, 'num_samples', 10);
  let shouldRerun = traitlet(model, 'should_rerun', false);
  let slices = traitlet(model, 'slices', []);
  let numSamplesDrawn = traitlet(model, 'num_samples_drawn', 0);
  let runningSampler = traitlet(model, 'running_sampler', false);
  let samplerRunProgress = traitlet(model, 'sampler_run_progress', 0.0);

  $: console.log('drawn', $numSamplesDrawn, 'samples');
</script>

<main>
  <h1 class="text-2xl font-bold">Slice Finder</h1>
  {#if $runningSampler}
    <div class="py-2">
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
  {:else}
    <div class="p-4 my-2 bg-slate-200 rounded">
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
          on:click={() => ($shouldRerun = true)}>Load Results</button
        >
      </div>
    </div>
  {/if}

  {#each $slices as slice}
    <p>
      Slice:
      {#each Object.keys(slice.featureValues) as col}
        {col} = {slice.featureValues[col]},&nbsp;
      {/each}
    </p>
  {/each}
</main>
