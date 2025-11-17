import type { Diagnostic } from 'dpe-audit'
import { Enveloppe, Chauffage, Ecs, Ventilation } from 'dpe-audit'
import { v4 as uuidv4 } from 'uuid'
import data from './gestes.json'
import type { TypePoste } from './postes'

export const getGestes = (): Geste[] => data as Geste[]

export interface Geste {
  titre: string
  description: string
  poste: TypePoste
  type: string
  scope: Scope
  data: object
}

export enum Scope {
  murs = 'murs',
  planchers_bas = 'planchers_bas',
  planchers_hauts = 'planchers_hauts',
  baies = 'baies',
  portes = 'portes',
  ventilation = 'ventilation',
  chauffage = 'chauffage',
  ecs = 'ecs',
  refroidissement = 'refroidissement',
  production = 'production'
}

export interface GesteMur extends Geste {
  scope: Scope.murs
  data: Partial<Enveloppe.Mur.IMur> & { description: string }
}

export interface GestePlancherBas extends Geste {
  scope: Scope.planchers_bas
  data: Partial<Enveloppe.PlancherBas.IPlancherBas> & { description: string }
}

export interface GestePlancherHaut extends Geste {
  scope: Scope.planchers_hauts
  data: Partial<Enveloppe.PlancherHaut.IPlancherHaut> & { description: string }
}

export interface GesteBaie extends Geste {
  scope: Scope.baies
  data: Partial<Enveloppe.Baie.IBaie> & { description: string }
}

export interface GestePorte extends Geste {
  scope: Scope.portes
  data: Partial<Enveloppe.Porte.IPorte> & { description: string }
}

export interface GesteChauffage extends Geste {
  scope: Scope.chauffage
  data: Partial<Chauffage.Generateur.IGenerateur> & { description: string }
}

export interface GesteEcs extends Geste {
  scope: Scope.ecs
  data: Partial<Ecs.Generateur.IGenerateur> & { description: string }
}

export interface GesteVentilation extends Geste {
  scope: Scope.ventilation
  data: {
    description: string
    type: Ventilation.Generateur.TypeGenerateur
    type_vmc: Ventilation.Generateur.TypeVmc | null
    generateur_collectif: boolean
    presence_echangeur_thermique: boolean | null
    annee_installation: number | null
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
  apply(
    diagnostic: Diagnostic.IDiagnostic,
    geste: GesteDiscriminated
  ): Diagnostic.IDiagnostic
}

export class MurRule implements Rule {
  apply (
    diagnostic: Diagnostic.IDiagnostic,
    geste: GesteDiscriminated
  ): Diagnostic.IDiagnostic {
    if (geste.scope !== Scope.murs) {
      return diagnostic
    }

    for (let index = 0; index < diagnostic.enveloppe.murs.length; index++) {
      diagnostic.enveloppe.murs[index] = {
        ...diagnostic.enveloppe.murs[index],
        ...geste.data
      }
    }
    return diagnostic
  }
}

export class PlancherBasRule implements Rule {
  apply (
    diagnostic: Diagnostic.IDiagnostic,
    geste: GesteDiscriminated
  ): Diagnostic.IDiagnostic {
    if (geste.scope !== Scope.planchers_bas) {
      return diagnostic
    }

    for (
      let index = 0;
      index < diagnostic.enveloppe.planchers_bas.length;
      index++
    ) {
      diagnostic.enveloppe.planchers_bas[index] = {
        ...diagnostic.enveloppe.planchers_bas[index],
        ...geste.data
      }
    }
    return diagnostic
  }
}

export class PlancherHautRule implements Rule {
  apply (
    diagnostic: Diagnostic.IDiagnostic,
    geste: GesteDiscriminated
  ): Diagnostic.IDiagnostic {
    if (geste.scope !== Scope.planchers_hauts) {
      return diagnostic
    }

    for (
      let index = 0;
      index < diagnostic.enveloppe.planchers_hauts.length;
      index++
    ) {
      diagnostic.enveloppe.planchers_hauts[index] = {
        ...diagnostic.enveloppe.planchers_hauts[index],
        ...geste.data
      }
    }
    return diagnostic
  }
}

export class BaieRule implements Rule {
  apply (
    diagnostic: Diagnostic.IDiagnostic,
    geste: GesteDiscriminated
  ): Diagnostic.IDiagnostic {
    if (geste.scope !== Scope.baies) {
      return diagnostic
    }

    for (let index = 0; index < diagnostic.enveloppe.baies.length; index++) {
      diagnostic.enveloppe.baies[index] = {
        ...diagnostic.enveloppe.baies[index],
        ...geste.data
      }
    }
    return diagnostic
  }
}

export class PorteRule implements Rule {
  apply (
    diagnostic: Diagnostic.IDiagnostic,
    geste: GesteDiscriminated
  ): Diagnostic.IDiagnostic {
    if (geste.scope !== Scope.portes) {
      return diagnostic
    }

    for (let index = 0; index < diagnostic.enveloppe.portes.length; index++) {
      diagnostic.enveloppe.portes[index] = {
        ...diagnostic.enveloppe.portes[index],
        ...geste.data
      }
    }
    return diagnostic
  }
}

export class VentilationRule implements Rule {
  apply (
    diagnostic: Diagnostic.IDiagnostic,
    geste: GesteDiscriminated
  ): Diagnostic.IDiagnostic {
    if (geste.scope !== Scope.ventilation) {
      return diagnostic
    }
    const id = uuidv4()

    if (0 === diagnostic.ventilation.generateurs.length) {
      diagnostic.ventilation.generateurs.push({
        ...{ id },
        ...geste.data
      })

      for (
        let index = 0;
        index < diagnostic.ventilation.installations.length;
        index++
      ) {
        diagnostic.ventilation.installations[index].generateur_id = id
        diagnostic.ventilation.installations[index].type =
          Ventilation.Installation.TypeVentilation.ventilation_mecanique
      }
    }
    for (
      let index = 0;
      index < diagnostic.ventilation.installations.length;
      index++
    ) {
      diagnostic.ventilation.installations[index].generateur_id = id
      diagnostic.ventilation.installations[index].type =
        Ventilation.Installation.TypeVentilation.ventilation_mecanique
    }

    return diagnostic
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
  diagnostic: Diagnostic.IDiagnostic,
  gestes: GesteDiscriminated[]
): Diagnostic.IDiagnostic => {
  let data = structuredClone(diagnostic)

  gestes.forEach(geste => {
    rules.forEach(rule => {
      data = rule.apply(data, geste)
    })
  })

  return data
}
