import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ForestVideo } from "@/components/ForestVideo";
import { Reveal } from "@/components/Reveal";
import { Container, Section, SectionHeading, Eyebrow, ArrowRight } from "@/components/ui";
import {
  heroHome,
  companyParagraphs,
  services,
  visibleValue,
  heroTechnology,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <PageHero
        size="tall"
        priority
        image="/images/forest-path-hero.jpg"
        imageAlt="Sunlit path through a forest of tall conifers"
        eyebrow={heroHome.eyebrow}
        title={heroHome.title}
        intro={heroHome.subtitle}
      />

      {/* Company description — web-copy PDF p.2, verbatim */}
      <Section tone="white">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div
                className="relative overflow-hidden rounded-md shadow-card"
                style={{ aspectRatio: "4 / 3" }}
              >
                <Image
                  src="/images/timber-rounds.jpg"
                  alt="Stacked logs of harvested timber at the forest edge"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="max-w-xl">
                <p className="font-display text-2xl font-medium leading-snug text-forest-900 sm:text-[1.7rem]">
                  {companyParagraphs[0]}
                </p>
                <p className="mt-6 text-lg leading-relaxed text-forest-800/80">
                  {companyParagraphs[1]}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Services — web-copy PDF p.3, verbatim */}
      <Section tone="cream">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((line, i) => (
              <Reveal key={line.slice(0, 24)} delay={i * 70}>
                <div className="flex h-full gap-5 rounded-md border border-line bg-white p-7 shadow-card">
                  <span className="font-display text-3xl font-bold leading-none text-forest-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg leading-relaxed text-forest-800/85">
                    {line}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Full-bleed editorial image band */}
      <section className="relative h-[42vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src="/images/forest-ferns.jpg"
          alt="Ferns and green undergrowth on a forest floor"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* Forest biosensors — deck p.7 / p.1, verbatim */}
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
                  {heroTechnology.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-forest-800/80">
                  {heroTechnology.subline}
                </p>
                <Link
                  href="/technology"
                  className="mt-7 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-forest-700 underline-offset-4 hover:underline"
                >
                  Forest biosensors <ArrowRight />
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Add visible value to your asset — deck p.3, verbatim */}
      <Section tone="cream">
        <Container>
          <Reveal>
            <SectionHeading title="Add visible value to your asset" />
          </Reveal>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2">
            {visibleValue.map((item, i) => (
              <Reveal key={item.slice(0, 20)} delay={i * 70} as="li">
                <div className="flex h-full gap-4 rounded-md border border-line bg-white p-6 shadow-card">
                  <span className="font-display mt-0.5 text-xl font-bold leading-none text-forest-600">
                    {i + 1}.
                  </span>
                  <p className="text-base leading-relaxed text-forest-800/85">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>
    </>
  );
}
