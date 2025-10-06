import { atom } from 'nanostores'

export const $tabs = atom<{ [key: string]: string }>({})

export const set = (name: string, current: string) => {
  $tabs.get()[name] ?? $tabs.set({ ...$tabs.get(), ...{ [name]: current } })
}

export const change = (name: string, current: string) => {
  set(name, current)
  $tabs.set({ ...$tabs.get(), ...{ [name]: current } })
}
