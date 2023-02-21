<script lang="ts">
  import { format } from 'd3-format';
  import { interpolateViridis } from 'd3-scale-chromatic';
  import TableCellBar from './TableCellBar.svelte';

  export let width = 100;
  export let scale = null;

  export let value = 0.0;
</script>

<TableCellBar
  maxWidth={width}
  fraction={(scale || ((v) => v))(value)}
  colorScale={interpolateViridis}
/>
<div class="text-xs text-slate-800">
  {#if !$$slots.caption}
    {format('.3')(value)}
  {:else}
    <slot name="caption" />
  {/if}
</div>
