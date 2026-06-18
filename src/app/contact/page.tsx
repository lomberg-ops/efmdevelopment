import type { Metadata } from "next";
import { Container, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `${site.legalName}, ${site.contact.addressLines.join(", ")}.`,
};

export default function ContactPage() {
  return (
    <Section tone="white" className="pt-28 sm:pt-32">
      <Container className="max-w-2xl">
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
      </Container>
    </Section>
  );
}
