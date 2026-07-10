import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_URL } from '../lib/schema.js'

/**
 * Lightweight document-head manager (no external dependency).
 * Sets title, meta description/keywords, canonical, Open Graph tags, hreflang
 * alternates (en / zh / x-default), and JSON-LD. Everything it creates is
 * tagged with data-seo so it can be cleanly replaced on navigation.
 *
 * `path` is always the English base path (e.g. '/', '/jumbo-loans'). On a /zh
 * URL the canonical becomes the /zh version; alternates always point en→English
 * and zh→/zh so both language versions cross-reference each other.
 */
function upsertMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    el.setAttribute('data-seo', 'true')
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  if (!href) return
  let el = document.head.querySelector(`link[rel="${rel}"]:not([hreflang])`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    el.setAttribute('data-seo', 'true')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setAlternates(alts) {
  document.head.querySelectorAll('link[rel="alternate"][data-seo]').forEach((n) => n.remove())
  alts.forEach(({ hreflang, href }) => {
    const el = document.createElement('link')
    el.setAttribute('rel', 'alternate')
    el.setAttribute('hreflang', hreflang)
    el.setAttribute('href', href)
    el.setAttribute('data-seo', 'true')
    document.head.appendChild(el)
  })
}

export default function Seo({ title, description, keywords, path = '/', jsonLd = [] }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const isZh = pathname.startsWith('/zh')
    const enUrl = `${SITE_URL}${path}`
    const zhUrl = `${SITE_URL}${path === '/' ? '/zh' : `/zh${path}`}`
    const canonical = isZh ? zhUrl : enUrl

    if (title) document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'keywords', keywords)
    upsertLink('canonical', canonical)

    setAlternates([
      { hreflang: 'en', href: enUrl },
      { hreflang: 'zh', href: zhUrl },
      { hreflang: 'x-default', href: enUrl },
    ])

    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:locale', isZh ? 'zh_CN' : 'en_US')

    // Refresh JSON-LD blocks
    document.head.querySelectorAll('script[data-seo-jsonld]').forEach((n) => n.remove())
    const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd]
    blocks.filter(Boolean).forEach((obj) => {
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.setAttribute('data-seo-jsonld', 'true')
      s.text = JSON.stringify(obj)
      document.head.appendChild(s)
    })

    return () => {
      document.head.querySelectorAll('script[data-seo-jsonld]').forEach((n) => n.remove())
    }
  }, [title, description, keywords, path, jsonLd, pathname])

  return null
}
