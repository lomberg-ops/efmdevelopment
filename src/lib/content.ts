/**
 * Site copy — reproduced VERBATIM from the client's two source documents
 * (web-copy PDF + technology deck PDF). Nothing here is invented.
 *
 * The ONLY changes from the source are the unambiguous spelling typo-fixes
 * logged in the README (e.g. "throu"->"through", "transperent"->"transparent",
 * "busines"->"business", "practises"->"practices", "continous"->"continuous",
 * "RAWMATERIAL"->"RAW MATERIAL", "any where"->"anywhere").
 */

/** Web-copy PDF, p.1 — hero lines. */
export const heroHome = {
  title: "Added value from forest",
  subtitle: "New biomass based value chains",
  // From the logo emblem artwork ("BIOMASS BASED / SUSTAINABLE CIRCULAR ECONOMY").
  eyebrow: "Biomass based · Sustainable circular economy",
};

/** Web-copy PDF, p.2 — company description (used on About). */
export const companyParagraphs: string[] = [
  "EFM Development creates new value chains based on renewable biomass from forests. We are experts in business development, market intelligence and supply chains. With focus on technology; chemistry of wood based materials, process technology and product technology.",
  "We have tools that make your forest management practices, diversity and protection actions and carbon capture efficiency visible and transparent. With our digital KPIs and AI driven tools you can illustrate the added value of your forest asset any time anywhere.",
];

/** Web-copy PDF, p.3 — service lines, verbatim. */
export const services: string[] = [
  "Management consulting New business development, new value chains, new strategies",
  "Implementation of new business strategies, industrial projects, start-ups",
  "New digital tools and AI driven innovations to thrive sustainable, efficient and optimized utilization renewable biomass raw material",
  "Contribute in creating better general understanding of role of forests in carbon capturing, carbon circulation and global carbon balance",
];

/** Technology deck, p.1 — hero. */
export const heroTechnology = {
  title: "Add value with biosensors", // deck p.7
  subline:
    "Through quantifying your carbon capture, nature diversity and other actions with digital biosensors", // deck p.1
};

/** Technology deck, p.2 — the two pillars, verbatim. */
export const pillars: { title: string; body: string; highlight?: string }[] = [
  {
    title: "VISIBLE added value",
    body: "Make your carbon capture and nature diversity investments and actions visible and easy to communicate",
    highlight: "INTEGRATE THEM TO BE PART OF THE PRICING OF YOUR BIOMASS RAW MATERIAL",
  },
  {
    title: "Secure well being and productivity of your nature asset",
    body: "Data based detection of early stage illnesses, analyses of soil quality, detection of potential drought, precision monitoring of plantations enabling timely corrective actions",
  },
];

/** Technology deck, p.3 — "Add visible value to your asset", verbatim. */
export const visibleValue: string[] = [
  "Data based transparent indicator of carbon capture efficiency",
  "Data based, transparent measured value of the quantity and quality of your diversity projects",
  "Data based measured value to quantify your contribution to restoration of non-plantational/old forest land",
  "Data based measured value to quantify your contribution to animals in danger and/or indigenous people's life",
];

/** Technology deck, p.4 — "Secure growth and well being of your asset", verbatim. */
export const secureGrowth: { title: string; points: string[] }[] = [
  {
    title: "Forest resilience",
    points: [
      "early detection of illnesses",
      "Detection dryness",
      "Support to species selection, soil analyses",
    ],
  },
  {
    title: "Monitoring of development of replanted areas (e.g. damages in individual seedlings)",
    points: [],
  },
  {
    title: "Sustainability of Forest management operations",
    points: [
      "Data driven, measured and transparent monitoring of operations (quantification of continuous harvesting, road systems, conformity of protection actions)",
      "more transparent operations management chain with communication of existing protected nature values, implemented diversity actions (towards clients)",
    ],
  },
];

/** Technology deck, p.5 — measurement domain labels (verbatim, no descriptions). */
export const measurementLabels: string[] = [
  "Carbon",
  "Biodiversity",
  "Operations",
  "Restoration",
];

/**
 * Technology deck, p.6 — LiDAR ecosystem assessment indicators, verbatim.
 * These figures are sample output shown in the deck, not a verified result.
 */
export const ecosystemIndicators: { label: string; score: string }[] = [
  { label: "Site Performance Index", score: "76 / 100" },
  { label: "Carbon Capture Efficiency", score: "87.5 / 100" },
  { label: "Nature Diversity & Resilience", score: "72.4 / 100" },
  { label: "Sustainability of Operations", score: "78 / 100" },
  { label: "Restoration & Protection", score: "65.3 / 100" },
];
