import { useLang } from '../context/LanguageContext.jsx'
import { siteConfig } from '../data/translations.js'
import { organizationSchema, personSchema, websiteSchema, faqSchema } from '../lib/schema.js'
import Seo from '../components/Seo.jsx'
import Hero from '../components/Hero.jsx'
import StartHere from '../components/StartHere.jsx'
import Divider from '../components/Divider.jsx'
import LocalAuthority from '../components/LocalAuthority.jsx'
import JumboStrategy from '../components/JumboStrategy.jsx'
import MortgageGuide from '../components/MortgageGuide.jsx'
import DocumentsNeeded from '../components/DocumentsNeeded.jsx'
import AboutFounder from '../components/AboutFounder.jsx'
import LocalMarkets from '../components/LocalMarkets.jsx'
import LoanPrograms from '../components/LoanPrograms.jsx'
import ClientProfiles from '../components/ClientProfiles.jsx'
import Process from '../components/Process.jsx'
import PrivateReviewModel from '../components/PrivateReviewModel.jsx'
import Insights from '../components/Insights.jsx'
import FAQ from '../components/FAQ.jsx'
import ContactForm from '../components/ContactForm.jsx'

export default function Home() {
  const { t, lang } = useLang()

  return (
    <>
      <Seo
        title="Lunada Bay Mortgage | Jumbo Loans for Palos Verdes & Coastal Los Angeles"
        description="Bilingual English and Chinese jumbo mortgage guidance for luxury homebuyers, investors, business owners, and self-employed borrowers in Lunada Bay, Palos Verdes, South Bay, and coastal Los Angeles."
        keywords="Lunada Bay mortgage, Palos Verdes jumbo loans, Chinese mortgage broker Los Angeles, jumbo mortgage South Bay, luxury home financing Los Angeles, Palos Verdes mortgage advisor, West Coast Capital Mortgage, Anatoliy Kanevsky, 大额房贷, 洛杉矶房贷, 华人房贷顾问, 帕洛斯弗迪斯房贷"
        path="/"
        jsonLd={[
          organizationSchema(),
          personSchema(),
          websiteSchema(),
          faqSchema(t.faq.items),
        ]}
      />

      <Hero t={t} />

      {/* Local positioning — slow editorial marquee */}
      <section className="overflow-hidden border-y border-navy/10 bg-navy-deep py-5" aria-label={t.localPositioning}>
        <div className="marquee-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              <span className="mx-8 text-[0.95rem] font-medium tracking-wide text-ivory/90">{t.localPositioning}</span>
              {t.markets.items.map((m, i) => (
                <span key={i} className="flex items-center">
                  <span className="mx-8 h-1.5 w-1.5 rotate-45 bg-gold/70" />
                  <span className="whitespace-nowrap text-sm uppercase tracking-[0.2em] text-ivory/50">
                    {m.name}
                  </span>
                </span>
              ))}
              <span className="mx-8 h-1.5 w-1.5 rotate-45 bg-gold/70" />
            </div>
          ))}
        </div>
        <span className="sr-only">{t.localPositioning}</span>
      </section>

      <StartHere t={t} />
      <Divider />
      <LocalAuthority t={t} />
      <JumboStrategy t={t} />
      <MortgageGuide t={t} />
      <DocumentsNeeded t={t} />
      <Divider />
      <AboutFounder t={t} config={siteConfig} />
      <LocalMarkets t={t} />
      <LoanPrograms t={t} />
      <ClientProfiles t={t} />
      <Process t={t} />
      <PrivateReviewModel t={t} />
      <Insights t={t} lang={lang} />
      <FAQ t={t} />
      <ContactForm t={t} />
    </>
  )
}
