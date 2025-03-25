<script lang="ts">
  import { areObjectsEqual } from '../utils/utils';

  export let samplerSettings: {
    num_samples: number;
    min_items_fraction: number;
    max_features: number;
    num_candidates: number;
    scoring_fraction: number;
    similarity_threshold: number;
    n_workers: number | null;
  };

  function defaultInt<T>(val: string, defaultVal: T): number | T {
    let num = parseInt(val);
    if (Number.isNaN(num)) return defaultVal;
    return num;
  }

  function defaultFloat<T>(val: string, defaultVal: T): number | T {
    let num = parseFloat(val);
    if (Number.isNaN(num)) return defaultVal;
    return num;
  }
</script>

{#if !!samplerSettings}
  <div
    class="grid gap-2 mx-4 items-center pb-4"
    style="grid-template-columns: max-content auto;"
  >
    <div class="flex-auto text-sm">Number of samples</div>
    <input
      class="flat-text-input flex-auto"
      type="number"
      min="0"
      max="500"
      placeholder="100"
      step="1"
      value={samplerSettings.num_samples}
      on:change={(e) =>
        (samplerSettings = {
          ...samplerSettings,
          num_samples: defaultInt(e.target.value, 50),
        })}
    />
    <div class="flex-auto text-sm">Minimum support</div>
    <input
      class="flat-text-input flex-auto"
      type="number"
      min="0"
      max="1"
      placeholder="0.01"
      step="0.01"
      value={samplerSettings.min_items_fraction}
      on:change={(e) =>
        (samplerSettings = {
          ...samplerSettings,
          min_items_fraction: defaultFloat(e.target.value, 0.01),
        })}
    />
    <div class="flex-auto text-sm">Maximum rule features</div>
    <input
      class="flat-text-input flex-auto"
      type="number"
      min="1"
      max="5"
      placeholder="3"
      step="1"
      value={samplerSettings.max_features}
      on:change={(e) =>
        (samplerSettings = {
          ...samplerSettings,
          max_features: defaultInt(e.target.value, 3),
        })}
    />
    <div class="flex-auto text-sm">Beam search size</div>
    <input
      class="flat-text-input flex-auto"
      type="number"
      min="0"
      max="200"
      placeholder="20"
      step="1"
      value={samplerSettings.num_candidates}
      on:change={(e) =>
        (samplerSettings = {
          ...samplerSettings,
          num_candidates: defaultInt(e.target.value, 100),
        })}
    />
    <div class="flex-auto text-sm">Scoring fraction</div>
    <input
      class="flat-text-input flex-auto"
      type="number"
      min="0"
      max="1"
      placeholder="1"
      step="0.1"
      value={samplerSettings.scoring_fraction}
      on:change={(e) =>
        (samplerSettings = {
          ...samplerSettings,
          scoring_fraction: defaultFloat(e.target.value, 0.5),
        })}
    />
    <div class="flex-auto text-sm">Similarity threshold</div>
    <input
      class="flat-text-input flex-auto"
      type="number"
      min="0"
      max="1"
      placeholder="0.9"
      step="0.1"
      value={samplerSettings.similarity_threshold}
      on:change={(e) =>
        (samplerSettings = {
          ...samplerSettings,
          similarity_threshold: defaultFloat(e.target.value, 0.9),
        })}
    />
    <div class="flex-auto text-sm">Number of threads</div>
    <input
      class="flat-text-input flex-auto"
      type="number"
      min="0"
      max="16"
      placeholder="1"
      step="1"
      value={samplerSettings.n_workers}
      on:change={(e) =>
        (samplerSettings = {
          ...samplerSettings,
          n_workers: defaultInt(e.target.value, null),
        })}
    />
  </div>
{/if}
