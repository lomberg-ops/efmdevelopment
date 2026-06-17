/**
 * Central site configuration: identity, contact, navigation.
 * Contact + legal data are taken verbatim from the client's Impressum.
 */

export const site = {
  name: "EFM Development",
  legalName: "EFM Development GmbH",
  // Domain derived from the company email (info@efmdevelopment.com).
  // {{TODO: confirm production domain before launch}}
  url: "https://www.efmdevelopment.com",
  tagline: "Added value from forest",
  description:
    "EFM Development builds new biomass-based value chains and digital forest biosensors that make carbon capture, biodiversity and forest-management performance visible, measurable and transparent.",
  contact: {
    email: "info@efmdevelopment.com",
    addressLines: ["Burgstrasse 8 D", "3600 Thun", "Switzerland"],
    // {{TODO: phone number not provided by client}}
  },
  legal: {
    ceo: "Elina Kalela",
    registerCourt: "Bern",
    registerNumber: "CHE-272.152.911",
  },
} as const;

export type NavLink = { href: string; label: string };

export const mainNav: NavLink[] = [
  { href: "/technology", label: "Technology" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/technology", label: "Forest biosensors" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/impressum", label: "Impressum" },
      { href: "/privacy", label: "Privacy Notice" },
    ],
  },
];
