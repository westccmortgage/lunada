export default function ClientProfiles({ t }) {
  const c = t.clients
  return (
    <section id="clients" className="scroll-mt-20 bg-sand-soft py-24 sm:py-28">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">{c.eyebrow}</p>
          <div className="mt-4 mb-6 hairline" />
          <h2 className="font-serif text-3xl leading-tight text-navy sm:text-4xl">{c.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-navy/65">{c.intro}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {c.items.map((item, i) => (
            <div key={i} className="card card-hover flex gap-5">
              <span className="font-serif text-3xl leading-none text-gold/60">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-serif text-xl text-navy">{item.title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-navy/60">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
