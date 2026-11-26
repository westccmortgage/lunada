import { createContext, useCallback, useContext, useEffect, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { translations } from '../data/translations.js'

const LanguageContext = createContext(null)

/** /zh and /zh/* are Chinese; every other path is English. The URL is the only source of truth. */
export const isZhPathname = (pathname = '') => pathname === '/zh' || pathname.startsWith('/zh/')

/** Same page in the other language: /x <-> /zh/x, / <-> /zh */
export function switchPathLang(pathname, lang) {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  const base = isZhPathname(clean) ? clean.slice(3) || '/' : clean
  if (lang === 'zh') return base === '/' ? '/zh' : `/zh${base}`
  return base || '/'
}

export function LanguageProvider({ children }) {
  const { pathname, search, hash } = useLocation()
  const navigate = useNavigate()
  const lang = isZhPathname(pathname) ? 'zh' : 'en'

  const setLang = useCallback(
    (next) => {
      if (next === lang) return
      navigate(`${switchPathLang(pathname, next)}${search}${hash}`, { state: { langSwitch: true } })
    },
    [lang, pathname, search, hash, navigate],
  )

  // Reflect the active language on <html lang> for typography + accessibility
  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh' : 'en'
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: translations[lang] }), [lang, setLang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return ctx
}
