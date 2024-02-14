<!--
  @component
  Generates an SVG column chart.
 -->
<script>
  import { createEventDispatcher, getContext } from 'svelte';
  import { onMount } from 'svelte';

  const dispatch = createEventDispatcher();

  const {
    data,
    xGet,
    yGet,
    x,
    yRange,
    xScale,
    y,
    height,
    zGet,
    zScale,
    z,
    custom,
  } = getContext('LayerCake');

  /** @type {String} [fill='#00e047'] - The shape's fill color. */
  export let fill = '#00e047';

  /** @type {Boolean} [false] - Show the numbers for each column */
  export let showLabels = false;

  $: columnWidth = (d) => {
    const vals = $xGet(d);
    return Math.abs(vals[1] - vals[0]);
  };

  $: columnHeight = (d) => {
    return $yRange[0] - $yGet(d);
  };

  const hoverStroke = '#333';
  const hoverStrokeWidth = 1;
  const selectStrokeWidth = 3;

  let hoveredIndex = null;

  // Disable transition until after loaded
  onMount(() => {
    setTimeout(() => (loaded = true), 100);
  });

  let loaded = false;
</script>

<g class="column-group">
  {#each $data as d, i}
    {@const colHeight = columnHeight(d)}
    {@const xGot = $xGet(d)}
    {@const xPos = Array.isArray(xGot) ? xGot[0] : xGot}
    {@const colWidth = $xScale.bandwidth ? $xScale.bandwidth() : columnWidth(d)}
    {@const yValue = $y(d)}
    <rect
      class="group-rect"
      class:animated={loaded}
      data-id={i}
      data-range={$x(d)}
      data-count={yValue}
      x={xPos}
      y={$yGet(d)}
      width={colWidth}
      height={colHeight}
      {fill}
      stroke={hoveredIndex == i ? hoverStroke : 'none'}
      stroke-width={hoveredIndex == i ? hoverStrokeWidth : 0}
    />
    <rect
      class="hover-zone"
      x={xPos}
      y={0}
      width={colWidth}
      height={$height}
      fill="none"
      stroke="none"
      on:mouseenter={() => {
        hoveredIndex = i;
        dispatch('hover', d);
      }}
      on:mouseleave={() => {
        hoveredIndex = null;
        dispatch('hover', null);
      }}
    />
    {#if showLabels && yValue}
      <text
        x={xPos + colWidth / 2}
        y={$height - colHeight - 5}
        text-anchor="middle">{yValue}</text
      >
    {/if}
  {/each}
</g>

<style>
  text {
    font-size: 12px;
  }
  .hover-zone {
    pointer-events: all;
  }

  .animated {
    @apply transition-all duration-300 ease-in-out;
  }
</style>
