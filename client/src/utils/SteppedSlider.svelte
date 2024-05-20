<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import * as d3 from 'd3';

  const dispatch = createEventDispatcher();

  export let min = 0.5;
  export let max = 2.0;
  export let step = 0.5;
  export let value: number = 0.5;
  export let disabled: boolean = false;
</script>

<div
  class={$$props.class ?? 'w-32'}
  style="{$$props.style ?? ''} height: 18px;"
>
  {#each [...d3.range(min, max, step), max] as stopValue}
    <button
      on:click|stopPropagation={(e) => {
        dispatch('change', stopValue);
      }}
      {disabled}
      class="{value >= stopValue ? 'bg-blue-600' : 'bg-slate-200'} {value !=
      stopValue
        ? value >= stopValue
          ? 'hover:bg-blue-800'
          : 'hover:bg-slate-300'
        : ''} rounded-none h-full border-slate-400"
      class:opacity-50={disabled}
      class:border-r={stopValue < max}
      class:rounded-l={stopValue == min}
      class:rounded-r={stopValue == max}
      style="width: {100 / ((max - min) / step + 1)}%;"
    ></button>
  {/each}
</div>

<style>
</style>
