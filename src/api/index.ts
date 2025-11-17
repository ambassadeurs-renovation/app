import type { Diagnostic } from 'dpe-audit'
import { fakeDiagnostic, fakeSimulation } from './fake'

export async function GET (): Promise<Diagnostic.IDiagnostic | null> {
  return fakeDiagnostic()
}

export async function POST (): Promise<Diagnostic.IDiagnostic | null> {
  return fakeSimulation()
}
