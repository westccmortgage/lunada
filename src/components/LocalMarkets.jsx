import { Link } from 'react-router-dom'

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
    <section id="markets" className="scroll-mt-20 bg-sand-soft py-24 sm:py-28">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">{m.eyebrow}</p>
          <div className="mt-4 mb-6 hairline" />
          <h2 className="font-serif text-3xl leading-tight text-navy sm:text-4xl">{m.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-navy/65">{m.intro}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {m.items.map((item, i) => (
            <Link
              key={i}
              to={`/${SLUGS[i]}`}
              className="group relative block overflow-hidden rounded-sm border border-sand-deep/60 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_18px_40px_-24px_rgba(15,32,53,0.4)]"
            >
              <div className="absolute right-0 top-0 h-16 w-16 -translate-y-8 translate-x-8 rounded-full bg-gold/5 transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4" />
              <h3 className="font-serif text-xl text-navy">{item.name}</h3>
              <div className="mt-3 h-px w-8 bg-gold/50 transition-all duration-300 group-hover:w-14" />
              <p className="mt-3 text-[0.92rem] leading-relaxed text-navy/60">{item.note}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-10 max-w-2xl border-l-2 border-gold/40 pl-5 text-[0.95rem] italic leading-relaxed text-navy/55">
          {m.note}
        </p>
      </div>
    </section>
  )
}
