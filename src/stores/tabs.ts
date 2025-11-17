import { atom } from 'nanostores'

export const $tabs = atom<{ [key: string]: string }>({})

export const addTabs = (key: string, current: string) => {
  $tabs.get()[key] ?? $tabs.set({ ...$tabs.get(), ...{ [key]: current } })
}

export const switchTab = (key: string, current: string) => {
  addTabs(key, current)
  $tabs.set({ ...$tabs.get(), ...{ [key]: current } })
}

export const setTabs = () => {
  document.querySelectorAll('.tabs').forEach(tabsElement => {
    const tabsKey = tabsElement.getAttribute('data-tabs-key')
    let currentTabKey = tabsElement.getAttribute('data-tabs-current')

    tabsElement.querySelectorAll('.tab').forEach(tabElement => {
      if (null === currentTabKey && tabElement.checkVisibility()) {
        currentTabKey = tabElement.getAttribute('data-tab-key')
      }
    })
    if (null === tabsKey || null === currentTabKey) {
      return
    }

    addTabs(tabsKey, currentTabKey)

    tabsElement.querySelectorAll('.tab').forEach(tabElement => {
      tabElement.addEventListener('click', () => {
        const tabKey = tabElement.getAttribute('data-tab-key')

        if (tabKey) {
          switchTab(tabsKey, tabKey)
        }
      })
    })
  })
}

export const subscribeTabs = () => {
  $tabs.subscribe($tabs => {
    Object.keys($tabs).forEach(tabsKey => {
      document
        .querySelectorAll(`.tabs[data-tabs-key="${tabsKey}"] .tab`)
        .forEach(tabElement => {
          tabElement.getAttribute('data-tab-key') === $tabs[tabsKey]
            ? tabElement.classList.add('active')
            : tabElement.classList.remove('active')
        })

      document
        .querySelectorAll(`.tab-content[data-tabs-key="${tabsKey}"]`)
        .forEach(tabContentElement => {
          const tabKey = tabContentElement.getAttribute('data-tab-key')

          if (null === tabKey) {
            return
          }

          if (tabKey === $tabs[tabsKey]) {
            tabContentElement.classList.add('active')
          } else {
            tabContentElement.classList.remove('active')
          }
        })
    })
  })
}
