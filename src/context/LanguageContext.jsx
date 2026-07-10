import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from '../data/translations.js'

const STORAGE_KEY = 'lbm-lang'
const LanguageContext = createContext(null)

// A /zh* URL is a Chinese entry point — it always wins over a saved preference,
// so a direct load renders Chinese immediately (good for SEO and for sharing).
const isZhPath = () => typeof window !== 'undefined' && window.location.pathname.startsWith('/zh')

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => (isZhPath() ? 'zh' : 'en'))

  // Restore a previously chosen language — unless the URL is a /zh route.
  useEffect(() => {
    if (isZhPath()) {
      setLang('zh')
      return
    }
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null
    if (saved === 'en' || saved === 'zh') setLang(saved)
  }, [])

  // Persist choice and reflect it on <html lang> for typography + accessibility
  useEffect(() => {
    if (typeof window !== 'undefined') window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang === 'zh' ? 'zh' : 'en'
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: translations[lang] }), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return ctx
}
