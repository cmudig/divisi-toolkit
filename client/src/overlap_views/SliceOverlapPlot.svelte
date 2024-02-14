<script lang="ts">
  import { LayerCake, Canvas } from 'layercake';
  import ForceScatterPlot from './ForceScatterPlot.svelte';
  import * as d3 from 'd3';

  export let intersectionCounts = [];
  export let labels = [];
  export let numPoints = 500;
  export let selectedIndexes = null;
  export let centerYRatio = 0.5;
  export let centerXRatio = 0.5;

  export let colorByError = false;
  export let colorBySlice = true;

  export let errorKey;

  export let hoveredSlices = null;
  let hoveredMousePosition = null;
  let hoveredSliceInfo = null;

  let sliceCount = 0;

  let simulationProgress = 0.0;

  let pointData = [];

  let colorScale = null;

  let numPerPoint;

  $: if (intersectionCounts.length > 0) {
    sliceCount = intersectionCounts[0].slices.length;

    let totalPoints = intersectionCounts.reduce(
      (prev, curr) => prev + curr.count,
      0
    );
    numPerPoint = Math.pow(2, Math.floor(Math.log2(totalPoints / numPoints)));

    let maxNumSlices = intersectionCounts.reduce(
      (prev, curr) =>
        Math.max(
          prev,
          curr.slices.reduce((a, b) => a + b, 0)
        ),
      0
    );

    pointData = intersectionCounts
      .map((item) => {
        let errors = Math.round(item[errorKey] / numPerPoint);
        let noErrors = Math.round((item.count - item[errorKey]) / numPerPoint);
        return [
          ...Array.apply(null, Array(noErrors)).map((_) => ({
            slices: item.slices,
            error: false,
          })),
          ...Array.apply(null, Array(errors)).map((_) => ({
            slices: item.slices,
            error: true,
          })),
        ];
      })
      .flat();
    colorScale = d3
      .scaleSequential(d3.interpolateSpectral)
      // .scaleOrdinal(d3.schemeCategory10)
      // .domain(d3.range(1, intersectionCounts[0].slices.length + 1));
      .domain([1, maxNumSlices]);
  } else {
    pointData = [];
  }

  $: if (hoveredSlices != null)
    hoveredSliceInfo = intersectionCounts.find((item) =>
      item.slices.every((s, i) => hoveredSlices[i] == s)
    );
  else if (selectedIndexes != null)
    hoveredSliceInfo = intersectionCounts
      .filter((item) => selectedIndexes.some((s, i) => item.slices[i] && s))
      .reduce(
        (prev, curr) => ({
          count: prev.count + curr.count,
          [errorKey]: prev[errorKey] + curr[errorKey],
        }),
        { count: 0, [errorKey]: 0 }
      );
  else hoveredSliceInfo = null;

  function handleMousePosition(e) {
    let rect = e.target.getBoundingClientRect();
    hoveredMousePosition = [e.clientX - rect.left, e.clientY - rect.top];
  }

  function color(item, selectedSlices, selIndexes) {
    let numSlices = item.slices.reduce((prev, curr) => prev + curr, 0);
    if (colorBySlice) {
      if (selectedSlices != null) {
        let allEqual = selectedSlices.every((s, i) => item.slices[i] == s);
        if (allEqual) return '#94a3b8';
        return null;
      } else if (selIndexes != null) {
        if (selIndexes.some((s, i) => item.slices[i] && s)) return '#94a3b8';
        return null;
      }
      return '#94a3b8';
    } else if (colorByError) {
      if (selectedSlices != null) {
        let allEqual = selectedSlices.every((s, i) => item.slices[i] == s);
        if (allEqual) return item.error ? '#c2410c' : '#6ee7b7';
        return '#e2e8f0';
      } else if (selIndexes != null) {
        if (selIndexes.some((s, i) => item.slices[i] && s))
          return item.error ? '#c2410c' : '#6ee7b7';
        return '#e2e8f0';
      }
      return item.error ? '#c2410c' : '#6ee7b7';
    }
    if (selectedSlices != null) {
      let allEqual = selectedSlices.every((s, i) => item.slices[i] == s);
      if (allEqual) return numSlices == 0 ? '#94a3b8' : colorScale(numSlices);
      return '#e2e8f0';
    } else if (selIndexes != null) {
      if (selIndexes.some((s, i) => item.slices[i] && s))
        return numSlices == 0 ? '#94a3b8' : colorScale(numSlices);
      return '#e2e8f0';
    }
    return numSlices == 0 ? '#94a3b8' : colorScale(numSlices);
  }
</script>

{#if intersectionCounts.length > 0}
  <div class="w-full h-full relative">
    <LayerCake
      padding={{ top: 0, right: 0, bottom: 0, left: 0 }}
      data={pointData}
    >
      <Canvas>
        <ForceScatterPlot
          bind:simulationProgress
          bind:hoveredSlices
          {centerYRatio}
          {centerXRatio}
          {colorByError}
          {colorBySlice}
          {hoveredMousePosition}
          colorFn={(item) =>
            color(
              item,
              hoveredSlices != null ? hoveredSlices : null,
              selectedIndexes
            )}
        />
      </Canvas>
    </LayerCake>
    <div
      class="absolute top-0 left-0 bottom-0 right-0 z-1 pointer-events-auto"
      on:mouseenter={handleMousePosition}
      on:mousemove={handleMousePosition}
      on:mouseleave={() => (hoveredMousePosition = null)}
    />

    {#if simulationProgress > 0.0}
      <div class="absolute bg-white/90 top-0 left-0 right-0 bottom-0">
        <div class="text-sm">Calculating layout...</div>
        <div
          class="w-full bg-slate-300 rounded-full h-1.5 mt-1 indigo:bg-slate-700"
        >
          <div
            class="bg-blue-600 h-1.5 rounded-full indigo:bg-indigo-200 duration-100"
            style="width: {(simulationProgress * 100).toFixed(1)}%"
          />
        </div>
      </div>
    {/if}
    <div class="absolute bottom-0 right-0 p-3 text-gray-700">
      One dot = {numPerPoint} points
    </div>
    {#if hoveredSliceInfo != null}
      <div class="absolute bottom-0 left-0 p-3 text-gray-600">
        {hoveredSliceInfo.count} instances, {hoveredSliceInfo[errorKey]} errors ({d3.format(
          '.1%'
        )(hoveredSliceInfo[errorKey] / hoveredSliceInfo.count)})
      </div>
    {/if}
  </div>
{/if}
