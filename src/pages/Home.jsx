import { useLang } from '../context/LanguageContext.jsx'
import { siteConfig } from '../data/translations.js'
import { organizationSchema, personSchema, websiteSchema, faqSchema } from '../lib/schema.js'
import Seo from '../components/Seo.jsx'
import Hero from '../components/Hero.jsx'
import TrustBlock from '../components/TrustBlock.jsx'
import StartHere from '../components/StartHere.jsx'
import ThreePaths from '../components/ThreePaths.jsx'
import EstimateCalculator from '../components/EstimateCalculator.jsx'
import AboutFounder from '../components/AboutFounder.jsx'
import BilingualGuidance from '../components/BilingualGuidance.jsx'
import ContactForm from '../components/ContactForm.jsx'

/**
 * Homepage = trust + simple path. Detailed, card-heavy education lives on the
 * dedicated SEO pages (local + loan-education), linked from Three Paths and
 * the footer. This page stays short, calm, and human.
 */
export default function Home() {
  const { t, lang, setLang } = useLang()

  return (
    <>
      <Seo
        title="Lunada Bay Mortgage | Private Mortgage Strategy for Palos Verdes & Coastal LA"
        description="Local, licensed, personal mortgage guidance for buying, refinancing, and high-value home decisions in Lunada Bay, Palos Verdes, and coastal Los Angeles. English and 中文."
        keywords="Lunada Bay mortgage, Palos Verdes mortgage, jumbo loans Palos Verdes, private mortgage advisor, Anatoliy Kanevsky, West Coast Capital Mortgage, bilingual mortgage guidance, 帕洛斯弗迪斯房贷, 大额房贷, 洛杉矶房贷"
        path="/"
        jsonLd={[organizationSchema(), personSchema(), websiteSchema(), faqSchema(t.faq.items)]}
      />

      <Hero t={t} />
      <TrustBlock t={t} />
      <StartHere t={t} />
      <ThreePaths t={t} />
      <EstimateCalculator t={t} lang={lang} />
      <AboutFounder t={t} config={siteConfig} />
      <BilingualGuidance t={t} lang={lang} setLang={setLang} />
      <ContactForm t={t} />
    </>
  )
}
