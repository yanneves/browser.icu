<script>
  import "@fontsource/michroma";
  import "@fontsource-variable/archivo";
  import "../app.css";

  const { children } = $props();
</script>

<svelte:head>
  <title>Browser.icu Persona NFTs</title>
  <meta name="description" content="The synthetic users of the agentic web" />
</svelte:head>

<div class="font-display text-foreground">{@render children()}</div>
