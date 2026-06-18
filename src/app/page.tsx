import { PageHero } from "@/components/PageHero";
import { ForestVideo } from "@/components/ForestVideo";
import { Reveal } from "@/components/Reveal";
import { Container, Section } from "@/components/ui";
import { heroHome, services } from "@/lib/content";

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

      {/* Services — verbatim from web-copy PDF, p.3 */}
      <Section tone="white">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((line, i) => (
              <Reveal key={line.slice(0, 24)} delay={i * 70}>
                <div className="h-full rounded-md border border-line bg-cream p-7 shadow-card">
                  <p className="text-lg leading-relaxed text-forest-800/85">
                    {line}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Forest footage (provided asset, used as a plain visual) */}
      <Section tone="cream" className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl">
              <ForestVideo
                slug="forest-loop-1"
                label="Ambient footage of a Northern European forest"
              />
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
