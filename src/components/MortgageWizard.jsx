import { useState } from 'react'

/**
 * Guided, front-end-only mortgage-path wizard.
 * Compliance: produces only soft, general guidance — no approval, no rate,
 * no payment calculation. Ends by pointing to the private review form.
 */
export default function MortgageWizard({ t }) {
  const w = t.wizard
  const steps = w.steps
  const total = steps.length

  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [done, setDone] = useState(false)

  const current = steps[step]
  const value = answers[current?.key] ?? ''
  const canAdvance = current?.type === 'text' ? true : Boolean(value)

  const setAnswer = (key, val) => setAnswers((a) => ({ ...a, [key]: val }))

  const goNext = () => {
    if (step < total - 1) setStep((s) => s + 1)
    else setDone(true)
  }
  const goBack = () => setStep((s) => Math.max(0, s - 1))
  const restart = () => {
    setAnswers({})
    setStep(0)
    setDone(false)
  }

  const progress = done ? 100 : Math.round((step / total) * 100)

  return (
    <div className="overflow-hidden rounded-sm border border-sand-deep/70 bg-white shadow-[0_24px_60px_-40px_rgba(15,32,53,0.55)]">
      {/* Progress bar */}
      <div className="h-1 w-full bg-sand-deep/40">
        <div
          className="h-full bg-gold transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="p-7 sm:p-10">
        {!done ? (
          <div key={step} className="rise-in">
            <p className="eyebrow-rule">
              <span className="h-px w-6 bg-gold/60" />
              {w.stepLabel} {step + 1} {w.of} {total}
            </p>

            <h3 className="mt-5 max-w-xl font-display text-2xl font-medium tracking-tight leading-snug text-navy sm:text-[1.7rem]">
              {current.question}
            </h3>

            <div className="mt-7">
              {current.type === 'choice' ? (
                <div className="flex flex-wrap gap-3">
                  {current.options.map((opt) => {
                    const active = value === opt
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setAnswer(current.key, opt)}
                        className={`rounded-sm border px-5 py-3 text-sm transition-all duration-200 ${
                          active
                            ? 'border-navy bg-navy text-ivory'
                            : 'border-sand-deep bg-white text-navy/80 hover:border-gold hover:text-navy'
                        }`}
                      >
                        {opt}
                      </button>
                    )
                  })}
                </div>
              ) : (
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setAnswer(current.key, e.target.value)}
                  placeholder={current.placeholder}
                  className="w-full max-w-md rounded-sm border border-sand-deep bg-white px-4 py-3.5 text-[0.95rem] text-navy placeholder:text-navy/35 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              )}
            </div>

            <div className="mt-9 flex items-center justify-between">
              <button
                type="button"
                onClick={goBack}
                disabled={step === 0}
                className="text-sm text-navy/50 transition-colors hover:text-navy disabled:cursor-not-allowed disabled:opacity-0"
              >
                {w.back}
              </button>
              <button
                type="button"
                onClick={goNext}
                disabled={!canAdvance}
                className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
              >
                {step === total - 1 ? w.finish : w.next}
              </button>
            </div>
          </div>
        ) : (
          <div className="rise-in">
            <p className="eyebrow-rule">
              <span className="h-px w-6 bg-gold/60" />
              {w.result.eyebrow}
            </p>
            <h3 className="mt-5 max-w-2xl font-display text-2xl font-medium tracking-tight leading-snug text-navy sm:text-3xl">
              {w.result.title}
            </h3>
            <p className="mt-5 max-w-2xl leading-relaxed text-navy/65">{w.result.body}</p>

            {/* Answer summary */}
            <div className="mt-8 rounded-sm border border-sand-deep/70 bg-sand-soft/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-muted">
                {w.result.summaryTitle}
              </p>
              <dl className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                {steps.map((s) => (
                  <div key={s.key} className="flex justify-between gap-4 border-b border-sand-deep/40 pb-2 text-sm last:border-0">
                    <dt className="text-navy/55">{s.question.replace(/\?.*/, '?').slice(0, 42)}</dt>
                    <dd className="text-right font-medium text-navy">{answers[s.key] || '—'}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Next step */}
            <div className="mt-8 rounded-sm border border-navy/15 bg-navy p-6 text-ivory sm:flex sm:items-center sm:justify-between sm:gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold-soft">
                  {w.result.nextTitle}
                </p>
                <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-ivory/80">
                  {w.result.nextBody}
                </p>
              </div>
              <a href="#contact" className="btn-gold mt-5 whitespace-nowrap sm:mt-0">
                {w.result.nextCta}
              </a>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="max-w-lg text-xs leading-relaxed text-navy/45">{w.result.disclaimer}</p>
              <button
                type="button"
                onClick={restart}
                className="whitespace-nowrap text-sm text-navy/50 transition-colors hover:text-navy"
              >
                {w.restart}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
