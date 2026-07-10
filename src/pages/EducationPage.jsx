import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useLang } from '../context/LanguageContext.jsx'
import { getEducationPage, educationPages } from '../data/educationPages.js'
import { localPages } from '../data/localPages.js'
import {
  organizationSchema,
  personSchema,
  websiteSchema,
  faqSchema,
  breadcrumbSchema,
} from '../lib/schema.js'
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

function Bullets({ items }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 leading-relaxed text-navy/70">
          <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function EducationPage({ slug: slugProp }) {
  const params = useParams()
  const slug = slugProp || params.slug
  const { t, lang } = useLang()
  const page = getEducationPage(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!page) return <Navigate to="/" replace />

  const c = page[lang]
  const ep = t.educationPage
  const related = (c.related || [])
    .map((s) => getEducationPage(s))
    .filter(Boolean)
  const areas = localPages.slice(0, 6)

  return (
    <>
      <Seo
        title={c.title}
        description={c.description}
        keywords={page.keywords}
        path={page.path}
        jsonLd={[
          organizationSchema(),
          personSchema(),
          websiteSchema(),
          faqSchema(c.faq),
          breadcrumbSchema([
            { name: ep.home, path: '/' },
            { name: c.h1, path: page.path },
          ]),
        ]}
      />

      {/* Hero */}
      <div className="bg-navy pt-28 pb-16 text-ivory sm:pt-32 sm:pb-20">
        <div className="section-shell">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs tracking-wide text-ivory/50">
            <Link to="/" className="hover:text-gold-soft">
              {ep.home}
            </Link>
            <span className="mx-2 text-ivory/30">/</span>
            <span className="text-ivory/70">{ep.eyebrow}</span>
          </nav>

          <p className="eyebrow text-gold-soft">{ep.eyebrow}</p>
          <div className="mt-4 mb-6 hairline bg-gold/70" />
          <h1 className="max-w-4xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-ivory sm:text-5xl">
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
            <a href="/#start-here" className="btn-gold">
              {ep.ctaStart}
            </a>
            <a
              href="#page-contact"
              className="inline-flex items-center justify-center rounded-sm border border-ivory/25 px-7 py-3.5 text-sm font-medium tracking-wide text-ivory transition-all duration-300 hover:border-gold hover:text-gold-soft"
            >
              {ep.ctaReview}
            </a>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="bg-ivory py-16 sm:py-20">
        <div className="section-shell grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <article className="lg:col-span-8">
            <section>
              <h2 className="font-display text-2xl font-medium tracking-tight text-navy sm:text-3xl">
                {ep.meaningTitle}
              </h2>
              <div className="mt-4 space-y-4">
                {c.meaning.map((p, i) => (
                  <p key={i} className="leading-relaxed text-navy/70">
                    {p}
                  </p>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="font-display text-2xl font-medium tracking-tight text-navy sm:text-3xl">
                {ep.whoTitle}
              </h2>
              <Bullets items={c.who} />
            </section>

            <section className="mt-12">
              <h2 className="font-display text-2xl font-medium tracking-tight text-navy sm:text-3xl">
                {ep.reviewTitle}
              </h2>
              <Bullets items={c.review} />
            </section>

            <section className="mt-12">
              <h2 className="font-display text-2xl font-medium tracking-tight text-navy sm:text-3xl">
                {ep.documentsTitle}
              </h2>
              <Bullets items={c.documents} />
            </section>

            <section className="mt-12">
              <h2 className="font-display text-2xl font-medium tracking-tight text-navy sm:text-3xl">
                {ep.nextTitle}
              </h2>
              <div className="mt-4 space-y-4">
                {c.next.map((p, i) => (
                  <p key={i} className="leading-relaxed text-navy/70">
                    {p}
                  </p>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="font-display text-2xl font-medium tracking-tight text-navy sm:text-3xl">
                {ep.faqTitle}
              </h2>
              <div className="mt-6 border-t border-sand-deep/60">
                {c.faq.map((f, i) => (
                  <FaqItem key={i} q={f.q} a={f.a} />
                ))}
              </div>
            </section>

            <p className="mt-12 border-t border-sand-deep/60 pt-6 text-sm leading-relaxed text-navy/50">
              {ep.disclaimer}
            </p>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <div className="rounded-sm border border-navy/15 bg-navy p-7 text-ivory">
                <h3 className="font-display text-xl font-medium tracking-tight">{ep.ctaReview}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/70">{t.contact.trustLine}</p>
                <a href="/#start-here" className="btn-gold mt-5 w-full">
                  {ep.ctaStart}
                </a>
                <a href="#page-contact" className="btn-outline-light mt-3 w-full">
                  {ep.ctaReview}
                </a>
              </div>

              {related.length > 0 && (
                <div className="rounded-sm border border-sand-deep/60 bg-white p-7">
                  <h3 className="text-xs font-medium uppercase tracking-widest text-gold-muted">
                    {ep.guidesTitle}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          to={r.path}
                          className="group inline-flex items-center gap-2 text-[0.92rem] text-navy/70 transition-colors hover:text-gold-muted"
                        >
                          <span className="h-px w-4 bg-gold/50 transition-all group-hover:w-6" />
                          {r[lang].h1}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="rounded-sm border border-sand-deep/60 bg-white p-7">
                <h3 className="text-xs font-medium uppercase tracking-widest text-gold-muted">
                  {ep.areasTitle}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {areas.map((p) => (
                    <li key={p.slug}>
                      <Link
                        to={p.path}
                        className="group inline-flex items-center gap-2 text-[0.92rem] text-navy/70 transition-colors hover:text-gold-muted"
                      >
                        <span className="h-px w-4 bg-gold/50 transition-all group-hover:w-6" />
                        {p.city}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div id="page-contact" className="scroll-mt-20">
        <ContactForm t={t} />
      </div>
    </>
  )
}
