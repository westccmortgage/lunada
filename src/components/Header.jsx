import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LanguageToggle from './LanguageToggle.jsx'
import { withLang } from '../lib/href.js'

const AI_REVIEW_URL = 'https://wwccm.ai'

export default function Header({ t, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { key: locationKey } = useLocation()
  const buttonRef = useRef(null)

  // Close the menu on every navigation (route, hash or language change)
  useEffect(() => {
    setMenuOpen(false)
  }, [locationKey])

  // While open: lock page scroll (on <html> only) and close on Escape
  useEffect(() => {
    if (!menuOpen) return undefined
    const html = document.documentElement
    const prevOverflow = html.style.overflow
    html.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      html.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const L = (href) => withLang(href, lang)
  const navItems = [
    { key: 'paths', href: L('/#paths') },
    { key: 'estimate', href: L('/#estimate') },
    { key: 'about', href: L('/#about') },
    { key: 'guides', href: L('/jumbo-loans') },
    { key: 'areas', href: L('/lunada-bay-mortgage') },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-navy/10 bg-ivory/95 backdrop-blur'
          : 'border-transparent bg-ivory/80 backdrop-blur-sm'
      }`}
    >
      <div className="flex w-full items-center justify-between gap-2 px-4 py-3 min-[360px]:px-5 min-[360px]:py-4 sm:px-8 lg:px-10">
        {/* Brand — studio wordmark over the licensed company name */}
        <Link to={L('/#top')} className="group flex min-w-0 flex-col leading-none">
          <span className="font-display text-lg font-semibold uppercase tracking-[0.08em] text-navy sm:text-xl">
            Lunada&nbsp;Bay
          </span>
          <span className="mt-1.5 text-[0.6875rem] font-semibold uppercase leading-tight tracking-[0.08em] text-gold-muted min-[400px]:tracking-[0.14em] sm:whitespace-nowrap sm:tracking-[0.22em]">
            West Coast Capital Mortgage
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 pl-6 xl:gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              to={item.href}
              className="whitespace-nowrap text-[0.72rem] font-medium uppercase tracking-[0.14em] text-navy/60 transition-colors hover:text-navy"
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-0.5 min-[360px]:gap-3 sm:gap-5">
          <LanguageToggle lang={lang} setLang={setLang} />
          <a
            href={AI_REVIEW_URL}
            target="_blank"
            rel="noopener"
            className="hidden whitespace-nowrap text-[0.72rem] font-medium uppercase tracking-[0.14em] text-navy/60 transition-colors hover:text-gold-muted lg:inline-flex"
          >
            {t.nav.reviewScenario}
          </a>
          <Link to={L('/#contact')} className="hidden btn-primary whitespace-nowrap sm:inline-flex !px-5 !py-2.5 !text-[0.8rem]">
            {t.nav.cta}
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            ref={buttonRef}
            className="lg:hidden -mr-2 flex h-11 w-11 items-center justify-center text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
            aria-label="Menu"
            aria-controls="mobile-nav"
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

      {/* Mobile nav — a tap anywhere outside (the dim layer below) closes it */}
      {menuOpen && (
        <>
          <div
            aria-hidden="true"
            data-menu-backdrop
            className="absolute inset-x-0 top-full h-screen bg-navy/25 lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
          <nav
            id="mobile-nav"
            className="relative max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t border-sand-deep/50 bg-ivory lg:hidden"
          >
            <div className="flex w-full flex-col px-5 py-3 sm:px-8">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className="flex min-h-[48px] items-center border-b border-sand-deep/30 text-sm text-navy/80 last:border-0"
                >
                  {t.nav[item.key]}
                </Link>
              ))}
              <a
                href={AI_REVIEW_URL}
                target="_blank"
                rel="noopener"
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[48px] items-center justify-between border-b border-sand-deep/30 text-sm text-navy/80"
              >
                <span>{t.nav.reviewScenario}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <Link to={L('/#contact')} className="btn-primary mb-1 mt-4 w-full">
                {t.nav.cta}
              </Link>
            </div>
          </nav>
        </>
      )}
    </header>
  )
}
