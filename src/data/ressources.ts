import data from './ressources.json'

export interface Ressource {
  titre: string
  description: string
  url: string
  img: string
  tags: string[]
}

export const ressources = data as Ressource[]
