/**
 * Language-preserving internal href.
 * When the active language is Chinese, prefix internal links with /zh so a
 * visitor browsing in 中文 stays in the Chinese layer.
 *
 *   withLang('/jumbo-loans', 'zh')  -> '/zh/jumbo-loans'
 *   withLang('/', 'zh')             -> '/zh'
 *   withLang('/#start-here', 'zh')  -> '/zh#start-here'
 *   withLang('/jumbo-loans', 'en')  -> '/jumbo-loans'
 */
export function withLang(href, lang) {
  if (lang !== 'zh' || !href || href.startsWith('/zh')) return href
  if (href.startsWith('/#')) return `/zh${href.slice(1)}` // '/#x' -> '/zh#x'
  if (href === '/') return '/zh'
  if (href.startsWith('/')) return `/zh${href}`
  return href
}
