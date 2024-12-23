<script lang="ts">
  import ScoreFunctionConfiguration from './ScoreFunctionConfiguration.svelte';
  import { ColorWheelTailwind } from '../utils/colorwheel';
  import MetricConfiguration from './MetricConfiguration.svelte';
  import Fa from 'svelte-fa';
  import {
    faChevronDown,
    faChevronRight,
    faEye,
    faEyeSlash,
    faPlus,
    faPlusCircle,
  } from '@fortawesome/free-solid-svg-icons';
  import { sortMetrics } from '../utils/utils';
  import SearchScopeConfiguration from './SearchScopeConfiguration.svelte';

  export let showSearchScopeConfig: boolean = true;
  export let searchScopeNeedsRerun: boolean = false;
  export let searchScopeInfo: any = {};
  export let positiveOnly: boolean = false;
  export let allowedValues: { [key: string]: string[] } | null = null;

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
  export let showScoreFunctionConfig: boolean = true;

  export let creatingNewDerivedMetric: boolean = false;
  export let creatingNewScoreFunction: boolean = false;

  export let scoreFunctionsExpanded: boolean = true;
  export let metricsExpanded: boolean = false;
  export let searchScopeExpanded: boolean = false;

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
  {#if showScoreFunctionConfig}
    <div class="px-2 mb-1 mt-2 gap-2 items-center flex">
      <button
        class="hover:text-slate-600 text-slate-400 bg-transparent py-1 pr-1 shrink-0 grow-0"
        on:click={(e) => (scoreFunctionsExpanded = !scoreFunctionsExpanded)}
        ><Fa
          icon={scoreFunctionsExpanded ? faChevronDown : faChevronRight}
          class="inline"
        /></button
      >
      <div class="flex-auto">
        <div class="font-bold">RANKING FUNCTIONS</div>
        <div class="text-xs text-slate-600">
          Define and reweight how results will be ordered.
        </div>
      </div>
      <button
        class="hover:text-slate-600 text-slate-400 bg-transparent text-lg ml-2 py-1 px-1 shrink-0 grow-0"
        on:click={(e) => {
          creatingNewScoreFunction = true;
          scoreFunctionsExpanded = true;
        }}
        disabled={creatingNewScoreFunction}
        ><Fa icon={faPlusCircle} class="inline" /></button
      >
    </div>
    {#if scoreFunctionsExpanded}
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
                Object.entries(scoreFunctionConfigs).filter(
                  (e) => e[0] != fnName
                )
              ),
              [e.detail.name]: e.detail.config,
            };
            scoreWeights = {
              ...Object.fromEntries(
                Object.entries(scoreWeights).filter((e) => e[0] != fnName)
              ),
              [e.detail.name]:
                scoreWeights[fnName] > 0 ? scoreWeights[fnName] : 1,
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
    {/if}
  {/if}

  <div class="px-2 mb-2 mt-4 flex items-center gap-2">
    <button
      class="hover:text-slate-600 text-slate-400 bg-transparent py-1 pr-1 shrink-0 grow-0"
      on:click={(e) => (metricsExpanded = !metricsExpanded)}
      ><Fa
        icon={metricsExpanded ? faChevronDown : faChevronRight}
        class="inline"
      /></button
    >
    <div class="flex-auto">
      <div class="font-bold">METRICS</div>
      <div class="text-xs text-slate-600">
        Define what metrics will be shown for each subgroup.
      </div>
    </div>
    <button
      class="hover:text-slate-600 text-slate-400 bg-transparent text-lg ml-2 py-1 px-1 shrink-0 grow-0"
      on:click={(e) => {
        creatingNewDerivedMetric = true;
        metricsExpanded = true;
      }}
      disabled={creatingNewDerivedMetric}
      ><Fa icon={faPlusCircle} class="inline" /></button
    >
  </div>
  {#if metricsExpanded}
    <div class="px-2 py-1 flex items-center text-sm w-full">
      <button
        class="{!!hiddenMetrics && hiddenMetrics.includes('Count')
          ? 'text-slate-300 hover:text-slate-400'
          : 'hover:opacity-70 text-' +
            ColorWheelTailwind[0]} bg-transparent mr-2"
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
    {#each Object.entries(derivedMetricConfigs).sort( (a, b) => sortMetrics(a[0], b[0]) ) as [metricName, config], i (metricName)}
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
            Object.entries(derivedMetricConfigs).filter(
              (e) => e[0] != metricName
            )
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
  {/if}

  {#if showSearchScopeConfig}
    <SearchScopeConfiguration
      bind:searchScopeInfo
      {allowedValues}
      {searchScopeNeedsRerun}
      {positiveOnly}
    />
  {/if}
</div>
