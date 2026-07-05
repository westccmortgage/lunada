export default function JumboStrategy({ t }) {
  const s = t.strategy
  return (
    <section id="strategy" className="scroll-mt-20 bg-ivory py-24 sm:py-28">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">{s.eyebrow}</p>
          <div className="mt-4 mb-6 hairline" />
          <h2 className="font-serif text-3xl leading-tight text-navy sm:text-4xl">{s.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-navy/65">{s.intro}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {s.cards.map((card, i) => (
            <div key={i} className="card card-hover">
              <span className="font-serif text-2xl text-gold/70">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-serif text-xl text-navy">{card.title}</h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-navy/60">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
