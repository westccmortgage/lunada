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
    <section id="start-here" className="scroll-mt-20 bg-ivory py-32 sm:py-44">
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
              // Calm placeholder preview before starting
              <button
                type="button"
                onClick={start}
                className="group w-full rounded-sm border border-dashed border-sand-deep bg-white/60 p-10 text-left transition-colors hover:border-gold/60 hover:bg-white"
              >
                <div className="flex items-center gap-4">
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
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
