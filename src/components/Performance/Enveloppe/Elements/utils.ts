import { Enveloppe } from 'dpe-audit'

export const isolationToString = (value: Enveloppe.Paroi.Isolation) => {
  if (value.etat === Enveloppe.Paroi.EtatIsolation.non_isole) {
    return 'Non isolé'
  }
  if (value.etat === null) {
    return 'Isolation inconnue'
  }
  let text = Enveloppe.Paroi.typeIsolationToString(value.type)

  if (value.epaisseur) {
    text += ` - ${value.epaisseur} mm`
  }
  if (value.resistance_thermique) {
    text += ` - R = ${value.resistance_thermique} m²·K/W`
  }
  return text
}
