import Link from "next/link";
import { Container } from "./ui";
import { Logo } from "./Logo";
import { site, footerNav } from "@/lib/site";

export function SiteFooter() {
  const year = 2026; // build-time constant; avoids non-deterministic Date()

  return (
    <footer className="bg-forest-950 text-cream">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand + mission */}
          <div className="max-w-xs">
            <Logo onDark />
            <p className="mt-5 text-sm leading-relaxed text-forest-100/70">
              New biomass based value chains
            </p>
          </div>

          {/* Nav columns */}
          {footerNav.map((col) => (
            <div key={col.title}>
              <h2 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-forest-300">
                {col.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-forest-100/80 transition-colors hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h2 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-forest-300">
              Contact
            </h2>
            <address className="mt-4 space-y-1 text-sm not-italic text-forest-100/80">
              <p className="font-medium text-cream">{site.legalName}</p>
              {site.contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="pt-2">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="underline-offset-4 hover:underline"
                >
                  {site.contact.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-forest-800/60 pt-6 text-xs text-forest-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-cream">
              Impressum
            </Link>
            <Link href="/privacy" className="hover:text-cream">
              Privacy Notice
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
