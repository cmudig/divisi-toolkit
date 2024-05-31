<script lang="ts">
  import { LayerCake, Canvas } from 'layercake';
  import ForceScatterPlot from './ForceScatterPlot.svelte';
  import * as d3 from 'd3';
  import { shuffle } from '../utils/utils';

  export let intersectionCounts: any[] = [];
  export let labels: { stringRep: string }[] = [];
  export let numPoints = 500;
  export let selectedIndexes = null;

  export let colorByError = false;
  export let colorBySlice = true;

  export let errorKey;

  export let groupedLayout: {
    labels?: { stringRep: string }[];
    overlap_plot_metric?: string;
    layout?: {
      [key: string]: {
        slices: boolean[];
        outcome: boolean;
        x: number;
        y: number;
      };
    };
  } = {};

  export let hoveredSlices = null;
  let hoveredMousePosition = null;
  let hoveredSliceInfo = null;

  let sliceCount = 0;

  let simulationProgress: number | null = null;

  let pointData = [];

  let colorScale = null;

  let numPerPoint;

  function randomPointID(): string {
    return Array.from(Array(20), () =>
      Math.floor(Math.random() * 36).toString(36)
    ).join('');
  }

  function generatePointData() {
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

    if (Object.keys(groupedLayout?.layout ?? {}).length > 0) {
      console.log('grouped layout!');
      pointData = Object.entries(groupedLayout.layout).map(
        ([id, layoutItem]) => ({
          ...layoutItem,
          id: parseInt(id),
        })
      );
    } /* else if (pointData.length > 0) {
      // remap the existing point data where possible
      let unmappedIndexes: Set<number> = new Set(
        new Array(pointData.length).fill(0).map((_, i) => i)
      );
      let existingIndexMap: Map<string, number[]> = new Map();
      let makeKey = (d, ls) =>
        `${d.outcome}:` +
        d.slices
          .map((s: boolean, j: number) => (s ? ls[j].stringRep : null))
          .filter((x: string | null) => x !== null)
          .join(', ');
      pointData.forEach((d, i) => {
        let key = makeKey(d, oldLabels);
        if (existingIndexMap.has(key)) existingIndexMap.get(key).push(i);
        else existingIndexMap.set(key, [i]);
      });

      // go over intersections that existed already first
      let mappedCounts: any[] = intersectionCounts
        .map((item) => {
          let errors = Math.round(item[errorKey] / numPerPoint);
          let noErrors = Math.round(
            (item.count - item[errorKey]) / numPerPoint
          );
          let noErrorMapKey = makeKey(
            { slices: item.slices, outcome: false },
            labels
          );
          let errorMapKey = makeKey(
            { slices: item.slices, outcome: true },
            labels
          );
          let mappedErrors = 0;
          let mappedNoErrors = 0;
          if (existingIndexMap.has(errorMapKey)) {
            mappedErrors = Math.min(
              errors,
              existingIndexMap.get(errorMapKey).length
            );
            existingIndexMap
              .get(errorMapKey)
              .slice(0, mappedErrors)
              .forEach((i) => {
                pointData[i].slices = item.slices; // in case the slices are in different order
                unmappedIndexes.delete(i);
              });
          }
          if (existingIndexMap.has(noErrorMapKey)) {
            mappedNoErrors = Math.min(
              noErrors,
              existingIndexMap.get(noErrorMapKey).length
            );
            existingIndexMap
              .get(noErrorMapKey)
              .slice(0, mappedNoErrors)
              .forEach((i) => {
                pointData[i].slices = item.slices; // in case the slices are in different order
                unmappedIndexes.delete(i);
              });
          }
          return [
            {
              ...item,
              outcome: true,
              total: errors,
              mapped: mappedErrors,
            },
            {
              ...item,
              outcome: false,
              total: noErrors,
              mapped: mappedNoErrors,
            },
          ];
        })
        .flat();

      console.log(
        'after mapping existing intersections:',
        mappedCounts,
        unmappedIndexes
      );
      // remap remaining intersections to random points
      mappedCounts.forEach((item) => {
        while (item.total > item.mapped) {
          if (unmappedIndexes.size == 0) {
            pointData.push({
              slices: item.slices,
              outcome: item.outcome,
              id: randomPointID(),
            });
          } else {
            let randomIdx = [...unmappedIndexes][
              Math.floor(Math.random() * unmappedIndexes.size)
            ];
            console.log(randomIdx, pointData[randomIdx]);
            pointData[randomIdx].slices = item.slices;
            pointData[randomIdx].outcome = item.outcome;
            unmappedIndexes.delete(randomIdx);
          }
          item.mapped++;
        }
      });

      pointData = pointData.filter((_, i) => !unmappedIndexes.has(i));
      console.log('final:', pointData);
    } */ else {
      pointData = intersectionCounts
        .map((item) => {
          let errors = Math.round(item[errorKey] / numPerPoint);
          let noErrors = Math.round(
            (item.count - item[errorKey]) / numPerPoint
          );
          return [
            ...Array.apply(null, Array(noErrors)).map((_) => ({
              slices: item.slices,
              outcome: false,
              id: randomPointID(),
            })),
            ...Array.apply(null, Array(errors)).map((_) => ({
              slices: item.slices,
              outcome: true,
              id: randomPointID(),
            })),
          ];
        })
        .flat();
      shuffle(pointData);
    }
    colorScale = d3
      .scaleSequential(d3.interpolateSpectral)
      // .scaleOrdinal(d3.schemeCategory10)
      // .domain(d3.range(1, intersectionCounts[0].slices.length + 1));
      .domain([1, maxNumSlices]);
  }

  let oldLabels = [];
  let oldErrorKey = '';
  let oldGroupedLayout = null;
  $: if (
    intersectionCounts.length > 0 &&
    (labels !== oldLabels ||
      oldErrorKey !== errorKey ||
      oldGroupedLayout !== groupedLayout)
  ) {
    sliceCount = intersectionCounts[0].slices.length;

    if (
      sliceCount == labels.length &&
      (Object.keys(groupedLayout.layout ?? {}).length == 0 ||
        (groupedLayout.overlap_plot_metric == errorKey &&
          (groupedLayout.labels ?? []).length == labels.length &&
          groupedLayout.labels.every(
            (l, i) => l.stringRep == labels[i].stringRep
          )))
    ) {
      if (oldErrorKey !== errorKey) pointData = [];

      generatePointData();
      oldLabels = labels;
      oldErrorKey = errorKey;
      oldGroupedLayout = groupedLayout;
    }
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

  function color(item, selectedSlices, selIndexes) {
    let numSlices = item.slices.reduce((prev, curr) => prev + curr, 0);
    if (colorBySlice) {
      if (selectedSlices != null) {
        let allEqual = selectedSlices.every((s, i) => item.slices[i] == s);
        if (allEqual) return '#cbd5e1';
        return null;
      } else if (selIndexes != null) {
        if (selIndexes.some((s, i) => item.slices[i] && s)) return '#cbd5e1';
        return null;
      }
      return '#cbd5e1';
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
      if (allEqual) return numSlices == 0 ? '#cbd5e1' : colorScale(numSlices);
      return '#e2e8f0';
    } else if (selIndexes != null) {
      if (selIndexes.some((s, i) => item.slices[i] && s))
        return numSlices == 0 ? '#cbd5e1' : colorScale(numSlices);
      return '#e2e8f0';
    }
    return numSlices == 0 ? '#cbd5e1' : colorScale(numSlices);
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
      class="absolute top-0 left-0 bottom-0 right-0 z-1 pointer-events-none"
    />

    {#if simulationProgress != null}
      <div
        class="absolute flex flex-col items-center justify-end top-0 left-0 right-0 bottom-0 mb-8 pointer-events-none"
      >
        <div
          class="w-1/2 bg-slate-300 rounded-full h-1.5 mt-1 indigo:bg-slate-700"
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
