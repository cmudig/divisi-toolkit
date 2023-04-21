<script>
  export let hovering = false;

  let clazz = '';
  export { clazz as class };
  export let style = '';
</script>

<div
  class={clazz}
  {style}
  on:mouseenter={() => (hovering = true)}
  on:mouseleave={() => (hovering = false)}
>
  <slot {hovering} />
</div>
