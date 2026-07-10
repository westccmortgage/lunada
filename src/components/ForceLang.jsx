import { useEffect } from 'react'
import { useLang } from '../context/LanguageContext.jsx'

/**
 * Forces a language on mount — used by /zh* routes so a Chinese URL renders
 * in Chinese on load. The header toggle still lets the visitor switch freely;
 * Chinese is a language layer over the same content, not a separate site.
 */
export default function ForceLang({ lang = 'zh', children }) {
  const { setLang } = useLang()
  useEffect(() => {
    setLang(lang)
  }, [lang, setLang])
  return children
}
