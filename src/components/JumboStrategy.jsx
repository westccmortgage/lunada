import SectionHead from './SectionHead.jsx'

export default function JumboStrategy({ t }) {
  const s = t.strategy
  return (
    <section id="strategy" className="scroll-mt-20 bg-ivory py-16 sm:py-24">
      <div className="section-shell">
        <SectionHead no="03" eyebrow={s.eyebrow} title={s.title} intro={s.intro} />

        {/* Compact, information-dense card grid */}
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-navy/15 bg-navy/15 sm:grid-cols-2 lg:grid-cols-3">
          {s.cards.map((card, i) => (
            <div key={i} className="group bg-ivory p-6 transition-colors duration-300 hover:bg-white">
              <span className="sec-index text-sm" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-display text-lg font-medium tracking-tight text-navy">{card.title}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-navy/60">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
