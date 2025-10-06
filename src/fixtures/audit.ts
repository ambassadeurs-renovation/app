import { Audit } from 'dpe-audit'
import fixture from './audit.json'

export const loadAudit = (): Audit.Audit => {
  return {
    ...fixture,
    ...{ date_etablissement: new Date(fixture.date_etablissement) }
  } as Audit.Audit
}
