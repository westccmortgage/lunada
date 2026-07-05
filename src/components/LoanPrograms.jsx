export default function LoanPrograms({ t }) {
  const p = t.programs
  return (
    <section id="programs" className="scroll-mt-20 bg-ivory py-24 sm:py-28">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">{p.eyebrow}</p>
          <div className="mt-4 mb-6 hairline" />
          <h2 className="font-serif text-3xl leading-tight text-navy sm:text-4xl">{p.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-navy/65">{p.intro}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-sand-deep/60 bg-sand-deep/60 sm:grid-cols-2 lg:grid-cols-3">
          {p.items.map((item, i) => (
            <div
              key={i}
              className="group bg-white p-7 transition-colors duration-300 hover:bg-sand-soft"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                <h3 className="font-serif text-xl text-navy">{item.title}</h3>
              </div>
              <p className="mt-3 pl-[1.1rem] text-[0.92rem] leading-relaxed text-navy/60">
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
