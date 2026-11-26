import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../data/translations.js'
import { useWizardPrefill } from '../context/WizardPrefillContext.jsx'
import { useLang } from '../context/LanguageContext.jsx'
import { withLang } from '../lib/href.js'

function Field({ label, required, hint, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-navy/80">
        {label}
        {required && (
          <span className="ml-1 text-gold-muted" aria-hidden="true">
            *
          </span>
        )}
      </span>
      {children}
      {hint && <span className="mt-1.5 block text-xs leading-snug text-navy/55">{hint}</span>}
    </label>
  )
}

// 16px text (text-base) keeps iOS Safari from zooming the page when a field is focused
const inputCls =
  'w-full rounded-sm border border-sand-deep bg-white px-4 py-3 text-base text-navy placeholder:text-navy/35 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors'

// US number with 10 digits (optional leading 1), or an international number that starts with "+" and has 10-15 digits.
// The same pattern is used by the browser (pattern attribute) and by the JS check below.
// Keep it free of numbers the host's spam filter drops (no "+" with 12+ digits, 11 digits not starting with 1).
export const PHONE_PATTERN = '\\+[^0-9]*([0-9][^0-9]*){10,15}|[^0-9+]*(1[^0-9]*)?([0-9][^0-9]*){10}'
const PHONE_RE = new RegExp(`^(?:${PHONE_PATTERN})$`)

const EMPTY = {
  name: '',
  phone: '',
  email: '',
  preferred_language: -1, // option INDEX (the option text differs per language)
  location: '',
  purchase_price: '',
  loan_amount: '',
  loan_purpose: -1,
  employment_type: -1,
  message: '',
}

