import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext.jsx'
import { legalPages } from '../data/legalPages.js'
import { withLang } from '../lib/href.js'
import Seo from '../components/Seo.jsx'

const linkCls = 'text-navy underline decoration-gold/60 underline-offset-2 hover:text-gold-muted break-words'

// Renders "[label](url)" links inside a paragraph string
function Rich({ text }) {
  const parts = []
  const re = /\[([^\]]+)\]\(([^)]+)\)/g
  let last = 0
  let m
  let i = 0
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index))
    const [, label, url] = m
    parts.push(
      url.startsWith('/') ? (
        <Link key={i++} to={url} className={linkCls}>
          {label}
        </Link>
      ) : (
        <a key={i++} href={url} target="_blank" rel="noopener noreferrer" className={linkCls}>
          {label}
        </a>
      ),
    )
    last = m.index + m[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts
}

export default function LegalPage({ kind }) {
  const { t, lang } = useLang()
  const c = legalPages[kind][lang]

  return (
    <>
      <Seo title={c.title} description={c.description} path={`/${kind}`} />
      <div className="bg-navy pb-12 pt-28 text-ivory sm:pb-16 sm:pt-32">
        <div className="section-shell">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs tracking-wide text-ivory/60">
            <Link to={withLang('/', lang)} className="inline-flex min-h-[40px] items-center hover:text-gold-soft">
              {t.localPage.home}
            </Link>
            <span className="mx-2 text-ivory/30">/</span>
            <span className="text-ivory/80">{c.h1}</span>
          </nav>
          <h1 className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-ivory sm:text-5xl">{c.h1}</h1>
          <p className="mt-4 text-sm text-ivory/60">{c.updated}</p>
        </div>
      </div>
      <div className="bg-ivory py-14 sm:py-20">
        <div className="section-shell">
          <article className="max-w-3xl">
            {c.sections.map((s) => (
              <section key={s.h} className="mb-10">
                <h2 className="font-display text-xl font-medium tracking-tight text-navy sm:text-2xl">{s.h}</h2>
                <div className="mt-3 space-y-3">
                  {s.p.map((para) => (
                    <p key={para} className="leading-relaxed text-navy/75">
                      <Rich text={para} />
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>
      </div>
    </>
  )
}
