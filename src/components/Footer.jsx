import { Link } from 'react-router-dom'
import { localPages } from '../data/localPages.js'
import { educationPages } from '../data/educationPages.js'
import { withLang } from '../lib/href.js'

// Florida pages are not listed under Service Areas; the Miami / Orlando city pages stay linked under Guides.
const FLORIDA_STATE_SLUG = 'florida-foreign-national-mortgage'
const CITY_GUIDE_SLUGS = ['miami-mortgage', 'orlando-mortgage']
const linkTap = 'inline-flex min-h-[40px] items-center'

const areaLabel = (page, lang) => (lang === 'zh' ? page.cityZh : page.city).replace(/^the /, '')

export default function Footer({ t, config, lang = 'en' }) {
  const f = t.footer
  const relatedLinks = config.links.map((link) =>
    link.href === 'https://wcci.online' || link.label === 'wcci.online'
      ? { ...link, label: 'WWCCM.ai', href: 'https://wwccm.ai' }
      : link,
  )

  const areaPages = localPages.filter((p) => p.slug !== FLORIDA_STATE_SLUG && !CITY_GUIDE_SLUGS.includes(p.slug))
  const cityGuidePages = localPages.filter((p) => CITY_GUIDE_SLUGS.includes(p.slug))

  return (
    <footer className="overflow-hidden bg-navy-deep text-ivory">
      <div className="section-shell py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand + tagline */}
          <div className="lg:col-span-4">
            <div className="text-xl font-semibold uppercase tracking-[0.08em] text-ivory">Lunada Bay</div>
            <div className="mt-0.5 text-[0.6875rem] font-medium uppercase tracking-widest text-gold-soft">
              Mortgage
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/55">{f.tagline}</p>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="text-xs font-medium uppercase tracking-widest text-ivory/40">
              {f.contactTitle}
            </p>
            <ul className="mt-4 text-sm text-ivory/70">
              <li className="flex min-h-[40px] items-center">
                {f.office}:
                <a href={`tel:${config.contact.officePhone}`} className={`${linkTap} ml-1.5 hover:text-gold-soft`}>
                  {config.contact.officePhone}
                </a>
              </li>
              <li className="flex min-h-[40px] items-center">
                {f.direct}:
                <a href={`tel:${config.contact.directPhone}`} className={`${linkTap} ml-1.5 hover:text-gold-soft`}>
                  {config.contact.directPhone}
                </a>
              </li>
              <li className="flex min-h-[40px] items-center">
                {f.email}:
                <a href={`mailto:${config.contact.email}`} className={`${linkTap} ml-1.5 hover:text-gold-soft`}>
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
            <ul className="mt-4 text-sm text-ivory/70">
              {relatedLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className={`${linkTap} break-all hover:text-gold-soft`}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Licensing — two distinct entities, NMLS numbers kept separate */}
          <div className="lg:col-span-3">
            <p className="text-xs font-medium uppercase tracking-widest text-ivory/40">
              {f.licensingTitle}
            </p>
            <div className="mt-5 space-y-1">
              <p className="text-sm text-ivory/75">{config.company.name}</p>
              <p className="text-[0.82rem] text-ivory/55">
                CA DRE Corporation License #{config.company.dreCorporationLicense}
              </p>
              <p className="text-[0.82rem] text-ivory/55">NMLS #{config.company.nmls}</p>
              <p className="text-[0.82rem] text-ivory/55">
                {f.licensedIn} {config.company.statesLicensed}
              </p>
            </div>
            <div className="mt-4 space-y-1">
              <p className="text-sm text-ivory/75">{config.founder.name}</p>
              <p className="text-[0.82rem] text-ivory/55">{config.founder.title}</p>
              <p className="text-[0.82rem] text-ivory/55">
                CA DRE Broker License #{config.founder.dreBrokerLicense}
              </p>
              <p className="text-[0.82rem] text-ivory/55">NMLS #{config.founder.nmls}</p>
            </div>
          </div>
        </div>

        {/* Guides — loan-education pages */}
        <div className="mt-14 border-t border-ivory/10 pt-8">
          <p className="text-xs font-medium uppercase tracking-widest text-ivory/40">
            {f.guidesTitle}
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-7">
            {educationPages.map((p) => (
              <li key={p.slug}>
                <Link
                  to={withLang(p.path, lang)}
                  className={`${linkTap} text-[0.82rem] text-ivory/55 transition-colors hover:text-gold-soft`}
                >
                  {p[lang].h1}
                </Link>
              </li>
            ))}
            {cityGuidePages.map((p) => (
              <li key={p.slug}>
                <Link
                  to={withLang(p.path, lang)}
                  className={`${linkTap} text-[0.82rem] text-ivory/55 transition-colors hover:text-gold-soft`}
                >
                  {areaLabel(p, lang)}
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
          <ul className="mt-3 flex flex-wrap gap-x-7">
            {areaPages.map((p) => (
              <li key={p.slug}>
                <Link
                  to={withLang(p.path, lang)}
                  className={`${linkTap} text-[0.82rem] text-ivory/55 transition-colors hover:text-gold-soft`}
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
          <ul className="mt-5 flex flex-wrap gap-x-7">
            <li>
              <Link to={withLang('/privacy', lang)} className={`${linkTap} text-[0.82rem] text-ivory/65 transition-colors hover:text-gold-soft`}>
                {f.privacy}
              </Link>
            </li>
            <li>
              <Link to={withLang('/terms', lang)} className={`${linkTap} text-[0.82rem] text-ivory/65 transition-colors hover:text-gold-soft`}>
                {f.terms}
              </Link>
            </li>
          </ul>
          <p className="mt-3 text-[0.78rem] text-ivory/50">
            © {config.brandName}. {f.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
