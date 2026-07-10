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
    { key: 'paths', href: '/#paths' },
    { key: 'estimate', href: '/#estimate' },
    { key: 'about', href: '/#about' },
    { key: 'guides', href: '/jumbo-loans' },
    { key: 'areas', href: '/lunada-bay-mortgage' },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-navy/10 bg-ivory/95 backdrop-blur'
          : 'border-transparent bg-ivory/80 backdrop-blur-sm'
      }`}
    >
      <div className="flex w-full items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        {/* Brand — studio wordmark */}
        <a href="/#top" className="group flex items-baseline gap-3 leading-none">
          <span className="font-display text-lg font-semibold uppercase tracking-[0.08em] text-navy sm:text-xl">
            Lunada&nbsp;Bay
          </span>
          <span className="hidden h-3 w-px bg-navy/25 sm:block" aria-hidden="true" />
          <span className="hidden text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-gold-muted sm:block">
            Mortgage
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 pl-6 xl:gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="whitespace-nowrap text-[0.72rem] font-medium uppercase tracking-[0.14em] text-navy/60 transition-colors hover:text-navy"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <LanguageToggle lang={lang} setLang={setLang} />
          <a href="/#contact" className="hidden btn-primary whitespace-nowrap sm:inline-flex !px-5 !py-2.5 !text-[0.8rem]">
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
          <div className="flex w-full flex-col px-5 py-3 sm:px-8">
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
