<!--
  @component
  Generates an SVG x-axis. This component is also configured to detect if your x-scale is an ordinal scale. If so, it will place the markers in the middle of the bandwidth.
 -->
<script>
  import { getContext } from 'svelte';
  const { width, height, xRange, padding, xScale, xDomain, yRange } =
    getContext('LayerCake');

  /** @type {Boolean} [gridlines=true] - Extend lines from the ticks into the chart space */
  export let gridlines = true;

  /** @type {Boolean} [tickMarks=false] - Show a vertical mark for each tick. */
  export let tickMarks = false;

  /** @type {Boolean} [baseline=false]  Show a solid line at the bottom. */
  export let baseline = false;

  /** @type {Boolean} [snapTicks=false] - Instead of centering the text on the first and the last items, align them to the edges of the chart. */
  export let snapTicks = false;

  /** @type {Function} [formatTick=d => d] - A function that passes the current tick value and expects a nicely formatted value in return. */
  export let formatTick = (d) => d;

  /** @type {Number|Array|Function} [ticks] - If this is a number, it passes that along to the [d3Scale.ticks](https://github.com/d3/d3-scale) function. If this is an array, hardcodes the ticks to those values. If it's a function, passes along the default tick values and expects an array of tick values in return. If nothing, it uses the default ticks supplied by the D3 function. */
  export let ticks = undefined;

  /** @type {Number} [xTick=0] - TK */
  export let xTick = 0;

  /** @type {Number} [yTick=16] - The distance from the baseline to place each tick value. */
  export let yTick = 16;

  export let label = '';
  export let labelLeft = false;

  export let color = '#333';

  export let angle = false;

  $: isBandwidth = typeof $xScale.bandwidth === 'function';

  $: tickVals = Array.isArray(ticks)
    ? ticks
    : isBandwidth
      ? $xScale.domain()
      : typeof ticks === 'function'
        ? ticks($xScale.ticks())
        : $xScale.ticks(ticks);

  function textAnchor(x) {
    if (angle) return 'end';

    if (snapTicks === true) {
      if (x == $xDomain[0]) {
        return 'start';
      }
      if (x == $xDomain[1]) {
        return 'end';
      }
    }
    return 'middle';
  }
</script>

<g class="axis x-axis" class:snapTicks>
  {#each tickVals as tick, i}
    <g
      class="tick tick-{i}"
      transform="translate({$xScale(tick)},{Math.max($yRange[0], $yRange[1])})"
    >
      {#if gridlines !== false}
        <line
          class:gridline={tick != 0}
          class:baseline={tick == 0}
          y1={$height * -1}
          y2="0"
          x1="0"
          x2="0"
          stroke-width={tick == 0 ? 2 : 1}
        />
      {/if}
      {#if tickMarks === true}
        <line
          class="tick-mark"
          y1={0}
          y2={6}
          x1={xTick || isBandwidth ? $xScale.bandwidth() / 2 : 0}
          x2={xTick || isBandwidth ? $xScale.bandwidth() / 2 : 0}
        />
      {/if}
      <text
        x={xTick || isBandwidth ? $xScale.bandwidth() / 2 : 0}
        y={yTick - (angle ? 4 : 0)}
        dx=""
        dy=""
        transform={angle ? 'rotate(-45)' : ''}
        style="fill: {color};"
        text-anchor={textAnchor(tick)}>{formatTick(tick)}</text
      >
    </g>
  {/each}
  {#if baseline === true}
    <line
      class="baseline"
      y1={$height + 0.5}
      y2={$height + 0.5}
      x1="0"
      x2={$width}
    />
  {/if}
  {#if !!label}
    <text
      x={labelLeft ? $xRange[0] - 4 - 12 : $width * 0.5}
      y={$height}
      dy={labelLeft ? '18px' : '36px'}
      text-anchor={labelLeft ? 'end' : 'middle'}
      style="fill: {color};"
      class="axis-label">{@html label}</text
    >
  {/if}
</g>

<style>
  .tick {
    font-size: 0.725em;
    font-weight: 400;
  }

  line,
  .tick line {
    stroke: #aaa;
    stroke-dasharray: 2;
  }

  .tick .tick-mark,
  .baseline {
    stroke-dasharray: 0 !important;
  }
  /* This looks slightly better */
  .axis.snapTicks .tick:last-child text {
    transform: translateX(3px);
  }
  .axis.snapTicks .tick.tick-0 text {
    transform: translateX(-3px);
  }

  .axis-label {
    font-size: 0.8em;
    fill: #333;
    font-weight: 500;
  }
</style>
