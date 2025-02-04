import { createRouter, createWebHashHistory } from 'vue-router'
import Counter from '@/components/Counter.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Counter
  }
]

const router = createRouter({
  history: createWebHashHistory(), // Menggunakan mode hash untuk GitHub Pages
  routes
})

export default router
