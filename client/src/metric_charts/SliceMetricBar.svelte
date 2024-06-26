<script lang="ts">
  import { format } from 'd3-format';
  import { interpolateViridis, schemeCategory10 } from 'd3-scale-chromatic';
  import TableCellBar from './TableCellBar.svelte';
  import { cumulativeSum } from '../utils/utils';

  export let width: number | null = 100;
  export let scale = null;

  export let value = 0.0;
  export let values = null;
  export let showFullBar = false;
  export let showTooltip = true;

  export let colors = schemeCategory10;
  export let colorScale = interpolateViridis;
  export let color: string | null = null;
  export let fullBarColor: string = '#e5e7eb';
  export let hoverable = false;
  export let title: string | null = null;
  export let horizontalLayout = false;

  let hoveringIndex = null;

  let offsets = [];
  $: if (values != null) {
    offsets = cumulativeSum(values);
  } else offsets = [];
</script>

<div class:flex={horizontalLayout} class="items-center gap-1">
  {#if !!title}
    <div class="font-bold text-xs truncate text-right" style="width: 96px;">
      {title}
    </div>
  {/if}
  <div
    class="parent-bar relative rounded-full overflow-hidden"
    class:mb-1={!horizontalLayout}
    style="width: {width == null ? '100%' : `${width}px`}; height: 6px;"
  >
    {#if showFullBar}
      <TableCellBar
        absolutePosition
        fraction={1.0}
        color={fullBarColor}
        {hoverable}
        on:mouseenter={(e) => (hoveringIndex = -1)}
        on:mouseleave={(e) => (hoveringIndex = null)}
      />
    {/if}
    {#if values != null}
      {#each values as v, i}
        <TableCellBar
          absolutePosition
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
        fraction={(scale || ((v) => v))(value)}
        colorScale={!!color ? () => color : colorScale}
        {hoverable}
        on:mouseenter={(e) => (hoveringIndex = 0)}
        on:mouseleave={(e) => (hoveringIndex = null)}
      />
    {/if}
  </div>
  {#if showTooltip}
    <div class="text-xs text-slate-800">
      {#if !$$slots.caption}
        {format('.3')(value)}
      {:else}
        <slot name="caption" {hoveringIndex} />
      {/if}
    </div>
  {/if}
</div>
