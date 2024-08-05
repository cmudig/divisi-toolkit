<svelte:options accessors />

<script lang="ts">
  import { createEventDispatcher, getContext } from 'svelte';
  import { scaleCanvas } from 'layercake';
  import { MarkRenderGroup, Scales, Ticker } from 'counterpoint-vis';
  import { GlyphOutlineColor } from './slice_glyphs';

  const { width, height } = getContext('LayerCake');
  const { ctx } = getContext('canvas');
  const dispatch = createEventDispatcher();

  export let scales: Scales;
  export let markSet: MarkRenderGroup;

  const layoutWidth = 800;
  const layoutHeight = 800;

  $: if (!!$ctx) $ctx.canvas.style.opacity = 0.5;

  export function draw() {
    if ($width == 0 || $height == 0 || !$ctx) return;
    scaleCanvas($ctx, $width, $height);
    $ctx.clearRect(0, 0, $width, $height);
    /* --------------------------------------------
     * Draw our scatterplot
     */
    markSet.stage.forEach((mark, i) => {
      let outlineWidth = mark.attr('outlineWidth');
      if (outlineWidth == 0) return;

      let x = mark.attr('x');
      let y = mark.attr('y');
      let radius = mark.attr('radius');
      let alpha = mark.attr('alpha');
      // if (hovered != null && i == hoveredPointIndex) radius *= 1.5;

      let numSlices = mark.attr('numSlices');

      $ctx.save();
      $ctx.globalAlpha = alpha;
      $ctx.translate(x, y);
      $ctx.beginPath();
      $ctx.arc(
        0,
        0,
        Math.ceil(radius * (numSlices > 0 ? 0.7 : 0.5) + outlineWidth),
        0,
        2 * Math.PI,
        false
      );
      $ctx.fillStyle = GlyphOutlineColor;
      $ctx.fill();
      $ctx.restore();
    });
  }
</script>
