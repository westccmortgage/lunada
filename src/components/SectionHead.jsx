/**
 * Editorial section header — studio-grade rhythm:
 * ( index ) MICRO-LABEL ————————————— rule
 * Oversized display title
 * Optional intro paragraph
 */
export default function SectionHead({ no, eyebrow, title, intro, dark = false, className = '' }) {
  return (
    <div className={className}>
      <div className="flex items-baseline gap-4">
        <span className={`sec-index text-lg ${dark ? 'text-gold-soft' : ''}`} aria-hidden="true">
          ( {no} )
        </span>
        <span className={`meta-label ${dark ? '!text-ivory/50' : ''}`}>{eyebrow}</span>
        <span className={`h-px flex-1 ${dark ? 'bg-ivory/15' : 'bg-navy/15'}`} aria-hidden="true" />
      </div>
      <h2 className={`title-xl mt-7 max-w-4xl ${dark ? '!text-ivory' : ''}`}>{title}</h2>
      {intro && (
        <p className={`mt-6 max-w-3xl text-lg leading-relaxed ${dark ? 'text-ivory/70' : 'text-navy/65'}`}>
          {intro}
        </p>
      )}
    </div>
  )
}
