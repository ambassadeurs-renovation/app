import { Audit, Enveloppe, Ventilation } from 'dpe-audit'
import data from './gestes.json'

export const gestes = data as GesteDiscriminated[]

export interface Geste {
  titre: string
  description: string
  type: Type
  tags: string[]
  data: object
}

export interface GesteMur extends Geste {
  type: Type.murs
  data: Partial<Enveloppe.IMur>
}

export interface GestePlancherBas extends Geste {
  type: Type.planchers_bas
  data: Partial<Enveloppe.IPlancherBas>
}

export interface GestePlancherHaut extends Geste {
  type: Type.planchers_hauts
  data: Partial<Enveloppe.IPlancherHaut>
}

export interface GesteBaie extends Geste {
  type: Type.baies
  data: Partial<Enveloppe.IBaie>
}

export interface GestePorte extends Geste {
  type: Type.portes
  data: Partial<Enveloppe.IPorte>
}

export interface GesteVentilation extends Geste {
  type: Type.ventilation
  data: Partial<Ventilation.IVentilation>
}

export enum Type {
  murs = 'murs',
  planchers_bas = 'planchers_bas',
  planchers_hauts = 'planchers_hauts',
  baies = 'baies',
  portes = 'portes',
  ventilation = 'ventilation',
  chauffage = 'chauffage',
  ecs = 'ecs',
  refroidissement = 'refroidissement'
}

export const typeToString = (type: Type): string => {
  switch (type) {
    case Type.murs:
      return 'Murs'
    case Type.planchers_bas:
      return 'Planchers bas'
    case Type.planchers_hauts:
      return 'Planchers hauts'
    case Type.baies:
      return 'Baies'
    case Type.portes:
      return 'Portes'
    case Type.ventilation:
      return 'Ventilation'
    case Type.chauffage:
      return 'Chauffage'
    case Type.ecs:
      return 'ECS'
    case Type.refroidissement:
      return 'Refroidissement'
  }
}

export type GesteDiscriminated =
  | GesteMur
  | GestePlancherBas
  | GestePlancherHaut
  | GesteBaie
  | GestePorte
  | GesteVentilation

export interface Rule {
  apply(audit: Audit.Audit, geste: GesteDiscriminated): Audit.Audit
}

export class MurRule implements Rule {
  apply (audit: Audit.Audit, geste: GesteDiscriminated): Audit.Audit {
    if (geste.type !== Type.murs) {
      return audit
    }

    for (let index = 0; index < audit.enveloppe.murs.length; index++) {
      audit.enveloppe.murs[index] = {
        ...audit.enveloppe.murs[index],
        ...geste.data
      }
    }
    return audit
  }
}
export class PlancherBasRule implements Rule {
  apply (audit: Audit.Audit, geste: GesteDiscriminated): Audit.Audit {
    if (geste.type !== Type.planchers_bas) {
      return audit
    }

    for (let index = 0; index < audit.enveloppe.planchers_bas.length; index++) {
      audit.enveloppe.planchers_bas[index] = {
        ...audit.enveloppe.planchers_bas[index],
        ...geste.data
      }
    }
    return audit
  }
}

export class PlancherHautRule implements Rule {
  apply (audit: Audit.Audit, geste: GesteDiscriminated): Audit.Audit {
    if (geste.type !== Type.planchers_hauts) {
      return audit
    }

    for (
      let index = 0;
      index < audit.enveloppe.planchers_hauts.length;
      index++
    ) {
      audit.enveloppe.planchers_hauts[index] = {
        ...audit.enveloppe.planchers_hauts[index],
        ...geste.data
      }
    }
    return audit
  }
}

export class BaieRule implements Rule {
  apply (audit: Audit.Audit, geste: GesteDiscriminated): Audit.Audit {
    if (geste.type !== Type.baies) {
      return audit
    }

    for (let index = 0; index < audit.enveloppe.baies.length; index++) {
      audit.enveloppe.baies[index] = {
        ...audit.enveloppe.baies[index],
        ...geste.data
      }
    }
    return audit
  }
}

export class PorteRule implements Rule {
  apply (audit: Audit.Audit, geste: GesteDiscriminated): Audit.Audit {
    if (geste.type !== Type.portes) {
      return audit
    }

    for (let index = 0; index < audit.enveloppe.portes.length; index++) {
      audit.enveloppe.portes[index] = {
        ...audit.enveloppe.portes[index],
        ...geste.data
      }
    }
    return audit
  }
}

export class VentilationRule implements Rule {
  apply (audit: Audit.Audit, geste: GesteDiscriminated): Audit.Audit {
    if (geste.type !== Type.ventilation) {
      return audit
    }

    audit.ventilation = {
      ...audit.ventilation,
      ...geste.data
    }
    return audit
  }
}

export const rules = [
  new MurRule(),
  new PlancherBasRule(),
  new PlancherHautRule(),
  new BaieRule(),
  new PorteRule(),
  new VentilationRule()
]

export const apply = (
  audit: Audit.Audit,
  gestes: GesteDiscriminated[]
): Audit.Audit => {
  let data = structuredClone(audit)

  gestes.forEach(geste => {
    rules.forEach(rule => {
      data = rule.apply(data, geste)
    })
  })

  return data
}
