import { Common } from 'dpe-audit'
import BoisIcon from '@icon/energie/bois.svg'
import ElectriciteIcon from '@icon/energie/electricite.svg'
import FioulIcon from '@icon/energie/fioul.svg'
import GazIcon from '@icon/energie/gaz-naturel.svg'
import GPLIcon from '@icon/energie/gpl.svg'
import CharbonIcon from '@icon/energie/charbon.svg'
import ReseauUrbainIcon from '@icon/energie/reseau-urbain.svg'
import ChauffageIcon from '@icon/usage/chauffage.svg'
import ECSIcon from '@icon/usage/ecs.svg'
import RefroidissementIcon from '@icon/usage/refroidissement.svg'
import EclairageIcon from '@icon/usage/eclairage.svg'
import AuxiliaireIcon from '@icon/usage/auxiliaire.svg'

export const getEnergieIcon = (energie: Common.Energie) => {
  switch (energie) {
    case Common.Energie.bois:
      return BoisIcon
    case Common.Energie.electricite:
      return ElectriciteIcon
    case Common.Energie.electricite_renouvelable:
      return ElectriciteIcon
    case Common.Energie.gaz_naturel:
      return GazIcon
    case Common.Energie.gpl:
      return GPLIcon
    case Common.Energie.fioul:
      return FioulIcon
    case Common.Energie.charbon:
      return CharbonIcon
    case Common.Energie.reseau_urbain:
      return ReseauUrbainIcon
  }
}

export const getUsageIcon = (usage: Common.Usage) => {
  switch (usage) {
    case Common.Usage.chauffage:
      return ChauffageIcon
    case Common.Usage.ecs:
      return ECSIcon
    case Common.Usage.refroidissement:
      return RefroidissementIcon
    case Common.Usage.eclairage:
      return EclairageIcon
    case Common.Usage.auxiliaire:
      return AuxiliaireIcon
  }
}
