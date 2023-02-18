<script lang="ts">
  import { syncValue } from './stores';

  export let model;

  let count = syncValue(model, 'count', 0);
</script>

<main>
  <h1 class="text-3xl text-blue-900 font-bold">Basic Widget Component</h1>

  <div class="card m-6 shadow-lg bg-blue-200 rounded">
    The count is {$count}, yay!
  </div>
</main>

<style global lang="postcss">
  @tailwind utilities;
  @tailwind components;
  @tailwind base;
</style>
