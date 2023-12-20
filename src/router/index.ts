import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '@/views/LoginView.vue'
import IntroView from '@/views/IntroView.vue'
import HomeView from '../views/HomeView.vue'
import BookDetailView from '@/views/BookDetailView.vue'
import AddBookView from '@/views/AddBookView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView
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
    },
    {
      path: '/add-book',
      name: 'add book',
      component: AddBookView
    }
  ]
})

export default router
