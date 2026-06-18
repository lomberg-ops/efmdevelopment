# EFM Development — Website

Marketing website for **EFM Development GmbH** (Thun, Switzerland) — a bio-industry company building
new biomass-based value chains and digital forest biosensors. Built with Next.js (App Router),
TypeScript and Tailwind CSS, in a calm, premium, UPM-inspired design language.

## Build philosophy — strictly from source

All visible copy is taken **verbatim from the client's two source documents** (the web-copy PDF and
the technology deck PDF). Nothing is invented — no extra headings, taglines, CTAs, marketing
sentences, sections, or features. The only edits to the source text are the unambiguous spelling
typo-fixes logged below. Every gap in the source is a visible `{{TODO}}`, never a guess.

There is **no contact form, no API/backend, and no analytics** — the contact page shows the real
postal address and a `mailto:` email link only.

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

The site has **no server-side routes** — every page is statically prerendered. It runs on any
Node-capable host (e.g. Vercel) as-is. For **static-file / shared hosting** (FTP upload, no Node),
add to `next.config.ts`:

```ts
const nextConfig = { output: "export", images: { unoptimized: true } };
```

then `npm run build` produces a static `out/` folder to upload. (`images.unoptimized` is required
because static hosting has no image-optimization server.)

## Where content lives

- **Copy** — [`src/lib/content.ts`](src/lib/content.ts) (page copy, verbatim from source) and
  [`src/lib/site.ts`](src/lib/site.ts) (identity, contact, navigation, legal data).
- **Images / video** — `public/images`, `public/images/tech`, `public/media`, `public/brand`.
- **Asset pipeline** — `scripts/process-assets.sh` (photos + video transcode + icons) and
  `scripts/extract_pdf_images.py` (deck figures). Raw client assets live in `_source/` and
  `public/media/originals/`, which are **git-ignored** (the ~240 MB of original `.MOV` files are
  kept locally for handoff, not committed/deployed — only the web-optimized transcodes ship). To
  regenerate, drop the raw assets back into `_source/` and run the scripts (needs `ffmpeg`; the PDF
  script needs `pip install pymupdf`).

## Language decision

Built in **English**, the dominant language of the source marketing copy. The **Impressum is kept
verbatim in German** (legal text with real registry data). The Privacy Notice is English, as
supplied.

## `{{TODO}}` list (source gaps — never guessed)

| Where | TODO |
| --- | --- |
| Privacy Notice | Source supplied only the intro, a register paragraph and section 7 — **sections 1–6 are missing** and must be supplied by the client. Shown as a visible draft flag on `/privacy`. |
| About page | Confirm the leadership portrait is of Elina Kalela. |
| LiDAR figure | Confirm the deck's ecosystem-assessment scores may be shown (they are presented as sample/illustrative output, not a verified client result). |
| `src/lib/site.ts` | Confirm the production domain (`site.url`, currently assumed `https://www.efmdevelopment.com` from the company email). |

> **Note:** no phone number TODO — a phone number does not appear anywhere in the source, so none is
> shown or stubbed.

## Typo-fix log (spelling only — wording unchanged)

Only unambiguous spelling errors in the source were corrected; meaning was not changed.

| Source | Corrected |
| --- | --- |
| `throu` | through |
| `transperent` | transparent |
| `busines` | business |
| `practises` | practices |
| `continous` | continuous |
| `RAWMATERIAL` | RAW MATERIAL |
| `any where` | anywhere |

## Client wording review (flagged, NOT changed)

Source phrasing kept verbatim that the client may want to revisit (flagged only — left intact):

- **"Management consulting New business development, new value chains, new strategies"** — the source
  runs the label and description together; kept as-is.
- **"...optimized utilization renewable biomass raw material"** — reads as if a word ("of") is
  missing; kept verbatim.
- **Hero "Added value from forest"** — reads slightly off in English (cf. "from *the* forest").
- **"...your contribution to animals in danger and/or indigenous people's life"** — sensitive
  phrasing; confirm intended meaning.
- **"non-plantational/old forest land"** — kept the client's term.

## Assumptions

- Company facts used are only those in the brief/source: company name, CEO **Elina Kalela**
  (source: *Geschäftsführer*; rendered "Managing Director"), Thun/Switzerland base, and the source
  copy. Everything else is a `{{TODO}}`.
- The hero eyebrow "Biomass based · Sustainable circular economy" is the text from the logo emblem
  artwork (a provided asset), not invented copy.
- The LiDAR ecosystem-assessment scores come from the client deck and are shown as **illustrative
  sample output**, with a visible note on the figure.
- Fonts: **Oswald** (condensed display) + **Inter** (body) via `next/font`.
- Primary brand mark: the green circular "EFM Development" emblem (`public/brand/efm-emblem.png`);
  the header/footer use a typographic wordmark derived from it.

## Tech notes

- **Pages:** Home, Technology (Forest Biosensors), About, Contact, plus Impressum and Privacy Notice.
- **Accessibility:** semantic landmarks, skip link, keyboard-navigable nav + mobile menu, visible
  focus rings, alt text on every image, `prefers-reduced-motion` respected (scroll-reveal and video
  autoplay both disabled under it). Videos have a visible pause/play control + native controls.
- **Video:** all three clips autoplay muted/looping on desktop; on mobile / reduced-motion /
  reduced-data they show a poster with tap-to-play and download nothing until played. Explicit
  dimensions prevent layout shift.
- **SEO/social:** per-page titles + source-derived descriptions, Open Graph + Twitter tags, a
  generated OG image using source text only, `sitemap.xml`, `robots.txt`, app icons.