export default function ContactForm({ t }) {
  const c = t.contact
  const { lang } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)
  const [vals, setVals] = useState(EMPTY)
  const { prefill } = useWizardPrefill()
  const phoneRef = useRef(null)
  const sendingRef = useRef(false)

  // Merge calculator / wizard answers into what the visitor already typed —
  // never remount the form, never overwrite name / phone / email.
  // keep what the visitor typed; replace only the calculator summary we added before
  const lastSummary = useRef('')
  const mergeMessage = (current, summary) => {
    if (!summary) return current
    let base = current || ''
    if (lastSummary.current && base.includes(lastSummary.current)) base = base.replace(lastSummary.current, '').trim()
    lastSummary.current = summary
    return base ? `${base}

${summary}` : summary
  }
  useEffect(() => {
    if (!prefill) return
    setVals((v) => ({
      ...v,
      loan_purpose: prefill.purposeIdx != null && prefill.purposeIdx >= 0 ? prefill.purposeIdx : v.loan_purpose,
      employment_type: prefill.incomeIdx != null && prefill.incomeIdx >= 0 ? prefill.incomeIdx : v.employment_type,
      preferred_language: prefill.langIdx != null && prefill.langIdx >= 0 ? prefill.langIdx : v.preferred_language,
      location: prefill.location || v.location,
      purchase_price: prefill.price || v.purchase_price,
      loan_amount: prefill.loan || v.loan_amount,
      message: mergeMessage(v.message, prefill.message),
    }))
  }, [prefill])

  const set = (key) => (e) => setVals((v) => ({ ...v, [key]: e.target.value }))
  const setIdx = (key, options) => (e) => setVals((v) => ({ ...v, [key]: options.indexOf(e.target.value) }))
  const selVal = (key, options) => (vals[key] >= 0 && options[vals[key]] ? options[vals[key]] : '')

  // Submits to Netlify Forms via AJAX (urlencoded POST to the current origin).
  // The form is registered with Netlify through the hidden static copy in
  // index.html (same field names). Outside Netlify (local dev) the POST fails and
  // the visitor sees an honest fallback with direct contact details.
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (sendingRef.current) return // one POST per submit, even on a double tap
    if (!PHONE_RE.test(vals.phone.trim())) {
      // Backup for browsers that skip native pattern validation
      phoneRef.current?.setCustomValidity(c.phoneHint)
      phoneRef.current?.reportValidity()
      return
    }
    sendingRef.current = true
    setError(false)
    setSending(true)
    try {
      const body = new URLSearchParams(new FormData(e.target)).toString()
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      sendingRef.current = false
      setSending(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-navy py-16 text-ivory sm:py-24">
      <div className="section-shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-baseline gap-4">
              <span className="sec-index text-lg text-gold-soft" aria-hidden="true">( 05 )</span>
              <span className="meta-label !text-ivory/50">{c.eyebrow}</span>
              <span className="h-px flex-1 bg-ivory/15" aria-hidden="true" />
            </div>
            <h2 className="title-xl mt-7 !text-ivory">{c.title}</h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/70">{c.intro}</p>
            {c.trustLine && (
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold-soft">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {c.trustLine}
              </p>
            )}
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-sm border border-ivory/12 bg-ivory p-5 text-navy min-[400px]:p-7 sm:p-9">
              {submitted ? (
                <div className="flex min-h-[20rem] flex-col items-center justify-center text-center" role="status">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="mt-6 max-w-md font-serif text-xl leading-relaxed text-navy">
                    {c.success}
                  </p>
                </div>
              ) : (
                <form
                  name="private-mortgage-review"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                >
                  {prefill && (
                    <p className="sm:col-span-2 rounded-sm border-l-2 border-gold bg-sand-soft/70 px-4 py-2.5 text-sm leading-relaxed text-navy/70">
                      {c.prefillNote}
                    </p>
                  )}
                  <p className="sm:col-span-2 -mb-2 text-xs text-navy/60">{c.requiredNote}</p>
                  {/* Netlify form plumbing */}
                  <input type="hidden" name="form-name" value="private-mortgage-review" />
                  {/* Language of the page the visitor applied from (follows the URL) */}
                  <input type="hidden" name="site_language" value={lang === 'zh' ? 'zh' : 'en'} readOnly />
                  <p className="hidden">
                    <label>
                      Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </p>

                  <div className="sm:col-span-1">
                    <Field label={c.fields.name} required>
                      <input
                        className={inputCls}
                        type="text"
                        name="name"
                        autoComplete="name"
                        required
                        value={vals.name}
                        onChange={set('name')}
                        placeholder={c.placeholders.name}
                      />
                    </Field>
                  </div>
                  <div className="sm:col-span-1">
                    <Field label={c.fields.phone} required hint={c.phoneHint}>
                      <input
                        ref={phoneRef}
                        className={inputCls}
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        name="phone"
                        required
                        pattern={PHONE_PATTERN}
                        title={c.phoneHint}
                        value={vals.phone}
                        onChange={(e) => {
                          e.target.setCustomValidity('')
                          set('phone')(e)
                        }}
                        placeholder={c.placeholders.phone}
                      />
                    </Field>
                  </div>
                  <div className="sm:col-span-1">
                    <Field label={c.fields.email} required>
                      <input
                        className={inputCls}
                        type="email"
                        name="email"
                        autoComplete="email"
                        inputMode="email"
                        required
                        value={vals.email}
                        onChange={set('email')}
                        placeholder={c.placeholders.email}
                      />
                    </Field>
                  </div>
                  <div className="sm:col-span-1">
                    <Field label={c.fields.preferredLanguage}>
                      <select
                        className={inputCls}
                        name="preferred_language"
                        value={selVal('preferred_language', c.options.preferredLanguage)}
                        onChange={setIdx('preferred_language', c.options.preferredLanguage)}
                      >
                        <option value="" disabled>
                          {c.options.select}
                        </option>
                        {c.options.preferredLanguage.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>
                  <div className="sm:col-span-1">
                    <Field label={c.fields.location}>
                      <input
                        className={inputCls}
                        type="text"
                        name="location"
                        autoComplete="off"
                        value={vals.location}
                        onChange={set('location')}
                        placeholder={c.placeholders.location}
                      />
                    </Field>
                  </div>
                  <div className="sm:col-span-1">
                    <Field label={c.fields.purchasePrice}>
                      <input
                        className={inputCls}
                        type="text"
                        inputMode="numeric"
                        autoComplete="off"
                        name="purchase_price"
                        value={vals.purchase_price}
                        onChange={set('purchase_price')}
                        placeholder={c.placeholders.purchasePrice}
                      />
                    </Field>
                  </div>
                  <div className="sm:col-span-1">
                    <Field label={c.fields.loanAmount}>
                      <input
                        className={inputCls}
                        type="text"
                        inputMode="numeric"
                        autoComplete="off"
                        name="loan_amount"
                        value={vals.loan_amount}
                        onChange={set('loan_amount')}
                        placeholder={c.placeholders.loanAmount}
                      />
                    </Field>
                  </div>
                  <div className="sm:col-span-1">
                    <Field label={c.fields.loanPurpose}>
                      <select
                        className={inputCls}
                        name="loan_purpose"
                        value={selVal('loan_purpose', c.options.loanPurpose)}
                        onChange={setIdx('loan_purpose', c.options.loanPurpose)}
                      >
                        <option value="" disabled>
                          {c.options.select}
                        </option>
                        {c.options.loanPurpose.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>
                  <div className="sm:col-span-2">
                    <Field label={c.fields.employmentType}>
                      <select
                        className={inputCls}
                        name="employment_type"
                        value={selVal('employment_type', c.options.employmentType)}
                        onChange={setIdx('employment_type', c.options.employmentType)}
                      >
                        <option value="" disabled>
                          {c.options.select}
                        </option>
                        {c.options.employmentType.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>
                  <div className="sm:col-span-2">
                    <Field label={c.fields.message}>
                      <textarea
                        className={`${inputCls} min-h-[7rem] resize-y`}
                        name="message"
                        rows={4}
                        value={vals.message}
                        onChange={set('message')}
                        placeholder={c.placeholders.message}
                      />
                    </Field>
                  </div>

                  {error && (
                    <div className="sm:col-span-2 rounded-sm border border-gold/50 bg-sand-soft/70 px-4 py-3 text-sm leading-relaxed text-navy/75" role="alert">
                      {c.error}{' '}
                      <a href={`tel:${siteConfig.contact.directPhone}`} className="font-medium text-navy underline decoration-gold/60 underline-offset-2">
                        {siteConfig.contact.directPhone}
                      </a>{' '}
                      ·{' '}
                      <a href={`mailto:${siteConfig.contact.email}`} className="font-medium text-navy underline decoration-gold/60 underline-offset-2">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  )}

                  <div className="sm:col-span-2 mt-1">
                    <button
                      type="submit"
                      disabled={sending}
                      className="btn-gold w-full sm:w-auto disabled:cursor-wait disabled:opacity-60"
                    >
                      {sending ? c.sending : c.submit}
                    </button>
                    <p className="mt-3 text-xs leading-relaxed text-navy/60">
                      {c.consent}{' '}
                      <Link
                        to={withLang('/privacy', lang)}
                        className="inline-flex min-h-[32px] items-center text-navy underline decoration-gold/60 underline-offset-2 hover:text-gold-muted"
                      >
                        {c.privacyLink}
                      </Link>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
