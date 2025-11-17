import { persistentMap } from '@nanostores/persistent'
import type { Diagnostic } from 'dpe-audit'

type User = {
  diagnostic: Diagnostic.IDiagnostic | null
  gestes: string[]
  simulation: Diagnostic.IDiagnostic | null
}

export const $user = persistentMap<User>(
  'user',
  {
    diagnostic: null,
    gestes: [],
    simulation: null
  },
  {
    encode: value => JSON.stringify(value),
    decode: value => JSON.parse(value)
  }
)

export const getDiagnostic = () => $user.get().diagnostic

export const getGestes = () => $user.get().gestes

export const getSimulation = () => $user.get().simulation

export const setDiagnostic = (value: Diagnostic.IDiagnostic) => {
  $user.set({
    diagnostic: value,
    gestes: [],
    simulation: null
  })
}

export const setGestes = (gestes: string[]) => {
  $user.setKey('gestes', gestes)
  $user.setKey('simulation', null)
}

export const setSimulation = (simulation: Diagnostic.IDiagnostic) => {
  $user.setKey('simulation', simulation)
}

export const clearUser = () => {
  $user.setKey('diagnostic', null)
  $user.setKey('gestes', [])
  $user.setKey('simulation', null)
}

export const clearGestes = () => {
  $user.setKey('gestes', [])
  $user.setKey('simulation', null)
}

export const clearSimulation = () => {
  $user.setKey('simulation', null)
}
