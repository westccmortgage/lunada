import SectionHead from './SectionHead.jsx'

export default function LoanPrograms({ t }) {
  const p = t.programs
  return (
    <section id="programs" className="scroll-mt-20 bg-ivory py-24 sm:py-32">
      <div className="section-shell">
        <SectionHead no="09" eyebrow={p.eyebrow} title={p.title} intro={p.intro} />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-navy/15 bg-navy/15 sm:grid-cols-2 lg:grid-cols-3">
          {p.items.map((item, i) => (
            <div
              key={i}
              className="group bg-ivory p-7 transition-colors duration-300 hover:bg-white"
            >
              <span className="sec-index text-sm" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-navy">{item.title}</h3>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-navy/60">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm leading-relaxed text-navy/50">{p.disclaimer}</p>
      </div>
    </section>
  )
}
