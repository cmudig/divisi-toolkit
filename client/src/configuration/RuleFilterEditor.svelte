<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import {
    RuleFilterCombination,
    RuleFilterType,
    type RuleFilter,
  } from './rulefilters';
  import Fa from 'svelte-fa';
  import {
    faChevronDown,
    faDiagramPredecessor,
    faTrash,
  } from '@fortawesome/free-solid-svg-icons';
  import ActionMenuButton from '../utils/ActionMenuButton.svelte';
  import { deepCopy } from '../utils/utils';
  import SearchableMultiselect from '../utils/SearchableMultiselect.svelte';

  const dispatch = createEventDispatcher();

  export let allowedValues: { [key: string]: string[] } | null = null;

  export let ruleFilter: RuleFilter | null = null;
  export let topLevel: boolean = false;
  export let allowDelete: boolean = true;

  const Combinations = [
    { value: 'and', name: 'and' },
    { value: 'or', name: 'or' },
  ];
  const FilterLogics = [
    { value: RuleFilterType.exclude, name: 'Exclude' },
    { value: RuleFilterType.include, name: 'Require' },
  ];

  function valueSetForFeatures(features: any[]): string[] {
    if (!allowedValues) return [];
    if (features.length == 0) return [];
    return Array.from(
      new Set(features.map((f) => allowedValues[f] ?? []).flat())
    );
  }
</script>

