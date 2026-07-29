# Lunada Bay Mortgage

A premium, bilingual (English / 简体中文) marketing website for **Lunada Bay Mortgage**, operated by **West Coast Capital Mortgage Inc.** and led by founder **Anatoliy Kanevsky** — a local, licensed Palos Verdes mortgage and real estate professional.

> Local guidance for high-value home decisions in Lunada Bay, Palos Verdes, and coastal Los Angeles — the property, the financing, the structure, and the next step.

Built with **React + Vite + Tailwind CSS**. Static, Netlify-ready.

---

## Content architecture

The site is organized around a simple principle:

- **Homepage = trust + a simple path.** Short, calm, human — understandable by someone who knows nothing about mortgages.
- **SEO pages = detailed education + local content** for Google.
- **Tools = engagement** (guided wizard + estimate calculator).
- **Form = private review request.**

### Homepage (8 calm sections)

1. **Hero** — "Private Mortgage Strategy for Buying in Lunada Bay & Palos Verdes"; trust line ("You will speak with Anatoliy Kanevsky … not a call center").
2. **Trust block** — "Local. Licensed. Personal." + 4 short points.
3. **Strategy Studio** — the guided mortgage-path wizard (6 questions → soft result → review request).
4. **Three Simple Paths** — buying / already found a property / refinance-or-equity, each linking to a guide.
5. **Estimate Your Numbers** — payment + full cash-to-close calculator with a visible estimate-only disclaimer.
6. **About Anatoliy** — personal, credible founder story + credentials.
7. **English + 中文 guidance** — bilingual service band (not a client category).
8. **Private review form** — Netlify Forms, with a confidentiality trust line.

Detailed, card-heavy education was **moved off the homepage** into dedicated pages (below).

### Local area pages (13)

**California / South Bay:** `/lunada-bay-mortgage` · `/palos-verdes-jumbo-loans` · `/palos-verdes-estates-mortgage` · `/rancho-palos-verdes-mortgage` · `/rolling-hills-mortgage` · `/rolling-hills-estates-mortgage` · `/manhattan-beach-jumbo-loans` · `/redondo-beach-mortgage` · `/torrance-mortgage` · `/south-bay-jumbo-mortgage`

**Florida (foreign-buyer focused):** `/florida-foreign-national-mortgage` · `/miami-mortgage` · `/orlando-mortgage`

Each: local intro, why financing matters there, jumbo considerations, buying/refinancing notes, a simple FAQ, and CTAs to Review My Scenario (wcci.online) + Request Private Review. Florida pages carry foreign-buyer educational sections (foreign national financing → jumbo/luxury → second-home & investment/DSCR → bilingual guidance) and a `foreign: true` flag.

### Loan education pages (10)

`/jumbo-loans` · `/foreign-national-mortgage` · `/self-employed-mortgage` · `/bank-statement-loans` · `/dscr-loans` · `/interest-only-jumbo` · `/cash-out-refinance` · `/non-qm-mortgage` · `/mortgage-documents` · `/before-you-make-an-offer`

Each explains one topic in plain language: what it means, who it may apply to, what lenders may review, documents, next step, a short FAQ, and a compliance disclaimer. Every mortgage term is explained the first time it appears.

### Chinese is a language layer — not a category

There is **no "Chinese buyer" page or category**. Chinese is offered as a language layer over the same content:

- **`/zh`** renders the homepage in 中文; **`/zh/<slug>`** renders any local or education page in 中文.
- The language provider recognizes `/zh` URLs, so a direct load renders Chinese immediately (good for SEO and sharing).
- The header **EN | 中文** toggle switches freely; when Chinese is active, internal links (footer, guides, areas, CTAs) preserve the `/zh` prefix.
- The two retired `chinese-mortgage-broker-*` URLs 301-redirect to `/zh` equivalents (`netlify.toml`).

Content is data-driven: `src/data/localPages.js`, `src/data/educationPages.js`, and all UI copy in `src/data/translations.js` (English + Simplified Chinese).

---

## SEO

- **Canonical + hreflang** are managed per page by `src/components/Seo.jsx`. On `/zh*` the canonical is the `/zh` URL; every page emits `hreflang` alternates for `en`, `zh`, and `x-default`.
- **`public/sitemap.xml`** lists every English page and its matching `/zh` route (40 URLs) with `xhtml:link` alternates. Retired Chinese-buyer URLs appear only as redirects in `netlify.toml`.
- **JSON-LD** per page: `Organization` + `FinancialService`, `Person`, `WebSite`, `FAQPage`, and `BreadcrumbList`. No fake reviews/ratings/hours.
- `public/robots.txt` points to the sitemap.

> This is a client-rendered SPA; Google renders the routes and each has its own canonical/metadata/structured data. For fully pre-rendered static HTML per route, add a prerender step (e.g. `vite-plugin-prerender` / `react-snap`) later.

---

## Run & build

```bash
npm install
npm run dev       # dev server (default http://localhost:5173)
npm run build     # production build → /dist
npm run preview   # preview the production build
```

### Deploy to Netlify

