import SectionHead from './SectionHead.jsx'

export default function ClientProfiles({ t }) {
  const c = t.clients
  return (
    <section id="clients" className="scroll-mt-20 bg-sand-soft py-16 sm:py-24">
      <div className="section-shell">
        <SectionHead no="11" eyebrow={c.eyebrow} title={c.title} intro={c.intro} />

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-navy/15 bg-navy/15 md:grid-cols-2">
          {c.items.map((item, i) => (
            <div key={i} className="group bg-sand-soft p-8 transition-colors duration-300 hover:bg-white sm:p-10">
              <span className="sec-index block text-4xl leading-none" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-navy">{item.title}</h3>
              <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-navy/60">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
