import { Audit } from 'dpe-audit'
import fixture from './scenario.json'

export const loadScenario = (): Audit.Audit => {
  return {
    ...fixture,
    ...{ date_etablissement: new Date(fixture.date_etablissement) }
  } as Audit.Audit
}
