import { Link } from 'react-router-dom'
import { insights } from '../data/insights.js'
import SectionHead from './SectionHead.jsx'

export default function Insights({ t, lang }) {
  const s = t.insights
  return (
    <section id="insights" className="scroll-mt-20 bg-ivory py-16 sm:py-24">
      <div className="section-shell">
        <SectionHead no="13" eyebrow={s.eyebrow} title={s.title} intro={s.intro} />

        {/* Compact two-column guide index */}
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-navy/15 bg-navy/15 md:grid-cols-2">
          {insights.map((article) => {
            const a = article[lang]
            return (
              <Link
                key={article.id}
                to={article.to}
                className="group flex items-start justify-between gap-5 bg-ivory p-6 transition-colors duration-300 hover:bg-white"
              >
                <div>
                  <h3 className="font-display text-lg font-medium tracking-tight text-navy">{a.title}</h3>
                  <p className="mt-1.5 text-[0.9rem] leading-relaxed text-navy/55">{a.excerpt}</p>
                </div>
                <span
                  className="mt-1 flex-shrink-0 text-navy/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold"
                  aria-hidden="true"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
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
