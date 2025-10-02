<script>
  import GridPattern from "$lib/components/GridPattern.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import CornerBracket from "./ui/CornerBracket.svelte";
</script>

<section
  id="creator"
  aria-labelledby="creator-title"
  class="relative scroll-mt-14 pt-8 pb-3 sm:scroll-mt-32 sm:pt-10 sm:pb-16 lg:pt-16"
>
  <div
    class="absolute inset-x-0 top-1/2 bottom-0 mask-[linear-gradient(transparent,white)] text-zinc-100/10"
  >
    <GridPattern x="50%" y="100%" />
  </div>
  <div class="relative mx-auto max-w-5xl pt-16 sm:px-6">
    <div class="sm:rounded-6xl border-border/50 border bg-zinc-950 pt-px">
      <div
        class="text-primary relative mx-auto -mt-16 h-44 w-44 overflow-hidden border bg-zinc-800 shadow-[8px_8px_var(--color-primary)] md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72"
      >
        <enhanced:img
          class="absolute inset-0 h-full w-full object-cover"
          src="$lib/images/avatars/author.png"
          alt="Creator bio"
          sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
        />
        <CornerBracket class="size-12" />
        <CornerBracket class="size-12" position="bottom-right" />
      </div>
      <div class="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
        <SectionHeading number="5" id="creator-title">Creator</SectionHeading>
        <p
          class="font-michroma mt-8 text-5xl font-extrabold tracking-tight text-balance sm:text-6xl"
        >
          <span class="block text-orange-600">
            <span class="hidden sm:inline">My name is</span>
            Yann Eves –
          </span>
          the dev behind ‘Persona’.
        </p>
        <p class="text-foreground-alt mt-4 text-lg tracking-tight">
          I’ve spent over 15 years building for the web, serving tens of
          millions of users. In January 2025, we launched our AI Agent platform,
          and demand from the web2 space quickly surged. Today, I’m focused on
          helping shape an agentic web that moves beyond advertising and
          supports human progress.
        </p>
        <p class="mt-8">
          <a
            rel="me"
            href="https://x.com/yanniibesu"
            class="inline-flex items-center text-base font-medium tracking-tight text-zinc-100"
          >
            <i class="iconify logos--x size-8"></i>
            <span class="ml-4">Follow on X</span>
          </a>
        </p>
      </div>
    </div>
  </div>
</section>