{#if !!ruleFilter}
  {#if topLevel}
    <div class="w-full bg-slate-100 rounded-md p-2 mb-2">
      {#if !!allowedValues}
        <svelte:self
          {ruleFilter}
          {allowedValues}
          on:delete
          on:change={(e) => (ruleFilter = e.detail)}
          {allowDelete}
        />
      {:else}
        <div class="w-full m-4 text-slate-600 text-center">
          The filter can't be edited right now.
        </div>
      {/if}
    </div>
  {:else}
    <div class="w-full">
      <div class="flex items-center gap-2 mb-1">
        {#if allowDelete}
          <button
            class="hover:text-slate-600 text-slate-400 bg-transparent py-1 px-1 shrink-0 grow-0"
            on:click={() => dispatch('delete')}><Fa icon={faTrash} /></button
          >
        {/if}
        <button
          class="hover:text-slate-600 text-slate-400 bg-transparent py-1 px-1 shrink-0 grow-0"
          title="Add more conditions, joined by AND or OR"
          on:click={() =>
            dispatch('change', {
              type: 'combination',
              combination: RuleFilterCombination.and,
              lhs: ruleFilter,
              rhs: {
                type: 'constraint',
                logic: RuleFilterType.exclude,
                features: [],
                values: [],
              },
            })}><Fa icon={faDiagramPredecessor} /></button
        >
        {#if ruleFilter.type == 'constraint'}
          <select
            class="flat-select text-sm flex-auto"
            value={ruleFilter.logic}
            on:change={(e) =>
              dispatch(
                'change',
                Object.assign(deepCopy(ruleFilter ?? {}), {
                  logic: e.target?.value,
                })
              )}
          >
            {#each FilterLogics as logic}
              <option value={logic.value}>{logic.name}</option>
            {/each}
          </select>
        {:else if ruleFilter.type == 'combination'}
          <div class="flex-auto text-slate-800 text-sm">Exclude if...</div>
        {/if}
      </div>
      {#if ruleFilter.type == 'constraint'}
        {#if !!allowedValues}
          {@const selectedFeatures = [...ruleFilter.features].sort() ?? []}
          <div class="mt-2">
            <div class="text-slate-800 text-sm">Subgroups with features:</div>
            <!-- <select
              class="flat-select text-sm"
              value={!!ruleFilter.features && ruleFilter.features.length > 0
                ? ruleFilter.features[0]
                : ''}
              on:change={(e) =>
                dispatch(
                  'change',
                  Object.assign(deepCopy(ruleFilter ?? {}), {
                    features:
                      e.target?.value.length > 0 ? [e.target?.value] : [],
                  })
                )}
            >
              <option value=""></option>
              {#each Object.entries(valueNames) as featureEntry}
                <option value={featureEntry[0]}>{featureEntry[1][0]}</option>
              {/each}
            </select> -->
            <ActionMenuButton
              buttonClass="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1.5 w-full mt-1"
              buttonTitle="Select features to {ruleFilter.logic ==
              RuleFilterType.exclude
                ? 'exclude'
                : 'require'}"
              buttonActiveClass="text-slate-800 outline outline-blue-400"
              singleClick={false}
              ><span slot="button-content"
                >{#if selectedFeatures.length == 0}Select features{:else}{selectedFeatures[0]}
                  {#if selectedFeatures.length > 1}and {selectedFeatures.length -
                      1} others{/if}{/if}
                <Fa
                  icon={faChevronDown}
                  style="transform: translateY(-2px); font-size: 0.6em;"
                  class="inline"
                /></span
              >
              <div slot="options">
                <SearchableMultiselect
                  choices={Object.keys(allowedValues)
                    .sort()
                    .map((item) => ({ value: item, name: item }))}
                  selected={ruleFilter.features ?? []}
                  on:change={(e) => {
                    console.log('change', e.detail);
                    dispatch(
                      'change',
                      Object.assign(deepCopy(ruleFilter ?? {}), {
                        features: e.detail,
                      })
                    );
                  }}
                />
              </div></ActionMenuButton
            >
          </div>
          {#if !!ruleFilter.features && ruleFilter.features.length > 0}
            {@const selectedValues = [...ruleFilter.values].sort() ?? []}
            <div class="mt-2">
              <div class="text-slate-800 text-sm">Taking values:</div>
              <ActionMenuButton
                buttonClass="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1.5 w-full mt-1"
                buttonTitle="Select features to {ruleFilter.logic ==
                RuleFilterType.exclude
                  ? 'exclude'
                  : 'require'}"
                buttonActiveClass="text-slate-800 outline outline-blue-400"
                singleClick={false}
                ><span slot="button-content"
                  >{#if selectedValues.length == 0}(any value){:else}{selectedValues[0]}
                    {#if selectedValues.length > 1}and {selectedValues.length -
                        1} others{/if}{/if}
                  <Fa
                    icon={faChevronDown}
                    style="transform: translateY(-2px); font-size: 0.6em;"
                    class="inline"
                  /></span
                >
                <div slot="options">
                  <SearchableMultiselect
                    choices={valueSetForFeatures(ruleFilter.features ?? [])
                      .sort()
                      .map((item) => ({ value: item, name: item }))}
                    selected={ruleFilter.values ?? []}
                    on:change={(e) => {
                      console.log('change', e.detail);
                      dispatch(
                        'change',
                        Object.assign(deepCopy(ruleFilter ?? {}), {
                          values: e.detail,
                        })
                      );
                    }}
                  />
                </div></ActionMenuButton
              >
            </div>
          {/if}
        {/if}
      {:else if ruleFilter.type == 'combination'}
        <div class="function-container">
          <svelte:self
            ruleFilter={ruleFilter.lhs}
            {allowedValues}
            on:change={(e) =>
              dispatch(
                'change',
                Object.assign(deepCopy(ruleFilter ?? {}), { lhs: e.detail })
              )}
            on:delete={(e) => dispatch('change', ruleFilter.rhs)}
          />
        </div>
        <select
          class="flat-select text-sm"
          value={ruleFilter.combination}
          on:change={(e) =>
            dispatch(
              'change',
              Object.assign(deepCopy(ruleFilter ?? {}), {
                combination: e.target.value,
              })
            )}
        >
          {#each Combinations as combination}
            <option value={combination.value}>{combination.name}</option>
          {/each}
        </select>
        <div class="function-container">
          <svelte:self
            ruleFilter={ruleFilter.rhs}
            {allowedValues}
            on:change={(e) =>
              dispatch(
                'change',
                Object.assign(deepCopy(ruleFilter ?? {}), { rhs: e.detail })
              )}
            on:delete={(e) => dispatch('change', ruleFilter.lhs)}
          />
        </div>
      {/if}
    </div>
  {/if}
{/if}

<style>
  .function-container {
    @apply ml-2 pl-2 border-l-2 border-slate-300 my-2 flex items-center;
  }
</style>
