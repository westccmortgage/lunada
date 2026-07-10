import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider, useLang } from './context/LanguageContext.jsx'
import { WizardPrefillProvider } from './context/WizardPrefillContext.jsx'
import { siteConfig } from './data/translations.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ForceLang from './components/ForceLang.jsx'
import Home from './pages/Home.jsx'
import SlugPage from './pages/SlugPage.jsx'

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
      <Header t={t} lang={lang} setLang={setLang} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Chinese language layer — same content, forced to 中文 on load */}
          <Route
            path="/zh"
            element={
              <ForceLang>
                <Home />
              </ForceLang>
            }
          />
          <Route
            path="/zh/:slug"
            element={
              <ForceLang>
                <SlugPage />
              </ForceLang>
            }
          />
          {/* Local area + loan-education pages; SlugPage resolves or redirects home */}
          <Route path="/:slug" element={<SlugPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer t={t} config={siteConfig} lang={lang} />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <WizardPrefillProvider>
        <BrowserRouter>
          <Shell />
        </BrowserRouter>
      </WizardPrefillProvider>
    </LanguageProvider>
  )
}
