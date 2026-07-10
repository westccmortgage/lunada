import { useMemo, useState } from 'react'
import SectionHead from './SectionHead.jsx'
import { useWizardPrefill } from '../context/WizardPrefillContext.jsx'

const usd0 = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})
const fmt = (n) => usd0.format(Math.max(0, Math.round(n || 0)))

// Small labelled numeric input with a $ or % adornment
function NumField({ label, value, onChange, prefix, suffix, step = 1, min = 0 }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-navy/80">{label}</span>
      <div className="flex items-center rounded-sm border border-sand-deep bg-white focus-within:border-gold focus-within:ring-1 focus-within:ring-gold">
        {prefix && <span className="pl-3.5 text-sm text-navy/45">{prefix}</span>}
        <input
          type="number"
          inputMode="decimal"
          min={min}
          step={step}
          value={value}
          onChange={(e) => onChange(e.target.value === '' ? '' : Number(e.target.value))}
          className="w-full bg-transparent px-3 py-3 text-[0.95rem] text-navy focus:outline-none"
        />
        {suffix && <span className="pr-3.5 text-sm text-navy/45">{suffix}</span>}
      </div>
    </label>
  )
}

function Row({ label, value, strong }) {
  return (
    <div
      className={`flex items-baseline justify-between gap-4 py-2.5 ${
        strong ? 'border-t border-navy/15 pt-3' : 'border-b border-navy/10 last:border-0'
      }`}
    >
      <span className={strong ? 'font-medium text-navy' : 'text-sm text-navy/60'}>{label}</span>
      <span
        className={
          strong ? 'font-display text-lg font-semibold tracking-tight text-navy' : 'text-sm font-medium text-navy'
        }
      >
        {value}
      </span>
    </div>
  )
}

