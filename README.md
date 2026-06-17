# EFM Development — Website

Marketing website for **EFM Development GmbH** (Thun, Switzerland) — a bio-industry company building
new biomass-based value chains and **digital forest biosensors**. Built with Next.js (App Router),
TypeScript and Tailwind CSS, in a calm, premium, UPM-inspired design language.

---

## ⛔ HARD LAUNCH BLOCKER — read before going to production

**Do not publish this site with the live contact form until the Privacy Notice is complete.**
The contact form collects personal data (name, email, message). Under the EU GDPR and the Swiss
FADP a complete privacy notice is required. The source material only provided the notice intro, a
register/subcontractor paragraph and section 7 — **sections 1–6 are missing** (see
[`src/app/privacy/page.tsx`](src/app/privacy/page.tsx), which renders a visible draft flag).

### Pre-launch checklist
- [ ] **Privacy Notice completed** (sections 1–6) — required before the form is live.
- [ ] Client has **signed off on all carbon / biodiversity performance claims** (the LiDAR dashboard
      figures are shown as *illustrative sample output* — see below).
- [ ] Confirmed the **leadership portrait** on the About page is of Elina Kalela.
- [ ] Confirmed the **production domain** (currently assumed `https://www.efmdevelopment.com`,
      derived from the company email) — update `site.url` in [`src/lib/site.ts`](src/lib/site.ts).
- [ ] Contact form email configured (`RESEND_API_KEY`, recipient) — see **Environment variables**.
- [ ] Reviewed the **Typo-fix log** and **Client wording review** lists below.

---

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build / preview:

```bash
npm run build
npm run start
```

Requirements: Node 20+ (developed on Node 24). Lint: `npx eslint src`.

## Deploy

The site is a standard **Next.js server build** (it uses a server Route Handler for the contact
form and `next/image` optimization). Deploy to any **Node-capable host** — e.g. Vercel, or a Node
server running `npm run build && npm run start`.

> **Hosting note:** if the site must run on **static-only / PHP shared hosting** (no Node), it needs
> two changes: (1) switch to a static export (`output: "export"` + `images.unoptimized = true` in
> `next.config.ts`), and (2) replace the `/api/contact` route with a PHP mail script (calling the
> Resend HTTP API) or a third-party form service, since serverless routes cannot run there.
> Analytics (`@vercel/analytics`) only collects data on Vercel; off-Vercel it is a harmless no-op
> and a privacy-friendly alternative (e.g. Plausible) should be added.

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | for live email | Resend API key. **If unset, the form returns a friendly "email not yet configured" message instead of failing.** |
| `CONTACT_TO_EMAIL` | recommended | Where enquiries are delivered. Defaults to `info@efmdevelopment.com`. |
| `CONTACT_FROM_EMAIL` | recommended | Verified Resend sender. Defaults to Resend's shared `onboarding@resend.dev` (only delivers to the account owner until a domain is verified). |

## Where content lives

- **Copy** — [`src/lib/content.ts`](src/lib/content.ts) (page copy) and
  [`src/lib/site.ts`](src/lib/site.ts) (identity, contact, navigation, legal data). All drawn from
  the client's two source documents.
- **Images / video** — `public/images`, `public/images/tech`, `public/media`, `public/brand`.
- **Asset pipeline** — `scripts/process-assets.sh` (photos + video transcode + icons) and
  `scripts/extract_pdf_images.py` (deck figures). Raw client assets live in `_source/` and
  `public/media/originals/`, which are **git-ignored** (the 240 MB of original `.MOV` files are kept
  locally for handoff but are not committed or deployed — only the web-optimized transcodes are).
  To regenerate, drop the raw assets back into `_source/` and run the scripts (requires `ffmpeg`;
  the PDF script requires `pip install pymupdf`).

## Language decision

The site is built in **English**, the dominant language of the client's marketing copy. The
**Impressum is kept verbatim in German** (legal text with real registry data). The Privacy Notice is
in English, as supplied.

---

## Consolidated `{{TODO}}` list

| Where | TODO |
| --- | --- |
| Privacy Notice | Complete missing sections 1–6 (**launch blocker**). |
| `src/lib/site.ts` | Confirm production domain (`site.url`). |
| `src/lib/site.ts` | Phone number was not provided — add if wanted. |
| Contact form | Set `RESEND_API_KEY` + `CONTACT_TO_EMAIL`; confirm recipient address. |
| Contact `from` | Verify a Resend sending domain (`CONTACT_FROM_EMAIL`). |
| About page | Confirm the leadership portrait is Elina Kalela. |
| Technology page | Confirm the LiDAR dashboard figures may be shown as illustrative sample output. |
| Logo | Replace the typographic wordmark with a transparent-background vector logo if available. |
| Footer/social | Add social links if the client has any. |

## Typo-fix log (spelling only — wording unchanged)

Per agreement, only unambiguous spelling errors in the source were corrected. Meaning was not
changed. Corrections applied:

| Source | Corrected |
| --- | --- |
| `throu` | through |
| `transperent` | transparent |
| `busines` | business |
| `practises` | practices |
| `continous` | continuous |
| `RAWMATERIAL` | raw material |
| `any where` | anywhere |
| `analyses of soil quality` | analysis of soil quality |

Editorial section **labels** were added for structure (e.g. "Management consulting",
"Digital tools & AI", "Carbon", "Biodiversity") — these are headings, not changes to client claims.

## Client wording review (flagged, NOT changed)

High-visibility phrasing to confirm with the client. These read slightly awkwardly in English but
have been left as the client's intent:

- **Hero headline "Added value from forest"** — reads slightly off in English (cf. "Added value
  *from the* forest"). Kept as written; confirm preferred wording.
- "Add value with biosensors" / "Add visible value to your asset" — kept verbatim from the deck.
- "...quantify your contribution to animals in danger and/or the life of indigenous people" —
  sensitive phrasing; confirm intended meaning.
- "non-plantational / old-forest land" — kept the client's term.

## Assumptions made

- Company facts used without a source are only those given in the brief: company name, CEO
  (Elina Kalela), Thun/Switzerland base, bio-industry/biosensors sector. Everything else comes from
  the source files; gaps are marked `{{TODO}}`.
- The **LiDAR ecosystem-assessment scores** (76 / 87.5 / 72.4 / 78 / 65.3) come from the client deck
  and are presented as **illustrative sample output**, with a visible badge on the visual itself.
- Fonts: **Oswald** (condensed display) + **Inter** (body), via `next/font` — a UPM-adjacent
  geometric/condensed pairing matching the client deck.
- Primary brand mark: the green circular "EFM Development" emblem (`public/brand/efm-emblem.png`);
  the header/footer use a typographic wordmark derived from it for crisp rendering.

## Tech notes

- **Accessibility:** semantic landmarks, skip link, keyboard-navigable nav + mobile menu, visible
  focus rings, alt text on every image, `prefers-reduced-motion` respected (scroll-reveal and video
  autoplay both disabled), video has visible pause/play + native controls (WCAG 2.2.2).
- **Video:** autoplays muted/looping on desktop; on mobile / reduced-motion / reduced-data it shows
  a poster with tap-to-play and downloads nothing until played. Explicit dimensions prevent layout
  shift. See [`src/components/ForestVideo.tsx`](src/components/ForestVideo.tsx).
- **SEO/social:** per-page titles + descriptions, Open Graph + Twitter tags, generated branded OG
  image (`src/app/opengraph-image.tsx`), `sitemap.xml`, `robots.txt`, app icons.
