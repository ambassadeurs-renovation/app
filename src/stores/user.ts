import { atom } from 'nanostores'
import { Audit } from 'dpe-audit'

export const $audit = atom<Audit.Audit | null>(null)
export const setAudit = (audit: Audit.Audit) => $audit.set(audit)
export const clearAudit = () => $audit.set(null)

export const $scenario = atom<Audit.Audit | null>(null)
export const setScenario = (scenario: Audit.Audit) => $scenario.set(scenario)
export const clearScenario = () => $scenario.set(null)

export const $gestes = atom<string[]>([])
export const setGestes = (gestes: string[]) => $gestes.set(gestes)
export const addGeste = (geste: string) =>
  !hasGeste(geste) ? $gestes.set([...$gestes.get(), geste]) : null
export const removeGeste = (geste: string) =>
  $gestes.set($gestes.get().filter(item => item !== geste))
export const hasGeste = (geste: string) =>
  $gestes.get().find(item => item === geste) !== undefined
export const clearGestes = () => $gestes.set([])
