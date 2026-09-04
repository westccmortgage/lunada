const ADS_ID = 'AW-18417657219'
const LEAD_DESTINATION = 'AW-18417657219/LiA7CPWd4eocEIPLnM5E'
const ATTR_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'gbraid',
  'wbraid',
]
const PREFIX = 'lunada_attr_'

function safeGet(key) {
  try {
    return window.localStorage.getItem(key) || ''
  } catch {
    return ''
  }
}

function safeSet(key, value) {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    // Storage may be unavailable; tracking still works for the current page.
  }
}

function leadId() {
  return `lunada_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`
}

export function captureAttribution() {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  ATTR_KEYS.forEach((key) => {
    const value = params.get(key)
    if (value) safeSet(`${PREFIX}${key}`, value)
  })
  if (!safeGet(`${PREFIX}landing_page`)) {
    safeSet(`${PREFIX}landing_page`, window.location.href)
  }
}

export function appendAttribution(data) {
  if (typeof window === 'undefined') return
  captureAttribution()
  ATTR_KEYS.forEach((key) => {
    const value = safeGet(`${PREFIX}${key}`)
    if (value) data.set(key, value)
  })
  data.set('landing_page', safeGet(`${PREFIX}landing_page`) || window.location.href)
  data.set('submission_page', window.location.href)
}

export function initGoogleAds() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', ADS_ID)

  if (!document.querySelector('script[data-lunada-google-ads]')) {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ADS_ID)}`
    script.setAttribute('data-lunada-google-ads', '')
    document.head.appendChild(script)
  }
}

export function fireLeadConversion(formName = 'private-mortgage-review') {
  if (typeof window === 'undefined') return
  initGoogleAds()
  const id = leadId()
  window.dataLayer.push({
    event: 'lunada_lead_submit',
    form_name: formName,
    lead_event_id: id,
    page_location: window.location.href,
  })
  window.gtag('event', 'conversion', {
    send_to: LEAD_DESTINATION,
    value: 1.0,
    currency: 'USD',
    transaction_id: id,
  })
}

if (typeof window !== 'undefined') {
  captureAttribution()
  initGoogleAds()
}
