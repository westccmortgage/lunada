export default function AboutFounder({ t, config }) {
  const a = t.about
  return (
    <section id="about" className="scroll-mt-20 bg-navy py-24 text-ivory sm:py-28">
      <div className="section-shell">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left — narrative */}
          <div className="lg:col-span-7">
            <div className="flex items-baseline gap-4">
              <span className="sec-index text-lg text-gold-soft" aria-hidden="true">( 07 )</span>
              <span className="meta-label !text-ivory/50">{a.eyebrow}</span>
              <span className="h-px flex-1 bg-ivory/15" aria-hidden="true" />
            </div>
            <h2 className="title-xl mt-7 !text-ivory">{a.title}</h2>
            <p className="mt-7 text-lg leading-relaxed text-ivory/80">{a.lead}</p>
            <p className="mt-5 text-base leading-relaxed text-ivory/60">{a.body}</p>

            {/* Local, community-based positioning */}
            <div className="mt-8 border-l border-gold/50 pl-5">
              <p className="text-[0.98rem] italic leading-relaxed text-gold-soft/90">
                {t.localTrust}
              </p>
            </div>
          </div>

          {/* Right — credentials panel */}
          <div className="lg:col-span-5">
            <div className="rounded-sm border border-ivory/12 bg-navy-soft/40 p-8">
              {/* Monogram */}
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 font-serif text-lg text-gold-soft">
                  AK
                </div>
                <div>
                  <p className="font-serif text-xl text-ivory">{config.founderName}</p>
                  <p className="text-xs uppercase tracking-widest text-gold-soft/80">
                    Founder &amp; Mortgage Advisor
                  </p>
                </div>
              </div>

              <div className="my-7 h-px w-full bg-ivory/10" />

              <p className="text-xs font-medium uppercase tracking-widest text-ivory/40">
                {a.credentialsTitle}
              </p>
              <ul className="mt-5 space-y-3.5">
                {a.credentials.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[0.93rem] leading-relaxed text-ivory/75">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gold/80" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="my-7 h-px w-full bg-ivory/10" />

              <dl className="space-y-2 text-[0.82rem] text-ivory/55">
                <div className="flex justify-between gap-4">
                  <dt>CA DRE Broker</dt>
                  <dd className="text-ivory/75">#{config.broker.dreBrokerLicense}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>CA DRE Corp.</dt>
                  <dd className="text-ivory/75">#{config.broker.corporationDreLicense}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Company NMLS</dt>
                  <dd className="text-ivory/75">#{config.nmls.company.number}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>MLO NMLS</dt>
                  <dd className="text-ivory/75">#{config.nmls.individual.number}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
