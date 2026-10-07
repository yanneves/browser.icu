<script>
  /**
   * @typedef {Object} Props
   * @property {string} [class] - Additional CSS classes.
   * @property {any} [restProps] - Any other props to pass to the underlying image element.
   */

  /** @type {Props} */
  let { class: className = "", ...restProps } = $props();
</script>

<img src="/logo.svg" alt="Browser.icu" class={className} {...restProps} />
