import { Link } from 'react-router-dom'
import SectionHead from './SectionHead.jsx'

export default function ThreePaths({ t }) {
  const p = t.paths
  return (
    <section id="paths" className="scroll-mt-20 bg-sand-soft py-16 sm:py-24">
      <div className="section-shell">
        <SectionHead no="03" eyebrow={p.eyebrow} title={p.title} intro={p.intro} />

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {p.items.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className="group flex flex-col rounded-sm border border-sand-deep/70 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_20px_50px_-32px_rgba(15,32,53,0.5)]"
            >
              <span className="sec-index text-sm" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-display text-xl font-medium leading-snug tracking-tight text-navy sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 flex-grow leading-relaxed text-navy/60">{item.body}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-navy transition-colors group-hover:text-gold-muted">
                {p.cta}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
