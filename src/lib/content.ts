/**
 * Site copy, drawn from the client's two source documents
 * (web-copy PDF + technology deck PDF).
 *
 * Editing policy (agreed with client):
 *  - Wording is preserved. Only unambiguous spelling typos are corrected
 *    (e.g. "throu"->"through", "transperent"->"transparent",
 *    "busines"->"business", "practises"->"practices", "continous"->"continuous",
 *    "RAWMATERIAL"->"raw material").
 *  - Section labels/titles in this file (e.g. "Digital tools & AI") are
 *    editorial labels, not client claims.
 *  See README "Typo-fix log" and "Client wording review" for the full record.
 */

/** Home — "what we do" (web-copy PDF, p.2) */
export const whatWeDo: string[] = [
  "EFM Development develops new value chains based on renewable biomass from forests. We are experts in business development, market intelligence and supply chains, with focus on technology: chemistry of wood-based materials, process technology and product technology.",
  "We have tools that make your forest-management practices, diversity and protection actions and carbon-capture efficiency visible and transparent. With our digital KPIs and AI-driven tools you can illustrate the added value of your forest asset any time, anywhere.",
];

/** Home — service areas (web-copy PDF, p.3). Titles are editorial labels. */
export const services: { title: string; body: string }[] = [
  {
    title: "Management consulting",
    body: "New business development, new value chains, new strategies.",
  },
  {
    title: "Implementation",
    body: "Implementation of new business strategies, industrial projects and start-ups.",
  },
  {
    title: "Digital tools & AI",
    body: "New digital tools and AI-driven innovations for the sustainable, efficient and optimized utilization of renewable biomass raw material.",
  },
  {
    title: "Carbon understanding",
    body: "Contributing to a better general understanding of the role of forests in carbon capture, carbon circulation and the global carbon balance.",
  },
];

/** Technology — the two value pillars (deck, p.2) */
export const pillars: { title: string; body: string; highlight: string }[] = [
  {
    title: "Visible added value",
    body: "Make your carbon-capture and nature-diversity investments and actions visible and easy to communicate.",
    highlight: "Integrate them into the pricing of your biomass raw material.",
  },
  {
    title: "Secure the wellbeing of your nature asset",
    body: "Data-based detection of early-stage illnesses, analysis of soil quality, detection of potential drought and precision monitoring of plantations.",
    highlight: "Enabling timely, corrective action.",
  },
];

/** Technology — "Add visible value to your asset" (deck, p.3) */
export const visibleValue: string[] = [
  "A data-based, transparent indicator of carbon-capture efficiency.",
  "A data-based, transparent measured value of the quantity and quality of your diversity projects.",
  "A measured value that quantifies your contribution to restoring non-plantational / old-forest land.",
  "A measured value that quantifies your contribution to animals in danger and/or the life of indigenous people.",
];

/** Technology — "Secure growth and wellbeing of your asset" (deck, p.4) */
export const secureGrowth: { title: string; points: string[] }[] = [
  {
    title: "Forest resilience",
    points: [
      "Early detection of illnesses",
      "Detection of dryness",
      "Support for species selection and soil analysis",
    ],
  },
  {
    title: "Replanting monitoring",
    points: [
      "Monitoring the development of replanted areas",
      "Detecting damage in individual seedlings",
    ],
  },
  {
    title: "Sustainable operations",
    points: [
      "Data-driven, measured and transparent monitoring of operations — quantifying continuous harvesting, road systems and conformity of protection actions",
      "A more transparent operations-management chain that communicates protected nature values and implemented diversity actions to clients",
    ],
  },
];

/** Technology — measurement domains (deck, p.5) */
export const measurementDomains: {
  title: string;
  body: string;
  image: string;
  alt: string;
}[] = [
  {
    title: "Carbon",
    body: "Quantify carbon-capture efficiency across your forest asset.",
    image: "/images/forest-path-hero.jpg",
    alt: "Sunlit forest of tall conifers along a track",
  },
  {
    title: "Biodiversity",
    body: "Measure the quantity and quality of nature-diversity projects.",
    image: "/images/forest-ferns.jpg",
    alt: "Green ferns and undergrowth on a forest floor",
  },
  {
    title: "Operations",
    body: "Monitor harvesting, road systems and conformity of protection actions.",
    image: "/images/timber-hands.jpg",
    alt: "Hands resting on a stack of freshly cut timber",
  },
  {
    title: "Restoration",
    body: "Quantify your contribution to restoring old-forest land.",
    image: "/images/forest-undergrowth.jpg",
    alt: "Restored forest undergrowth with young green plants",
  },
];

/**
 * Technology — LiDAR ecosystem assessment indicators (deck, p.6).
 * These figures are ILLUSTRATIVE SAMPLE OUTPUT from the client deck,
 * not a specific customer's verified result. Always labelled as such.
 */
export const ecosystemIndicators: { label: string; score: string }[] = [
  { label: "Site Performance Index", score: "76 / 100" },
  { label: "Carbon Capture Efficiency", score: "87.5 / 100" },
  { label: "Nature Diversity & Resilience", score: "72.4 / 100" },
  { label: "Sustainability of Operations", score: "78 / 100" },
  { label: "Restoration & Protection", score: "65.3 / 100" },
];
