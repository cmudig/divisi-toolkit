<script lang="ts">
  export let leftResizable: boolean = false;
  export let rightResizable: boolean = false;
  export let topResizable: boolean = false;
  export let bottomResizable: boolean = false;

  export let minWidth: number | string | null = 20;
  export let maxWidth: number | string | null = null;
  export let minHeight: number | string | null = 20;
  export let maxHeight: number | string | null = null;
  export let width: number | string = 100;
  export let height: number | string = 100;

  $: if ((leftResizable || rightResizable) && typeof width !== 'number')
    console.error('width must be number if left or right is resizable');
  $: if ((topResizable || bottomResizable) && typeof height !== 'number')
    console.error('height must be number if top or bottom is resizable');

  let lastX: number | null = null;
  let lastY: number | null = null;
  let draggingDirection: string | null = null;

  function onMousedown(e: PointerEvent, direction: string) {
    lastX = e.pageX;
    lastY = e.pageY;
    draggingDirection = direction;
    e.target.setPointerCapture(e.pointerId);
  }

  function onMousemove(e: PointerEvent) {
    if (draggingDirection === null) return;
    let xDelta = e.pageX - lastX!;
    let yDelta = e.pageY - lastY!;
    if (draggingDirection == 'left') width = (width as number) - xDelta;
    else if (draggingDirection == 'right') width = (width as number) + xDelta;
    else if (draggingDirection == 'top') height = (height as number) - yDelta;
    else if (draggingDirection == 'bottom')
      height = (height as number) + yDelta;
    lastX = e.pageX;
    lastY = e.pageY;
  }

  function onMouseup() {
    lastX = null;
    lastY = null;
    draggingDirection = null;
  }

  let maxWidthStyle: string = '';
  let maxHeightStyle: string = '';
  let minWidthStyle: string = '';
  let minHeightStyle: string = '';
  $: if (minWidth === null) minWidthStyle = '';
  else if (typeof minWidth === 'number')
    minWidthStyle = `min-width: ${minWidth}px;`;
  else minWidthStyle = `min-width: ${minWidth};`;
  $: if (maxWidth === null) maxWidthStyle = '';
  else if (typeof maxWidth === 'number')
    maxWidthStyle = `max-width: ${maxWidth}px;`;
  else maxWidthStyle = `max-width: ${maxWidth};`;
  $: if (minHeight === null) minHeightStyle = '';
  else if (typeof minHeight === 'number')
    minHeightStyle = `min-height: ${minHeight}px;`;
  else minHeightStyle = `min-height: ${minHeight};`;
  $: if (maxHeight === null) maxHeightStyle = '';
  else if (typeof maxHeight === 'number')
    maxHeightStyle = `max-height: ${maxHeight}px;`;
  else maxHeightStyle = `max-height: ${maxHeight};`;
</script>

<div
  class="relative border-slate-300 grow-0 shrink-0 {$$props.class ?? ''}"
  style="{minWidthStyle} {minHeightStyle} width: {typeof width === 'number'
    ? `${Math.max(width, typeof minWidth === 'number' ? minWidth : 0)}px`
    : width}; height: {typeof height === 'number'
    ? `${Math.max(height, typeof minHeight === 'number' ? minHeight : 0)}px`
    : height}; {maxWidthStyle} {maxHeightStyle}"
  class:border-l-4={leftResizable}
  class:border-t-4={topResizable}
  class:border-r-4={rightResizable}
  class:border-b-4={bottomResizable}
>
  <slot />
  {#if leftResizable}
    <div
      class="absolute right-full z-10 top-0 w-2 h-full pointer-events-auto cursor-col-resize"
      on:pointerdown|preventDefault={(e) => onMousedown(e, 'left')}
      on:pointermove|preventDefault={onMousemove}
      on:pointerup|preventDefault={onMouseup}
    ></div>
  {/if}
  {#if topResizable}
    <div
      class="absolute left-0 z-10 bottom-full h-2 w-full pointer-events-auto cursor-row-resize"
      on:pointerdown|preventDefault={(e) => onMousedown(e, 'top')}
      on:pointermove|preventDefault={onMousemove}
      on:pointerup|preventDefault={onMouseup}
    ></div>
  {/if}
  {#if bottomResizable}
    <div
      class="absolute left-0 z-10 top-full h-2 w-full pointer-events-auto cursor-row-resize"
      on:pointerdown|preventDefault={(e) => onMousedown(e, 'bottom')}
      on:pointermove|preventDefault={onMousemove}
      on:pointerup|preventDefault={onMouseup}
    ></div>
  {/if}
  {#if rightResizable}
    <div
      class="absolute left-full z-10 top-0 w-2 h-full pointer-events-auto cursor-col-resize"
      on:pointerdown|preventDefault={(e) => onMousedown(e, 'right')}
      on:pointermove|preventDefault={onMousemove}
      on:pointerup|preventDefault={onMouseup}
    ></div>
  {/if}
</div>
