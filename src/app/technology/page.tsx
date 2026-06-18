import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { ForestVideo } from "@/components/ForestVideo";
import { EcosystemAssessment } from "@/components/EcosystemAssessment";
import { Reveal } from "@/components/Reveal";
import { Container, Section, SectionHeading } from "@/components/ui";
import { VisibleValue } from "@/components/VisibleValue";
import {
  heroTechnology,
  pillars,
  secureGrowth,
  measurementLabels,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Forest biosensors",
  description: heroTechnology.subline,
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        priority
        image="/images/forest-path-timber.jpg"
        imageAlt="Forest track lined with stacked timber"
        title={heroTechnology.title}
        intro={heroTechnology.subline}
      />

      {/* Two pillars — deck p.2, verbatim */}
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
                  {p.highlight && (
                    <p className="mt-4 border-t border-line pt-4 font-medium text-forest-700">
                      {p.highlight}
                    </p>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Add visible value to your asset — deck p.3, verbatim */}
      <VisibleValue />

      {/* Secure growth and well being of your asset — deck p.4, verbatim */}
      <Section tone="white">
        <Container>
          <Reveal>
            <SectionHeading title="Secure growth and well being of your asset" />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {secureGrowth.map((group, i) => (
              <Reveal key={group.title} delay={i * 70}>
                <article className="flex h-full flex-col rounded-md border border-line bg-cream p-7 shadow-card">
                  <h3 className="font-display text-lg font-semibold leading-snug text-forest-800">
                    {group.title}
                  </h3>
                  {group.points.length > 0 && (
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
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Measurement technology — deck p.5 (source figure) */}
      <Section tone="cream">
        <Container>
          <Reveal>
            <SectionHeading title="Measurement technology" />
          </Reveal>
          <Reveal delay={80}>
            <figure className="mt-10 overflow-hidden rounded-md border border-line bg-white shadow-card">
              <Image
                src="/images/tech/measurement-technology.jpg"
                alt="3D measurement of forest structure, branching into Carbon, Biodiversity, Operations and Restoration."
                width={1259}
                height={706}
                className="h-auto w-full"
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <ul className="mt-6 flex flex-wrap justify-center gap-3">
              {measurementLabels.map((label) => (
                <li
                  key={label}
                  className="rounded-full border border-line bg-white px-4 py-1.5 font-display text-sm font-semibold uppercase tracking-wide text-forest-700"
                >
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      {/* LiDAR-derived Ecosystem Assessment — deck p.6 (source figure + scores) */}
      <Section tone="white">
        <Container>
          <Reveal>
            <SectionHeading title="LiDAR-derived Ecosystem Assessment" />
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-10">
              <EcosystemAssessment />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Forest footage (provided asset, used as a plain visual) */}
      <Section tone="cream" className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl">
              <ForestVideo
                slug="forest-loop-2"
                label="Ambient footage of a managed forest stand"
              />
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
