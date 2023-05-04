<script lang="ts">
  import IncrementButtons from './IncrementButtons.svelte';
  import ScoreWeightSlider from './ScoreWeightSlider.svelte';
  import { format } from 'd3-format';
  import Checkbox from './Checkbox.svelte';

  export let weights: { [key: string]: number } = {};
  export let scoreNames: string[] = [];

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
    if (totalWeight == 0.0) {
      newScoreWeights[name] = 1.0;
      weights = newScoreWeights;
      return;
    }
    let averageWeight =
      totalWeight / Object.values(weights).filter((w) => w > 0.0).length;
    let newTotalWeight = totalWeight + averageWeight;

    Object.keys(newScoreWeights).forEach(
      (n) =>
        (newScoreWeights[n] =
          (newScoreWeights[n] * totalWeight) / newTotalWeight)
    );
    newScoreWeights[name] = (averageWeight * totalWeight) / newTotalWeight;
    weights = newScoreWeights;
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

<div>
  <div class="text-sm font-bold">Score weights</div>
  <ScoreWeightSlider
    segments={scoreNames
      .map((n, i) => ({
        name: n,
        color_tailwind: scoreColors[i],
      }))
      .filter((n) => weights[n.name] > 0.0)}
    widths={scoreNames.filter((n) => weights[n] > 0.0).map(getWeightFraction)}
    on:change={(e) => updateWeightSubset(e.detail)}
  />
  {#each scoreNames as score, i}
    <div class="mb-2 flex flex-wrap items-center text-sm">
      <Checkbox
        colorClass={weights[score] > 0.0 ? 'bg-' + scoreColors[i] : null}
        checked={weights[score] > 0.0}
        on:change={(e) => {
          if (!e.detail) {
            removeWeight(score);
          } else {
            initializeWeight(score);
          }
        }}
      />
      <div class="flex-auto">
        {score}
      </div>
      <div class="text-xs mr-2">
        {format('.1f')(weights[score])}
      </div>
      <IncrementButtons
        value={weights[score]}
        on:change={(e) => updateScoreWeight(score, e.detail)}
        min={0}
        max={5}
        step={0.1}
      />
    </div>
  {/each}
</div>
