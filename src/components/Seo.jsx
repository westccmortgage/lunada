import { useEffect } from 'react'
import { SITE_URL } from '../lib/schema.js'

/**
 * Lightweight document-head manager (no external dependency).
 * Sets title, meta description/keywords, canonical, Open Graph tags, and
 * injects one or more JSON-LD blocks. Everything it creates is tagged with
 * data-seo so it can be cleanly replaced on navigation.
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
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    el.setAttribute('data-seo', 'true')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function Seo({ title, description, keywords, path = '/', jsonLd = [] }) {
  useEffect(() => {
    const canonical = `${SITE_URL}${path}`

    if (title) document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'keywords', keywords)
    upsertLink('canonical', canonical)

    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:type', 'website')

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
  }, [title, description, keywords, path, jsonLd])

  return null
}
