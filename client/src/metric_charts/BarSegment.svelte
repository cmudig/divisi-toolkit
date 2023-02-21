<script>
  import { createEventDispatcher, getContext } from 'svelte';

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

  let hoveredIndex = null;
</script>

{#each $data as d, i}
  <span
    class="bar absolute"
    class:rounded-l-full={i == 0}
    class:rounded-r-full={i == $data.length - 1}
    class:border={hoveredIndex == d.index}
    class:border-black={hoveredIndex == d.index}
    style="top: 0; left: {$xGet(d)}px; width: {$xScale($z(d)) -
      $xGet(d)}px; background-color: {$yGet(d)};"
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
</style>
