<script lang="ts">
  import { format, precisionFixed } from 'd3-format';
  import { LayerCake, Svg, Html } from 'layercake';

  import Column from './Column.svelte';
  import { scaleBand, scaleLog, scaleLinear } from 'd3-scale';
  import BarTooltip from './BarTooltip.svelte';
  import type { Histogram } from '../slice.type';

  export let width = 100;

  export let histValues: Histogram;
  export let mean = null;

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

<div style="width: {width}px; height: 28px;">
  <LayerCake
    padding={{ top: 0, right: 0, bottom: 0, left: 0 }}
    x="bin"
    y="count"
    xScale={scaleBand().paddingInner([0.05]).round(true)}
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
        fill="#3b82f6"
        on:hover={(e) => (hoveredBin = e.detail != null ? e.detail.bin : null)}
      />
    </Svg>
  </LayerCake>
</div>
<div class="mt-1 text-xs text-slate-800">
  {#if !$$slots.caption}
    {#if hoveredBin != null}
      {makeTooltipText(data.find((d) => d.bin == hoveredBin))}
    {:else if mean != null}
      M = {format('.3')(mean)}
    {:else}
      &nbsp;{/if}
  {:else}
    <slot name="caption" />
  {/if}
</div>
