<script>
  import { onMount } from 'svelte';

  export let absolutePosition = false;
  export let fraction = 1.0;
  export let leftFraction = 0.0;
  /** @type number | null */
  export let maxWidth = null;

  export let colorScale = null;
  export let color = 'lightgray';

  export let rounded = true;
  export let hoverable = false;

  // Disable transition until after loaded
  onMount(() => {
    setTimeout(() => (loaded = true), 100);
  });

  let loaded = false;

  let widthString = '';
  $: if (maxWidth != null) {
    widthString = `${
      rounded ? (maxWidth - 6) * fraction + 6 : maxWidth * fraction
    }px`;
  } else {
    widthString = rounded
      ? `calc((100% - 6px) * ${fraction} + 6px)`
      : `${fraction.toFixed(2)}%`;
  }
</script>

<span
  class="bar {absolutePosition ? 'absolute top-0' : ''} {hoverable
    ? 'hover:opacity-50'
    : ''}"
  class:animated={loaded}
  class:rounded-full={rounded}
  style="width: {widthString}; {colorScale != null
    ? 'background-color: ' + colorScale(fraction) + '; '
    : `background-color: ${color};`} {absolutePosition
    ? `left: ${maxWidth * leftFraction}px;`
    : ''}"
  on:mouseenter
  on:mouseleave
/>

<style>
  .bar {
    display: inline-block;
    height: 6px;
  }
  .animated {
    transition:
      background-color 0.3s ease-in-out,
      width 0.3s ease-in-out,
      left 0.3s ease-in-out;
  }
</style>
