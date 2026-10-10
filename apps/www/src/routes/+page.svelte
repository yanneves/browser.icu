<script>
  import trackEvent from "$lib/utils/trackEvent";
  import Button from "../lib/components/atoms/Button.svelte";
  import Footer from "../lib/components/organisms/Footer.svelte";
  import SiteHeader from "../lib/components/organisms/SiteHeader.svelte";
</script>

<SiteHeader />

<main class="relative w-full">
  <section class="relative overflow-clip">
    <div
      class="pointer-events-none absolute inset-0 hidden md:block"
      aria-hidden="true"
    >
      <div class="max-w-center-content relative mx-auto h-full w-full">
        <img
          class="absolute top-20 left-0"
          alt=""
          src="/ornaments/orbit_ring.svg"
        />
        <img
          class="absolute top-55 right-0"
          alt=""
          src="/ornaments/hero_sprite.png"
        />
      </div>
    </div>

    <div
      class="max-w-center-content mx-auto flex min-h-128 w-full flex-col items-start justify-center px-5 pt-28 pb-16 sm:min-h-160 sm:pt-18 sm:pb-0 min-[55rem]:px-0"
    >
      <div class="relative flex w-full flex-col items-start gap-5 sm:max-w-130">
        <div
          aria-hidden="true"
          class="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-184 w-195 max-w-[100vw] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-[#F00FDD]/10 opacity-15 blur-3xl"
        ></div>
        <div
          aria-hidden="true"
          class="bg-primary/10 pointer-events-none absolute top-3/4 left-65 -z-10 hidden h-105 w-105 translate-x-65 -translate-y-3/4 rounded-full opacity-40 blur-3xl sm:block"
        ></div>
        <h1
          class="font-heading text-[1.75rem] leading-[1.2] font-semibold sm:text-3xl sm:leading-tight"
        >
          Control The Web's Most Powerful <span class="text-primary"
            >Browser Agents</span
          >
        </h1>
        <p class="max-w-full leading-relaxed text-pretty sm:max-w-[90%]">
          Supercharged chat-based task solving. An AI agent controls a real
          browser to do it, live, in front of you.
        </p>
        <div class="flex items-center gap-1">
          <Button
            href="/discord"
            variant="outline alt"
            onclick={() => trackEvent("Joined Discord")}
            ><span class="icon-[tabler--brand-discord-filled]"></span><span
              >Join Discord</span
            ></Button
          >
        </div>
      </div>
    </div>
  </section>
  <section class="bg-card py-14 sm:py-22">
    <div
      class="max-w-center-content mx-auto flex w-full flex-col gap-8 px-5 min-[55rem]:px-0"
    >
      <div class="flex flex-col gap-3.5 pb-6 sm:pb-12">
        <h2 class="font-heading text-2xl font-semibold sm:text-2xl">
          Give Browser A Mission
        </h2>
        <p>Describe the goal. Watch it work. Get things done.</p>
      </div>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div class="border-stroke relative border">
          <span
            class="bg-card text-primary absolute -top-3 left-3 px-3 font-mono text-sm font-semibold italic"
            >PROMPT</span
          >
          <div class="flex h-full items-center justify-center px-5 py-2">
            <p class="text-xs leading-6 text-pretty">
              “Navigate to hubspot.com/pricing and break down the tiers. Compare
              features across tiers, which plan offers the best value for a
              5-person team? Save results in a markdown file.”
            </p>
          </div>
        </div>
        <div class="border-stroke relative border">
          <span
            class="bg-card text-primary absolute -top-3 left-3 rounded-full px-3 font-mono text-sm font-semibold italic"
            >OBSERVE</span
          >
          <div>
            <div>
              <div class="grid min-w-0 grid-cols-1 sm:grid-cols-[auto_30%]">
                <div class="min-w-0 px-5 py-2">
                  <span
                    class="text-xxs text-foreground-alt font-mono tracking-widest"
                    >BROWSER LOG</span
                  >
                  <table class="w-full border-separate border-spacing-y-1">
                    <tbody>
                      {#each [{ timestamp: "00:00", status: "complete", log: "Open HubSpot's current pricing page to inspect its structure." }, { timestamp: "00:36", status: "complete", log: "Parse pricing page HTML to extract detailed tier text." }, { timestamp: "01:14", status: "complete", log: "Analyze HubSpot plan structures and identify starter features." }, { timestamp: "01:30", status: "ongoing", log: "Evaluating tier options for a five-person team..." }] as entry (entry.timestamp)}
                        <tr class="text-xxs">
                          <td
                            class="text-foreground-alt w-0 pr-2 font-mono whitespace-nowrap"
                          >
                            {#if entry.status === "complete"}
                              <span class="opacity-60">{entry.timestamp}</span>
                            {:else}
                              <span class="text-primary">{entry.timestamp}</span
                              >
                            {/if}
                          </td>
                          <td
                            class="w-0 pr-2 text-center align-middle whitespace-nowrap"
                          >
                            {#if entry.status === "complete"}
                              <span
                                class="icon-[lucide--check] text-foreground-alt align-middle"
                              ></span>
                            {:else}
                              <span
                                class="icon-[lucide--corner-down-right] text-primary align-middle"
                              ></span>
                            {/if}
                          </td>
                          <td
                            class="max-w-40 overflow-clip text-nowrap text-ellipsis"
                          >
                            {#if entry.status === "complete"}
                              <span class="text-foreground-alt"
                                >{entry.log}</span
                              >
                            {:else}
                              {entry.log}
                            {/if}
                          </td>
                        </tr>
                      {/each}
                    </tbody>
                  </table>
                </div>
                <div
                  class="bg-foreground hidden bg-[url('/ornaments/preview.png')] bg-cover bg-center bg-no-repeat sm:block"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="border-primary/50 bg-primary/5 border-t-primary relative col-span-1 border border-t-4 md:col-span-2"
        >
          <span
            class="bg-primary text-primary-foreground absolute -top-3 left-3 z-10 px-3 font-mono text-sm font-semibold italic"
            >USE</span
          >
          <div>
            <div>
              <div class="grid min-w-0 grid-cols-1 sm:grid-cols-[35%_auto]">
                <div class="relative overflow-clip px-5 py-2">
                  <div
                    class="pointer-events-none absolute inset-x-0 -bottom-60 flex justify-center"
                  >
                    <div
                      class="relative flex size-100 items-center justify-center"
                    >
                      <span
                        class="bg-primary/20 h-40 w-60 shrink-0 rounded-full blur-2xl"
                      ></span>
                    </div>
                  </div>
                  <div
                    class="flex flex-col items-center justify-center space-y-4 pt-3"
                  >
                    <div
                      class="bg-primary/5 border-primary/20 shadow-primary/10 grid w-67 shrink-0 translate-x-2 grid-cols-[18%_auto] border shadow-lg"
                    >
                      <div
                        class="bg-primary/10 border-r-primary/20 flex items-center justify-center border-r"
                      >
                        <span
                          class="icon-[lucide--file-braces-corner] text-primary/70 size-6"
                        ></span>
                      </div>
                      <div class="px-2 py-1 text-xs">
                        <p class="tracking-wide">
                          hubspot_findings<span class="text-primary">.md</span>
                        </p>
                        <span class="text-primary">12 KiB</span>
                      </div>
                    </div>
                    <div
                      class="file bg-primary/5 border-primary/20 grid w-67 shrink-0 -translate-x-2 grid-cols-[18%_auto] border opacity-70"
                    >
                      <div
                        class="bg-primary/10 border-r-primary/20 flex items-center justify-center border-r"
                      >
                        <span
                          class="icon-[lucide--file-braces-corner] text-primary/70 size-6"
                        ></span>
                      </div>
                      <div class="px-2 py-1 text-xs">
                        <p class="tracking-wide">
                          pricing_notes<span class="text-primary">.md</span>
                        </p>
                        <span class="text-primary">7 KiB</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="border-t-primary/50 border-l-primary/50 sm:border-l-primary/50 flex h-full items-center justify-center border-t px-5 py-4 sm:border-t-0 sm:border-l"
                >
                  <p
                    class="line-clamp-5 overflow-hidden text-xs leading-7 text-balance text-ellipsis"
                  >
                    For a five-person team, the best default value is Starter,
                    not Professional or Enterprise. Free is capped at two users,
                    while Starter supports a five-seat team at the lowest paid
                    entry point. If the team needs only marketing functionality,
                    Marketing Hub Starter is the most economical fit. If the
                    team wants a basic all-in-one system for marketing, sales,
                    service, content...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-14 sm:py-22">
    <div
      class="max-w-center-content mx-auto gap-8 px-5 text-left sm:flex-row sm:items-center sm:justify-between min-[55rem]:px-0"
    >
      <div class="flex flex-col items-start gap-3.5">
        <h2
          class="font-heading w-full text-2xl font-semibold text-balance sm:max-w-130 sm:text-2xl"
        >
          Ready To Put Browser To Work?
        </h2>
        <div
          class="bg-foreground-alt text-primary-foreground flex w-full flex-col justify-between bg-[url('/ornaments/grid_mesh.svg')] bg-cover sm:flex-row"
        >
          <div class="py-3 pr-4 pl-4 sm:pr-0">
            <p class="w-full leading-relaxed text-pretty sm:max-w-105">
              Join the Browser.icu community and be first in line when missions
              open up.
            </p>
          </div>
          <Button
            href="/discord"
            onclick={() => trackEvent("Joined Discord")}
            class="w-full shrink-0 justify-center sm:w-auto"
            ><span>Join Discord</span><span
              class="icon-[tabler--brand-discord-filled]"
            ></span></Button
          >
        </div>
      </div>
    </div>
  </section>
</main>

<Footer />

<style>
  .file {
    -webkit-mask-image: linear-gradient(
      to bottom,
      rgb(0, 0, 0),
      rgba(0, 0, 0, 0)
    );
    mask-image: linear-gradient(to bottom, rgb(0, 0, 0), rgba(0, 0, 0, 0));
  }
</style>
