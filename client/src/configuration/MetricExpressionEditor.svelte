<script lang="ts">
  import TextareaAutocomplete from '../utils/TextareaAutocomplete.svelte';

  export let metricExpressionRequest: {
    expression: string;
    metrics: string[];
  } | null = null;
  export let metricExpressionResponse: {
    success: boolean;
    error?: string;
  } | null = null;

  export let metricNames: string[] = [];
  export let expression: string = '';
  export let placeholder: string = '';
  export let disabled: boolean = false;

  let oldExpression: string = '';
  let evalTimeout: NodeJS.Timeout | null = null;
  $: if (oldExpression !== expression && !disabled) {
    if (!!evalTimeout) clearTimeout(evalTimeout);
    evalTimeout = setTimeout(() => {
      metricExpressionRequest = { expression, metrics: metricNames };
    }, 2000);
    oldExpression = expression;
  }

  let editor: HTMLElement;

  export function getAutocompleteOptions(
    searchQuery: string,
    fullPrefix: string
  ): { value: string; type: string }[] {
    if (metricNames.length == 0) return [];

    let result = [
      ...metricNames
        .filter((v) =>
          v.toLocaleLowerCase().startsWith(searchQuery.toLocaleLowerCase())
        )
        .sort((a, b) => a.length - b.length),
      ...metricNames
        .filter(
          (v) =>
            v.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) &&
            !v.toLocaleLowerCase().startsWith(searchQuery.toLocaleLowerCase())
        )
        .sort((a, b) => a.length - b.length),
    ].map((v) => ({ value: v, type: 'metric' }));
    console.log(result);
    return result;
  }

  export function performAutocomplete(
    item: { value: string; type: string },
    trigger: string,
    fullPrefix: string,
    fullSuffix: string,
    replaceRegion: string
  ): string {
    if (item.type == 'metric') {
      return `{${item.value}}`;
    }
  }
</script>

<div class="relative overflow-visible w-full h-12">
  <textarea
    bind:this={editor}
    bind:value={expression}
    {placeholder}
    {disabled}
    class="absolute top-0 left-0 w-full h-full flat-text-input cursor-text"
    class:opacity-60={disabled}
  />
  <TextareaAutocomplete
    ref={editor}
    resolveFn={getAutocompleteOptions}
    replaceFn={performAutocomplete}
    menuItemTextFn={(v) => v.value}
    maxItems={3}
    menuItemClass="p-2"
    triggers={['{']}
    delimiterPattern={/[\s\(\[\]\)!~](?=[\{])/}
    on:replace={(e) => {
      expression = e.detail;
    }}
  />
  <!-- <div
    class="absolute w-full left-0 rounded border border-slate-200 shadow z-10 py-1 bg-white"
    style="top: calc(100% + 4px);"
  >
    {#each metricNames as metric}
      <a
        role="menuitem"
        class="block w-full text-slate-700 px-2 py-0.5 hover:bg-slate-100 hover:text-slate-700"
        href="#"
        on:click={(e) => {
          console.log(metric);
        }}>{metric}</a
      >
    {/each}
  </div> -->
</div>
{#if expression.length > 0 && metricExpressionRequest?.expression == expression && !!metricExpressionResponse}
  {#if metricExpressionResponse.success}
    <div class="mt-1 text-xs text-green-600">
      Expression evaluated successfully.
    </div>
  {:else}
    <div class="mt-1 text-xs text-red-600">
      Evaluation error: {metricExpressionResponse.error ?? 'unknown'}.
    </div>
  {/if}
{/if}
