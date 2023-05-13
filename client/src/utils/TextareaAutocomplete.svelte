<script>
  import {
    faArrowDown,
    faArrowUp,
    faCaretDown,
    faCaretUp,
  } from '@fortawesome/free-solid-svg-icons';
  import { createEventDispatcher, onMount } from 'svelte';
  import Fa from 'svelte-fa/src/fa.svelte';

  const dispatch = createEventDispatcher();

  const properties = [
    'direction',
    'boxSizing',
    'width',
    'height',
    'overflowX',
    'overflowY',

    'borderTopWidth',
    'borderRightWidth',
    'borderBottomWidth',
    'borderLeftWidth',
    'borderStyle',

    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',

    'fontStyle',
    'fontVariant',
    'fontWeight',
    'fontStretch',
    'fontSize',
    'fontSizeAdjust',
    'lineHeight',
    'fontFamily',

    'textAlign',
    'textTransform',
    'textIndent',
    'textDecoration',

    'letterSpacing',
    'wordSpacing',

    'tabSize',
    'MozTabSize',
  ];

  const isFirefox =
    typeof window !== 'undefined' && window['mozInnerScreenX'] != null;

  /**
   * @param {HTMLTextAreaElement} element
   * @param {number} position
   */
  function getCaretCoordinates(element, position) {
    const div = document.createElement('div');
    document.body.appendChild(div);

    const style = div.style;
    const computed = getComputedStyle(element);

    style.whiteSpace = 'pre-wrap';
    style.wordWrap = 'break-word';
    style.position = 'absolute';
    style.visibility = 'hidden';

    properties.forEach((prop) => {
      style[prop] = computed[prop];
    });

    if (isFirefox) {
      if (element.scrollHeight > parseInt(computed.height))
        style.overflowY = 'scroll';
    } else {
      style.overflow = 'hidden';
    }

    div.textContent = element.value.substring(0, position);

    const span = document.createElement('span');
    span.textContent = element.value.substring(position) || '.';
    div.appendChild(span);

    const coordinates = {
      top: span.offsetTop + parseInt(computed['borderTopWidth']),
      left: span.offsetLeft + parseInt(computed['borderLeftWidth']),
      // height: parseInt(computed['lineHeight'])
      height: span.offsetHeight,
    };

    div.remove();

    return coordinates;
  }

  export let ref;
  export let resolveFn;
  export let replaceFn;
  export let menuItemTextFn = null;
  export let menuItemClass = '';

  export let active = null;
  export let visible = false;
  export let maxItems = null;

  $: visible = top !== undefined;

  let menuRef;
  let left;
  let top;

  let options = [];
  let triggerIdx;

  $: if (!!ref) {
    ref.addEventListener('input', onInput);
    ref.addEventListener('keydown', onKeyDown);
  }

  async function makeOptions(query, fullPrefix) {
    let newOptions = await resolveFn(query, fullPrefix);
    if (newOptions.length !== 0) {
      options = newOptions;
    } else {
      closeMenu();
    }
  }

  function closeMenu() {
    setTimeout(() => {
      options = [];
      left = undefined;
      top = undefined;
      triggerIdx = undefined;
    }, 0);
  }

  function selectItem(active) {
    return () => {
      const preMention = ref.value.substr(0, triggerIdx);
      const option = options[active];
      const mention = replaceFn(option, ref.value[triggerIdx], preMention);
      const postMention = ref.value.substr(ref.selectionStart);
      const newValue = `${preMention}${mention}${postMention}`;
      ref.value = newValue;
      const caretPosition = ref.value.length - postMention.length;
      ref.setSelectionRange(caretPosition, caretPosition);
      closeMenu();
      ref.focus();
      setTimeout(() => dispatch('replace', ref.value), 100);
    };
  }

  function onInput(ev) {
    const positionIndex = ref.selectionStart;
    const textBeforeCaret = ref.value.slice(0, positionIndex);
    const tokens = textBeforeCaret.split(/[\s\[\]\(\)]/);
    const lastToken = tokens[tokens.length - 1];
    const newTriggerIdx = textBeforeCaret.endsWith(lastToken)
      ? textBeforeCaret.length - lastToken.length
      : -1;
    const maybeTrigger = textBeforeCaret[newTriggerIdx];
    const keystrokeTriggered = maybeTrigger == '"' || maybeTrigger == "'";

    if (!keystrokeTriggered) {
      closeMenu();
      return;
    }

    const query = textBeforeCaret.slice(newTriggerIdx + 1);
    makeOptions(query, textBeforeCaret);

    const coords = getCaretCoordinates(ref, positionIndex);
    const { top: newTop, left: newLeft } = ref.getBoundingClientRect();

    setTimeout(() => {
      active = 0;
      left = window.scrollX + coords.left + newLeft + ref.scrollLeft;
      top =
        window.scrollY + coords.top + newTop + coords.height - ref.scrollTop;
      triggerIdx = newTriggerIdx;
    }, 0);
  }

  function onKeyDown(ev) {
    let keyCaught = false;
    if (triggerIdx !== undefined) {
      switch (ev.key) {
        case 'ArrowDown':
          active = Math.min(active + 1, options.length - 1);
          keyCaught = true;
          break;
        case 'ArrowUp':
          active = Math.max(active - 1, 0);
          keyCaught = true;
          break;
        case 'Enter':
        case 'Tab':
          selectItem(active)();
          keyCaught = true;
          break;
      }
    }

    if (keyCaught) {
      ev.preventDefault();
      ev.stopPropagation();
      return false;
    }
  }

  // paging through options
  let visibleStart = 0;
  $: if (active != null && maxItems < options.length) {
    if (active >= visibleStart + maxItems) visibleStart = active - maxItems + 1;
    if (active < visibleStart) visibleStart = active;
  }
</script>

{#if top !== undefined}
  <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
    <div
      id="menu"
      role="menu"
      class="autocomplete-menu pointer-events-auto fixed z-20 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-200"
      style="left: {left}px; top: {top}px;"
      bind:this={menuRef}
    >
      {#if visibleStart > 0}
        <div
          role="option"
          class="menu-item pointer rounded-md px-2 py-1 {menuItemClass} hover:bg-slate-100 text-sm text-slate-400"
          on:mousedown|preventDefault|stopPropagation={() => {}}
          on:click|preventDefault={() =>
            (visibleStart = Math.max(0, visibleStart - maxItems))}
        >
          <Fa icon={faCaretUp} />
        </div>
      {/if}
      {#each options.slice(visibleStart, visibleStart + (!!maxItems ? maxItems : options.length)) as option, idx}
        <div
          role="option"
          class="menu-item pointer rounded-md {menuItemClass}"
          class:bg-slate-100={active === idx + visibleStart}
          on:mouseenter={() => (active = idx + visibleStart)}
          on:mouseleave={() => (active = null)}
          on:mousedown|preventDefault|stopPropagation={() => {}}
          on:click|preventDefault={selectItem(idx + visibleStart)}
        >
          {!!menuItemTextFn ? menuItemTextFn(option) : option}
        </div>
      {/each}
      {#if !!maxItems && visibleStart + maxItems < options.length}
        <div
          role="option"
          class="menu-item pointer rounded-md px-2 py-1 {menuItemClass} hover:bg-slate-100 text-sm text-slate-400"
          on:mousedown|preventDefault|stopPropagation={() => {}}
          on:click|preventDefault={() =>
            (visibleStart = Math.min(
              visibleStart + maxItems,
              options.length - maxItems
            ))}
        >
          <Fa icon={faCaretDown} />
        </div>
      {/if}
    </div>
  </div>
{/if}
