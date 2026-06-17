import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { ForestVideo } from "@/components/ForestVideo";
import { EcosystemAssessment } from "@/components/EcosystemAssessment";
import { Reveal } from "@/components/Reveal";
import {
  Container,
  Section,
  SectionHeading,
  Button,
  ArrowRight,
  Eyebrow,
} from "@/components/ui";
import {
  pillars,
  visibleValue,
  secureGrowth,
  measurementDomains,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Forest biosensors",
  description:
    "Digital forest biosensors that quantify carbon capture, nature diversity and forest-management performance with transparent, LiDAR-derived indicators.",
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        priority
        image="/images/forest-path-timber.jpg"
        imageAlt="Forest track lined with stacked timber"
        eyebrow="Forest biosensors"
        title="Add value with biosensors"
        intro="Quantify your carbon capture, nature diversity and other actions with digital biosensors — and make them part of the value of your biomass raw material."
      />

      {/* Two pillars */}
      <Section tone="white">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="flex h-full flex-col rounded-md border border-line bg-cream p-8 shadow-card sm:p-10">
                  <h2 className="font-display text-2xl font-semibold leading-tight text-forest-900">
                    {p.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-forest-800/80">
                    {p.body}
                  </p>
                  <p className="mt-4 border-t border-line pt-4 font-medium text-forest-700">
                    {p.highlight}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Measurement technology */}
      <Section tone="cream">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Measurement technology"
              title="3D measurement of forest structure"
              intro="LiDAR-based 3D measurement of forest structure feeds four families of indicators — carbon, biodiversity, operations and restoration."
            />
          </Reveal>

          <Reveal delay={80}>
            <figure className="mt-12 overflow-hidden rounded-md border border-line bg-white shadow-card">
              <Image
                src="/images/tech/measurement-technology.jpg"
                alt="A coloured 3D LiDAR point-cloud measurement of forest structure, branching into carbon, biodiversity, operations and restoration categories."
                width={1259}
                height={706}
                className="h-auto w-full"
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
            </figure>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {measurementDomains.map((d, i) => (
              <Reveal key={d.title} delay={i * 60}>
                <article className="flex h-full flex-col overflow-hidden rounded-md border border-line bg-white shadow-card">
                  <div className="relative" style={{ aspectRatio: "4 / 3" }}>
                    <Image
                      src={d.image}
                      alt={d.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-semibold text-forest-800">
                      {d.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-forest-800/75">
                      {d.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Ecosystem assessment */}
      <Section tone="white">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Ecosystem assessment"
              title="From point cloud to transparent indicators"
              intro="Structural and ecological indicators are derived from LiDAR data and expressed as clear, comparable scores."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-12">
              <EcosystemAssessment />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Add visible value */}
      <Section tone="cream">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Add visible value to your asset"
                title="Four measured contributions"
              />
            </Reveal>
            <Reveal delay={80}>
              <ul className="space-y-5">
                {visibleValue.map((item, i) => (
                  <li key={item.slice(0, 20)} className="flex gap-4">
                    <span className="font-display mt-0.5 text-xl font-bold leading-none text-forest-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-lg leading-relaxed text-forest-800/85">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Secure growth */}
      <Section tone="white">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Secure growth & wellbeing"
              title="Resilience, monitoring and sustainable operations"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {secureGrowth.map((group, i) => (
              <Reveal key={group.title} delay={i * 70}>
                <article className="flex h-full flex-col rounded-md border border-line bg-cream p-7 shadow-card">
                  <h3 className="font-display text-xl font-semibold text-forest-800">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {group.points.map((pt) => (
                      <li
                        key={pt.slice(0, 20)}
                        className="flex gap-3 text-base leading-relaxed text-forest-800/80"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-forest-500"
                        />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Forest video + CTA */}
      <Section tone="cream">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <ForestVideo
                slug="forest-loop-2"
                label="Ambient footage of a managed forest stand"
              />
            </Reveal>
            <Reveal delay={80}>
              <div className="max-w-xl">
                <Eyebrow>Get started</Eyebrow>
                <h2 className="font-display mt-3 text-3xl font-semibold leading-[1.12] tracking-tight text-forest-900 sm:text-4xl">
                  Put a measured value on your stewardship
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-forest-800/80">
                  Talk to EFM Development about applying forest biosensors to your
                  asset — from carbon and biodiversity to operations and
                  restoration.
                </p>
                <div className="mt-8">
                  <Button href="/contact">
                    Get in touch <ArrowRight />
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
