import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { ForestVideo } from "@/components/ForestVideo";
import { Reveal } from "@/components/Reveal";
import {
  Container,
  Section,
  SectionHeading,
  Button,
  ArrowRight,
  Eyebrow,
} from "@/components/ui";
import { whatWeDo } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "EFM Development GmbH is a Swiss bio-industry company building new biomass-based value chains, led by Managing Director Elina Kalela and based in Thun, Switzerland.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        priority
        image="/images/about-forest-walk.jpg"
        imageAlt="A person walking along a quiet forest path"
        eyebrow="About"
        title="A focused bio-industry company"
        intro="EFM Development works at the meeting point of forests, technology and the circular economy — turning renewable biomass into new, transparent value."
      />

      {/* Company overview */}
      <Section tone="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-20">
            <Reveal>
              <SectionHeading eyebrow="Who we are" title="Experts in biomass-based value chains" />
            </Reveal>
            <Reveal delay={80}>
              <div className="space-y-5 text-lg leading-relaxed text-forest-800/80">
                {whatWeDo.map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
                <p>
                  We contribute to a better general understanding of the role of
                  forests in carbon capture, carbon circulation and the global
                  carbon balance.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Leadership */}
      <Section tone="cream">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              {/* {{TODO: confirm this portrait is of Elina Kalela before launch}} */}
              <div
                className="relative mx-auto w-full max-w-sm overflow-hidden rounded-md shadow-card"
                style={{ aspectRatio: "4 / 5" }}
              >
                <Image
                  src="/images/leadership-portrait.jpg"
                  alt="Portrait of EFM Development's managing director"
                  fill
                  sizes="(min-width: 1024px) 40vw, 80vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="max-w-xl">
                <Eyebrow>Leadership</Eyebrow>
                <h2 className="font-display mt-3 text-3xl font-semibold leading-tight tracking-tight text-forest-900 sm:text-4xl">
                  {site.legal.ceo}
                </h2>
                <p className="mt-2 font-medium text-forest-700">
                  Managing Director, {site.legalName}
                </p>
                <p className="mt-5 text-lg leading-relaxed text-forest-800/80">
                  EFM Development is led from Thun, Switzerland, combining hands-on
                  business development with deep technical knowledge of wood-based
                  materials, process and product technology.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Forest video */}
      <Section tone="white">
        <Container>
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Rooted in the forest"
              title="Technology in service of the living forest"
              intro="Our work begins and ends in the forest — measuring, protecting and adding value to a renewable asset."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="mx-auto mt-12 max-w-4xl">
              <ForestVideo
                slug="forest-loop-3"
                label="Ambient footage of sunlight through a forest"
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Location / CTA */}
      <Section tone="forest">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <Reveal>
              <div>
                <Eyebrow onDark>Based in Switzerland</Eyebrow>
                <h2 className="font-display mt-3 text-3xl font-semibold leading-tight tracking-tight text-cream sm:text-4xl">
                  {site.legalName}
                </h2>
                <address className="mt-5 space-y-1 text-lg not-italic text-cream/80">
                  {site.contact.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </address>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="md:text-right">
                <p className="text-lg leading-relaxed text-cream/80">
                  Interested in new value chains or forest biosensors for your
                  asset?
                </p>
                <div className="mt-6 md:flex md:justify-end">
                  <Button href="/contact" variant="light">
                    Contact us <ArrowRight />
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
