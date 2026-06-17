import { PageHero } from "@/components/PageHero";
import { FeatureRow } from "@/components/FeatureRow";
import { ForestVideo } from "@/components/ForestVideo";
import { Reveal } from "@/components/Reveal";
import { Container, Section, SectionHeading, Button, ArrowRight, Eyebrow } from "@/components/ui";
import { whatWeDo, services, visibleValue } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <PageHero
        size="tall"
        priority
        image="/images/forest-path-hero.jpg"
        imageAlt="Sunlit path through a forest of tall conifers"
        eyebrow="Biomass-based · Sustainable circular economy"
        title="Added value from forest"
        intro="EFM Development builds new biomass-based value chains and digital forest biosensors — making the carbon, biodiversity and management value of your forest asset visible and transparent."
      >
        <Button href="/technology" variant="light">
          Explore the technology <ArrowRight />
        </Button>
        <Button href="/contact" variant="outline-light">
          Get in touch
        </Button>
      </PageHero>

      {/* What we do */}
      <Section tone="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="What we do"
                title="New value chains from renewable biomass"
              />
            </Reveal>
            <Reveal delay={80}>
              <div className="space-y-5 text-lg leading-relaxed text-forest-800/80">
                {whatWeDo.map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Value strip */}
      <Section tone="cream">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Visible value"
              title="Quantify the value your forest already creates"
              intro="With digital KPIs and AI-driven tools, EFM Development turns your forest stewardship into measured, transparent indicators."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {visibleValue.map((item, i) => (
              <Reveal key={item.slice(0, 24)} delay={i * 70}>
                <div className="flex h-full gap-4 rounded-md border border-line bg-white p-6 shadow-card">
                  <span className="font-display mt-0.5 text-2xl font-bold leading-none text-forest-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-relaxed text-forest-800/85">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Technology teaser with forest video */}
      <Section tone="white">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <ForestVideo
                slug="forest-loop-1"
                label="Ambient footage of a Northern European forest"
              />
            </Reveal>
            <Reveal delay={80}>
              <div className="max-w-xl">
                <Eyebrow>Forest biosensors</Eyebrow>
                <h2 className="font-display mt-3 text-3xl font-semibold leading-[1.12] tracking-tight text-forest-900 sm:text-4xl">
                  Add value with digital biosensors
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-forest-800/80">
                  Quantify carbon capture, nature diversity and forest-management
                  performance with data-based, transparent indicators — and
                  integrate them into the value of your biomass raw material.
                </p>
                <div className="mt-8">
                  <Button href="/technology" variant="outline">
                    See how it works <ArrowRight />
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Services */}
      <FeatureRow
        image="/images/about-fieldwork.jpg"
        imageAlt="A forestry specialist inspecting stacked timber in the forest"
        eyebrow="How we help"
        title="From strategy to implementation"
        tone="cream"
        imageSide="left"
      >
        <p>
          EFM Development pairs deep expertise in business development, market
          intelligence and supply chains with the chemistry of wood-based
          materials, process and product technology.
        </p>
        <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.title}>
              <h3 className="font-display text-base font-semibold uppercase tracking-wide text-forest-700">
                {s.title}
              </h3>
              <p className="mt-1.5 text-base leading-relaxed text-forest-800/75">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </FeatureRow>

      {/* Closing CTA */}
      <Section tone="forest">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-cream sm:text-4xl">
                Make the added value of your forest visible
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-cream/80">
                Let’s talk about new value chains, digital KPIs and biosensors
                for your forest asset.
              </p>
              <div className="mt-9 flex justify-center">
                <Button href="/contact" variant="light">
                  Get in touch <ArrowRight />
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
