import SectionHead from './SectionHead.jsx'

export default function LocalAuthority({ t }) {
  const la = t.localAuthority
  return (
    <section id="local-authority" className="scroll-mt-20 bg-ivory py-16 sm:py-24">
      <div className="section-shell">
        <SectionHead no="02" eyebrow={la.eyebrow} title={la.title} intro={la.intro} />

        {/* Local trust callout */}
        <div className="mt-8 max-w-3xl rounded-sm border-l-2 border-gold bg-sand-soft/70 px-6 py-5">
          <p className="text-[0.98rem] leading-relaxed text-navy/75">{t.localTrust}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-navy/15 bg-navy/15 sm:grid-cols-2 lg:grid-cols-3">
          {la.cards.map((card, i) => (
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
