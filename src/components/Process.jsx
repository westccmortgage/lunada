import SectionHead from './SectionHead.jsx'

export default function Process({ t }) {
  const p = t.process
  return (
    <section id="process" className="scroll-mt-20 bg-ivory py-16 sm:py-24">
      <div className="section-shell">
        <SectionHead no="12" eyebrow={p.eyebrow} title={p.title} intro={p.intro} />

        {/* Swiss grid — oversized numerals over ruled columns */}
        <ol className="mt-12 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {p.steps.map((step, i) => (
            <li key={i} className="border-t border-navy/15 pt-6">
              <span className="sec-index block text-5xl leading-none" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-5 font-display text-xl font-medium tracking-tight text-navy sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-navy/60">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
