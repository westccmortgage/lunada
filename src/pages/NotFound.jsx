import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext.jsx'
import { withLang } from '../lib/href.js'
import Seo from '../components/Seo.jsx'

/** Unknown URL: a real "not found" page (noindex, no canonical) instead of a copy of the home page. */
export default function NotFound() {
  const { t, lang } = useLang()
  const n = t.notFound
  return (
    <>
      <Seo title={n.title} description={n.body} noindex />
      <div className="bg-ivory pb-24 pt-36 sm:pt-44">
        <div className="section-shell">
          <p className="eyebrow">404</p>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-medium tracking-tight text-navy sm:text-5xl">{n.heading}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy/70">{n.body}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link to={withLang('/', lang)} className="btn-primary">
              {n.home}
            </Link>
            <Link to={withLang('/jumbo-loans', lang)} className="btn-secondary">
              {n.guides}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
