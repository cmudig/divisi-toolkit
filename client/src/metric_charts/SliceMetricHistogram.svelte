<script lang="ts">
  import { format, precisionFixed } from 'd3-format';
  import { LayerCake, Svg, Html } from 'layercake';

  import Column from './Column.svelte';
  import { scaleBand, scaleLog, scaleLinear } from 'd3-scale';
  import BarTooltip from './BarTooltip.svelte';
  import type { Histogram } from '../utils/slice.type';
  import { onMount } from 'svelte';
  import AxisX from './AxisX.svelte';

  export let width: number | null = 100;

  export let histValues: Histogram;
  export let mean = null;
  export let title: string | null = null;
  export let horizontalLayout = false;

  export let noParent = false;

  export let color = '#3b82f6';

  let data: Array<{ bin: number; count: number }> = [];
  let histBins: Array<number> = [];

  $: if (!!histValues) {
    data = Object.entries(histValues).map((v) => ({
      bin: parseFloat(v[0]),
      count: <number>v[1],
    }));
    data.sort((a, b) => a.bin - b.bin);
    histBins = data.map((v) => v.bin);
  } else {
    data = [];
    histBins = [];
  }

  let loaded = false;
  onMount(() => setTimeout(() => (loaded = true), 0));

  let hoveredBin: number;

  let binFormat = format('.3g');
  let countFormat = format(',');
  $: if (data.length > 0) {
    let precision = data.reduce(
      (curr, val, i) =>
        i > 0 ? Math.min(curr, Math.abs(val.bin - data[i - 1].bin)) : curr,
      1e9
    );
    binFormat = format(`.${precisionFixed(precision)}f`);
  }

  function makeTooltipText(d) {
    return `${binFormat(d.bin)}: ${countFormat(d.count)} instances`;
  }
</script>

<!-- duplicate template for whether or not a parent element is needed -->
{#if noParent}
  {#if !!title}
    <div class="font-bold text-xs truncate text-right">
      {title}
    </div>
  {/if}
  <div style="width: {width == null ? '100%' : `${width}px`}; height: 16px;">
    {#if loaded && histBins.length > 0}
      <LayerCake
        padding={{ top: 0, right: 0, bottom: 0, left: 0 }}
        x="bin"
        y="count"
        xScale={scaleBand().round(true)}
        xDomain={histBins}
        yScale={scaleLinear()}
        yDomain={[0, null]}
        {data}
        custom={{
          hoveredGet: (d) => d.bin == hoveredBin,
        }}
      >
        <Svg>
          <Column
            fill={color}
            on:hover={(e) =>
              (hoveredBin = e.detail != null ? e.detail.bin : null)}
          />
          <AxisX ticks={[]} baseline gridlines={false} />
        </Svg>
      </LayerCake>
    {/if}
  </div>
  <div class:mt-1={!horizontalLayout} class="text-xs text-slate-800 truncate">
    {#if !$$slots.caption}
      {#if hoveredBin != null}
        {makeTooltipText(data.find((d) => d.bin == hoveredBin))}
      {:else if mean != null}
        M = <strong>{format('.3')(mean)}</strong>
      {:else}
        &nbsp;{/if}
    {:else}
      <slot name="caption" />
    {/if}
  </div>
{:else}
  <div
    class:flex={horizontalLayout}
    class:my-0.5={horizontalLayout}
    class="gap-1 items-center"
  >
    {#if !!title}
      <div class="font-bold text-xs truncate text-right" style="width: 96px;">
        {title}
      </div>
    {/if}
    <div style="width: {width == null ? '100%' : `${width}px`}; height: 16px;">
      {#if loaded && histBins.length > 0}
        <LayerCake
          padding={{ top: 0, right: 0, bottom: 0, left: 0 }}
          x="bin"
          y="count"
          xScale={scaleBand().round(true)}
          xDomain={histBins}
          yScale={scaleLinear()}
          yDomain={[0, null]}
          {data}
          custom={{
            hoveredGet: (d) => d.bin == hoveredBin,
          }}
        >
          <Svg>
            <Column
              fill={color}
              on:hover={(e) =>
                (hoveredBin = e.detail != null ? e.detail.bin : null)}
            />
            <AxisX ticks={[]} baseline gridlines={false} />
          </Svg>
        </LayerCake>
      {/if}
    </div>
    <div class:mt-1={!horizontalLayout} class="text-xs text-slate-800 truncate">
      {#if !$$slots.caption}
        {#if hoveredBin != null}
          {makeTooltipText(data.find((d) => d.bin == hoveredBin))}
        {:else if mean != null}
          M = <strong>{format('.3')(mean)}</strong>
        {:else}
          &nbsp;{/if}
      {:else}
        <slot name="caption" />
      {/if}
    </div>
  </div>
{/if}
