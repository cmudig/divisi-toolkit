<script lang="ts">
  import { format } from 'd3-format';
  import { schemeTableau10 } from 'd3-scale-chromatic';
  import { LayerCake, Svg, Html } from 'layercake';
  import { scaleOrdinal, scaleLinear } from 'd3-scale';
  import { range } from 'd3-array';

  import BarSegment from './BarSegment.svelte';

  export let width: number | null = 100;
  export let title: string | null = null;
  export let horizontalLayout = false;
  export let noParent: boolean = false;
  export let colorScale: string[] | ((v: number) => string) = schemeTableau10;

  export let counts: { [key: string]: number } = null;

  export let order: Array<string> = [];

  interface Datum {
    name: string;
    start: number;
    end: number;
    index: number;
    count: number;
  }
  let data: Array<Datum> = [];

  $: if (!!counts && order.length > 0) {
    let totalCount = Object.values(counts).reduce((curr, val) => curr + val, 0);
    let runningCount = 0;
    data = order.map((d, i) => {
      let curr = runningCount;
      runningCount += counts[d] || 0;
      return {
        start: curr / totalCount,
        end: runningCount / totalCount,
        index: i,
        name: d,
        count: counts[d] || 0,
      };
    });
  } else {
    data = [];
  }

  let hoveredIndex: number;

  let countFormat = format(',');
  let percentFormat = format('.1~%');

  let totalCount: number = 1;
  $: if (!!counts)
    totalCount = Object.values(counts).reduce((a, b) => a + b, 0);
  else totalCount = 1;

  function makeTooltipText(d: Datum) {
    return `<strong>${percentFormat(d.count / totalCount)}</strong> ${d.name}`;
  }

  let mostCommonDatum: Datum | null = null;
  $: if (data.length > 0)
    mostCommonDatum = data.reduce(
      (prev, curr) => (prev.count > curr.count ? prev : curr),
      data[0]
    );
  else mostCommonDatum = null;
</script>

<!-- Duplicate template for whether or not a parent element is needed -->
{#if noParent}
  {#if !!title}
    <div class="font-bold text-xs truncate text-right">
      {title}
    </div>
  {/if}
  <div
    style="width: {width == null ? '100%' : `${width}px`}; height: 6px;"
    class="inline-block rounded overflow-hidden"
  >
    <LayerCake
      padding={{ top: 0, right: 0, bottom: 0, left: 0 }}
      x="start"
      y="index"
      z="end"
      xScale={scaleLinear()}
      xDomain={[0, 1]}
      xRange={[0, width ?? 1]}
      yScale={scaleOrdinal()}
      yDomain={range(counts.length)}
      yRange={Array.isArray(colorScale)
        ? colorScale
        : range(0, 1.00001, 1 / (data.length - 1)).map((v) => colorScale(v))}
      {data}
      custom={{
        hoveredGet: (d) => d.index == hoveredIndex,
      }}
    >
      <Html>
        <BarSegment
          on:hover={(e) => (hoveredIndex = e.detail ? e.detail.index : null)}
        />
      </Html>
    </LayerCake>
  </div>
  <div class="text-xs text-slate-800">
    {#if $$slots.caption}
      <slot name="caption" />
    {:else if hoveredIndex != null}
      {@html makeTooltipText(data[hoveredIndex])}
    {:else if !!mostCommonDatum}
      {@html makeTooltipText(mostCommonDatum)}
    {/if}
  </div>
{:else}
  <div class:flex={horizontalLayout} class="gap-1 items-center">
    {#if !!title}
      <div class="font-bold text-xs truncate text-right" style="width: 84px;">
        {title}
      </div>
    {/if}
    <div
      style="width: {width == null ? '100%' : `${width}px`}; height: 6px;"
      class="inline-block rounded overflow-hidden"
    >
      <LayerCake
        padding={{ top: 0, right: 0, bottom: 0, left: 0 }}
        x="start"
        y="index"
        z="end"
        xScale={scaleLinear()}
        xDomain={[0, 1]}
        xRange={[0, width ?? 1]}
        yScale={scaleOrdinal()}
        yDomain={range(counts.length)}
        yRange={schemeTableau10}
        {data}
        custom={{
          hoveredGet: (d) => d.index == hoveredIndex,
        }}
      >
        <Html>
          <BarSegment
            on:hover={(e) => (hoveredIndex = e.detail ? e.detail.index : null)}
          />
        </Html>
      </LayerCake>
    </div>
    <div class="text-xs text-slate-800">
      {#if $$slots.caption}
        <slot name="caption" />
      {:else if hoveredIndex != null}
        {@html makeTooltipText(data[hoveredIndex])}
      {:else if !!mostCommonDatum}
        {@html makeTooltipText(mostCommonDatum)}
      {/if}
    </div>
  </div>
{/if}
