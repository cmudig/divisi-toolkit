<script>
  import { onMount } from 'svelte';

  export let fraction = 1.0;
  export let maxWidth = 60;

  export let colorScale = null;

  // Disable transition until after loaded
  onMount(() => {
    setTimeout(() => (loaded = true), 100);
  });

  let loaded = false;
</script>

<span
  class="bar"
  class:animated={loaded}
  style="width: {(maxWidth - 6) * fraction + 6}px; {colorScale != null
    ? 'background-color: ' + colorScale(fraction)
    : 'background-color: lightgray;'}"
/>

<style>
  .bar {
    display: inline-block;
    border-radius: 3px;
    height: 6px;
  }
  .animated {
    transition: background-color 0.3s ease-in-out, width 0.3s ease-in-out;
  }
</style>
