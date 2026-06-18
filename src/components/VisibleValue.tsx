import { Container, Section, SectionHeading } from "./ui";
import { Reveal } from "./Reveal";
import { visibleValue } from "@/lib/content";

/**
 * "Add visible value to your asset" (deck p.3) — premium editorial treatment:
 * a deep-green feature band with large index numerals and hairline rules,
 * instead of plain numbered boxes. Shared by Home and Technology.
 */
export function VisibleValue() {
  return (
    <Section tone="forest">
      <Container>
        <Reveal>
          <SectionHeading onDark title="Add visible value to your asset" />
        </Reveal>
        <div className="mt-14 grid gap-x-16 gap-y-12 sm:grid-cols-2">
          {visibleValue.map((item, i) => (
            <Reveal key={item.slice(0, 20)} delay={i * 80}>
              <div className="border-t border-forest-700/50 pt-7">
                <span className="font-display block text-5xl font-bold leading-none text-accent-soft sm:text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/85">
                  {item}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
