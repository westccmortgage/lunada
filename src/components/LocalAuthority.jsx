import SectionHead from './SectionHead.jsx'

export default function LocalAuthority({ t }) {
  const la = t.localAuthority
  return (
    <section id="local-authority" className="scroll-mt-20 bg-ivory py-20 sm:py-28">
      <div className="section-shell">
        <SectionHead no="02" eyebrow={la.eyebrow} title={la.title} intro={la.intro} />

        {/* Local trust callout */}
        <div className="mt-8 max-w-3xl rounded-sm border-l-2 border-gold bg-sand-soft/70 px-6 py-5">
          <p className="text-[0.98rem] leading-relaxed text-navy/75">{t.localTrust}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {la.cards.map((card, i) => (
            <div key={i} className="card card-hover">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold-muted">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-4 font-serif text-xl text-navy">{card.title}</h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-navy/60">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
