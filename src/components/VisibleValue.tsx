import { Container, Section, SectionHeading } from "./ui";
import { Reveal } from "./Reveal";
import { visibleValue } from "@/lib/content";

/**
 * "Add visible value to your asset" (deck p.3) — premium editorial band:
 * deep-green, large gold numerals, hairline rules, and a custom line icon per
 * point (carbon / biodiversity / restoration / protection). Icons are
 * decorative brand graphics — no figures or data are invented.
 */
export function VisibleValue() {
  return (
    <Section tone="forest">
      <Container>
        <Reveal>
          <SectionHeading onDark title="Add visible value to your asset" />
        </Reveal>
        <div className="mt-14 grid gap-x-16 gap-y-12 sm:grid-cols-2">
          {visibleValue.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={item.slice(0, 20)} delay={i * 80}>
                <div className="border-t border-forest-700/50 pt-7">
                  <div className="flex items-center gap-4">
                    <Icon className="h-10 w-10 flex-none text-accent-soft" />
                    <span className="font-display text-4xl font-bold leading-none text-accent-soft sm:text-5xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/85">
                    {item}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

type IconProps = { className?: string };
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** 1 — Carbon capture: a leaf. */
function LeafIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...stroke} d="M4 20c0-8 6-14 16-14 0 9-7 15-16 14Z" />
      <path {...stroke} d="M8 16C11 13 14.5 11 18 9.5" />
    </svg>
  );
}

/** 2 — Diversity projects: a branching node. */
function DiversityIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...stroke} d="M12 21v-6M12 15 7 9M12 15l5-6" />
      <circle {...stroke} cx="12" cy="5" r="2.2" />
      <circle {...stroke} cx="6" cy="8" r="2.2" />
      <circle {...stroke} cx="18" cy="8" r="2.2" />
    </svg>
  );
}

/** 3 — Restoration: a sprouting seedling. */
function SaplingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...stroke} d="M12 21v-8" />
      <path {...stroke} d="M12 13c0-3.3-2.2-5.5-5.5-5.5C6.5 10.8 8.7 13 12 13Z" />
      <path {...stroke} d="M12 13c0-3.3 2.2-5.5 5.5-5.5C17.5 10.8 15.3 13 12 13Z" />
      <path {...stroke} d="M5.5 21h13" />
    </svg>
  );
}

/** 4 — Animals & indigenous people: protection (shield + check). */
function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...stroke} d="M12 3l7 2.8v5.2c0 4.2-3 7.6-7 9-4-1.4-7-4.8-7-9V5.8L12 3Z" />
      <path {...stroke} d="m9 11.8 2 2 3.8-4.2" />
    </svg>
  );
}

const ICONS = [LeafIcon, DiversityIcon, SaplingIcon, ShieldIcon];
