import { atom } from 'nanostores'

export const $tags = atom<{ [key: string]: string[] }>({})

export const set = (name: string) => {
  const tags = $tags.get()
  tags[name] ?? $tags.set({ ...tags, ...{ [name]: [] } })
  return $tags
}

export const add = (name: string, tag: string) => {
  const tags = set(name).get()
  $tags.set({ ...tags, ...{ [name]: [...tags[name], tag] } })
  return $tags
}

export const remove = (name: string, tag: string) => {
  const tags = set(name).get()
  $tags.set({ ...tags, ...{ [name]: tags[name].filter(t => t !== tag) } })
  return $tags
}

export const filter = (name: string, tag: string) => {
  const tags = set(name).get()
  $tags.set({ ...tags, ...{ [name]: [...tags[name], tag] } })
  return $tags
}
