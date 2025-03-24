<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Checkbox from './Checkbox.svelte';
  import { areObjectsEqual } from './utils';

  const dispatch = createEventDispatcher();

  export let choices: { name: string; value: any }[] = [];
  export let selected: any[] = [];

  export let query: string = '';
  export let visibleChoices: { name: string; value: any }[] = [];

  function toggleValueInList<T>(arr: T[], element: T): T[] {
    let idx = arr.indexOf(element);
    if (idx >= 0) return [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    else return [...arr, element];
  }

  let queryBox: HTMLInputElement;
  $: if (!!queryBox) queryBox.focus();

  $: if (query.length > 0) {
    let queryLower = query.toLocaleLowerCase();
    visibleChoices = choices.filter((c) =>
      c.name.toLocaleLowerCase().includes(queryLower)
    );
  } else visibleChoices = choices;
</script>

<div class="flex items-center px-2 pt-1 pb-2 w-full shrink-0">
  <input
    type="text"
    class="flat-text-input flex-auto text-sm"
    style="padding-top: 0.4rem; padding-bottom: 0.4rem;"
    placeholder="Find a feature..."
    bind:this={queryBox}
    bind:value={query}
  />
</div>
<div class="flex items-center px-4 py-2 text-sm shrink-0">
  <Checkbox
    checked={areObjectsEqual(
      selected,
      visibleChoices.map((c) => c.value)
    )}
    indeterminate={selected.length > 0 &&
      !areObjectsEqual(
        selected,
        visibleChoices.map((c) => c.value)
      )}
    on:change={(e) =>
      dispatch('change', e.detail ? visibleChoices.map((c) => c.value) : [])}
  />
  <div class="text-slate-500 flex-auto text-left px-2 py-1">
    {#if selected.length > 0}
      {selected.length} of
    {/if}
    {visibleChoices.length} feature{visibleChoices.length != 1 ? 's' : ''}
  </div>
</div>
<div>
  {#each visibleChoices as choice}
    <div>
      <a
        class="w-full items-center gap-2"
        style="display: flex;"
        href="#"
        on:click={() =>
          dispatch('change', toggleValueInList(selected, choice.value))}
      >
        <Checkbox
          checked={selected.includes(choice.value)}
          on:change={() =>
            dispatch('change', toggleValueInList(selected, choice.value))}
        />
        <div class="flex-auto">{choice.name}</div>
      </a>
    </div>
  {/each}
</div>
