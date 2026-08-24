import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useLang } from '../context/LanguageContext.jsx'
import { getLocalPage, localPages } from '../data/localPages.js'
import {
  organizationSchema,
  personSchema,
  websiteSchema,
  faqSchema,
  breadcrumbSchema,
} from '../lib/schema.js'
import { withLang } from '../lib/href.js'
import { siteConfig } from '../data/translations.js'
import Seo from '../components/Seo.jsx'
import ContactForm from '../components/ContactForm.jsx'

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-sand-deep/60">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
      >
        <span className="font-display text-lg font-medium tracking-tight text-navy">{q}</span>
        <span className={`text-gold transition-transform duration-300 ${open ? 'rotate-45' : ''}`} aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="max-w-3xl text-[0.95rem] leading-relaxed text-navy/65">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function LocalPage() {
  const { slug } = useParams()
  const { t, lang } = useLang()
  const page = getLocalPage(slug)

  // Scroll to top on navigation between local pages
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!page) return <Navigate to="/" replace />

  const c = page[lang]
  const lp = t.localPage
  const others = localPages.filter((p) => p.slug !== slug).slice(0, 8)
  const isLosAngelesCountyLocal = !page.foreign
  const limitCopy = lang === 'zh'
    ? {
        label: '2026 年洛杉矶县一单元合规贷款上限',
        amount: '$1,249,125',
        body: '对于一单元房产，贷款金额超过 $1,249,125 即进入大额贷款（Jumbo）范围。实际资格、首付、储备金及条款取决于借款人情况、房产、占用性质和贷款机构规定。',
        source: '查看 FHFA 2026 官方贷款上限',
      }
    : {
        label: '2026 Los Angeles County one-unit conforming limit',
        amount: '$1,249,125',
        body: 'For a one-unit property, a loan amount above $1,249,125 is jumbo territory. Actual eligibility, down payment, reserves, and terms depend on the borrower, property, occupancy, and lender guidelines.',
        source: 'See the official FHFA 2026 loan limits',
      }
  const seoTitle = isLosAngelesCountyLocal ? c.title.replace(' | ', ' 2026 | ') : c.title
  const seoDescription = isLosAngelesCountyLocal
    ? `${c.description} 2026 Los Angeles County one-unit conforming limit: $1,249,125.`
    : c.description

  return (
    <>
      <Seo
        title={seoTitle}
        description={seoDescription}
        keywords={page.keywords}
        path={page.path}
        jsonLd={[
          organizationSchema(),
          personSchema(),
          websiteSchema(),
          faqSchema(lp.faq),
          breadcrumbSchema([
            { name: lp.home, path: '/' },
            { name: page.city, path: page.path },
          ]),
        ]}
      />

      {/* Header offset */}
      <div className="bg-navy pt-28 pb-16 text-ivory sm:pt-32 sm:pb-20">
        <div className="section-shell">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-xs tracking-wide text-ivory/50">
            <Link to={withLang('/', lang)} className="hover:text-gold-soft">
              {lp.home}
            </Link>
            <span className="mx-2 text-ivory/30">/</span>
            <span className="text-ivory/70">{page.city}</span>
          </nav>

          <p className="eyebrow text-gold-soft">
            {page.foreign ? t.localPositioningForeign : t.localPositioning}
          </p>
          <div className="mt-4 mb-6 hairline bg-gold/70" />
          <h1 className="max-w-4xl font-display font-medium text-4xl leading-[1.05] tracking-tight text-ivory sm:text-6xl">
            {c.h1}
          </h1>
          <div className="mt-8 max-w-3xl space-y-4">
            {c.intro.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed text-ivory/75">
                {para}
              </p>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href={siteConfig.assistantUrl} target="_blank" rel="noopener" className="btn-gold">
              {lp.ctaStart}
            </a>
            <a
              href="#page-contact"
              className="inline-flex items-center justify-center rounded-sm border border-ivory/25 px-7 py-3.5 text-sm font-medium tracking-wide text-ivory transition-all duration-300 hover:border-gold hover:text-gold-soft"
            >
              {lp.ctaButton}
            </a>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="bg-ivory py-20 sm:py-24">
        <div className="section-shell grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Main content */}
          <article className="lg:col-span-8">
            {/* Local highlights */}
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {c.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex gap-3 rounded-sm border border-sand-deep/60 bg-white p-4 text-[0.92rem] leading-relaxed text-navy/70"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                  {h}
                </li>
              ))}
            </ul>

            {/* Fresh, authoritative jumbo threshold for the LA County service pages. */}
            {isLosAngelesCountyLocal && (
              <div className="mt-8 rounded-sm border border-gold/35 bg-white p-6 sm:p-7">
                <p className="text-xs font-medium uppercase tracking-widest text-gold-muted">{limitCopy.label}</p>
                <p className="mt-2 font-display text-4xl font-medium tracking-tight text-navy">{limitCopy.amount}</p>
                <p className="mt-3 max-w-3xl text-[0.95rem] leading-relaxed text-navy/70">{limitCopy.body}</p>
                <a
                  href="https://www.fhfa.gov/data/conforming-loan-limit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-sm font-medium text-navy underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold-muted"
                >
                  {limitCopy.source}
                </a>
              </div>
            )}

            {/* Local context */}
            <div className="mt-12">
              <h2 className="font-display font-medium tracking-tight text-2xl text-navy sm:text-3xl">{c.localContext.heading}</h2>
              <div className="mt-4 space-y-4">
                {c.localContext.paras.map((para, i) => (
                  <p key={i} className="leading-relaxed text-navy/70">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Shared educational sections */}
            {c.sections.map((sec, i) => (
              <div key={i} className="mt-12">
                <h2 className="font-display font-medium tracking-tight text-2xl text-navy sm:text-3xl">{sec.heading}</h2>
                <div className="mt-4 space-y-4">
                  {sec.paras.map((para, j) => (
                    <p key={j} className="leading-relaxed text-navy/70">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Simple shared FAQ */}
            <div className="mt-12">
              <h2 className="font-display font-medium tracking-tight text-2xl text-navy sm:text-3xl">
                {lp.faqTitle}
              </h2>
              <div className="mt-6 border-t border-sand-deep/60">
                {lp.faq.map((f, i) => (
                  <FaqItem key={i} q={f.q} a={f.a} />
                ))}
              </div>
            </div>

            <p className="mt-12 border-t border-sand-deep/60 pt-6 text-sm leading-relaxed text-navy/50">
              {lp.disclaimerShort}
            </p>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* CTA card */}
              <div className="rounded-sm border border-navy/15 bg-navy p-7 text-ivory">
                <h3 className="font-display font-medium tracking-tight text-xl">{lp.ctaTitle}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/70">{lp.ctaBody}</p>
                <a href="#page-contact" className="btn-gold mt-5 w-full">
                  {lp.ctaButton}
                </a>
              </div>

              {/* Explore other areas — internal linking */}
              <div className="rounded-sm border border-sand-deep/60 bg-white p-7">
                <h3 className="text-xs font-medium uppercase tracking-widest text-gold-muted">
                  {lp.exploreTitle}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {others.map((p) => (
                    <li key={p.slug}>
                      <Link
                        to={withLang(p.path, lang)}
                        className="group inline-flex items-center gap-2 text-[0.92rem] text-navy/70 transition-colors hover:text-gold-muted"
                      >
                        <span className="h-px w-4 bg-gold/50 transition-all group-hover:w-6" />
                        {p.city}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to={withLang('/', lang)}
                  className="mt-6 inline-block text-sm text-navy/50 transition-colors hover:text-navy"
                >
                  {lp.backHome}
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Contact form */}
      <div id="page-contact" className="scroll-mt-20">
        <ContactForm t={t} />
      </div>
    </>
  )
}
