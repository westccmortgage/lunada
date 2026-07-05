import { Link } from 'react-router-dom'
import { insights } from '../data/insights.js'
import SectionHead from './SectionHead.jsx'

export default function Insights({ t, lang }) {
  const s = t.insights
  return (
    <section id="insights" className="scroll-mt-20 bg-ivory py-32 sm:py-44">
      <div className="section-shell">
        <SectionHead no="12" eyebrow={s.eyebrow} title={s.title} intro={s.intro} />

        {/* Editorial article index */}
        <div className="mt-16 border-t border-navy/10">
          {insights.map((article, i) => {
            const a = article[lang]
            return (
              <Link
                key={article.id}
                to={article.to}
                className="group grid grid-cols-12 items-baseline gap-x-4 gap-y-1.5 border-b border-navy/10 py-6 transition-colors duration-300 hover:bg-white"
              >
                <span className="sec-index col-span-2 text-lg sm:col-span-1" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="col-span-10 font-display text-xl font-medium tracking-tight text-navy transition-transform duration-300 group-hover:translate-x-2 sm:col-span-5 sm:text-[1.35rem]">
                  {a.title}
                </h3>
                <p className="col-span-10 col-start-3 text-[0.9rem] leading-relaxed text-navy/55 sm:col-span-5 sm:col-start-7">
                  {a.excerpt}
                </p>
                <span
                  className="col-span-1 hidden justify-self-end text-navy/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold sm:block"
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
