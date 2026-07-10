import { useRef, useState } from 'react'
import MortgageWizard from './MortgageWizard.jsx'

export default function StartHere({ t }) {
  const s = t.startHere
  const [open, setOpen] = useState(false)
  const wizardRef = useRef(null)

  const start = () => {
    setOpen(true)
    // Reveal, then scroll the wizard into comfortable view
    requestAnimationFrame(() => {
      wizardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })
  }

  return (
    <section id="start-here" className="scroll-mt-20 bg-ivory py-20 sm:py-28">
      <div className="section-shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-baseline gap-4">
              <span className="sec-index text-lg" aria-hidden="true">( 01 )</span>
              <span className="meta-label">{s.eyebrow}</span>
            </div>
            <h2 className="title-xl mt-7">{s.title}</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-navy/65">{s.copy}</p>
            {!open && (
              <button type="button" onClick={start} className="btn-primary mt-8">
                {s.cta}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="ml-2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
          </div>

          <div className="lg:col-span-7" ref={wizardRef}>
            {open ? (
              <MortgageWizard t={t} />
            ) : (
              // Full preview panel — balances the heading column and shows
              // exactly what the wizard will ask.
              <button
                type="button"
                onClick={start}
                className="group w-full rounded-sm border border-sand-deep bg-white p-8 text-left transition-all duration-300 hover:border-gold/60 hover:shadow-[0_24px_60px_-40px_rgba(15,32,53,0.55)] sm:p-9"
              >
                <div className="flex items-center gap-4 border-b border-sand-deep/60 pb-6">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold-muted transition-colors group-hover:border-gold group-hover:text-gold">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-display text-xl font-medium tracking-tight text-navy">{s.cta}</p>
                    <p className="mt-1 text-sm text-navy/50">{s.hint}</p>
                  </div>
                </div>

                <ol className="mt-6 space-y-3.5">
                  {t.wizard.steps.map((step, i) => (
                    <li key={step.key} className="flex items-baseline gap-4">
                      <span className="sec-index text-sm">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-[0.95rem] leading-snug text-navy/70">
                        {step.question.replace(/\?.*/, '?')}
                      </span>
                    </li>
                  ))}
                </ol>

                <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-navy transition-colors group-hover:text-gold-muted">
                  {s.cta}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
