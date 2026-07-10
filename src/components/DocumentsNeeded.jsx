import { useState } from 'react'
import SectionHead from './SectionHead.jsx'

export default function DocumentsNeeded({ t }) {
  const d = t.documents
  const [active, setActive] = useState(0)
  const tab = d.tabs[active]

  return (
    <section id="documents" className="scroll-mt-20 bg-ivory py-20 sm:py-28">
      <div className="section-shell">
        <SectionHead no="06" eyebrow={d.eyebrow} title={d.title} intro={d.intro} />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Tab list */}
          <div className="lg:col-span-4">
            <div
              role="tablist"
              aria-label={d.title}
              className="flex flex-row flex-wrap gap-2 lg:flex-col lg:flex-nowrap"
            >
              {d.tabs.map((tb, i) => {
                const isActive = i === active
                return (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(i)}
                    className={`rounded-sm border px-5 py-3.5 text-left text-sm transition-all duration-200 lg:flex lg:items-center lg:justify-between ${
                      isActive
                        ? 'border-navy bg-navy text-ivory'
                        : 'border-sand-deep bg-white text-navy/75 hover:border-gold hover:text-navy'
                    }`}
                  >
                    <span className="font-medium">{tb.label}</span>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                      className={`hidden lg:block ${isActive ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Panel */}
          <div className="lg:col-span-8">
            <div
              role="tabpanel"
              key={active}
              className="rise-in rounded-sm border border-sand-deep/70 bg-white p-7 sm:p-9"
            >
              <h3 className="font-display text-2xl font-medium tracking-tight text-navy">{tab.label}</h3>
              <div className="mt-3 hairline" />
              <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {tab.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[0.95rem] leading-relaxed text-navy/75">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-sand-deep/60 pt-5 text-sm leading-relaxed text-navy/50">
                {d.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
