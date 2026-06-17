import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Typographic wordmark derived from the green circular "EFM Development" mark.
 * Used in the header/footer for crisp rendering; the full circular emblem
 * (public/brand/efm-emblem.png) appears as a brand visual on the About page.
 * {{TODO: replace with a transparent-background vector logo if the client
 * provides one}}
 */
export function Logo({
  onDark = false,
  className,
}: {
  onDark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="EFM Development — home"
      className={cn("group inline-flex items-baseline gap-2", className)}
    >
      <span
        className={cn(
          "font-display text-2xl font-bold leading-none tracking-tight",
          onDark ? "text-cream" : "text-forest-800"
        )}
      >
        EFM
      </span>
      <span
        className={cn(
          "font-display text-[0.7rem] font-semibold uppercase leading-none tracking-[0.28em]",
          onDark ? "text-forest-300" : "text-forest-600"
        )}
      >
        Development
      </span>
    </Link>
  );
}
