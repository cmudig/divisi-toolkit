<script lang="ts">
  import type { Slice } from '../utils/slice.type';
  import { areSetsEqual } from '../utils/utils';
  import { createEventDispatcher } from 'svelte';
  import SliceTable from './SliceTable.svelte';

  const dispatch = createEventDispatcher();

  export let slices: Array<Slice> = [];

  export let sliceColorMap: { [key: string]: string } = {};
  export let allowDragAndDrop: boolean = true;

  // $: console.log('sliceColorMap at SliceCurationTable:', sliceColorMap);
  $: console.log('Current sliceColorMap in SliceCurationTable:', sliceColorMap);

  export let baseSlice: Slice = null;
  export let hoveredSlice: Slice = {};
  export let sliceRequests: { [key: string]: any } = {};
  export let sliceRequestResults: { [key: string]: Slice } = {};

  export let positiveOnly = false;

  export let selectedSlices = [];
  export let savedSlices = [];

  let metricNames = [];
  let metricInfo = {};

  let allSlices: Array<Slice> = [];
  $: allSlices = [...(!!baseSlice ? [baseSlice] : []), ...slices];

  $: if (allSlices.length > 0) {
    let testSlice = allSlices.find((s) => !s.isEmpty);
    if (!testSlice) testSlice = allSlices[0];

    // tabulate metric names and normalize
    if (!!testSlice.metrics) {
      let newMetricNames = Object.keys(testSlice.metrics);
      if (!areSetsEqual(new Set(metricNames), new Set(newMetricNames))) {
        metricNames = newMetricNames;
        metricNames.sort();
      }
      updateMetricInfo(testSlice.metrics);
    }
  } else {
    metricNames = [];
    metricInfo = {};
  }

  export let allowedValues: { [key: string]: string[] } | null = null;

  function updateMetricInfo(testMetrics) {
    let oldMetricInfo = metricInfo;
    metricInfo = {};
    metricNames.forEach((n) => {
      if (testMetrics[n].type == 'binary' || testMetrics[n].type == 'count') {
        let maxScore =
          testMetrics[n].type == 'count'
            ? allSlices.reduce(
                (curr, next) => Math.max(curr, next.metrics[n].mean),
                -1e9
              ) + 0.01
            : 1;
        let minScore =
          allSlices.reduce(
            (curr, next) => Math.min(curr, next.metrics[n].mean),
            1e9
          ) - 0.01;
        metricInfo[n] = { scale: (v: number) => v / maxScore };
      } else if (testMetrics[n].type == 'categorical') {
        let uniqueKeys: Set<string> = new Set();
        allSlices.forEach((s) =>
          Object.keys(s.metrics[n].counts).forEach((v) => uniqueKeys.add(v))
        );
        let order = Array.from(uniqueKeys);
        order.sort(
          (a, b) => testMetrics[n].counts[b] - testMetrics[n].counts[a]
        );
        metricInfo[n] = { order };
      } else {
        metricInfo[n] = {};
      }
      metricInfo[n].visible = (oldMetricInfo[n] || { visible: true }).visible;
    });
    console.log('metric info:', metricInfo, testMetrics);
  }
</script>

<div class="search-view-parent h-full min-w-full overflow-auto">
  <div class="flex-1 min-h-0">
    <SliceTable
      {slices}
      {baseSlice}
      {savedSlices}
      {sliceColorMap}
      {allowDragAndDrop}
      bind:selectedSlices
      bind:sliceRequests
      bind:sliceRequestResults
      {positiveOnly}
      {allowedValues}
      showHeader={false}
      bind:metricInfo
      bind:metricNames
      showScores={false}
      on:newsearch={(e) => {
        // updateEditingControl(e.detail.type, e.detail.base_slice);
        // toggleSliceControl(e.detail.type, true);
      }}
      on:saveslice
      on:hover={(e) => (hoveredSlice = e.detail)}
    />
  </div>
</div>
