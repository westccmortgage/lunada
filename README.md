# Lunada Bay Mortgage

A premium bilingual (English / 简体中文) marketing website for **Lunada Bay Mortgage**, the local jumbo mortgage advisory desk operated by **West Coast Capital Mortgage Inc.** and led by founder **Anatoliy Kanevsky**.

> Local jumbo mortgage strategy for Lunada Bay, Palos Verdes, and coastal Los Angeles.

Built with **React + Vite + Tailwind CSS**. Static, Netlify-ready, with a dedicated local-SEO layer (12 location pages, JSON-LD structured data, sitemap, robots).

---

## Tech stack

- React 18 + Vite 5
- Tailwind CSS 3
- React Router 6 (client-side routing for local SEO pages)
- No external UI/runtime dependencies beyond the above

---

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default http://localhost:5173).

## Build for Netlify

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

### Deploying to Netlify

`netlify.toml` is already configured:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **SPA redirect:** all routes fall back to `/index.html` (so deep links like `/palos-verdes-jumbo-loans` resolve)

Options to deploy:

1. **Git-based:** connect the repo in the Netlify dashboard — it reads `netlify.toml` automatically.
2. **CLI:** `npm i -g netlify-cli && netlify deploy --prod`
3. **Drag-and-drop:** run `npm run build` and drag the `dist/` folder into Netlify.

The contact form uses **Netlify Forms** attributes (`data-netlify="true"`, hidden `form-name`, honeypot). It works automatically once deployed to Netlify — no backend needed. Form submissions appear under **Forms** in the Netlify dashboard. Locally it just shows the success message.

---

## Editing licensing, NMLS & contact info

All compliance-sensitive values live in **one place**:

```
src/data/translations.js  →  export const siteConfig = { ... }
```

That object holds the brand name, DRE licenses, NMLS numbers, phone numbers, email, and related links. NMLS entries carry a `verifyBeforePublishing: true` flag that renders a small "— verify before publishing" note in the footer. Once you confirm each number, set the flag to `false` to remove the note.

All website copy (English + Chinese) also lives in `src/data/translations.js`. Location-page content lives in `src/data/localPages.js`, and homepage insight cards in `src/data/insights.js`.

---

## Local SEO layer

- **12 dedicated local pages**, each with a unique title, meta description, H1, 500–800 words of useful local content, jumbo explanation, self-employed / business-owner section, refinance section, Chinese-speaking borrower note, and a CTA back to the review form.
- **JSON-LD structured data** injected per page: `Organization` + `FinancialService`, `Person`, `WebSite`, `FAQPage` (home), and `BreadcrumbList` (local pages). No fake reviews, ratings, `aggregateRating`, or invented hours.
- **`public/sitemap.xml`** and **`public/robots.txt`** cover the homepage and all local pages.
- Homepage **Local Markets** cards and the **Mortgage Insights** section link internally to the local pages.

Local page routes:

```
/lunada-bay-mortgage
/palos-verdes-jumbo-loans
/palos-verdes-estates-mortgage
/rancho-palos-verdes-mortgage
/rolling-hills-mortgage
/rolling-hills-estates-mortgage
/manhattan-beach-jumbo-loans
/redondo-beach-mortgage
/torrance-mortgage
/south-bay-jumbo-mortgage
/chinese-mortgage-broker-los-angeles
/chinese-mortgage-broker-palos-verdes
```

> **Note on SEO rendering:** this is a client-rendered SPA. Google renders JavaScript and will index these routes, and each has its own canonical + metadata + structured data. If you later want fully pre-rendered static HTML for every route (maximum crawler coverage), add a prerender step (e.g. `vite-plugin-prerender` / `react-snap`) or migrate to a framework with SSG. The current setup is production-ready as-is.

---

## Local SEO / Google Business Profile Checklist

Complete these to strengthen local ranking. **Accuracy and consistency matter more than volume.**

