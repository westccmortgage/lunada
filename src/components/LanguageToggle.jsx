import { translations } from '../data/translations.js'

/**
 * Clean EN | 中文 language toggle.
 */
export default function LanguageToggle({ lang, setLang, className = '' }) {
  const base =
    'px-2.5 py-1 text-sm tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm'
  const active = 'text-navy font-medium'
  const inactive = 'text-navy/45 hover:text-navy'

  return (
    <div className={`inline-flex items-center ${className}`} role="group" aria-label="Language">
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`${base} ${lang === 'en' ? active : inactive}`}
      >
        {translations.en.langLabel}
      </button>
      <span className="text-navy/25" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        onClick={() => setLang('zh')}
        aria-pressed={lang === 'zh'}
        className={`${base} ${lang === 'zh' ? active : inactive}`}
      >
        {translations.zh.langLabel}
      </button>
    </div>
  )
}
