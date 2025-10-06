import { Audit } from 'dpe-audit'
import fixture from './fixture.json'
import { $audit, setAudit, $scenario, setScenario } from '../stores/user'

export const useFixtures = () => {
  if (null === $audit.get()) {
    setAudit(fixture as Audit.Audit)
  }
  if (null === $scenario.get()) {
    setScenario(fixture as Audit.Audit)
  }
}
