import { Common } from 'dpe-audit'
import EtiquetteClimat from '@svg/etiquette-climat/etiquette-climat.svg'
import EtiquetteClimatA from '@svg/etiquette-climat/etiquette-climat-a.svg'
import EtiquetteClimatB from '@svg/etiquette-climat/etiquette-climat-b.svg'
import EtiquetteClimatC from '@svg/etiquette-climat/etiquette-climat-c.svg'
import EtiquetteClimatD from '@svg/etiquette-climat/etiquette-climat-d.svg'
import EtiquetteClimatE from '@svg/etiquette-climat/etiquette-climat-e.svg'
import EtiquetteClimatF from '@svg/etiquette-climat/etiquette-climat-f.svg'
import EtiquetteClimatG from '@svg/etiquette-climat/etiquette-climat-g.svg'
import EtiquetteEnergie from '@svg/etiquette-energie/etiquette-energie.svg'
import EtiquetteEnergieA from '@svg/etiquette-energie/etiquette-energie-a.svg'
import EtiquetteEnergieB from '@svg/etiquette-energie/etiquette-energie-b.svg'
import EtiquetteEnergieC from '@svg/etiquette-energie/etiquette-energie-c.svg'
import EtiquetteEnergieD from '@svg/etiquette-energie/etiquette-energie-d.svg'
import EtiquetteEnergieE from '@svg/etiquette-energie/etiquette-energie-e.svg'
import EtiquetteEnergieF from '@svg/etiquette-energie/etiquette-energie-f.svg'
import EtiquetteEnergieG from '@svg/etiquette-energie/etiquette-energie-g.svg'
import ClasseClimatA from '@svg/classe-climat/classe-climat-a.svg'
import ClasseClimatB from '@svg/classe-climat/classe-climat-b.svg'
import ClasseClimatC from '@svg/classe-climat/classe-climat-c.svg'
import ClasseClimatD from '@svg/classe-climat/classe-climat-d.svg'
import ClasseClimatE from '@svg/classe-climat/classe-climat-e.svg'
import ClasseClimatF from '@svg/classe-climat/classe-climat-f.svg'
import ClasseClimatG from '@svg/classe-climat/classe-climat-g.svg'
import ClasseEnergieA from '@svg/classe-energie/classe-energie-a.svg'
import ClasseEnergieB from '@svg/classe-energie/classe-energie-b.svg'
import ClasseEnergieC from '@svg/classe-energie/classe-energie-c.svg'
import ClasseEnergieD from '@svg/classe-energie/classe-energie-d.svg'
import ClasseEnergieE from '@svg/classe-energie/classe-energie-e.svg'
import ClasseEnergieF from '@svg/classe-energie/classe-energie-f.svg'
import ClasseEnergieG from '@svg/classe-energie/classe-energie-g.svg'

export const getEtiquetteClimat = (value: Common.EtiquetteClimat | null) => {
  switch (value) {
    case Common.EtiquetteClimat.A:
      return EtiquetteClimatA
    case Common.EtiquetteClimat.B:
      return EtiquetteClimatB
    case Common.EtiquetteClimat.C:
      return EtiquetteClimatC
    case Common.EtiquetteClimat.D:
      return EtiquetteClimatD
    case Common.EtiquetteClimat.E:
      return EtiquetteClimatE
    case Common.EtiquetteClimat.F:
      return EtiquetteClimatF
    case Common.EtiquetteClimat.G:
      return EtiquetteClimatG
    default:
      return EtiquetteClimat
  }
}

export const getEtiquetteEnergie = (value: Common.EtiquetteEnergie | null) => {
  switch (value) {
    case Common.EtiquetteEnergie.A:
      return EtiquetteEnergieA
    case Common.EtiquetteEnergie.B:
      return EtiquetteEnergieB
    case Common.EtiquetteEnergie.C:
      return EtiquetteEnergieC
    case Common.EtiquetteEnergie.D:
      return EtiquetteEnergieD
    case Common.EtiquetteEnergie.E:
      return EtiquetteEnergieE
    case Common.EtiquetteEnergie.F:
      return EtiquetteEnergieF
    case Common.EtiquetteEnergie.G:
      return EtiquetteEnergieG
    default:
      return EtiquetteEnergie
  }
}

export const getClasseClimat = (value: Common.EtiquetteClimat) => {
  switch (value) {
    case Common.EtiquetteClimat.A:
      return ClasseClimatA
    case Common.EtiquetteClimat.B:
      return ClasseClimatB
    case Common.EtiquetteClimat.C:
      return ClasseClimatC
    case Common.EtiquetteClimat.D:
      return ClasseClimatD
    case Common.EtiquetteClimat.E:
      return ClasseClimatE
    case Common.EtiquetteClimat.F:
      return ClasseClimatF
    case Common.EtiquetteClimat.G:
      return ClasseClimatG
  }
}

export const getClasseEnergie = (value: Common.EtiquetteEnergie) => {
  switch (value) {
    case Common.EtiquetteEnergie.A:
      return ClasseEnergieA
    case Common.EtiquetteEnergie.B:
      return ClasseEnergieB
    case Common.EtiquetteEnergie.C:
      return ClasseEnergieC
    case Common.EtiquetteEnergie.D:
      return ClasseEnergieD
    case Common.EtiquetteEnergie.E:
      return ClasseEnergieE
    case Common.EtiquetteEnergie.F:
      return ClasseEnergieF
    case Common.EtiquetteEnergie.G:
      return ClasseEnergieG
  }
}
