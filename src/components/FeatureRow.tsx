import Image from "next/image";
import { Container, Eyebrow } from "./ui";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type FeatureRowProps = {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: React.ReactNode;
  children: React.ReactNode;
  /** Place image on the right (default) or left. */
  imageSide?: "left" | "right";
  tone?: "white" | "cream" | "sand";
};

/** Alternating image / text editorial block. */
export function FeatureRow({
  image,
  imageAlt,
  eyebrow,
  title,
  children,
  imageSide = "right",
  tone = "white",
}: FeatureRowProps) {
  const tones: Record<string, string> = {
    white: "bg-white",
    cream: "bg-cream",
    sand: "bg-sand",
  };
  return (
    <section className={cn("py-20 sm:py-28", tones[tone])}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal
            className={cn(
              "order-1",
              imageSide === "left" ? "lg:order-1" : "lg:order-2"
            )}
          >
            <div
              className="relative overflow-hidden rounded-md shadow-card"
              style={{ aspectRatio: "4 / 3" }}
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal
            className={cn(
              "order-2",
              imageSide === "left" ? "lg:order-2" : "lg:order-1"
            )}
            delay={80}
          >
            <div className="max-w-xl">
              {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
              <h2 className="font-display mt-3 text-3xl font-semibold leading-[1.12] tracking-tight text-forest-900 sm:text-4xl">
                {title}
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-forest-800/80">
                {children}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
