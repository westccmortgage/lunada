export default function BilingualGuidance({ t, lang, setLang }) {
  const b = t.bilingual
  return (
    <section id="bilingual" className="scroll-mt-20 bg-navy-deep py-16 text-ivory sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow-rule justify-center text-gold-soft">
            <span className="h-px w-6 bg-gold/60" />
            {b.eyebrow}
            <span className="h-px w-6 bg-gold/60" />
          </p>
          <h2 className="mt-5 font-display text-3xl font-medium tracking-tight text-ivory sm:text-4xl">
            {b.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ivory/70">{b.copy}</p>

          {/* Language switch — the toggle lives in the header too; repeated here as a service cue */}
          <div className="mt-8 inline-flex items-center gap-1 rounded-sm border border-ivory/20 p-1">
            <button
              type="button"
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              className={`rounded-[2px] px-5 py-2 text-sm transition-colors ${
                lang === 'en' ? 'bg-ivory text-navy' : 'text-ivory/70 hover:text-ivory'
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLang('zh')}
              aria-pressed={lang === 'zh'}
              className={`rounded-[2px] px-5 py-2 text-sm transition-colors ${
                lang === 'zh' ? 'bg-ivory text-navy' : 'text-ivory/70 hover:text-ivory'
              }`}
            >
              中文
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
