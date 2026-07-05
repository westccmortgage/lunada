import { useState } from 'react'

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

  // Front-end only. Netlify Forms attributes are present so this works once
  // deployed to Netlify; locally it simply shows the success message.
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-navy py-24 text-ivory sm:py-28">
      <div className="section-shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow text-gold-soft">{c.eyebrow}</p>
            <div className="mt-4 mb-6 hairline bg-gold/70" />
            <h2 className="font-serif text-3xl leading-tight text-ivory sm:text-4xl">{c.title}</h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/70">{c.intro}</p>
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
                  name="private-mortgage-review"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                >
                  {/* Netlify form plumbing */}
                  <input type="hidden" name="form-name" value="private-mortgage-review" />
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
                      <select className={inputCls} name="preferred_language" defaultValue="">
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
                      <input className={inputCls} type="text" name="location" placeholder={c.placeholders.location} />
                    </Field>
                  </div>
                  <div className="sm:col-span-1">
                    <Field label={c.fields.purchasePrice}>
                      <input className={inputCls} type="text" name="purchase_price" placeholder={c.placeholders.purchasePrice} />
                    </Field>
                  </div>
                  <div className="sm:col-span-1">
                    <Field label={c.fields.loanAmount}>
                      <input className={inputCls} type="text" name="loan_amount" placeholder={c.placeholders.loanAmount} />
                    </Field>
                  </div>
                  <div className="sm:col-span-1">
                    <Field label={c.fields.loanPurpose}>
                      <select className={inputCls} name="loan_purpose" defaultValue="">
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
                      <select className={inputCls} name="employment_type" defaultValue="">
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
                        placeholder={c.placeholders.message}
                      />
                    </Field>
                  </div>

                  <div className="sm:col-span-2 mt-1">
                    <button type="submit" className="btn-gold w-full sm:w-auto">
                      {c.submit}
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
