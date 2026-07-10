import { Link } from 'react-router-dom'
import { localPages } from '../data/localPages.js'
import { educationPages } from '../data/educationPages.js'

const NmlsLine = ({ label, number, verify, verifyNote }) => (
  <p className="text-[0.82rem] leading-relaxed text-ivory/55">
    {label} NMLS #{number}
    {verify && <span className="ml-1 text-gold-soft/70">— {verifyNote}</span>}
  </p>
)

const areaLabel = (page, lang) => (lang === 'zh' ? page.cityZh : page.city).replace(/^the /, '')

export default function Footer({ t, config, lang = 'en' }) {
  const f = t.footer
  return (
    <footer className="overflow-hidden bg-navy-deep text-ivory">
      <div className="section-shell py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand + tagline */}
          <div className="lg:col-span-4">
            <div className="text-xl font-semibold uppercase tracking-[0.08em] text-ivory">Lunada Bay</div>
            <div className="mt-0.5 text-[0.62rem] font-medium uppercase tracking-widest text-gold-soft">
              Mortgage
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/55">{f.tagline}</p>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="text-xs font-medium uppercase tracking-widest text-ivory/40">
              {f.contactTitle}
            </p>
            <ul className="mt-5 space-y-2 text-sm text-ivory/70">
              <li>
                {f.office}:{' '}
                <a href={`tel:${config.contact.officePhone}`} className="hover:text-gold-soft">
                  {config.contact.officePhone}
                </a>
              </li>
              <li>
                {f.direct}:{' '}
                <a href={`tel:${config.contact.directPhone}`} className="hover:text-gold-soft">
                  {config.contact.directPhone}
                </a>
              </li>
              <li>
                {f.email}:{' '}
                <a href={`mailto:${config.contact.email}`} className="hover:text-gold-soft">
                  {config.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Related links */}
          <div className="lg:col-span-2">
            <p className="text-xs font-medium uppercase tracking-widest text-ivory/40">
              {f.linksTitle}
            </p>
            <ul className="mt-5 space-y-2 text-sm text-ivory/70">
              {config.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="break-all hover:text-gold-soft">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Licensing */}
          <div className="lg:col-span-3">
            <p className="text-xs font-medium uppercase tracking-widest text-ivory/40">
              {f.licensingTitle}
            </p>
            <div className="mt-5 space-y-1.5">
              <p className="text-sm text-ivory/75">{config.company}</p>
              <p className="text-[0.82rem] text-ivory/55">{config.founderName}</p>
              <p className="text-[0.82rem] text-ivory/55">
                California Real Estate Broker DRE #{config.broker.dreBrokerLicense}
              </p>
              <p className="text-[0.82rem] text-ivory/55">
                CA DRE Corporation License #{config.broker.corporationDreLicense}
              </p>
              <div className="pt-2">
                <NmlsLine
                  label={config.company}
                  number={config.nmls.company.number}
                  verify={config.nmls.company.verifyBeforePublishing}
                  verifyNote={f.verifyNote}
                />
                <NmlsLine
                  label={config.founderName}
                  number={config.nmls.individual.number}
                  verify={config.nmls.individual.verifyBeforePublishing}
                  verifyNote={f.verifyNote}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Guides — loan-education pages */}
        <div className="mt-14 border-t border-ivory/10 pt-8">
          <p className="text-xs font-medium uppercase tracking-widest text-ivory/40">
            {f.guidesTitle}
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-7 gap-y-2.5">
            {educationPages.map((p) => (
              <li key={p.slug}>
                <Link
                  to={p.path}
                  className="text-[0.82rem] text-ivory/55 transition-colors hover:text-gold-soft"
                >
                  {p[lang].h1}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service areas — complete internal links to every local page */}
        <div className="mt-10 border-t border-ivory/10 pt-8">
          <p className="text-xs font-medium uppercase tracking-widest text-ivory/40">
            {f.areasTitle}
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-7 gap-y-2.5">
            {localPages.map((p) => (
              <li key={p.slug}>
                <Link
                  to={p.path}
                  className="text-[0.82rem] text-ivory/55 transition-colors hover:text-gold-soft"
                >
                  {areaLabel(p, lang)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Disclosure */}
        <div className="mt-14 border-t border-ivory/10 pt-8">
          <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gold-soft/80">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {f.equalHousing}
          </div>
          <p className="max-w-4xl text-[0.78rem] leading-relaxed text-ivory/45">{f.disclosure}</p>
          <p className="mt-6 text-[0.78rem] text-ivory/40">
            © {config.brandName}. {f.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
