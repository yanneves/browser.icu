<script>
  import "../app.css";
  import "@ambientcss/css";
  import { browser } from "$app/environment";
  import { PUBLIC_FATHOM_KEY } from "$env/static/public";

  const { children } = $props();
</script>

<svelte:head>
  <title>Browser.icu</title>
  <meta
    name="description"
    content="Control the web's most powerful autonomous browser agents"
  />
</svelte:head>

<!-- Film grain effect -->
<aside class="pointer-events-none absolute inset-0 opacity-35">
  <div
    class="ambient amb-surface amb-mat-blasted amb-elevation-1 fixed h-full"
    style="--amb-grain-amount: 2;"
  ></div>
</aside>

{@render children()}

{#if browser}
  <script
    src="https://cdn.usefathom.com/script.js"
    data-excluded-domains="localhost"
    data-site={PUBLIC_FATHOM_KEY}
    data-spa="auto"
    defer
  ></script>
{/if}

<style>
  :root {
    --amb-light-x: -1;
    --amb-light-y: -1;
    --amb-key-light-intensity: 0.92;
    --amb-fill-light-intensity: 0.55;
    --amb-light-hue: 210;
    --amb-light-saturation: 20%;
    --amb-highlight-color: var(--color-blaze-400);
    --amb-lume-hue: 190;
    --amb-albedo: hsl(210 20% 10%);
    --amb-shade: 0.35;
  }
</style>
