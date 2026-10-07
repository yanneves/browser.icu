<script>
  import "../app.css";
  import { browser } from "$app/environment";
  import { PUBLIC_FATHOM_KEY } from "$env/static/public";
  import "@fontsource-variable/inter";
  import "@fontsource-variable/jetbrains-mono";
  import "@fontsource/michroma";

  const { children } = $props();
</script>

<svelte:head>
  <title>Browser.icu</title>
  <meta
    name="description"
    content="Control the web's most powerful browser agents"
  />
</svelte:head>

<div class="max-w-center-content relative mx-auto">
  <div class="hero-gradient"></div>
</div>

<div class="grain-overlay" aria-hidden="true"></div>

<div class="relative">
  {@render children()}
</div>

{#if browser}
  <script
    src="https://cdn.usefathom.com/script.js"
    data-site={PUBLIC_FATHOM_KEY}
    data-excluded-domains="localhost"
    data-spa="auto"
    defer
  ></script>
{/if}

<style>
  .hero-gradient {
    translate: 40% -20%;
    opacity: 0.15;
    background-image: radial-gradient(
      circle,
      color-mix(in srgb, var(--color-primary) 40%, transparent) 0%,
      transparent 60%,
      transparent 100%
    );
    z-index: -100;
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;
    min-height: 900px;
    min-width: 800px;
  }
</style>
