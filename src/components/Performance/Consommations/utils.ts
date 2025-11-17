import { Common } from 'dpe-audit'

export const getTotal = (values: Common.Consommation[]) => {
  return {
    cef: values.reduce((acc, item) => acc + item.cef, 0),
    cep: values.reduce((acc, item) => acc + item.cep, 0),
    eges: values.reduce((acc, item) => acc + item.eges, 0)
  }
}

export const getConsommationsByUsage = (
  consommations: Common.Consommation[],
  usage: Common.Usage,
  scenario: Common.Scenario = Common.Scenario.conventionnel
) => {
  return consommations.filter(
    item => item.usage === usage && item.scenario === scenario
  )
}

export const getConsommationsByEnergie = (
  consommations: Common.Consommation[],
  energie: Common.Energie,
  scenario: Common.Scenario = Common.Scenario.conventionnel
) => {
  return consommations.filter(
    item => item.energie === energie && item.scenario === scenario
  )
}

export const dataTableByUsages = (
  consommations: Common.Consommation[],
  scenario: Common.Scenario = Common.Scenario.conventionnel
) => {
  const data = consommations.filter(item => item.scenario === scenario)
  const total = getTotal(data)
  const percent = data.map(item => ({
    ...item,
    cef: (item.cef / total.cef) * 100,
    cep: (item.cep / total.cep) * 100,
    eges: (item.eges / total.eges) * 100
  }))

  const body = [...new Set(percent.map(item => item.usage))]
    .map(usage => {
      const cef = percent
        .filter(item => item.usage === usage)
        .reduce((acc, item) => acc + item.cef, 0)

      const cep = percent
        .filter(item => item.usage === usage)
        .reduce((acc, item) => acc + item.cep, 0)

      const eges = percent
        .filter(item => item.usage === usage)
        .reduce((acc, item) => acc + item.eges, 0)

      return {
        usage: usage,
        cep: cep,
        cef: cef,
        eges: eges
      }
    })
    .sort((a, b) => (a.cef > b.cef ? -1 : 1))

  return { tableBody: body, tableFooter: total }
}

export const dataTableByEnergies = (
  consommations: Common.Consommation[],
  scenario: Common.Scenario = Common.Scenario.conventionnel
) => {
  const data = consommations.filter(item => item.scenario === scenario)
  const total = getTotal(data)
  const percent = data.map(item => ({
    ...item,
    cef: (item.cef / total.cef) * 100,
    cep: (item.cep / total.cep) * 100,
    eges: (item.eges / total.eges) * 100
  }))

  const body = [...new Set(percent.map(item => item.energie))]
    .map(energie => {
      const cef = percent
        .filter(item => item.energie === energie)
        .reduce((acc, item) => acc + item.cef, 0)

      const cep = percent
        .filter(item => item.energie === energie)
        .reduce((acc, item) => acc + item.cep, 0)

      const eges = percent
        .filter(item => item.energie === energie)
        .reduce((acc, item) => acc + item.eges, 0)

      return {
        energie: energie,
        cep: cep,
        cef: cef,
        eges: eges
      }
    })
    .sort((a, b) => (a.cef > b.cef ? -1 : 1))

  return { tableBody: body, tableFooter: total }
}
