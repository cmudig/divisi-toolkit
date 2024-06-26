<script lang="ts">
  import { drawSliceGlyphHTML } from './slice_glyphs';

  export let intersection: { slices: number[]; count: number } | null = null;
  export let sliceColors: string[] = [];
  let container: HTMLElement;

  $: if (!!container) {
    if (!!intersection && sliceColors.length == intersection.slices.length)
      drawSliceGlyphHTML(container, intersection.slices, sliceColors, 8);
    else {
      for (let child of container.childNodes) child.remove();
    }
  }
</script>

<div style="width: 16px; height: 16px;" bind:this={container} />
