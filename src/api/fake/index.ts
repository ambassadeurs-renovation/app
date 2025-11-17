import type { Diagnostic } from 'dpe-audit'
import diagnostic from './diagnostic.json'
import simulation from './simulation.json'

export const fakeDiagnostic = (): Diagnostic.IDiagnostic => {
  return diagnostic as Diagnostic.IDiagnostic
}

export const fakeSimulation = (): Diagnostic.IDiagnostic => {
  return simulation as Diagnostic.IDiagnostic
}
