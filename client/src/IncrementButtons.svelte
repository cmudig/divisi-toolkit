<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

  export let value = 0;
  export let min = 0;
  export let max = 100;
  export let step = 1;

  const dispatch = createEventDispatcher();

  function update(increment: number) {
    value += increment;
    dispatch('change', value);
  }
</script>

<div class="flex items-center">
  <button
    class="disabled:opacity-50 btn-slate font-bold py-1 px-2 rounded-l rounded-r-none"
    disabled={value <= min + 1e-6}
    on:click={() => update(-step)}
  >
    <Fa icon={faAngleDown} />
  </button>
  <button
    class="disabled:opacity-50 btn-slate font-bold py-1 px-2 rounded-r rounded-l-none"
    disabled={value >= max - 1e-6}
    on:click={() => update(step)}
  >
    <Fa icon={faAngleUp} />
  </button>
</div>
