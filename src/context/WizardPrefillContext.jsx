import { createContext, useContext, useState } from 'react'

/**
 * Carries the wizard's answers over to the contact form so a visitor who
 * completed "Start Mortgage Path" never types the same details twice.
 *
 * Choice answers are stored as option INDICES (not strings) — the wizard and
 * form option arrays are parallel in both languages, so index mapping stays
 * correct even if the visitor switches EN/中文 between wizard and form.
 */
const WizardPrefillContext = createContext(null)

export function WizardPrefillProvider({ children }) {
  const [prefill, setPrefill] = useState(null)
  return (
    <WizardPrefillContext.Provider value={{ prefill, setPrefill }}>
      {children}
    </WizardPrefillContext.Provider>
  )
}

export function useWizardPrefill() {
  return useContext(WizardPrefillContext) ?? { prefill: null, setPrefill: () => {} }
}
