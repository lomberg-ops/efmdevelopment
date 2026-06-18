import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in ms for sequential reveals. */
  delay?: number;
  as?: React.ElementType;
};

/**
 * Reveal-in wrapper. Content is always visible (see `.reveal` in globals.css);
 * the fade/slide-up is a pure-CSS enhancement that ends visible and needs no
 * JavaScript, so a section can never be stuck blank.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  return (
    <Tag
      className={cn("reveal", className)}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
