<script>
  import { resolve } from "$app/paths";
  import Logo from "../atoms/Logo.svelte";

  /**
   * @typedef {Object} Props
   * @property {string} [class] - Additional CSS classes for the footer element.
   */

  /** @type {Props} */
  let { class: className = "", ...restProps } = $props();

  const mint = "AYHXXJhuQ7m26QjSJwgynfDcy4BVDfxG4zjATmYXjswk";

  let copying = $state(false);
  const year = new Date().getFullYear();
  // TODO: add toast component for copy success and error handling
  async function copyMint() {
    await navigator.clipboard.writeText(mint);
    copying = true;
    setTimeout(() => (copying = false), 3000);
  }
</script>

<footer class="w-full bg-[#141417] {className}" {...restProps}>
  <div
    class="max-w-center-content mx-auto flex w-full flex-col items-start justify-between gap-8 px-5 pt-11 pb-10 sm:flex-row sm:items-start min-[55rem]:px-0"
  >
    <div class="flex w-full flex-col items-start gap-3 sm:w-auto">
      <a href={resolve("/")} aria-label="Browser.icu home">
        <Logo class="h-6 w-auto" />
      </a>
      <p class="text-foreground-alt text-sm tracking-tight">
        Powered by <a href="https://gadabout.ai/" class="text-foreground"
          >Gadabout.ai</a
        >
        | {year}
      </p>
    </div>

    <div class="flex flex-col items-start gap-2 sm:items-center">
      <p class="text-foreground-alt text-sm">Join the community</p>
      <div class="flex items-center gap-2">
        <a
          href="https://github.com/yanneves/browser.icu"
          rel="external noopener noreferrer"
          aria-label="GitHub"
          class="text-foreground hover:text-primary transition-colors"
        >
          <span class="icon-[tabler--brand-github] size-8"></span>
        </a>
        <a
          href={resolve("/twitter")}
          aria-label="X (Twitter)"
          class="text-foreground hover:text-primary transition-colors"
        >
          <span class="icon-[tabler--brand-x] size-8"></span>
        </a>
        <a
          href={resolve("/discord")}
          aria-label="Discord"
          class="text-foreground hover:text-primary transition-colors"
        >
          <span class="icon-[tabler--brand-discord-filled] size-8"></span>
        </a>
      </div>
    </div>

    <nav
      aria-label="Footer"
      class="text-foreground-alt flex flex-col items-start gap-2.5 text-sm"
    >
      <a
        href={resolve("/tokenomics")}
        class="hover:text-foreground transition-colors">Tokenomics</a
      >
      <a
        href="https://github.com/yanneves/browser.icu/blob/main/LICENSE"
        rel="external noopener noreferrer"
        class="hover:text-foreground transition-colors">MIT License</a
      >
    </nav>
  </div>

  <div class="border-stroke/50 border-t">
    <div
      class="max-w-center-content mx-auto flex justify-center px-5 py-6 min-[55rem]:px-0"
    >
      <button
        type="button"
        onclick={copyMint}
        title={copying ? "Copied!" : "Copy token address"}
        aria-label="Copy token mint address"
        class=" text-foreground-alt/60 hover:text-foreground-alt flex max-w-full cursor-pointer items-center gap-2.5 text-center font-mono text-[11px] tracking-[0.25em] transition-colors sm:text-xs sm:tracking-[0.33em]"
      >
        <span
          class="size-3.5 shrink-0 transition-transform {copying
            ? 'icon-[lucide--check]'
            : 'icon-[lucide--copy]'}"
          aria-hidden="true"
        ></span>
        <span class="break-all">{mint}</span>
        <span class="sr-only">{copying ? "Copied!" : "Copy"}</span>
      </button>
    </div>
  </div>
</footer>
