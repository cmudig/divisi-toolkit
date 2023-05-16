<script lang="ts">
  import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
  import { onMount } from 'svelte';
  import Fa from 'svelte-fa/src/fa.svelte';

  export let visible = false;

  let optionsMenuOpacity = 0.0;
  let optionsMenu: Element;

  $: if (visible) window.addEventListener('keydown', escapeOptionsMenu, true);
  else window.removeEventListener('keydown', escapeOptionsMenu, true);

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
</script>

<div class="relative">
  <button
    class="bg-transparent hover:opacity-60 text-slate-600 py-2 px-1 mr-2"
    id="menu-button"
    title="Show more actions"
    on:click|stopPropagation={showOptionsMenu}
    aria-expanded={visible}
    aria-label="Options menu"
    aria-haspopup="true"><Fa icon={faEllipsisVertical} /></button
  >
  {#if visible}
    <div
      class="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-10"
      on:click={hideOptionsMenu}
      on:keydown={(e) => {}}
    />
    <div
      class="absolute left-0 z-20 w-60 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-200"
      style="opacity: {optionsMenuOpacity};"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      bind:this={optionsMenu}
      on:click={hideOptionsMenu}
      on:keydown={(e) => {}}
    >
      <div class="py-1 menu-options" role="none">
        <slot />
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

  .menu-options :global(a:active) {
    @apply bg-slate-200;
  }
</style>