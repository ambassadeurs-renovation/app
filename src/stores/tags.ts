import { map } from 'nanostores'

/**
 * @interface Tags
 */
interface Tags {
  [key: string]: string[]
}

export const $tags = map<Tags>({
  ressources: [],
  gestes: [],
})

export const handleAddTag = (key: string, tag: string) => {
  const currentTags = new Set($tags.get()[key] || [])
  currentTags.add(tag)
  $tags.setKey(key, Array.from(currentTags))
}

export const handleRemoveTag = (key: string, tag: string) => {
  const currentTags = $tags.get()[key] || []
  $tags.setKey(
    key,
    currentTags.filter(t => t !== tag)
  )
}

export const handleClearTags = (key: string) => {
  $tags.setKey(key, [])
}

export const updateActiveTagsUI = () => {
  const currentTags = $tags.get()
  Object.entries(currentTags).forEach(([key, activeTags]) => {
    document.querySelectorAll(`*[data-tags-key="${key}"]`).forEach(element => {
      const elementTags = element.getAttribute('data-tags')?.split('|') || []
      if (activeTags.length === 0) {
        element.classList.add('active')
      } else {
        activeTags.some(tag => elementTags.includes(tag))
          ? element.classList.add('active')
          : element.classList.remove('active')
      }
    })
  })
}

export const subscribeTags = () => {
  $tags.subscribe(updateActiveTagsUI)
}

export const addTagsEventListeners = () => {
  document.querySelectorAll('.tags').forEach(tagsElement => {
    const key = tagsElement.getAttribute('data-key')
    if (!key) return

    tagsElement.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
      const tag = checkbox.getAttribute('aria-label')
      if (!tag) return

      checkbox.addEventListener('change', e => {
        const isChecked = (e.target as HTMLInputElement).checked
        isChecked ? handleAddTag(key, tag) : handleRemoveTag(key, tag)
      })
    })
  })

  document
    .querySelectorAll('.tags input[type="reset"]')
    .forEach(resetButton => {
      const key = resetButton.closest('.tags')?.getAttribute('data-key')
      if (!key) return

      resetButton.addEventListener('click', () => {
        handleClearTags(key)
      })
    })
}
