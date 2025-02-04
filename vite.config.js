import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ghPages from 'vite-plugin-gh-pages'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/https://github.com/CarlosImmanuel/Counter.git/'
})
