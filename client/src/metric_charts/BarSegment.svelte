<script>
  import { createEventDispatcher, getContext, onMount } from 'svelte';

  const dispatch = createEventDispatcher();

  const {
    data,
    xGet,
    yGet,
    xRange,
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

  let hoveredIndex = null;

  // Disable transition until after loaded
  onMount(() => {
    setTimeout(() => (loaded = true), 100);
  });

  let loaded = false;
</script>

{#each $data as d, i}
  <span
    class="bar absolute content-box"
    class:animated={loaded}
    class:border={hoveredIndex == d.index}
    class:border-black={hoveredIndex == d.index}
    style="top: 0; left: {$xGet(d) *
      ($xRange[1] <= 1.0 ? 100 : 1)}{$xRange[1] <= 1.0
      ? '%'
      : 'px'}; width: {($xScale($z(d)) - $xGet(d)) *
      ($xRange[1] <= 1.0 ? 100 : 1)}{$xRange[1] <= 1.0
      ? '%'
      : 'px'}; background-color: {$yGet(d)};"
    on:mouseenter={() => {
      hoveredIndex = i;
      dispatch('hover', d);
    }}
    on:mouseleave={() => {
      hoveredIndex = null;
      dispatch('hover', null);
    }}
  />
{/each}

<style>
  .bar {
    height: 6px;
  }

  .animated {
    transition-property: width, left;
    @apply duration-300 ease-in-out;
  }
</style>
