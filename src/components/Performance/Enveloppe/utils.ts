import { Enveloppe } from 'dpe-audit'
import IconBon from '@icon/ui/smiley-happy.svg'
import IconMoyen from '@icon/ui/smiley-neutral.svg'
import IconInsuffisant from '@icon/ui/smiley-sad.svg'

export const getPerformanceConfortEteIcon = (
  value: Enveloppe.PerformanceConfortEte
) => {
  switch (value) {
    case Enveloppe.PerformanceConfortEte.bon:
      return IconBon
    case Enveloppe.PerformanceConfortEte.moyen:
      return IconMoyen
    case Enveloppe.PerformanceConfortEte.insuffisant:
      return IconInsuffisant
  }
}
