import type { Metadata } from "next";
import { Container, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Legal notice for EFM Development GmbH, Thun, Switzerland.",
  robots: { index: true, follow: true },
};

/**
 * Impressum — German legal notice, reproduced verbatim from the client's
 * source document. Language intentionally kept German (legal text).
 */
export default function ImpressumPage() {
  return (
    <Section tone="white" className="pt-28 sm:pt-32">
      <Container className="max-w-2xl">
        <h1 className="font-display text-4xl font-bold tracking-tight text-forest-900">
          Impressum
        </h1>

        <div className="mt-10 space-y-10 text-forest-800">
          <section>
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-forest-600">
              Kontakt
            </h2>
            <address className="mt-3 space-y-1 not-italic leading-relaxed">
              <p className="font-medium text-forest-900">{site.legalName}</p>
              {site.contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="pt-2">
                M{" "}
                <a
                  href={`mailto:${site.contact.email}`}
                  className="underline-offset-4 hover:text-forest-700 hover:underline"
                >
                  {site.contact.email}
                </a>
              </p>
            </address>
          </section>

          <section className="space-y-4">
            <div>
              <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-forest-600">
                Vertretungsberechtigter Geschäftsführer
              </h2>
              <p className="mt-2 leading-relaxed">{site.legal.ceo}</p>
            </div>
            <div>
              <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-forest-600">
                Registergericht
              </h2>
              <p className="mt-2 leading-relaxed">{site.legal.registerCourt}</p>
            </div>
            <div>
              <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-forest-600">
                Registernummer
              </h2>
              <p className="mt-2 leading-relaxed">{site.legal.registerNumber}</p>
            </div>
            <div>
              <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-forest-600">
                Inhaltlich Verantwortliche
              </h2>
              <p className="mt-2 leading-relaxed">{site.legal.ceo}</p>
            </div>
          </section>
        </div>
      </Container>
    </Section>
  );
}
