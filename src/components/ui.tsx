import Link from "next/link";
import { cn } from "@/lib/utils";

/** Max-width content container with responsive gutters. */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

/** Vertical section rhythm + optional background tone. */
export function Section({
  children,
  className,
  tone = "white",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "white" | "cream" | "sand" | "forest";
  id?: string;
}) {
  const tones: Record<string, string> = {
    white: "bg-white text-forest-900",
    cream: "bg-cream text-forest-900",
    sand: "bg-sand text-forest-900",
    forest: "bg-forest-900 text-cream",
  };
  return (
    <section
      id={id}
      className={cn("py-20 sm:py-28", tones[tone], className)}
    >
      {children}
    </section>
  );
}

/** Small uppercase label above a heading. */
export function Eyebrow({
  children,
  className,
  onDark = false,
}: {
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <p
      className={cn(
        "font-display text-sm font-semibold uppercase tracking-[0.18em]",
        onDark ? "text-forest-300" : "text-forest-600",
        className
      )}
    >
      {children}
    </p>
  );
}

/** Section heading block: eyebrow + title + optional intro. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  onDark = false,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  onDark?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "font-display mt-3 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.75rem]",
          onDark ? "text-cream" : "text-forest-900"
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            onDark ? "text-forest-100/90" : "text-forest-800/80"
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost" | "light" | "outline-light";
  className?: string;
};

/** Link styled as a button. Uses next/link for internal, <a> for external. */
export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-2";
  const variants: Record<string, string> = {
    primary: "bg-forest-700 text-cream hover:bg-forest-800",
    outline:
      "border border-forest-700 text-forest-700 hover:bg-forest-700 hover:text-cream",
    ghost: "text-forest-700 hover:text-forest-900 underline-offset-4 hover:underline px-0 py-0",
    light: "bg-cream text-forest-900 hover:bg-white",
    "outline-light":
      "border border-cream/50 text-cream hover:bg-cream hover:text-forest-900",
  };
  const cls = cn(base, variants[variant], className);
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  if (isExternal) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** Right-arrow glyph for CTAs. */
export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={cn("h-4 w-4", className)}
    >
      <path
        d="M4 10h12M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
