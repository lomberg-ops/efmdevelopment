import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "Privacy and data protection statement for EFM Development GmbH (Swiss FADP / GDPR).",
};

/**
 * Privacy Notice — full statement provided by the client (Swiss FADP / GDPR).
 * Reproduced verbatim; structure only is ours.
 */
export default function PrivacyPage() {
  return (
    <Section tone="white" className="pt-28 sm:pt-32">
      <Container className="max-w-2xl">
        <h1 className="font-display text-4xl font-bold tracking-tight text-forest-900">
          Privacy Notice
        </h1>

        <p className="mt-6 leading-relaxed text-forest-800/90">
          Swiss Federal Act on Data Protection (FADP) and, where applicable, the
          EU General Data Protection Regulation (GDPR) privacy and data
          protection statement. The effective date of this privacy policy is
          June 30, 2026. This policy is kept up to date.
        </p>

        <div className="mt-10 space-y-10 text-forest-800/90">
          <section className="space-y-3">
            <h2 className="font-display text-lg font-semibold text-forest-900">
              Register
            </h2>
            <p className="leading-relaxed">
              The controller of the personal data register is EFM Development
              GmbH. The full company details are available on our{" "}
              <Link
                href="/impressum"
                className="underline underline-offset-4 hover:text-forest-700"
              >
                Impressum
              </Link>{" "}
              page.
            </p>
            <p className="leading-relaxed">
              We process personal data in connection with our website,
              enquiries, customer relationships, communication, service
              delivery, invoicing, accounting, and ordinary business operations.
            </p>
            <p className="leading-relaxed">
              The personal data we may process includes name, email address,
              phone number, company name, message content, customer relationship
              information, contract information, invoicing information, and
              technical website data such as IP address, browser information,
              device information, pages visited, and time of visit.
            </p>
            <p className="leading-relaxed">
              The purpose of processing personal data is to respond to
              enquiries, communicate with customers and partners, provide and
              manage our services, prepare offers and contracts, handle
              invoicing and accounting, maintain website functionality and
              security, and comply with legal obligations.
            </p>
            <p className="leading-relaxed">
              The legal bases for processing personal data are contract, steps
              taken before entering into a contract, legal obligation, consent
              where required, and our legitimate interest in operating and
              developing our business.
            </p>
            <p className="leading-relaxed">
              We utilize subcontractors and service providers in the processing
              of personal data. These may include providers of IT management,
              hosting, website services, email, accounting, invoicing, customer
              communication, and other business systems. We have taken care of
              privacy with our subcontractors by using appropriate data
              processing agreements.
            </p>
            <p className="leading-relaxed">
              In some cases, personal data may be processed or disclosed outside
              Switzerland, the EU, or the EEA, depending on the service purchased
              by the customer or the service providers required for delivering
              the service. Where personal data is transferred internationally,
              we use appropriate safeguards required by applicable data
              protection law, such as adequacy decisions, standard contractual
              clauses, data processing agreements, or another lawful transfer
              mechanism. Transfers are made only where there is a valid legal
              basis and appropriate protection for the data.
            </p>
            <p className="leading-relaxed">We do not sell personal data.</p>
            <p className="leading-relaxed">
              We do not use automated decision-making, including profiling, that
              produces legal or similarly significant effects concerning
              individuals.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-semibold text-forest-900">
              How we protect the data and how long do we keep it?
            </h2>
            <p className="leading-relaxed">
              Only persons who have the right to process personal data for their
              work are entitled to use the systems containing personal data.
              Each user has their own access credentials, and access rights are
              limited according to work duties.
            </p>
            <p className="leading-relaxed">
              Personal data is stored in protected systems and databases. We
              protect the data with appropriate technical and organisational
              measures, including access control, passwords, secure systems,
              backups, restricted access rights, and protection against
              unauthorised access, loss, alteration, or disclosure.
            </p>
            <p className="leading-relaxed">
              We keep personal data only for as long as necessary for the
              purpose for which it was collected, unless a longer retention
              period is required by law.
            </p>
            <p className="leading-relaxed">
              Customer relationship data is kept for the duration of the
              customer relationship and generally for 12 months after the end of
              the customer relationship, unless longer retention is necessary
              for legal, contractual, accounting, or legitimate business
              reasons.
            </p>
            <p className="leading-relaxed">
              Billing and accounting data is kept in accordance with applicable
              accounting legislation. Under Swiss law, accounting books and
              records are generally retained for 10 years from the end of the
              financial year, or for the period required by applicable law.
            </p>
            <p className="leading-relaxed">
              Website technical data and logs are kept only for the period
              necessary for website security, maintenance, and troubleshooting.
            </p>
            <p className="leading-relaxed">
              When personal data is no longer needed, it is deleted or
              anonymised.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-semibold text-forest-900">
              Rights of the data subject
            </h2>
            <p className="leading-relaxed">
              The data subject has the right to access their personal data,
              request correction of inaccurate data, request deletion of data,
              request restriction of processing, object to processing, request
              data portability where applicable, withdraw consent where
              processing is based on consent, and lodge a complaint with a
              supervisory authority.
            </p>
            <p className="leading-relaxed">
              In Switzerland, the competent supervisory authority is the Federal
              Data Protection and Information Commissioner (FDPIC).
            </p>
            <p className="leading-relaxed">
              Requests concerning personal data can be sent to:{" "}
              <a
                href="mailto:info@efmdevelopment.com"
                className="underline underline-offset-4 hover:text-forest-700"
              >
                info@efmdevelopment.com
              </a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-semibold text-forest-900">
              Cookies
            </h2>
            <p className="leading-relaxed">
              Our website may use cookies or similar technologies to ensure the
              website functions properly, improve user experience, maintain
              security, and understand website usage.
            </p>
            <p className="leading-relaxed">
              The user can control cookies through browser settings. If
              non-essential analytics or marketing cookies are used, they are
              used only where legally permitted.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-semibold text-forest-900">
              Changes to this privacy policy
            </h2>
            <p className="leading-relaxed">
              We may update this privacy policy when necessary. The latest
              version is available on this website.
            </p>
          </section>
        </div>
      </Container>
    </Section>
  );
}
