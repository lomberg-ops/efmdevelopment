import Image from "next/image";
import { Container } from "./ui";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode; // CTAs
  /** Taller hero for the homepage. */
  size?: "tall" | "standard";
  priority?: boolean;
};

/**
 * Full-bleed photographic hero with a dark forest gradient and overlaid copy.
 * Hero imagery stays full-colour (per design direction) for a premium read.
 */
export function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  intro,
  children,
  size = "standard",
  priority = false,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-950">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
      {/* Gradient for text contrast (AA) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/55 to-forest-950/35"
      />
      <Container
        className={cn(
          "relative flex flex-col justify-end",
          size === "tall"
            ? "min-h-[76vh] pb-20 pt-32 sm:pb-24"
            : "min-h-[54vh] pb-16 pt-28 sm:pb-20"
        )}
      >
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-forest-300">
              {eyebrow}
            </p>
          )}
          <h1
            className={cn(
              "font-display mt-4 font-bold leading-[1.04] tracking-tight text-cream",
              size === "tall"
                ? "text-4xl sm:text-6xl md:text-7xl"
                : "text-4xl sm:text-5xl md:text-6xl"
            )}
          >
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/85 sm:text-xl">
              {intro}
            </p>
          )}
          {children && (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              {children}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
