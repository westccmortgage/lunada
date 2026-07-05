export default function Process({ t }) {
  const p = t.process
  return (
    <section id="process" className="scroll-mt-20 bg-ivory py-24 sm:py-28">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">{p.eyebrow}</p>
          <div className="mt-4 mb-6 hairline" />
          <h2 className="font-serif text-3xl leading-tight text-navy sm:text-4xl">{p.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-navy/65">{p.intro}</p>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {p.steps.map((step, i) => (
            <li key={i} className="relative pl-16">
              <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 font-serif text-lg text-gold-muted">
                {i + 1}
              </span>
              <h3 className="pt-1.5 font-serif text-xl text-navy">{step.title}</h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-navy/60">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
