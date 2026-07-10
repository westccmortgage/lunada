/*
 * JSON-LD structured data builders.
 * All values derive from siteConfig so licensing/NMLS stay editable in one place.
 * NOTE: intentionally NO aggregateRating, reviews, or openingHours (per spec).
 */
import { siteConfig } from '../data/translations.js'

export const SITE_URL = `https://${siteConfig.domain}`

const SERVICE_AREAS = [
  'Lunada Bay',
  'Palos Verdes Estates',
  'Rancho Palos Verdes',
  'Rolling Hills',
  'Rolling Hills Estates',
  'Manhattan Beach',
  'Redondo Beach',
  'Torrance',
  'South Bay',
  'Los Angeles County',
]

/** Organization + FinancialService (combined) describing the business. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'FinancialService'],
    '@id': `${SITE_URL}/#organization`,
    name: siteConfig.brandName,
    legalName: siteConfig.company.name,
    url: SITE_URL,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.officePhone,
    description:
      'Local, licensed, bilingual mortgage guidance for buying, refinancing, and high-value home decisions in Lunada Bay, Palos Verdes, and coastal Los Angeles. Guidance in English and 中文.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Palos Verdes',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    areaServed: SERVICE_AREAS.map((name) => ({ '@type': 'City', name })),
    serviceType: [
      'Jumbo mortgage',
      'Jumbo refinance',
      'Non-QM mortgage',
      'Bank statement loans',
      'DSCR investment loans',
      'Cash-out refinance',
    ],
    // Company identifiers — company NMLS and corporate DRE license
    identifier: [
      { '@type': 'PropertyValue', propertyID: 'NMLS', value: siteConfig.company.nmls },
      { '@type': 'PropertyValue', propertyID: 'CA DRE Corporation License', value: siteConfig.company.dreCorporationLicense },
    ],
    founder: { '@id': `${SITE_URL}/#founder` },
    knowsLanguage: ['en', 'zh'],
  }
}

/** Person schema for the founder. */
export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#founder`,
    name: siteConfig.founder.name,
    jobTitle: 'Founder & Mortgage Advisor',
    worksFor: { '@id': `${SITE_URL}/#organization` },
    knowsLanguage: ['en', 'zh'],
    knowsAbout: [
      'Jumbo mortgage strategy',
      'Non-QM lending',
      'DSCR investment loans',
      'Bank statement loans',
      'Luxury residential development',
      'California real estate brokerage',
    ],
    identifier: [
      { '@type': 'PropertyValue', propertyID: 'CA DRE Broker License', value: siteConfig.founder.dreBrokerLicense },
      { '@type': 'PropertyValue', propertyID: 'NMLS', value: siteConfig.founder.nmls },
    ],
  }
}

/** WebSite schema. */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: siteConfig.brandName,
    inLanguage: ['en', 'zh'],
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
}

/** FAQPage schema from an array of {q, a}. */
export function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

/** BreadcrumbList schema from an array of {name, path}. */
export function breadcrumbSchema(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  }
}
