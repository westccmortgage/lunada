export default function PrivateReviewModel({ t }) {
  const p = t.privateReview
  return (
    <section id="private-review" className="scroll-mt-20 bg-navy-deep py-20 text-ivory sm:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl rounded-sm border border-ivory/12 bg-navy/60 p-8 sm:p-12">
          <div className="text-center">
            <p className="eyebrow-rule justify-center text-gold-soft">
              <span className="h-px w-6 bg-gold/60" />
              {p.eyebrow}
              <span className="h-px w-6 bg-gold/60" />
            </p>
            <h2 className="mt-5 font-display text-3xl font-medium tracking-tight text-ivory sm:text-4xl">
              {p.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ivory/70">{p.intro}</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-ivory/10 bg-ivory/10 sm:grid-cols-2 lg:grid-cols-4">
            {p.points.map((pt, i) => (
              <div key={i} className="bg-navy-deep p-6 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 font-serif text-sm font-semibold text-gold-soft">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
                  {pt.label}
                </p>
                <p className="mt-2.5 text-[0.9rem] leading-relaxed text-ivory/70">{pt.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-11 text-center">
            <a href="#contact" className="btn-gold">
              {p.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
