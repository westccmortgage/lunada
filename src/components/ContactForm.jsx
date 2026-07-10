import { useState } from 'react'
import { siteConfig } from '../data/translations.js'
import { useWizardPrefill } from '../context/WizardPrefillContext.jsx'

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-navy/80">
        {label}
        {required && <span className="ml-1 text-gold">*</span>}
      </span>
      {children}
    </label>
  )
}

const inputCls =
  'w-full rounded-sm border border-sand-deep bg-white px-4 py-3 text-[0.95rem] text-navy placeholder:text-navy/35 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors'

export default function ContactForm({ t }) {
  const c = t.contact
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)
  const { prefill } = useWizardPrefill()

  // Map wizard answers to this form's option strings (index-based, so it
  // stays correct across EN/中文). Free-text answers pass through as-is.
  const pick = (arr, i) => (i != null && i >= 0 && arr[i] ? arr[i] : '')
  const pv = {
    loanPurpose: pick(c.options.loanPurpose, prefill?.purposeIdx),
    employmentType: pick(c.options.employmentType, prefill?.incomeIdx),
    preferredLanguage: pick(c.options.preferredLanguage, prefill?.langIdx),
    location: prefill?.location || '',
    price: prefill?.price || '',
    loan: prefill?.loan || '',
    message: prefill?.message || '',
  }
  // Remount the (uncontrolled) form whenever new prefill arrives so
  // defaultValue takes effect.
  const formKey = prefill ? `pf-${JSON.stringify(prefill)}` : 'blank'

  // Submits to Netlify Forms via AJAX (urlencoded POST to the current origin).
  // The form is registered with Netlify through the hidden static copy in
  // index.html. Outside Netlify (local dev) the POST fails and the visitor
  // sees an honest fallback with direct contact details — no lead is lost
  // silently.
  const handleSubmit = async (e) => {
    e.preventDefault()
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
      setSending(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-navy py-16 text-ivory sm:py-24">
      <div className="section-shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-baseline gap-4">
              <span className="sec-index text-lg text-gold-soft" aria-hidden="true">( 06 )</span>
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
            <div className="rounded-sm border border-ivory/12 bg-ivory p-7 text-navy sm:p-9">
              {submitted ? (
                <div className="flex min-h-[20rem] flex-col items-center justify-center text-center">
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
                  key={formKey}
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
                  {/* Netlify form plumbing */}
                  <input type="hidden" name="form-name" value="private-mortgage-review" />
                  {/* Language the visitor was browsing in when they applied */}
                  <input
                    type="hidden"
                    name="site_language"
                    value={typeof document !== 'undefined' ? document.documentElement.lang : 'en'}
                    readOnly
                  />
                  <p className="hidden">
                    <label>
                      Do not fill this out: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="sm:col-span-1">
                    <Field label={c.fields.name} required>
                      <input className={inputCls} type="text" name="name" required placeholder={c.placeholders.name} />
                    </Field>
                  </div>
                  <div className="sm:col-span-1">
                    <Field label={c.fields.phone} required>
                      <input className={inputCls} type="tel" name="phone" required placeholder={c.placeholders.phone} />
                    </Field>
                  </div>
                  <div className="sm:col-span-1">
                    <Field label={c.fields.email} required>
                      <input className={inputCls} type="email" name="email" required placeholder={c.placeholders.email} />
                    </Field>
                  </div>
                  <div className="sm:col-span-1">
                    <Field label={c.fields.preferredLanguage}>
                      <select className={inputCls} name="preferred_language" defaultValue={pv.preferredLanguage}>
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
                      <input className={inputCls} type="text" name="location" defaultValue={pv.location} placeholder={c.placeholders.location} />
                    </Field>
                  </div>
                  <div className="sm:col-span-1">
                    <Field label={c.fields.purchasePrice}>
                      <input className={inputCls} type="text" name="purchase_price" defaultValue={pv.price} placeholder={c.placeholders.purchasePrice} />
                    </Field>
                  </div>
                  <div className="sm:col-span-1">
                    <Field label={c.fields.loanAmount}>
                      <input className={inputCls} type="text" name="loan_amount" defaultValue={pv.loan} placeholder={c.placeholders.loanAmount} />
                    </Field>
                  </div>
                  <div className="sm:col-span-1">
                    <Field label={c.fields.loanPurpose}>
                      <select className={inputCls} name="loan_purpose" defaultValue={pv.loanPurpose}>
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
                      <select className={inputCls} name="employment_type" defaultValue={pv.employmentType}>
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
                        defaultValue={pv.message}
                        placeholder={c.placeholders.message}
                      />
                    </Field>
                  </div>

                  {error && (
                    <div className="sm:col-span-2 rounded-sm border border-gold/50 bg-sand-soft/70 px-4 py-3 text-sm leading-relaxed text-navy/75">
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
