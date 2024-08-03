<svelte:options accessors />

<script lang="ts">
  import { createEventDispatcher, getContext } from 'svelte';
  import { scaleCanvas } from 'layercake';
  import { Attribute, MarkRenderGroup, Scales, Ticker } from 'counterpoint-vis';
  import { drawSliceGlyphCanvas } from './slice_glyphs';

  const { width, height } = getContext('LayerCake');
  const { ctx } = getContext('canvas');
  const dispatch = createEventDispatcher();

  export let sliceColors: string[] = [];

  export let isMultiselecting = false;
  export let multiselectPath: Attribute<[number, number][]> = new Attribute([]);

  export let scales: Scales;
  export let markSet: MarkRenderGroup;

  const layoutWidth = 800;
  const layoutHeight = 800;

  let oldW = 0;
  let oldH = 0;
  $: if (oldW != $width || oldH != $height) {
    scales
      .xDomain([-layoutWidth * 0.6, layoutWidth * 0.6])
      .yDomain([-layoutHeight * 0.6, layoutHeight * 0.6])
      .xRange([0, $width])
      .yRange([0, $height])
      .makeSquareAspect()
      .reset();
    if (!!$ctx) draw();
    oldW = $width;
    oldH = $height;
  }

  export function draw() {
    if ($width == 0 || $height == 0 || !$ctx) return;
    scaleCanvas($ctx, $width, $height);
    $ctx.clearRect(0, 0, $width, $height);
    /* --------------------------------------------
     * Draw our scatterplot
     */
    markSet.stage.forEach((mark, i) => {
      let itemSlices = mark.attr('slices');
      // console.log(itemSlices); //something like [1, 0]
      let x = mark.attr('x');
      let y = mark.attr('y');
      let alpha = mark.attr('alpha');
      let radius = mark.attr('radius');
      let outcome = mark.attr('outcome');
      let outlineWidth = mark.attr('outlineWidth');
      // if (hovered != null && i == hoveredPointIndex) radius *= 1.5;

      let numSlices = mark.attr('numSlices');

      $ctx.save();
      $ctx.translate(x, y);
      drawSliceGlyphCanvas(
        $ctx,
        itemSlices,
        sliceColors,
        radius,
        outcome,
        alpha,
        numSlices,
        outlineWidth
      );
      $ctx.restore();
    });

    if (isMultiselecting) {
      $ctx.save();
      $ctx.fillStyle = '#30cdfc44';
      $ctx.strokeStyle = '#30cdfc99';

      $ctx.beginPath();
      let path = multiselectPath.get();
      $ctx.moveTo(path[path.length - 1][0], path[path.length - 1][1]);
      path
        .slice()
        .reverse()
        .forEach((point) => $ctx.lineTo(point[0], point[1]));
      $ctx.fill();
      $ctx.lineWidth = 2;
      $ctx.setLineDash([3, 3]);
      $ctx.stroke();
      $ctx.restore();
    }
  }
</script>
