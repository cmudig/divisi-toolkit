<script lang="ts">
  import ScoreFunctionConfiguration from './ScoreFunctionConfiguration.svelte';
  import { ColorWheelTailwind } from '../utils/colorwheel';
  import MetricConfiguration from './MetricConfiguration.svelte';
  import Fa from 'svelte-fa';
  import {
    faEye,
    faEyeSlash,
    faPlus,
    faPlusCircle,
  } from '@fortawesome/free-solid-svg-icons';

  export let metricInfo: {
    [key: string]: {
      type: 'binary' | 'categorical' | 'continuous';
      values?: string[];
    };
  };

  export let hiddenMetrics: string[] | null = null;

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

  function toggleMetric(metricName: string) {
    if (hiddenMetrics.includes(metricName))
      hiddenMetrics = [
        ...hiddenMetrics.slice(0, hiddenMetrics.indexOf(metricName)),
        ...hiddenMetrics.slice(hiddenMetrics.indexOf(metricName) + 1),
      ];
    else hiddenMetrics = [...hiddenMetrics, metricName];
  }
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
      class="hover:text-slate-600 text-slate-400 bg-transparent text-lg ml-2 py-1 px-1 shrink-0 grow-0"
      on:click={(e) => (creatingNewDerivedMetric = true)}
      disabled={creatingNewDerivedMetric}
      ><Fa icon={faPlusCircle} class="inline" /></button
    >
  </div>
  <div class="px-2 py-1 flex items-center text-sm w-full">
    <button
      class="{!!hiddenMetrics && hiddenMetrics.includes('Count')
        ? 'text-slate-300 hover:text-slate-400'
        : 'hover:opacity-70 text-' + ColorWheelTailwind[0]} bg-transparent mr-2"
      on:click|stopPropagation={() => toggleMetric('Count')}
      ><Fa
        icon={!!hiddenMetrics && hiddenMetrics.includes('Count')
          ? faEyeSlash
          : faEye}
        class="inline"
      /></button
    >
    <div class="flex-auto shrink-0">Count</div>
  </div>
  {#each Object.entries(derivedMetricConfigs).sort() as [metricName, config], i (metricName)}
    <MetricConfiguration
      {metricName}
      {config}
      {metricInfo}
      tailwindColor={ColorWheelTailwind[i + 1]}
      isHidden={!!hiddenMetrics && hiddenMetrics.includes(metricName)}
      on:toggle={(e) => toggleMetric(metricName)}
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
      class="hover:text-slate-600 text-slate-400 bg-transparent text-lg ml-2 py-1 px-1 shrink-0 grow-0"
      on:click={(e) => (creatingNewScoreFunction = true)}
      disabled={creatingNewScoreFunction}
      ><Fa icon={faPlusCircle} class="inline" /></button
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
