import type { Metadata } from "next";
import { Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "Privacy and data protection statement for EFM Development GmbH (Swiss FADP / GDPR).",
};

const EMAIL = "info@efmdevelopment.com";

/**
 * Privacy Notice — client-provided template, slots filled with EFM Development
 * GmbH's company details. Reproduced verbatim; structure only is ours.
 */
export default function PrivacyPage() {
  return (
    <Section tone="white" className="pt-28 sm:pt-32">
      <Container className="max-w-2xl">
        <h1 className="font-display text-4xl font-bold tracking-tight text-forest-900">
          Privacy Notice
        </h1>

        <p className="mt-4 text-sm font-medium text-forest-600">
          Effective date: June 30, 2026
        </p>

        <div className="mt-8 space-y-6 leading-relaxed text-forest-800/90">
          <p>
            This privacy notice explains how EFM Development GmbH processes
            personal data in connection with our website, enquiries, customer
            relationships, service delivery, invoicing, and ordinary business
            operations.
          </p>

          <div>
            <p>The controller of personal data is:</p>
            <address className="mt-2 space-y-0.5 not-italic">
              <span className="block font-medium text-forest-900">
                EFM Development GmbH
              </span>
              <span className="block">CHE-272.152.911</span>
              <span className="block">
                Burgstrasse 8 D, 3600 Thun, Switzerland
              </span>
              <span className="block">
                Email:{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="underline underline-offset-4 hover:text-forest-700"
                >
                  {EMAIL}
                </a>
              </span>
            </address>
          </div>

          <p>
            We may process the following personal data: name, email address,
            phone number, company name, role/title, message content, customer
            relationship information, contract and invoicing information,
            payment-related information, and technical website data such as IP
            address, browser, device, pages visited, and time of visit.
          </p>

          <p>
            We process personal data to respond to enquiries, communicate with
            customers and partners, provide and manage our services, prepare
            offers and contracts, handle invoicing and accounting, maintain
            website functionality and security, improve our services, and comply
            with legal obligations.
          </p>

          <p>
            The legal bases for processing are contract, steps taken before
            entering into a contract, legal obligation, legitimate interest, and
            consent where required.
          </p>

          <p>
            We may share personal data with trusted service providers, such as
            hosting providers, IT providers, accounting providers, email
            providers, analytics providers, and other subcontractors necessary
            for our operations. These providers may process personal data only
            according to our instructions and applicable data protection
            requirements.
          </p>

          <p>
            Personal data may be transferred outside the EU/EEA or Switzerland
            if our service providers are located there. Where required, we use
            appropriate safeguards such as adequacy decisions, standard
            contractual clauses, or other legally approved transfer mechanisms.
          </p>

          <p>
            We protect personal data with appropriate technical and
            organisational measures, including access controls, passwords,
            restricted user rights, secure systems, and protection against
            unauthorised access, loss, misuse, or alteration.
          </p>

          <p>
            We keep personal data only for as long as necessary for the purposes
            described above. Customer and enquiry data is generally kept for up
            to 12 months after the customer relationship or enquiry has ended,
            unless a longer period is required for legal, contractual,
            accounting, or dispute-related reasons. Accounting and invoicing
            data is kept for the period required by applicable accounting law.
          </p>

          <p>
            You have the right to request access to your personal data,
            correction of inaccurate data, deletion of data, restriction of
            processing, objection to processing, data portability where
            applicable, and withdrawal of consent where processing is based on
            consent.
          </p>

          <p>
            You may contact us at{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="underline underline-offset-4 hover:text-forest-700"
            >
              {EMAIL}
            </a>{" "}
            regarding privacy matters.
          </p>

          <p>
            If you believe your personal data has been processed unlawfully, you
            may contact the relevant data protection authority.
          </p>
        </div>
      </Container>
    </Section>
  );
}
