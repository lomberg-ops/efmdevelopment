import type { Metadata } from "next";
import { Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "Privacy and data protection statement for EFM Development GmbH (GDPR / Swiss FADP).",
};

/**
 * Privacy Notice — reproduced from the client's source document, which is
 * INCOMPLETE (only the intro, a register/subcontractor paragraph and section 7
 * were supplied). The missing sections are flagged below for the client to
 * complete.
 */
export default function PrivacyPage() {
  return (
    <Section tone="white" className="pt-28 sm:pt-32">
      <Container className="max-w-2xl">
        <h1 className="font-display text-4xl font-bold tracking-tight text-forest-900">
          Privacy Notice
        </h1>

        <p className="mt-6 leading-relaxed text-forest-800/90">
          Personal Data Act (Articles 10 and 24) and EU General Data Protection
          Regulation (GDPR) Privacy and Data Protection Statement. The effective
          date of this privacy policy is May 4, 2026. This policy is kept up to
          date.
        </p>

        {/* NOTE: source supplied only the intro, a register paragraph and §7.
            Sections 1–6 still need to be provided by the client — tracked in
            the README {{TODO}} list, not shown on the page. */}

        <div className="mt-10 space-y-8 text-forest-800/90">
          <section>
            <h2 className="font-display text-lg font-semibold text-forest-900">
              Register
            </h2>
            <p className="mt-3 leading-relaxed">
              We utilize our subcontractors in the processing of personal data.
              We have outsourced IT management to external service providers
              that manage and store personal data on a protected server. With
              our subcontractors we have taken care of privacy by drafting
              processing agreements for the processing of personal data. In some
              cases, personal data may be disclosed outside the EU/EEA, such as
              the United States and Russia. The disclosure of the information
              depends on the service purchased by the customer, which in the
              contract refers more closely to the type of transfer and to which
              it is disclosed. We have taken appropriate measures to protect the
              transfer. We use standard contract clauses approved by the EU or
              transfer procedures approved by the EU Commission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-forest-900">
              7. How we protect the data and how long do we keep it?
            </h2>
            <p className="mt-3 leading-relaxed">
              Only employees who have the right to process personal data for
              their work are entitled to use the personal data system. Each user
              has their own username and password for the system. Data is
              collected in databases that are protected by passwords and other
              technical means. Databases and their backups are located in locked
              spaces and access to data is restricted to certain pre-designated
              persons.
            </p>
            <p className="mt-3 leading-relaxed">
              We keep personal information for 12 months from the date of
              termination of the customer relationship / employment relationship
              and, in accordance with accounting legislation, billing data for 6
              years after the invoice date.
            </p>
          </section>
        </div>
      </Container>
    </Section>
  );
}
