<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let showLabels = true;
  export let showQuantities = false;
  export let segments: {
    name: string;
    color_tailwind?: string;
    color?: string;
  }[] = [];

  export let widths: number[] = [];

  let sliderElement;

  let labelOpacity = 0.0;

  function getPercentage(containerWidth: number, distanceMoved: number) {
    return distanceMoved / containerWidth;
  }

  function limitNumberWithinRange(
    value: number,
    min: number,
    max: number
  ): number {
    return Math.min(Math.max(value, min), max);
  }

  let startDragX = null;
  let draggingIndex = null;

  function onSliderSelect(e, index) {
    e.preventDefault();
    document.body.style.cursor = 'ew-resize';

    startDragX = e.pageX;
    draggingIndex = index;
    const sliderWidth = sliderElement.offsetWidth;

    const resize = (e: MouseEvent & TouchEvent) => {
      e.preventDefault();
      if (draggingIndex == null) return;
      const endDragX = e.touches ? e.touches[0].pageX : e.pageX;
      const distanceMoved = endDragX - startDragX;
      const maxPercent = widths[index] + widths[index + 1];

      const percentageMoved = getPercentage(sliderWidth, distanceMoved);
      // const percentageMoved = getPercentage(sliderWidth, distanceMoved);

      const _widths = widths.slice();

      const prevPercentage = _widths[index];

      const newPercentage = prevPercentage + percentageMoved;
      const currentSectionWidth = limitNumberWithinRange(
        newPercentage,
        0,
        maxPercent
      );
      _widths[index] = currentSectionWidth;

      const nextSectionIndex = index + 1;

      const nextSectionNewPercentage =
        _widths[nextSectionIndex] - percentageMoved;
      const nextSectionWidth = limitNumberWithinRange(
        nextSectionNewPercentage,
        0,
        maxPercent
      );
      _widths[nextSectionIndex] = nextSectionWidth;

      if (_widths[index] === 0) {
        dispatch('change', {
          [segments[draggingIndex].name]: 0,
          [segments[draggingIndex + 1].name]: maxPercent,
        });
        draggingIndex = null;
        removeEventListener();
      } else if (_widths[nextSectionIndex] === 0) {
        dispatch('change', {
          [segments[draggingIndex].name]: maxPercent,
          [segments[draggingIndex + 1].name]: 0,
        });
        draggingIndex = null;
        removeEventListener();
      } else {
        widths = _widths;
        startDragX = endDragX;
      }
    };

    window.addEventListener('pointermove', resize);
    window.addEventListener('touchmove', resize);

    const removeEventListener = () => {
      window.removeEventListener('pointermove', resize);
      window.removeEventListener('touchmove', resize);
    };

    const handleEventUp = (e: Event) => {
      e.preventDefault();
      if (draggingIndex != null) {
        console.log('draggin index', draggingIndex, segments[draggingIndex]);
        dispatch('change', {
          [segments[draggingIndex].name]: widths[draggingIndex],
          [segments[draggingIndex + 1].name]: widths[draggingIndex + 1],
        });
      }
      draggingIndex = null;
      document.body.style.cursor = 'initial';
      removeEventListener();
    };

    window.addEventListener('touchend', handleEventUp);
    window.addEventListener('pointerup', handleEventUp);
  }

  $: console.log('widths:', widths);
</script>

<div
  class="w-full relative h-6 rounded bg-slate-300"
  bind:this={sliderElement}
  on:mouseenter={() => (labelOpacity = 1.0)}
  on:mouseleave={() => (labelOpacity = 0.0)}
>
  {#each segments as tag, i (tag.name)}
    {@const width = widths[i] * 100}
    <div
      class="text-center h-full absolute box-border overflow-visible"
      class:transition-all={draggingIndex == null}
      class:rounded-l={i == 0}
      class:rounded-r={i == segments.length - 1}
      style="left: {widths
        .slice(0, i)
        .reduce((curr, w) => curr + w * 100, 0)
        .toFixed(2)}%; width: {width}%;"
    >
      <div
        class="w-full h-full pt-1 text-xs text-white font-bold select-none opacity-80 {tag.color_tailwind
          ? 'bg-' + tag.color_tailwind
          : ''}"
        class:rounded-l={i == 0}
        class:rounded-r={i == segments.length - 1}
        style={tag.color ? `background: ${tag.color};` : ''}
        title="{tag.name}: {width.toFixed(0) + '%'}"
      >
        {#if (draggingIndex != null && (draggingIndex == i || draggingIndex == i - 1)) || showLabels}
          <span
            class="inline-block truncate max-w-full pointer-events-none select-none px-1 transition-opacity duration-200"
            style="opacity: {labelOpacity};"
            draggable="false"
            >{#if showLabels}{tag.name} {/if}{#if showQuantities}{width.toFixed(
                0
              ) + '%'}{/if}</span
          >
        {/if}
      </div>
      {#if i != segments.length - 1}
        <div
          class="rounded-full shadow h-4 absolute top-1 cursor-ew-resize bg-slate-100 hover:bg-white hover:scale-110 text-gray-300 z-10"
          style="left: calc(100% - 3px); width: 6px; user-select: none;"
          on:pointerdown={(e) => onSliderSelect(e, i)}
        />
      {/if}
    </div>
  {/each}
</div>
