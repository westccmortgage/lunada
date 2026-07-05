import { useState } from 'react'
import SectionHead from './SectionHead.jsx'

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-sand-deep/60">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
      >
        <span className="font-display text-lg font-medium tracking-tight text-navy sm:text-xl">{q}</span>
        <span
          className={`mt-1 flex-shrink-0 text-gold transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-3xl text-[0.95rem] leading-relaxed text-navy/65">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ({ t }) {
  const f = t.faq
  return (
    <section id="faq" className="scroll-mt-20 bg-sand-soft py-32 sm:py-44">
      <div className="section-shell">
        <SectionHead no="13" eyebrow={f.eyebrow} title={f.title} />

        <div className="mt-12 border-t border-sand-deep/60">
          {f.items.map((item, i) => (
            <Item key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
