/**
 * Sharp, disciplined section divider — a full-width hairline with a small
 * centered gold node. Private-banking rhythm between sections.
 */
export default function Divider() {
  return (
    <div className="section-shell" aria-hidden="true">
      <div className="relative flex items-center py-1">
        <div className="h-px w-full bg-navy/10" />
        <div className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-gold/70" />
      </div>
    </div>
  )
}
