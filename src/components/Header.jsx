import { useEffect, useState } from 'react'
import LanguageToggle from './LanguageToggle.jsx'

export default function Header({ t, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { key: 'start', href: '/#start-here' },
    { key: 'strategy', href: '/#strategy' },
    { key: 'guide', href: '/#guide' },
    { key: 'about', href: '/#about' },
    { key: 'markets', href: '/#markets' },
    { key: 'programs', href: '/#programs' },
    { key: 'process', href: '/#process' },
    { key: 'faq', href: '/#faq' },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ivory/95 backdrop-blur border-b border-sand-deep/50 shadow-[0_1px_20px_-12px_rgba(15,32,53,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="section-shell flex items-center justify-between py-4">
        {/* Brand */}
        <a href="/#top" className="group flex flex-col leading-none">
          <span className="font-serif text-xl tracking-wide text-navy sm:text-2xl">
            Lunada Bay
          </span>
          <span className="mt-0.5 text-[0.62rem] font-medium uppercase tracking-widest text-gold-muted">
            Mortgage
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm text-navy/70 transition-colors hover:text-navy"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <LanguageToggle lang={lang} setLang={setLang} />
          <a href="/#contact" className="hidden btn-primary sm:inline-flex !px-5 !py-2.5 !text-[0.8rem]">
            {t.nav.cta}
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden -mr-1 flex h-9 w-9 items-center justify-center text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="lg:hidden border-t border-sand-deep/50 bg-ivory/98 backdrop-blur">
          <div className="section-shell flex flex-col py-3">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-sand-deep/30 py-3 text-sm text-navy/80 last:border-0"
              >
                {t.nav[item.key]}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-4 w-full"
            >
              {t.nav.cta}
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
