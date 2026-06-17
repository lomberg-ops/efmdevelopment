import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Container, Section, Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with EFM Development GmbH in Thun, Switzerland — about new biomass-based value chains and digital forest biosensors.",
};

export default function ContactPage() {
  return (
    <Section tone="white" className="pt-28 sm:pt-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Intro + details */}
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="font-display mt-3 text-4xl font-bold leading-[1.08] tracking-tight text-forest-900 sm:text-5xl">
              Let’s talk about your forest asset
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-forest-800/80">
              Tell us about your forest, your goals or your project. We’ll get
              back to you promptly.
            </p>

            <div className="mt-10 space-y-8">
              <div>
                <h2 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-forest-600">
                  Address
                </h2>
                <address className="mt-3 space-y-1 not-italic text-forest-900">
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
                <p className="mt-3">
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

          {/* Form */}
          <div className="rounded-md border border-line bg-cream p-7 shadow-card sm:p-9">
            <h2 className="font-display text-xl font-semibold text-forest-900">
              Send a message
            </h2>
            <p className="mt-1.5 text-sm text-forest-800/70">
              Fields marked <span className="text-forest-600">*</span> are
              required.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