function Explain({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-sand-deep/60">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
      >
        <span className="font-medium text-navy">{q}</span>
        <span className={`text-gold transition-transform duration-300 ${open ? 'rotate-45' : ''}`} aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="text-[0.92rem] leading-relaxed text-navy/65">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function EstimateCalculator({ t, lang }) {
  const cx = t.calculator
  const { setPrefill } = useWizardPrefill()
  const [showAssume, setShowAssume] = useState(false)

  // Inputs
  const [purpose, setPurpose] = useState('purchase') // 'purchase' | 'refinance'
  const [price, setPrice] = useState(2000000)
  const [downPct, setDownPct] = useState(20)
  const [refiLoan, setRefiLoan] = useState(1400000)
  const [rate, setRate] = useState(6.5)
  const [term, setTerm] = useState(30)

  // Assumptions
  const [taxRate, setTaxRate] = useState(1.1)
  const [insurance, setInsurance] = useState(6000)
  const [hoa, setHoa] = useState(0)
  const [lenderPct, setLenderPct] = useState(1.0)
  const [titlePct, setTitlePct] = useState(0.6)
  const [otherFees, setOtherFees] = useState(1750)
  const [reserveMonths, setReserveMonths] = useState(2)

  const r = useMemo(() => {
    const base = Number(price) || 0
    const down = purpose === 'purchase' ? (base * (Number(downPct) || 0)) / 100 : 0
    const loan = purpose === 'purchase' ? base - down : Number(refiLoan) || 0
    const n = (Number(term) || 30) * 12
    const c = (Number(rate) || 0) / 100 / 12
    const pi = c > 0 ? (loan * c * Math.pow(1 + c, n)) / (Math.pow(1 + c, n) - 1) : loan / n
    const monthlyTax = (base * (Number(taxRate) || 0)) / 100 / 12
    const monthlyIns = (Number(insurance) || 0) / 12
    const monthlyHoa = Number(hoa) || 0
    const totalMonthly = pi + monthlyTax + monthlyIns + monthlyHoa

    const lenderFee = (loan * (Number(lenderPct) || 0)) / 100
    const titleEscrow = (base * (Number(titlePct) || 0)) / 100
    const prepaids = (Number(insurance) || 0) + monthlyTax * 3 // ~1yr insurance + 3mo tax impound
    const closing = lenderFee + titleEscrow + prepaids + (Number(otherFees) || 0)
    const cashToClose = down + closing
    const reserves = totalMonthly * (Number(reserveMonths) || 0)

    return { base, down, loan, pi, monthlyTax, monthlyIns, monthlyHoa, totalMonthly, lenderFee, titleEscrow, prepaids, closing, cashToClose, reserves }
  }, [purpose, price, downPct, refiLoan, rate, term, taxRate, insurance, hoa, lenderPct, titlePct, otherFees, reserveMonths])

  const requestReview = () => {
    const purposeLabel = purpose === 'purchase' ? cx.purpose.purchase : cx.purpose.refinance
    const parts =
      purpose === 'purchase'
        ? `${cx.fields.price} ${fmt(r.base)}, ${cx.fields.down} ${downPct}% (${fmt(r.down)}), ${cx.fields.loanAmount} ${fmt(r.loan)}`
        : `${cx.fields.value} ${fmt(r.base)}, ${cx.fields.loanAmount} ${fmt(r.loan)}`
    const message =
      `${cx.summaryPrefix} — ${purposeLabel}. ${parts}, ${cx.fields.rate} ${rate}%, ${term}${cx.fields.years}. ` +
      `${cx.monthly.total}: ${fmt(r.totalMonthly)}. ` +
      (purpose === 'purchase' ? `${cx.cash.total}: ${fmt(r.cashToClose)}.` : `${cx.cash.closingTitle}: ${fmt(r.closing)}.`)

    setPrefill({
      purposeIdx: purpose === 'purchase' ? 0 : 1,
      incomeIdx: -1,
      langIdx: -1,
      location: '',
      price: fmt(r.base),
      loan: fmt(r.loan),
      message,
    })
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const isPurchase = purpose === 'purchase'

  return (
    <section id="estimate" className="scroll-mt-20 bg-sand-soft py-20 sm:py-28">
      <div className="section-shell">
        <SectionHead no="07" eyebrow={cx.eyebrow} title={cx.title} intro={cx.intro} />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Inputs */}
          <div className="lg:col-span-5">
            <div className="rounded-sm border border-sand-deep/70 bg-white p-6 sm:p-8">
              {/* Purpose toggle */}
              <div className="inline-flex rounded-sm border border-sand-deep p-1">
                {['purchase', 'refinance'].map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPurpose(p)}
                    className={`rounded-[2px] px-5 py-2 text-sm transition-colors ${
                      purpose === p ? 'bg-navy text-ivory' : 'text-navy/70 hover:text-navy'
                    }`}
                  >
                    {p === 'purchase' ? cx.purpose.purchase : cx.purpose.refinance}
                  </button>
                ))}
              </div>

              <div className="mt-6 space-y-5">
                <NumField
                  label={isPurchase ? cx.fields.price : cx.fields.value}
                  value={price}
                  onChange={setPrice}
                  prefix="$"
                  step={10000}
                />

                {isPurchase ? (
                  <div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-medium text-navy/80">{cx.fields.down}</span>
                      <span className="text-sm text-navy/60">
                        {downPct}% · {fmt(r.down)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="50"
                      step="1"
                      value={downPct}
                      onChange={(e) => setDownPct(Number(e.target.value))}
                      className="mt-3 w-full accent-navy"
                    />
                  </div>
                ) : (
                  <NumField label={cx.fields.loanAmount} value={refiLoan} onChange={setRefiLoan} prefix="$" step={10000} />
                )}

                <div className="grid grid-cols-2 gap-4">
                  <NumField label={cx.fields.rate} value={rate} onChange={setRate} suffix="%" step={0.125} />
                  <div>
                    <span className="mb-1.5 block text-sm font-medium text-navy/80">{cx.fields.term}</span>
                    <div className="inline-flex w-full rounded-sm border border-sand-deep p-1">
                      {[30, 15].map((yr) => (
                        <button
                          key={yr}
                          type="button"
                          onClick={() => setTerm(yr)}
                          className={`flex-1 rounded-[2px] px-2 py-2 text-sm transition-colors ${
                            term === yr ? 'bg-navy text-ivory' : 'text-navy/70 hover:text-navy'
                          }`}
                        >
                          {yr} {cx.fields.years}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-navy/45">{cx.fields.rateHelp}</p>

                {/* Assumptions */}
                <div className="border-t border-sand-deep/60 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAssume((v) => !v)}
                    aria-expanded={showAssume}
                    className="flex items-center gap-2 text-sm font-medium text-navy/70 hover:text-navy"
                  >
                    <span className={`text-gold transition-transform ${showAssume ? 'rotate-45' : ''}`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                      </svg>
                    </span>
                    {cx.assumptions.toggle}
                  </button>
                  {showAssume && (
                    <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <NumField label={cx.assumptions.taxRate} value={taxRate} onChange={setTaxRate} suffix="%" step={0.05} />
                      <NumField label={cx.assumptions.insurance} value={insurance} onChange={setInsurance} prefix="$" step={250} />
                      <NumField label={cx.assumptions.hoa} value={hoa} onChange={setHoa} prefix="$" step={25} />
                      <NumField label={cx.assumptions.reserves} value={reserveMonths} onChange={setReserveMonths} suffix="mo" step={1} />
                      <NumField label={cx.assumptions.lenderFee} value={lenderPct} onChange={setLenderPct} suffix="%" step={0.125} />
                      <NumField label={cx.assumptions.titleEscrow} value={titlePct} onChange={setTitlePct} suffix="%" step={0.05} />
                      <NumField label={cx.assumptions.other} value={otherFees} onChange={setOtherFees} prefix="$" step={100} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Monthly */}
              <div className="rounded-sm border border-sand-deep/70 bg-white p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold-muted">{cx.monthly.title}</p>
                <p className="mt-3 font-display text-4xl font-semibold tracking-tight text-navy">
                  {fmt(r.totalMonthly)}
                </p>
                <div className="mt-5">
                  <Row label={cx.monthly.pi} value={fmt(r.pi)} />
                  <Row label={cx.monthly.tax} value={fmt(r.monthlyTax)} />
                  <Row label={cx.monthly.insurance} value={fmt(r.monthlyIns)} />
                  {r.monthlyHoa > 0 && <Row label={cx.monthly.hoa} value={fmt(r.monthlyHoa)} />}
                  <Row label={cx.monthly.total} value={fmt(r.totalMonthly)} strong />
                </div>
              </div>

              {/* Cash to close */}
              <div className="rounded-sm border border-navy/15 bg-navy p-6 text-ivory sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold-soft">
                  {isPurchase ? cx.cash.title : cx.cash.closingTitle}
                </p>
                <p className="mt-3 font-display text-4xl font-semibold tracking-tight text-ivory">
                  {fmt(isPurchase ? r.cashToClose : r.closing)}
                </p>
                <div className="mt-5">
                  {isPurchase && (
                    <div className="flex items-baseline justify-between gap-4 border-b border-ivory/10 py-2.5">
                      <span className="text-sm text-ivory/70">{cx.cash.down}</span>
                      <span className="text-sm font-medium text-ivory">{fmt(r.down)}</span>
                    </div>
                  )}
                  {[
                    [cx.cash.lenderFee, r.lenderFee],
                    [cx.cash.titleEscrow, r.titleEscrow],
                    [cx.cash.prepaids, r.prepaids],
                    [cx.cash.other, Number(otherFees) || 0],
                  ].map(([label, val]) => (
                    <div key={label} className="flex items-baseline justify-between gap-4 border-b border-ivory/10 py-2.5">
                      <span className="text-sm text-ivory/70">{label}</span>
                      <span className="text-sm font-medium text-ivory">{fmt(val)}</span>
                    </div>
                  ))}
                  <div className="flex items-baseline justify-between gap-4 border-t border-ivory/25 pt-3">
                    <span className="font-medium text-ivory">
                      {isPurchase ? cx.cash.total : cx.cash.closingTitle}
                    </span>
                    <span className="font-display text-lg font-semibold tracking-tight text-gold-soft">
                      {fmt(isPurchase ? r.cashToClose : r.closing)}
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-ivory/55">
                  {cx.cash.reservesNote.replace('{v}', fmt(r.reserves))}
                </p>
              </div>
            </div>

            {/* Key note */}
            {isPurchase && (
              <div className="mt-6 rounded-sm border-l-2 border-gold bg-white px-6 py-4">
                <p className="text-[0.95rem] leading-relaxed text-navy/75">
                  {cx.cash.keyNote.replace('{v}', fmt(r.closing))}
                </p>
              </div>
            )}
            {!isPurchase && (
              <div className="mt-6 rounded-sm border-l-2 border-gold bg-white px-6 py-4">
                <p className="text-[0.95rem] leading-relaxed text-navy/75">{cx.refiNote}</p>
              </div>
            )}

            <div className="mt-6">
              <button type="button" onClick={requestReview} className="btn-primary">
                {cx.cta}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="ml-2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Explanations — two-column accordion under a full-width heading */}
        <div className="mt-12">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-navy">{cx.explainTitle}</h3>
          <div className="mt-6 grid grid-cols-1 gap-x-12 border-t border-sand-deep/60 md:grid-cols-2">
            {cx.explain.map((e, i) => (
              <Explain key={i} q={e.q} a={e.a} />
            ))}
          </div>
        </div>

        <p className="mt-12 max-w-4xl text-xs leading-relaxed text-navy/45">{cx.disclaimer}</p>
      </div>
    </section>
  )
}
