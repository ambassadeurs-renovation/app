import data from './postes.json'

export interface Poste {
  titre: string
  type: TypePoste
}

export enum TypePoste {
  isolation_murs = 'isolation-murs',
  isolation_planchers_bas = 'isolation-planchers-bas',
  isolation_planchers_hauts = 'isolation-planchers-hauts',
  remplacement_menuiseries = 'remplacement-menuiseries',
  protection_solaire = 'protection-solaire',
  chauffage = 'chauffage',
  eau_chaude_sanitaire = 'eau-chaude-sanitaire',
  ventilation = 'ventilation',
  refroidissement = 'refroidissement'
}

export const getPostes = (): Poste[] => data as Poste[]
