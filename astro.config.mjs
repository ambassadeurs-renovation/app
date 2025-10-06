// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import node from '@astrojs/node'

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  adapter: node({
    mode: 'standalone'
  }),

  integrations: [icon()]
})