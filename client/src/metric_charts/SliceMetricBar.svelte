<script lang="ts">
  import { format } from 'd3-format';
  import { interpolateViridis, schemeCategory10 } from 'd3-scale-chromatic';
  import TableCellBar from './TableCellBar.svelte';
  import { cumulativeSum } from '../utils/utils';

  export let width = 100;
  export let scale = null;

  export let value = 0.0;
  export let values = null;
  export let showFullBar = false;

  export let colors = schemeCategory10;
  export let hoverable = false;

  let hoveringIndex = null;

  let offsets = [];
  $: if (values != null) {
    offsets = cumulativeSum(values);
  } else offsets = [];
</script>

<div
  class="parent-bar relative mb-1 rounded-full overflow-hidden"
  style="width: {width}px; height: 6px;"
>
  {#if showFullBar}
    <TableCellBar
      absolutePosition
      maxWidth={width}
      fraction={1.0}
      color="#e5e7eb"
      {hoverable}
      on:mouseenter={(e) => (hoveringIndex = -1)}
      on:mouseleave={(e) => (hoveringIndex = null)}
    />
  {/if}
  {#if values != null}
    {#each values as v, i}
      <TableCellBar
        absolutePosition
        maxWidth={width}
        leftFraction={i > 0 ? (scale || ((x) => x))(offsets[i - 1]) : 0}
        fraction={(scale || ((x) => x))(v)}
        color={colors[i]}
        rounded={false}
        {hoverable}
        on:mouseenter={(e) => (hoveringIndex = i)}
        on:mouseleave={(e) => (hoveringIndex = null)}
      />
    {/each}
  {:else}
    <TableCellBar
      absolutePosition
      maxWidth={width}
      fraction={(scale || ((v) => v))(value)}
      colorScale={interpolateViridis}
      {hoverable}
      on:mouseenter={(e) => (hoveringIndex = 0)}
      on:mouseleave={(e) => (hoveringIndex = null)}
    />
  {/if}
</div>
<div class="text-xs text-slate-800">
  {#if !$$slots.caption}
    {format('.3')(value)}
  {:else}
    <slot name="caption" {hoveringIndex} />
  {/if}
</div>
