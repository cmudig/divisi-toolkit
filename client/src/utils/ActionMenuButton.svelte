<script lang="ts">
  import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
  import { onMount } from 'svelte';
  import Fa from 'svelte-fa/src/fa.svelte';

  export let visible = false;

  export let buttonClass =
    'bg-transparent hover:opacity-60 text-slate-600 py-2 px-1 mr-2';
  export let buttonActiveClass = '';
  export let buttonTitle = 'Show more actions';
  export let buttonStyle = '';
  export let align: 'left' | 'center' | 'right' = 'left';

  export let menuWidth = 240;

  export let disabled: boolean = false;

  export let singleClick: boolean = true;

  let optionsMenuOpacity = 0.0;
  let optionsMenu: Element;

  let observer: ResizeObserver | null = null;
  let button: HTMLElement;
  let container: HTMLElement;
  let menuX: number = 0;
  let menuY: number = 0;

  $: if (visible) {
    window.addEventListener('keydown', escapeOptionsMenu, true);
    if (!!button) {
      if (!!observer) observer.unobserve(button);
      observer = new ResizeObserver(() => {
        if (!container || !button) return;
        let bounds = button.getBoundingClientRect();
        let containerBounds = container.getBoundingClientRect();
        if (align == 'left') menuX = bounds.left - containerBounds.left;
        else if (align == 'right') menuX = bounds.right - containerBounds.left;
        else if (align == 'center')
          menuX = bounds.left + bounds.width / 2 - containerBounds.left;
        menuY = bounds.bottom - containerBounds.top;
      });
      observer.observe(button);
    }
  } else {
    window.removeEventListener('keydown', escapeOptionsMenu, true);
    if (!!button && !!observer) {
      observer.unobserve(button);
      observer = null;
    }
  }

  function escapeOptionsMenu(e) {
    if (e.key === 'Escape') {
      hideOptionsMenu();
      e.stopPropagation();
      e.preventDefault();
    }
  }

  function showOptionsMenu() {
    optionsMenuOpacity = 0;
    visible = true;
    setTimeout(() => (optionsMenuOpacity = 1.0), 10);
    if (!!optionsMenu) optionsMenu.focus();
  }

  function hideOptionsMenu() {
    optionsMenuOpacity = 0;
    setTimeout(() => (visible = false), 200);
  }

  function dismiss() {
    visible = false;
  }
</script>

<div class="relative">
  <button
    bind:this={button}
    class="{buttonClass} {visible ? buttonActiveClass : ''}"
    style={buttonStyle}
    id="menu-button"
    title={buttonTitle}
    {disabled}
    on:click|stopPropagation={showOptionsMenu}
    aria-expanded={visible}
    aria-label="Options menu"
    aria-haspopup="true"
  >
    <slot name="button-content">
      <Fa icon={faEllipsisVertical} class="inline text-center" />
    </slot>
  </button>
  {#if visible}
    <div
      class="fixed top-0 left-0 right-0 bottom-0 w-full h-full"
      bind:this={container}
      style="z-index: 999;"
      on:click|stopPropagation={hideOptionsMenu}
      on:keydown={(e) => {}}
    >
      <div
        class="absolute rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-200 overflow-y-auto"
        style="top: {menuY}px; max-height: calc(100% - {menuY +
          12}px); left: {menuX}px; opacity: {optionsMenuOpacity}; width: {menuWidth}px; transform: translate({align ==
        'right'
          ? '-100%'
          : align == 'center'
            ? '-50%'
            : '0'}, 4px); z-index: 1000;"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        bind:this={optionsMenu}
        on:click|stopPropagation={singleClick ? hideOptionsMenu : () => {}}
        on:keydown={(e) => {}}
      >
        <div class="menu-options my-1" role="none">
          <slot name="options" {dismiss} />
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .menu-options :global(a) {
    @apply text-gray-700 block px-4 py-2 text-sm;
  }

  .menu-options :global(a:hover) {
    @apply bg-slate-100;
  }
</style>
