export default function Hero({ t }) {
  return (
    <section id="top" className="relative overflow-hidden bg-navy text-ivory">
      {/* Layered coastal gradient — evokes ocean at dusk without stock photos */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-soft" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-soft/60 to-transparent" />
        <div className="absolute -right-32 -top-24 h-[38rem] w-[38rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-[32rem] w-[32rem] rounded-full bg-sand/5 blur-3xl" />
        {/* Fine horizon line */}
        <div className="absolute inset-x-0 top-2/3 h-px bg-gold/15" />
      </div>

      <div className="section-shell relative flex min-h-[92vh] flex-col justify-center pt-28 pb-20">
        <div className="max-w-3xl rise-in">
          <p className="eyebrow text-gold-soft">{t.hero.eyebrow}</p>
          <div className="mt-5 mb-7 hairline bg-gold/70" />

          <h1 className="font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-ivory sm:text-5xl lg:text-[4rem]">
            {t.hero.headline}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ivory/75">
            {t.hero.subhead}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#contact" className="btn-gold">
              {t.hero.primaryCta}
            </a>
            <a
              href="#strategy"
              className="inline-flex items-center justify-center rounded-sm border border-ivory/25 px-7 py-3.5 text-sm font-medium tracking-wide text-ivory transition-all duration-300 hover:border-gold hover:text-gold-soft"
            >
              {t.hero.secondaryCta}
            </a>
          </div>

          <p className="mt-14 max-w-xl border-l border-gold/40 pl-4 text-sm leading-relaxed text-ivory/55">
            {t.hero.trustLine}
          </p>
        </div>
      </div>
    </section>
  )
}
