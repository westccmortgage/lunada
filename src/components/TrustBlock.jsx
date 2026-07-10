export default function TrustBlock({ t }) {
  const b = t.trustBlock
  return (
    <section id="trust" className="scroll-mt-20 bg-ivory py-16 sm:py-24">
      <div className="section-shell">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-baseline gap-4">
              <span className="sec-index text-lg" aria-hidden="true">( 01 )</span>
              <span className="meta-label">{b.eyebrow}</span>
            </div>
            <h2 className="title-xl mt-7">{b.title}</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-navy/65">{b.copy}</p>
          </div>

          <div className="lg:col-span-7 lg:pt-4">
            <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-navy/15 bg-navy/15 sm:grid-cols-2">
              {b.points.map((point, i) => (
                <li key={i} className="flex items-start gap-4 bg-ivory p-6">
                  <span className="sec-index mt-0.5 text-sm" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[0.98rem] leading-relaxed text-navy/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
