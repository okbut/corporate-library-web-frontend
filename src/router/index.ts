import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookDetailView from '@/views/BookDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/books',
      name: 'book list',
      component: HomeView
    },
    {
      path: '/books/:code([a-zA-Z0-9]+)',
      name: 'book detail',
      component: BookDetailView,
      strict: true,
      sensitive: true
    }
  ]
})

export default router
