<script>
  import Comparison from "$lib/components/Comparison.svelte";
  import Creator from "$lib/components/Creator.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import HeroOrnament from "$lib/components/HeroOrnament.svelte";
  import Introduction from "$lib/components/Introduction.svelte";
  import NavBar from "$lib/components/NavBar.svelte";
  import Traits from "$lib/components/Traits.svelte";
  import Waitlist from "$lib/components/Waitlist.svelte";
  import HeaderOrnament from "../lib/components/HeaderOrnament.svelte";
</script>

<div class="border-border mb-14 h-7 overflow-hidden">
  <HeaderOrnament class="text-foreground-darker/80 -translate-x-4" />
</div>
<Hero />
<HeroOrnament />
<Introduction />
<NavBar />
<Traits />
<Comparison />
<Waitlist />
<Creator />
<Footer />
<div class="border-border h-7 overflow-hidden border-b">
  <HeaderOrnament class="text-foreground-darker/80 -translate-x-4" />
</div>
