<script>
  import { resolve } from "$app/paths";
  import Button from "../atoms/Button.svelte";
  import Logo from "../atoms/Logo.svelte";

  /**
   * @typedef {Object} Props
   * @property {string} [class] - Additional CSS classes for the header element.
   */

  /** @type {Props} */
  let { class: className = "", ...restProps } = $props();
</script>

<header
  class="absolute inset-x-0 top-6 z-50 sm:top-12 {className}"
  {...restProps}
>
  <nav
    class="max-w-center-content mx-auto flex w-full items-center justify-between gap-3 px-5 min-[55rem]:px-0"
  >
    <div class="logo min-w-0 shrink-0">
      <a href={resolve("/")}>
        <Logo class="h-6 w-auto sm:h-8" />
      </a>
    </div>
    <div class="nav-actions flex shrink-0 items-center gap-2">
      <span class="hidden min-[480px]:inline">
        <Button href="https://github.com/yanneves/browser.icu"
          ><span class="icon-[lucide--github]"></span><span>GitHub</span
          ></Button
        >
      </span>
      <span class="min-[480px]:hidden">
        <Button
          href="https://github.com/yanneves/browser.icu"
          size="sm"
          aria-label="GitHub"
          ><span class="icon-[lucide--github]"></span></Button
        >
      </span>
    </div>
  </nav>
</header>
