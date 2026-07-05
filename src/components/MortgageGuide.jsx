import { useState } from 'react'

function GlossaryRow({ term, def }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-sand-deep/60">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
      >
        <span className="font-display text-lg font-medium tracking-tight text-navy">{term}</span>
        <span className={`text-gold transition-transform duration-300 ${open ? 'rotate-45' : ''}`} aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="text-[0.95rem] leading-relaxed text-navy/65">{def}</p>
        </div>
      </div>
    </div>
  )
}

export default function MortgageGuide({ t }) {
  const g = t.guide
  const wj = g.whatIsJumbo
  const lr = g.lenderReview

  return (
    <section id="guide" className="scroll-mt-20 bg-sand-soft py-32 sm:py-44">
      <div className="section-shell space-y-24">
        {/* What makes a loan jumbo */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="flex items-baseline gap-4">
              <span className="sec-index text-lg" aria-hidden="true">( 04 )</span>
              <span className="meta-label">{wj.eyebrow}</span>
            </div>
            <h2 className="title-xl mt-7">{wj.title}</h2>
            <div className="mt-6 space-y-4">
              {wj.paras.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-navy/65">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Plain-language glossary (progressive disclosure) */}
          <div className="lg:col-span-6">
            <div className="rounded-sm border border-sand-deep/70 bg-white p-7 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-muted">
                {wj.glossaryTitle}
              </p>
              <div className="mt-4">
                {wj.glossary.map((item, i) => (
                  <GlossaryRow key={i} term={item.term} def={item.def} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* What lenders may review */}
        <div>
          <div className="max-w-3xl">
            <div className="flex items-baseline gap-4">
              <span className="sec-index text-lg" aria-hidden="true">( 05 )</span>
              <span className="meta-label">{lr.eyebrow}</span>
            </div>
            <h2 className="title-xl mt-7">{lr.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-navy/65">{lr.intro}</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-sand-deep/70 bg-sand-deep/70 sm:grid-cols-2 lg:grid-cols-4">
            {lr.cards.map((card, i) => (
              <div key={i} className="bg-white p-6">
                <span className="sec-index text-sm">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-display text-lg font-medium tracking-tight text-navy">{card.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-navy/60">{card.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Before you make an offer */}
        <div className="rounded-sm border border-navy/15 bg-navy px-8 py-12 text-ivory sm:px-12 sm:py-14">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-9">
              <p className="eyebrow-rule text-gold-soft">
                <span className="h-px w-6 bg-gold/60" />
                {g.beforeOffer.eyebrow}
              </p>
              <h2 className="mt-5 font-display text-3xl font-medium tracking-tight text-ivory sm:text-4xl">
                {g.beforeOffer.title}
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ivory/75">{g.beforeOffer.copy}</p>
            </div>
            <div className="lg:col-span-3 lg:text-right">
              <a href="#start-here" className="btn-gold">
                {g.beforeOffer.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
