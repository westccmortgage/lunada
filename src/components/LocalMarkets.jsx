import { Link } from 'react-router-dom'
import SectionHead from './SectionHead.jsx'

// Map each market card to its dedicated local SEO page.
const SLUGS = [
  'lunada-bay-mortgage',
  'palos-verdes-estates-mortgage',
  'rancho-palos-verdes-mortgage',
  'rolling-hills-mortgage',
  'rolling-hills-estates-mortgage',
  'manhattan-beach-jumbo-loans',
  'redondo-beach-mortgage',
  'torrance-mortgage',
  'south-bay-jumbo-mortgage',
]

export default function LocalMarkets({ t }) {
  const m = t.markets
  return (
    <section id="markets" className="scroll-mt-20 bg-sand-soft py-20 sm:py-28">
      <div className="section-shell">
        <SectionHead no="09" eyebrow={m.eyebrow} title={m.title} intro={m.intro} />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {m.items.map((item, i) => (
            <Link
              key={i}
              to={`/${SLUGS[i]}`}
              className="group relative block border border-sand-deep/60 bg-white p-7 transition-all duration-300 hover:border-gold/60"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-medium tracking-tight text-navy">{item.name}</h3>
                <span className="sec-index text-sm" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="mt-4 h-px w-8 bg-gold/50 transition-all duration-500 group-hover:w-full" />
              <p className="mt-4 text-[0.92rem] leading-relaxed text-navy/60">{item.note}</p>
              <span className="mt-5 inline-flex items-center text-navy/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-10 max-w-2xl border-l-2 border-gold/40 pl-5 text-[0.95rem] leading-relaxed text-navy/55">
          {m.note}
        </p>
      </div>
    </section>
  )
}
