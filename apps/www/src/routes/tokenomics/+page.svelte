<script>
  import { resolve } from "$app/paths";
  import Footer from "$lib/components/organisms/Footer.svelte";
  import SiteHeader from "$lib/components/organisms/SiteHeader.svelte";
</script>

<SiteHeader />

<main class="relative w-full">
  <div
    class="max-w-center-content mx-auto flex w-full flex-col px-5 pt-28 pb-16 sm:pt-36 min-[55rem]:px-0"
  >
    <a
      href={resolve("/")}
      class="text-foreground-alt hover:text-foreground inline-flex w-fit items-center gap-2 text-sm transition-colors"
    >
      <span class="icon-[lucide--arrow-left] size-4" aria-hidden="true"></span>
      Return home
    </a>

    <article
      class="border-stroke bg-card mt-6 w-full border px-5 py-8 sm:px-10 sm:py-12"
    >
      <div
        class="border-primary/20 bg-primary/5 mb-10 flex items-start gap-3 border px-4 py-3"
      >
        <span
          class="icon-[lucide--lightbulb] text-primary mt-0.5 size-5 shrink-0"
          aria-hidden="true"
        ></span>
        <p class="text-foreground text-sm leading-relaxed">
          This is a living document and will evolve with community input
        </p>
      </div>

      <section
        class="prose prose-invert prose-headings:font-heading
          prose-headings:tracking-wide prose-headings:text-balance prose-h3:mt-12
          prose-h3:text-xl prose-h3:font-semibold prose-h3:sm:text-2xl prose-h4:mt-4
          prose-h4:font-display prose-h4:text-base prose-h4:font-medium prose-h4:text-foreground-alt prose-p:text-foreground
          prose-p:leading-relaxed prose-strong:text-foreground
          prose-strong:font-semibold prose-a:text-primary
          prose-a:no-underline hover:prose-a:underline prose-ul:marker:text-primary
          prose-li:text-foreground prose-li:leading-relaxed prose-ul:my-4
          prose-li:my-1.5 prose-hr:border-stroke
          max-w-none
          [&>h3:first-of-type]:mt-0 [&>h3:first-of-type]:text-2xl [&>h3:first-of-type]:sm:text-3xl"
      >
        <h3 id="browser-litepaper">$BROWSER Litepaper</h3>
        <h4 id="empowering-autonomous-browser-agents-on-solana">
          Empowering autonomous browser agents on Solana
        </h4>
        <h3 id="1-introduction">1. Introduction</h3>
        <p>
          <strong>Vision</strong>: To control the web's most powerful browser
          agents through a decentralised token economy.
        </p>
        <p>
          $BROWSER is the utility token powering innovation in browser
          automation on Solana. By enabling governance, advanced tools, and
          sustainable tokenomics, we're paving the way for the future of
          AI-driven web automation.
        </p>
        <h3 id="2-the-problem">2. The Problem</h3>
        <p>
          Existing agents rely on rare resources of great data quality and API
          access. To circumvent this, models rely on expensive human-in-the-loop
          steps. As web complexity grows, manual processes for automation and
          navigation fall short of demand.
        </p>
        <h3 id="3-the-browser-solution">3. The $BROWSER Solution</h3>
        <p>$BROWSER introduces:</p>
        <ul>
          <li>
            <strong>Autonomous Browser Agents</strong>: AI agents that can do
            anything a user can do in the browser
          </li>
          <li>
            <strong>Token-Gated Models</strong>: Access to advanced models
            linked to token holdings
          </li>
          <li>
            <strong>Sustainable Tokenomics</strong>: Deflationary mechanisms to
            create long-term value
          </li>
        </ul>
        <h3 id="4-tokenomics">4. Tokenomics</h3>
        <ul>
          <li>
            <p>
              <strong>Total Supply</strong>: 1,000,000,000 tokens (capped, no
              inflation)
            </p>
          </li>
          <li>
            <p>
              <strong>Presale Allocation</strong>: 45% DAO Treasury, 45%
              Investors, 10% LP
            </p>
          </li>
          <li>
            <p><strong>Treasury Allocation</strong>:</p>
            <ul>
              <li><strong>Burn Commitment</strong>: 10%</li>
              <li><strong>$X Partnership</strong>: 5%</li>
              <li>
                <strong>DAO Treasury</strong>: remaining 30%
                <ul>
                  <li>
                    <strong>Operations (6%)</strong>: Platform and community
                    growth
                  </li>
                  <li>
                    <strong>Reserves (15%)</strong>: Market stability through
                    DCA
                  </li>
                  <li><strong>Staking (9%)</strong>: Market volume growth</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <h3 id="5-utility">5. Utility</h3>
        <p>$BROWSER enables:</p>
        <ul>
          <li>
            <strong>Browser Automation</strong>: Access to advanced browser
            agents
          </li>
          <li>
            <strong>Staking Rewards</strong>: Daily returns, future airdrops,
            and engagement incentives on Meteora M3M3
          </li>
          <li>
            <strong>Governance</strong>: Community-driven decisions for treasury
            and ecosystem development
          </li>
        </ul>
        <h3 id="6-roadmap">6. Roadmap</h3>
        <p>
          <strong>Phase 1</strong>: Release and continuously improve beta models<br
          /><strong>Phase 2</strong>: Build integrations with ecosystem partners<br
          /><strong>Phase 3</strong>: Embed Solana knowledge graph to drive AGI
          (Artificial General Intelligence)
        </p>
        <h3 id="7-governance">7. Governance</h3>
        <p>
          The DAO controls 30% of supply post-burn and engages in transparent
          decision-making to align with community goals. Staking and reserves
          provide mechanisms to incentivise the marketplace.
        </p>
        <h3 id="8-conclusion">8. Conclusion</h3>
        <p>
          $BROWSER isn't just a token - it's a gateway to revolutionising how we
          interact with the web. By combining decentralisation, automation, and
          community-led governance, $BROWSER positions itself at the forefront
          of the Solana AI ecosystem.
        </p>
      </section>
    </article>
  </div>
</main>

<Footer />
