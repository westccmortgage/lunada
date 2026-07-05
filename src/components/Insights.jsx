import { Link } from 'react-router-dom'
import { insights } from '../data/insights.js'

export default function Insights({ t, lang }) {
  const s = t.insights
  return (
    <section id="insights" className="scroll-mt-20 bg-ivory py-24 sm:py-28">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">{s.eyebrow}</p>
          <div className="mt-4 mb-6 hairline" />
          <h2 className="font-serif text-3xl leading-tight text-navy sm:text-4xl">{s.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-navy/65">{s.intro}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {insights.map((article) => {
            const a = article[lang]
            return (
              <Link
                key={article.id}
                to={article.to}
                className="card card-hover group flex flex-col"
              >
                <span className="eyebrow text-gold-muted/80">{s.eyebrow}</span>
                <h3 className="mt-3 font-serif text-lg leading-snug text-navy">{a.title}</h3>
                <p className="mt-2.5 flex-grow text-[0.88rem] leading-relaxed text-navy/60">
                  {a.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold-muted transition-colors group-hover:text-gold">
                  {s.readMore}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
