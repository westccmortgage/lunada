import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider, useLang } from './context/LanguageContext.jsx'
import { siteConfig } from './data/translations.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import LocalPage from './pages/LocalPage.jsx'

function Shell() {
  const { t, lang, setLang } = useLang()

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
