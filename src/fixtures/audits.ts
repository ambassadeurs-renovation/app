import { Audit } from 'dpe-audit'
import fixtures from './audits.json'

export const loadAudits = (): Audit.AuditCollectionItem[] => {
  return fixtures.map(item => {
    return {
      ...item,
      ...{ date_etablissement: new Date(item.date_etablissement) }
    }
  }) as Audit.AuditCollectionItem[]
}
