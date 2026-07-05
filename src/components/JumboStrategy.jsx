import SectionHead from './SectionHead.jsx'

export default function JumboStrategy({ t }) {
  const s = t.strategy
  return (
    <section id="strategy" className="scroll-mt-20 bg-ivory py-32 sm:py-44">
      <div className="section-shell">
        <SectionHead no="03" eyebrow={s.eyebrow} title={s.title} intro={s.intro} />

        {/* Editorial index — each strategy as a ruled row */}
        <div className="mt-16 border-t border-navy/10">
          {s.cards.map((card, i) => (
            <div
              key={i}
              className="group grid grid-cols-12 items-baseline gap-x-4 gap-y-2 border-b border-navy/10 py-7 transition-colors duration-300 hover:bg-white"
            >
              <span className="sec-index col-span-2 text-xl sm:col-span-1" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="col-span-10 font-display text-2xl font-medium tracking-tight text-navy transition-transform duration-300 group-hover:translate-x-2 sm:col-span-4 sm:text-[1.65rem]">
                {card.title}
              </h3>
              <p className="col-span-10 col-start-3 text-[0.97rem] leading-relaxed text-navy/60 sm:col-span-6 sm:col-start-6 lg:col-span-6">
                {card.body}
              </p>
              <span
                className="col-span-1 hidden justify-self-end text-gold/0 transition-all duration-300 group-hover:text-gold sm:block"
                aria-hidden="true"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
