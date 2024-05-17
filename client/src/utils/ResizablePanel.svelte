<script lang="ts">
  import {
    faCaretDown,
    faCaretLeft,
    faCaretRight,
    faCaretUp,
    faRightFromBracket,
  } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa/src/fa.svelte';

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
  let collapsed: boolean = false;

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
    if (collapsed) {
      if (['left', 'right'].includes(draggingDirection))
        width = convertToNumerical(minWidth ?? 24, true) + 10;
      if (['top', 'bottom'].includes(draggingDirection))
        height = convertToNumerical(minHeight ?? 24, false) + 10;
    }
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
  $: if (minWidth === null || collapsed) minWidthStyle = '';
  else if (typeof minWidth === 'number')
    minWidthStyle = `min-width: ${minWidth}px;`;
  else minWidthStyle = `min-width: ${minWidth};`;
  $: if (maxWidth === null || collapsed) maxWidthStyle = '';
  else if (typeof maxWidth === 'number')
    maxWidthStyle = `max-width: ${maxWidth}px;`;
  else maxWidthStyle = `max-width: ${maxWidth};`;
  $: if (minHeight === null || collapsed) minHeightStyle = '';
  else if (typeof minHeight === 'number')
    minHeightStyle = `min-height: ${minHeight}px;`;
  else minHeightStyle = `min-height: ${minHeight};`;
  $: if (maxHeight === null || collapsed) maxHeightStyle = '';
  else if (typeof maxHeight === 'number')
    maxHeightStyle = `max-height: ${maxHeight}px;`;
  else maxHeightStyle = `max-height: ${maxHeight};`;

  let panelElement: HTMLElement;
  let panelResizer: ResizeObserver;

  $: if (!!panelElement) {
    if (panelElement.clientWidth > 0 && panelElement.clientHeight > 0)
      collapseIfNeeded(panelElement.clientWidth, panelElement.clientHeight);
    if (!!panelResizer) panelResizer.unobserve(panelElement);
    panelResizer = new ResizeObserver(() => {
      if (!panelElement || !panelElement.clientWidth) return;
      collapseIfNeeded(panelElement.clientWidth, panelElement.clientHeight);
    });
    panelResizer.observe(panelElement);
  }

  function convertToNumerical(
    threshold: string | number,
    useWidth: boolean
  ): number {
    if (typeof threshold === 'string') {
      if (threshold.endsWith('%')) {
        let proportion = +threshold.substring(0, threshold.length - 1);
        let parentDim = useWidth
          ? panelElement.parentElement.clientWidth
          : panelElement.parentElement.clientHeight;
        return proportion * 0.01 * parentDim;
      } else {
        console.warn('unknown threshold format', threshold);
        return 0;
      }
    }
    return threshold;
  }

  function lessThanThreshold(
    val: number,
    threshold: string | number | null,
    useWidth: boolean
  ): boolean {
    if (threshold === null || !panelElement) return false;
    else return val < convertToNumerical(threshold, useWidth);
  }

  function collapseIfNeeded(w: number, h: number) {
    if (
      (lessThanThreshold(w, minWidth, true) ||
        lessThanThreshold(h, minHeight, false)) &&
      !collapsed
    ) {
      collapsed = true;
      setTimeout(() => {
        if (leftResizable || rightResizable) width = 24;
        if (topResizable || bottomResizable) height = 24;
        draggingDirection = null;
      });
    } else if (
      !lessThanThreshold(w, minWidth, true) &&
      !lessThanThreshold(h, minHeight, false) &&
      collapsed
    ) {
      collapsed = false;
    }
  }
</script>

<div
  bind:this={panelElement}
  class="relative content-box border-slate-300 grow-0 shrink-0 {$$props.class ??
    ''}"
  style="min-width: 24px; min-height: 24px; width: {typeof width === 'number'
    ? `${Math.max(width, 24)}px`
    : width}; height: {typeof height === 'number'
    ? `${Math.max(height, 24)}px`
    : height}; {maxWidthStyle} {maxHeightStyle}"
  class:border-l-4={leftResizable}
  class:border-t-4={topResizable}
  class:border-r-4={rightResizable}
  class:border-b-4={bottomResizable}
>
  {#if collapsed}
    {#if leftResizable || rightResizable}
      <button
        class="w-full h-full text-center hover:bg-slate-100 text-slate-600"
        on:click={(e) => {
          width = convertToNumerical(minWidth ?? 100, true) + 10;
          collapsed = false;
        }}
        ><Fa
          class="inline"
          icon={leftResizable ? faCaretLeft : faCaretRight}
        /></button
      >
    {:else if topResizable || bottomResizable}
      <button
        class="w-full h-full text-center hover:bg-slate-100 text-slate-600"
        on:click={(e) => {
          height = convertToNumerical(minHeight ?? 100, false) + 10;
          collapsed = false;
        }}
        ><Fa
          class="inline"
          icon={topResizable ? faCaretUp : faCaretDown}
        /></button
      >
    {/if}
  {/if}
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
