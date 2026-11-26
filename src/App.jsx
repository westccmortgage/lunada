import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider, useLang } from './context/LanguageContext.jsx'
import { WizardPrefillProvider } from './context/WizardPrefillContext.jsx'
import { siteConfig } from './data/translations.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollManager from './components/ScrollManager.jsx'
import Home from './pages/Home.jsx'
import SlugPage from './pages/SlugPage.jsx'
import LegalPage from './pages/LegalPage.jsx'
import NotFound from './pages/NotFound.jsx'

/**
 * Subtle scroll-reveal for sections below the fold.
 * Classes are applied by JS only, so content stays visible without it.
 * Respects prefers-reduced-motion.
 */
function useSectionReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.06 },
    )

    document.querySelectorAll('main section').forEach((el) => {
      // Only sections that start below the fold — no flash on first paint
      if (el.getBoundingClientRect().top > window.innerHeight * 0.9) {
        el.classList.add('will-reveal')
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [pathname])
}

function Shell() {
  const { t, lang, setLang } = useLang()
  useSectionReveal()

  return (
    <div className="min-h-screen bg-ivory">
      <ScrollManager />
      <Header t={t} lang={lang} setLang={setLang} />
      <main>
        <Routes>
          {/* English = every path without a /zh prefix; Chinese = /zh and /zh/* (language follows the URL) */}
          <Route path="/" element={<Home />} />
          <Route path="/zh" element={<Home />} />
          <Route path="/privacy" element={<LegalPage kind="privacy" />} />
          <Route path="/terms" element={<LegalPage kind="terms" />} />
          <Route path="/zh/privacy" element={<LegalPage kind="privacy" />} />
          <Route path="/zh/terms" element={<LegalPage kind="terms" />} />
          {/* Local area + loan-education pages; SlugPage renders NotFound for unknown slugs */}
          <Route path="/zh/:slug" element={<SlugPage />} />
          <Route path="/:slug" element={<SlugPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer t={t} config={siteConfig} lang={lang} />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <WizardPrefillProvider>
          <Shell />
        </WizardPrefillProvider>
      </LanguageProvider>
    </BrowserRouter>
  )
}
