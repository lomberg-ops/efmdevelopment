import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `${site.legalName}, ${site.contact.addressLines.join(", ")}.`,
};

export default function ContactPage() {
  return (
    <Section tone="white" className="pt-28 sm:pt-32">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Details */}
          <div className="max-w-md">
            <h1 className="font-display text-4xl font-bold tracking-tight text-forest-900 sm:text-5xl">
              Contact
            </h1>

            <div className="mt-10 space-y-10">
              <div>
                <h2 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-forest-600">
                  Address
                </h2>
                <address className="mt-3 space-y-1 text-lg not-italic text-forest-900">
                  <p className="font-medium">{site.legalName}</p>
                  {site.contact.addressLines.map((line) => (
                    <p key={line} className="text-forest-800/80">
                      {line}
                    </p>
                  ))}
                </address>
              </div>

              <div>
                <h2 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-forest-600">
                  Email
                </h2>
                <p className="mt-3 text-lg">
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-forest-900 underline-offset-4 hover:text-forest-700 hover:underline"
                  >
                    {site.contact.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className="relative overflow-hidden rounded-md shadow-card"
            style={{ aspectRatio: "4 / 3" }}
          >
            <Image
              src="/images/forest-undergrowth.jpg"
              alt="Forest undergrowth with green plants"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
