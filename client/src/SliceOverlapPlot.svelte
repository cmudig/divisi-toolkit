<script lang="ts">
  import { LayerCake, Canvas } from 'layercake';
  import ForceScatterPlot from './ForceScatterPlot.svelte';
  import * as d3 from 'd3';

  export let intersectionCounts = [];
  export let labels = [];
  export let numPoints = 500;
  export let selectedIndex = null;

  const errorKey = 'Error Rate';
  let hoveredSlices = null;
  let hoveredMousePosition = null;

  let simulationProgress = 0.0;

  let pointData = [];

  let colorScale = null;

  let numPerPoint;

  $: if (intersectionCounts.length > 0) {
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
      .scaleSequential(d3.interpolateTurbo)
      // .scaleOrdinal(d3.schemeCategory10)
      // .domain(d3.range(1, intersectionCounts[0].slices.length + 1));
      .domain([1, maxNumSlices]);
    console.log(colorScale(0), colorScale(1), colorScale(2), colorScale(3));
  } else {
    pointData = [];
  }

  function describeSlice(slice: { [key: string]: any }): string {
    let descriptions = Object.entries(slice).map(
      (e) => `<span class='font-mono'>${e[0]}</span> = ${e[1]}`
    );
    if (descriptions.length == 0) return '<empty slice>';
    return descriptions.join(', ');
  }

  function handleMousePosition(e) {
    let rect = e.target.getBoundingClientRect();
    hoveredMousePosition = [e.clientX - rect.left, e.clientY - rect.top];
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
          {hoveredMousePosition}
          colorFn={selectedIndex != null
            ? (item) =>
                item.slices[selectedIndex]
                  ? colorScale(
                      item.slices.reduce((prev, curr) => prev + curr, 0)
                    )
                  : '#bbb'
            : (item) =>
                colorScale(item.slices.reduce((prev, curr) => prev + curr, 0))}
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
    <div class="absolute bottom-0 left-0 p-3 text-gray-600">
      {#each labels as label, i}
        <p
          class={(hoveredSlices != null && hoveredSlices[i]) ||
          (selectedIndex != null && selectedIndex == i)
            ? 'text-blue-700 font-bold'
            : ''}
          on:mouseenter={(e) => (selectedIndex = i)}
          on:mouseleave={(e) => (selectedIndex = null)}
        >
          {@html describeSlice(label.featureValues)} (count = {label.metrics[
            'Count'
          ].count}, error = {d3.format('.1%')(label.metrics[errorKey].mean)})
        </p>
      {/each}
    </div>
  </div>
{/if}
