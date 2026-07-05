import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider, useLang } from './context/LanguageContext.jsx'
import { siteConfig } from './data/translations.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import LocalPage from './pages/LocalPage.jsx'

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
          {/* Local SEO pages — LocalPage validates the slug and redirects home if unknown */}
          <Route path="/:slug" element={<LocalPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer t={t} config={siteConfig} />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Shell />
      </BrowserRouter>
    </LanguageProvider>
  )
}
