import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { ForestVideo } from "@/components/ForestVideo";
import { Reveal } from "@/components/Reveal";
import { Container, Section } from "@/components/ui";
import { companyParagraphs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: site.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        priority
        image="/images/about-forest-walk.jpg"
        imageAlt="A person walking along a quiet forest path"
        title={site.name}
      />

      {/* Company description — web-copy PDF p.2, verbatim */}
      <Section tone="white">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-forest-800/85">
            {companyParagraphs.map((para) => (
              <Reveal key={para.slice(0, 24)} as="p">
                {para}
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Leadership + address — facts from the Impressum */}
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
                <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-forest-900 sm:text-4xl">
                  {site.legal.ceo}
                  <span className="text-2xl font-medium text-forest-700">
                    , {site.legal.ceoPostNominal}
                  </span>
                </h2>
                <p className="mt-2 font-medium text-forest-700">
                  Managing Director, {site.legalName}
                </p>
                <address className="mt-6 space-y-1 not-italic text-lg text-forest-800/80">
                  {site.contact.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </address>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Forest footage (provided asset, used as a plain visual) */}
      <Section tone="white" className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl">
              <ForestVideo
                slug="forest-loop-3"
                label="Ambient footage of sunlight through a forest"
              />
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