- [ ] **Create or claim** the Google Business Profile for the business.
- [ ] Use the **accurate business name** exactly as licensed (avoid keyword stuffing the name).
- [ ] Use a **real address only if eligible.** **Do not publish a private home address** unless clients actually visit there and it is intended to be public.
- [ ] If there is no public storefront, set up a **service-area business (SAB)** and hide the address.
- [ ] **Category:** choose *Mortgage Broker* or *Mortgage Lender* depending on what is compliant for the license held.
- [ ] Add **local service areas:** Lunada Bay, Palos Verdes Estates, Rancho Palos Verdes, Rolling Hills, Rolling Hills Estates, Manhattan Beach, Redondo Beach, Torrance, and the broader South Bay.
- [ ] Add **real photos** (no stock imagery).
- [ ] Add a **founder photo** of Anatoliy Kanevsky.
- [ ] Add a **bilingual business description** (English + 简体中文).
- [ ] Add **services** (jumbo purchase, jumbo refinance, Non-QM, bank statement, DSCR, cash-out, second home).
- [ ] Add the **website link** to `https://lunadabaymortgage.com`.
- [ ] **Collect real reviews from actual clients only.** Never fabricate reviews or ratings.
- [ ] Keep **NAP (Name, Address, Phone)** consistent across the website, Google, directories, and NMLS/DRE licensing profiles.

---

## ⚠️ Placeholders to verify before publishing

Confirm each of these (all editable in `src/data/translations.js → siteConfig`):

1. **West Coast Capital Mortgage Inc. NMLS #2817729** — *verify before publishing.*
2. **Anatoliy Kanevsky MLO / NMLS #2775380** — *verify before publishing.*
3. **CA DRE Broker License #01385024** (individual) — confirm.
4. **CA DRE Corporation License #02440065** (company) — confirm.
5. **Office phone 310-654-1577** and **Direct 310-686-5053** — confirm they are correct and OK to publish.
6. **Email westccmortgage@gmail.com** — confirm.
7. **Domain / canonical URL** `https://lunadabaymortgage.com` — used in `index.html`, `src/lib/schema.js`, `public/sitemap.xml`, and `public/robots.txt`. Update everywhere if the final domain differs.
8. **Business address / service-area decision** for Google Business Profile (do **not** publish a private home address).
9. **State licensing scope** — the site does not claim licensing in any specific states beyond the CA DRE/NMLS details provided. Confirm before adding any state-specific claims.

After verifying NMLS numbers, set `verifyBeforePublishing: false` in `siteConfig` to remove the footer reminder notes.

---

## Compliance notes

The site intentionally avoids quoting rates, promising approval, or using "guaranteed / lowest rate / best rate / instant approval" language. It uses "may be available," "subject to borrower qualification," "subject to lender guidelines," and "subject to underwriting approval" throughout, and displays the Equal Housing Opportunity and not-a-commitment-to-lend disclosures in both languages.

---

## Project structure

```
index.html
netlify.toml
public/
  favicon.svg
  robots.txt
  sitemap.xml
src/
  main.jsx
  App.jsx                # routing + providers
  index.css
  context/
    LanguageContext.jsx  # EN/中文 state + persistence
  data/
    translations.js      # siteConfig + all bilingual UI copy
    localPages.js        # 12 bilingual local SEO pages
    insights.js          # homepage article cards
  lib/
    schema.js            # JSON-LD builders
  pages/
    Home.jsx
    LocalPage.jsx        # template for all local SEO pages
  components/
    Header.jsx  LanguageToggle.jsx  Hero.jsx  LocalAuthority.jsx
    JumboStrategy.jsx  AboutFounder.jsx  LocalMarkets.jsx
    LoanPrograms.jsx  ClientProfiles.jsx  Process.jsx  Insights.jsx
    FAQ.jsx  ContactForm.jsx  Footer.jsx  Seo.jsx
```
