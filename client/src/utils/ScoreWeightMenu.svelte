<script lang="ts">
  import IncrementButtons from './IncrementButtons.svelte';
  import ScoreWeightSlider from './ScoreWeightSlider.svelte';
  import { format } from 'd3-format';
  import Checkbox from './Checkbox.svelte';
  import Fa from 'svelte-fa/src/fa.svelte';
  import {
    faChevronDown,
    faChevronUp,
  } from '@fortawesome/free-solid-svg-icons';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let weights: { [key: string]: number } = {};
  export let scoreNames: string[] = [];

  export let collapsible = true;
  export let showApplyButton: boolean = false;

  let expanded = false;

  // these have to be specifically included in build for tailwind to import them
  const scoreColors = [
    'blue-400',
    'amber-400',
    'emerald-400',
    'lime-600',
    'fuchsia-800',
    'violet-600',
    'lime-800',
    'amber-800',
    'cyan-400',
    'red-600',
    'cyan-600',
    'emerald-800',
    'red-800',
    'emerald-800',
    'red-400',
    'cyan-800',
    'emerald-400',
    'blue-600',
    'violet-800',
    'lime-400',
    'fuchsia-400',
    'violet-400',
    'blue-800',
    'emerald-600',
    'amber-600',
    'fuchsia-600',
  ];

  function updateScoreWeight(scoreName: string, value: number) {
    let newScoreWeights = Object.assign({}, weights);
    newScoreWeights[scoreName] = value;
    weights = newScoreWeights;
  }

  let totalWeight: number;
  $: totalWeight = Object.values(weights).reduce((curr, w) => curr + w, 0);

  function getWeightFraction(name: string): number {
    return weights[name] / totalWeight;
  }

  function removeWeight(name: string) {
    let newScoreWeights = Object.assign({}, weights);
    newScoreWeights[name] = 0.0;
    weights = newScoreWeights;
  }

  function initializeWeight(name: string) {
    let newScoreWeights = Object.assign({}, weights);
    newScoreWeights[name] = 1.0;
    weights = newScoreWeights;
    return;
  }

  // updates all weights within the same set of
  function updateWeightSubset(weightsToUpdate: { [key: string]: number }) {
    let totalInSubset = Object.keys(weightsToUpdate).reduce(
      (curr, w) => curr + weights[w],
      0
    );
    let totalPercentage = Object.keys(weightsToUpdate).reduce(
      (curr, w) => curr + weightsToUpdate[w],
      0
    );
    let newScoreWeights = Object.assign({}, weights);
    Object.keys(weightsToUpdate).forEach(
      (n) =>
        (newScoreWeights[n] =
          (weightsToUpdate[n] / totalPercentage) * totalInSubset)
    );
    weights = newScoreWeights;
  }
</script>

<div class="w-full px-3">
  <div class="pt-3 bg-white {collapsible ? '' : 'sticky top-0 z-10'}">
    <div class="mb-1 text-xs text-slate-500 w-full">
      Adjust the weights for each score function to determine how to rank
      slices.
    </div>
    <ScoreWeightSlider
      segments={scoreNames
        .map((n, i) => ({
          name: n,
          color_tailwind: scoreColors[i % scoreColors.length],
        }))
        .filter((n) => weights[n.name] > 0.0)}
      widths={scoreNames.filter((n) => weights[n] > 0.0).map(getWeightFraction)}
      on:change={(e) => updateWeightSubset(e.detail)}
    />
  </div>
  {#if expanded || !collapsible}
    <div class="mt-2">
      {#each scoreNames as score, i}
        <div class="mb-2 flex flex-wrap items-center text-sm">
          <Checkbox
            colorClass={weights[score] > 0.0
              ? 'bg-' + scoreColors[i % scoreColors.length]
              : null}
            checked={weights[score] > 0.0}
            on:change={(e) => {
              if (!e.detail) {
                removeWeight(score);
              } else {
                initializeWeight(score);
              }
            }}
          />
          <div class="flex-auto truncate">
            {score}
          </div>
          <div class="text-xs mr-2">
            {format('.1f')(weights[score] ?? 0)}
          </div>
          <IncrementButtons
            value={weights[score] ?? 0}
            on:change={(e) => updateScoreWeight(score, e.detail)}
            min={0}
            max={5}
            step={0.1}
          />
        </div>
      {/each}
    </div>
  {/if}
  {#if showApplyButton}
    <div
      class="py-2 flex items-center justify-end gap-3 sticky bottom-0 bg-white z-10"
    >
      <button class="btn btn-slate" on:click={() => dispatch('cancel')}>
        Cancel
      </button>
      <button class="btn btn-blue" on:click={() => dispatch('apply', weights)}>
        Apply
      </button>
    </div>
  {/if}
  {#if collapsible}
    <div class="flex items-center justify-center mt-1">
      <button
        class="bg-transparent hover:opacity-60 text-slate-600 px-1"
        title="Show/hide granular controls"
        on:click={() => (expanded = !expanded)}
        ><Fa icon={expanded ? faChevronUp : faChevronDown} /></button
      >
    </div>
  {/if}
</div>
