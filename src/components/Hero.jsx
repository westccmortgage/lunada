/**
 * Editorial hero — ivory field, oversized display type, coastal contour art.
 * Coordinates are Lunada Bay's public geography, used as a design element.
 */
function ContourArt() {
  // Hand-drawn topographic contours — an abstract nod to the Palos Verdes bluffs
  const contours = [
    'M420 40 C300 80 260 180 300 280 C340 380 300 500 380 600 C440 680 560 700 640 660',
    'M460 20 C340 70 300 180 340 290 C380 400 340 520 420 620 C480 700 600 720 680 680',
    'M500 0 C380 60 340 180 380 300 C420 420 380 540 460 640 C520 720 640 740 720 700',
    'M380 70 C270 110 230 190 265 275 C300 360 265 480 335 570 C395 650 505 670 580 635',
    'M340 100 C240 140 205 200 235 270 C265 340 235 450 295 535 C350 610 450 630 520 600',
    'M300 130 C215 168 180 212 205 268 C230 324 208 420 258 495 C305 565 395 585 460 560',
  ]
  return (
    <svg
      viewBox="0 0 760 760"
      fill="none"
      aria-hidden="true"
      className="drift absolute -right-24 top-1/2 hidden h-[130%] -translate-y-1/2 lg:block"
    >
      {contours.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="#b08d4f"
          strokeWidth="1"
          opacity={0.38 - i * 0.05}
        />
      ))}
      <circle cx="340" cy="270" r="3" fill="#b08d4f" opacity="0.7" />
      <text x="356" y="264" fill="#9a7c46" opacity="0.75" fontSize="10" letterSpacing="2.5" fontFamily="Inter, sans-serif">
        LUNADA BAY
      </text>
      <text x="356" y="280" fill="#9a7c46" opacity="0.5" fontSize="9" letterSpacing="1.5" fontFamily="Inter, sans-serif">
        33.7761° N — 118.4184° W
      </text>
    </svg>
  )
}

export default function Hero({ t }) {
  const lines = t.hero.headlineLines || [[{ text: t.hero.headline }]]

  return (
    <section id="top" className="relative overflow-hidden bg-ivory">
      <ContourArt />

      <div className="section-shell relative flex min-h-[94vh] flex-col justify-between pb-10 pt-32 sm:pt-36">
        {/* Meta bar */}
        <div className="rise-in flex items-center justify-between border-b border-navy/10 pb-5">
          <span className="meta-label">{t.hero.eyebrow}</span>
          <span className="meta-label hidden sm:block" aria-hidden="true">
            33.7761° N — 118.4184° W
          </span>
          <span className="meta-label hidden md:block">Palos Verdes · California</span>
        </div>

        {/* Headline */}
        <div className="rise-in max-w-5xl py-14" style={{ animationDelay: '0.08s' }}>
          <h1 className="title-hero">
            {lines.map((line, i) => (
              <span key={i} className="block">
                {line.map((seg, j) =>
                  seg.accent ? (
                    <em key={j} className="not-italic text-gold-muted">
                      {seg.text}
                    </em>
                  ) : (
                    <span key={j}>{seg.text}</span>
                  ),
                )}
              </span>
            ))}
          </h1>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-6 lg:col-span-5">
              <p className="border-l border-gold/60 pl-5 text-lg leading-relaxed text-navy/65">
                {t.hero.subhead}
              </p>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center md:col-span-6 lg:col-span-7 lg:justify-end">
              <a href="#contact" className="btn-primary">
                {t.hero.primaryCta}
              </a>
              <a href="#strategy" className="link-editorial">
                {t.hero.secondaryCta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Base bar */}
        <div
          className="rise-in flex items-end justify-between gap-8 border-t border-navy/10 pt-5"
          style={{ animationDelay: '0.16s' }}
        >
          <p className="max-w-xl text-sm leading-relaxed text-navy/50">{t.hero.trustLine}</p>
          <a
            href="#start-here"
            className="group hidden items-center gap-3 whitespace-nowrap sm:flex"
            aria-label={t.hero.scrollCue}
          >
            <span className="meta-label transition-colors group-hover:text-gold-muted">
              {t.hero.scrollCue}
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/20 text-navy/60 transition-all duration-300 group-hover:border-gold group-hover:text-gold-muted">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