`netlify.toml` is preconfigured: build `npm run build`, publish `dist`, 301 redirects for the retired URLs, and an SPA fallback so deep links (incl. `/zh/*`) resolve.

---

## Contact form (Netlify Forms — no backend)

1. **Registration:** Netlify's build bot only reads static HTML, so the form is registered via a hidden copy in `index.html` (form name `private-mortgage-review`, all field names mirrored). **Do not delete that block.**
2. **Submission:** the React form POSTs via AJAX to the site origin. On success the visitor sees the bilingual thank-you; on failure, an honest fallback with the direct phone/email so no lead is lost. It records `site_language` (`en`/`zh`).
3. **Where leads land:** Netlify dashboard → your site → **Forms** → `private-mortgage-review`.
4. **Get notified:** Site configuration → **Forms → Form notifications** → add an email notification (e.g. `westccmortgage@gmail.com`).
5. **Wizard + calculator prefill** the form (loan purpose, income type, price/loan range, and a written summary) so nothing is typed twice.

> Local dev note: outside Netlify the POST has nowhere to go, so the form shows the fallback error state locally — expected. It works on the deployed site.

---

## Licensing & NMLS (edit in one place)

All license/NMLS values live in **`src/data/translations.js → siteConfig`**, split into two entities whose NMLS numbers are never mixed. Footer, About section, and JSON-LD schema all render from this config.

```
company: {
  name: 'West Coast Capital Mortgage Inc.',
  dreCorporationLicense: '02440065',   // CA DRE Corporation License (California only)
  nmls: '2817729',                     // Company NMLS (national ID; carries across states)
  statesLicensed: 'California & Florida',
},
founder: {
  name: 'Anatoliy Kanevsky',
  title: 'California Real Estate Broker',
  dreBrokerLicense: '01385024',        // CA DRE Broker License (individual)
  nmls: '2775380',                     // Individual MLO NMLS
},
```

Public display (footer, About, disclosures, schema):

```
West Coast Capital Mortgage Inc.
CA DRE Corporation License #02440065
NMLS #2817729
Licensed in California & Florida

Anatoliy Kanevsky
California Real Estate Broker
CA DRE Broker License #01385024
NMLS #2775380
```

The company originates in **California and Florida** under company NMLS #2817729 (the NMLS ID is national and carries across licensed states). The CA DRE Corporation License is California-specific. `areaServed` in the JSON-LD lists both states plus the California and Florida markets.

Contact placeholders (also in `siteConfig`): Office 310-654-1577 · Direct 310-686-5053 · westccmortgage@gmail.com.

---

## Compliance

No quoted rates, no promises of approval, none of "guaranteed / lowest rate / best rate / instant approval." Uses "may be available," "subject to lender guidelines," "subject to underwriting approval." Equal Housing Opportunity + not-a-commitment-to-lend disclosures appear in both languages. No "Chinese buyers" category.

---

## Local SEO / Google Business Profile checklist

- [ ] Create / claim the Google Business Profile with the accurate business name.
- [ ] Use a real address only if eligible. **Do not publish a private home address** — use a service-area business (SAB) if there is no public storefront.
- [ ] Category: *Mortgage Broker* or *Mortgage Lender*, whichever is compliant for the license held.
- [ ] Add service areas: Lunada Bay, Palos Verdes Estates, Rancho Palos Verdes, Rolling Hills, Rolling Hills Estates, Manhattan Beach, Redondo Beach, Torrance, South Bay.
- [ ] Add real photos and a founder photo (no stock imagery).
- [ ] Bilingual business description (English + 简体中文); add services; link to `https://lunadabaymortgage.com`.
- [ ] Collect real reviews from actual clients only.
- [ ] Keep NAP (Name, Address, Phone) consistent across website, Google, directories, and NMLS/DRE profiles.

---

## Launch checklist

- [ ] Confirm the two phone numbers, email, and (if used) any public address.
- [ ] Confirm licensing displays exactly as above (already wired from `siteConfig`).
- [ ] Point the domain `lunadabaymortgage.com` at Netlify; verify HTTPS.
- [ ] Submit `sitemap.xml` in Google Search Console; confirm `/` and `/zh` are indexed.
- [ ] In Netlify, add the form email notification and send a test submission.
- [ ] Spot-check EN and 中文 on mobile (hero, wizard, estimate, form).

---

## Project structure

```
index.html                 # Netlify Forms registration + meta/keywords
netlify.toml               # build, redirects (retired URLs), SPA fallback
public/  favicon.svg  robots.txt  sitemap.xml
src/
  App.jsx                  # routing: /, /zh, /:slug, /zh/:slug
  context/  LanguageContext.jsx  WizardPrefillContext.jsx
  data/  translations.js (siteConfig + all copy)  localPages.js  educationPages.js
  lib/  schema.js (JSON-LD)  href.js (withLang)
  pages/  Home.jsx  SlugPage.jsx  LocalPage.jsx  EducationPage.jsx
  components/  Hero  TrustBlock  StartHere  MortgageWizard  ThreePaths
               EstimateCalculator  AboutFounder  BilingualGuidance
               ContactForm  Header  Footer  Seo  ForceLang  …
```
