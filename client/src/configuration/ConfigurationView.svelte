<script lang="ts">
  import ScoreFunctionConfiguration from './ScoreFunctionConfiguration.svelte';
  import { ColorWheelTailwind } from '../utils/colorwheel';
  import MetricConfiguration from './MetricConfiguration.svelte';
  import Fa from 'svelte-fa';
  import { faPlus } from '@fortawesome/free-solid-svg-icons';

  export let metricInfo: {
    [key: string]: {
      type: 'binary' | 'categorical' | 'continuous';
      values?: string[];
    };
  };

  export let hiddenMetrics: string[] = [];

  export let derivedMetricConfigs: { [key: string]: any };
  export let scoreFunctionConfigs: { [key: string]: any };
  export let scoreWeights: { [key: string]: number };

  export let creatingNewDerivedMetric: boolean = false;
  export let creatingNewScoreFunction: boolean = false;

  export let metricExpressionRequest: {
    expression: string;
    metrics: string[];
  } | null = null;
  export let metricExpressionResponse: {
    success: boolean;
    error?: string;
  } | null = null;
</script>

<div class="w-full pt-2 px-2">
  <div class="px-2 mb-2 flex items-center justify-between">
    <div>
      <div class="font-bold">METRICS</div>
      <div class="text-xs text-slate-600">
        Define what metrics will be shown for each slice.
      </div>
    </div>
    <button
      class="btn btn-slate ml-2 py-1"
      on:click={(e) => (creatingNewDerivedMetric = true)}
      disabled={creatingNewDerivedMetric}
      ><Fa icon={faPlus} class="inline" />&nbsp; New Metric</button
    >
  </div>
  {#each Object.entries(derivedMetricConfigs).sort() as [metricName, config], i (metricName)}
    <MetricConfiguration
      {metricName}
      {config}
      {metricInfo}
      tailwindColor={ColorWheelTailwind[i + 1]}
      isHidden={hiddenMetrics.includes(metricName)}
      on:toggle={(e) => {
        if (hiddenMetrics.includes(metricName))
          hiddenMetrics = [
            ...hiddenMetrics.slice(0, hiddenMetrics.indexOf(metricName)),
            ...hiddenMetrics.slice(hiddenMetrics.indexOf(metricName) + 1),
          ];
        else hiddenMetrics = [...hiddenMetrics, metricName];
      }}
      on:save={(e) => {
        derivedMetricConfigs = {
          ...Object.fromEntries(
            Object.entries(derivedMetricConfigs).filter(
              (e) => e[0] != metricName
            )
          ),
          [e.detail.name]: e.detail.config,
        };
      }}
      on:delete={(e) => {
        derivedMetricConfigs = Object.fromEntries(
          Object.entries(derivedMetricConfigs).filter((e) => e[0] != metricName)
        );
      }}
      bind:metricExpressionRequest
      bind:metricExpressionResponse
    />
  {/each}
  {#if creatingNewDerivedMetric}
    <MetricConfiguration
      metricName=""
      config={{ expression: '' }}
      {metricInfo}
      editing
      tailwindColor={ColorWheelTailwind[
        Object.keys(derivedMetricConfigs).length + 1
      ]}
      on:save={(e) => {
        derivedMetricConfigs = {
          ...derivedMetricConfigs,
          [e.detail.name]: e.detail.config,
        };
        creatingNewDerivedMetric = false;
      }}
      on:delete={() => (creatingNewDerivedMetric = false)}
      on:cancel={() => (creatingNewDerivedMetric = false)}
      bind:metricExpressionRequest
      bind:metricExpressionResponse
    />
  {/if}
  <div class="px-2 mb-1 mt-4 justify-between items-center flex">
    <div>
      <div class="font-bold">SCORE FUNCTIONS</div>
      <div class="text-xs text-slate-600">
        Define and reweight how slices will be ranked.
      </div>
    </div>
    <button
      class="btn btn-slate ml-2 py-1"
      on:click={(e) => (creatingNewScoreFunction = true)}
      disabled={creatingNewScoreFunction}
      ><Fa icon={faPlus} class="inline" />&nbsp; New Score Function</button
    >
  </div>
  {#each Object.keys(scoreFunctionConfigs).sort() as fnName (fnName)}
    <ScoreFunctionConfiguration
      name={fnName}
      config={scoreFunctionConfigs[fnName]}
      weight={scoreWeights[fnName] ?? 0}
      on:reweight={(e) => {
        scoreWeights = { ...scoreWeights, [fnName]: e.detail };
      }}
      on:save={(e) => {
        scoreFunctionConfigs = {
          ...Object.fromEntries(
            Object.entries(scoreFunctionConfigs).filter((e) => e[0] != fnName)
          ),
          [e.detail.name]: e.detail.config,
        };
        scoreWeights = {
          ...Object.fromEntries(
            Object.entries(scoreWeights).filter((e) => e[0] != fnName)
          ),
          [e.detail.name]: scoreWeights[fnName] > 0 ? scoreWeights[fnName] : 1,
        };
      }}
      on:delete={(e) => {
        scoreFunctionConfigs = Object.fromEntries(
          Object.entries(scoreFunctionConfigs).filter((e) => e[0] != fnName)
        );
        scoreWeights = Object.fromEntries(
          Object.entries(scoreWeights).filter((e) => e[0] != fnName)
        );
      }}
      bind:metricExpressionRequest
      bind:metricExpressionResponse
      metricNames={Object.keys(derivedMetricConfigs)}
    />
  {/each}
  {#if creatingNewScoreFunction}
    <ScoreFunctionConfiguration
      name=""
      editing={true}
      config={{ type: 'OutcomeRateScore', metric: '' }}
      weight={1}
      metricNames={Object.keys(derivedMetricConfigs)}
      on:save={(e) => {
        scoreFunctionConfigs = {
          ...scoreFunctionConfigs,
          [e.detail.name]: e.detail.config,
        };
        scoreWeights = {
          ...scoreWeights,
          [e.detail.name]: e.detail.weight,
        };
        creatingNewScoreFunction = false;
      }}
      on:delete={(e) => {
        creatingNewScoreFunction = false;
      }}
      on:cancel={(e) => {
        creatingNewScoreFunction = false;
      }}
      bind:metricExpressionRequest
      bind:metricExpressionResponse
    />
  {/if}
</div>
