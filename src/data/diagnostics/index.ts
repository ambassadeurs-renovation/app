import type { Diagnostic } from 'dpe-audit'
import diagnostic from './diagnostic.json'

export const getDiagnostics = (): Diagnostic.IDiagnostic[] => {
  return [diagnostic as Diagnostic.IDiagnostic]
}

export const getDiagnostic = (): Diagnostic.IDiagnostic => {
  return diagnostic as Diagnostic.IDiagnostic
}
