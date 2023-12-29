import { createRouter, createWebHistory } from 'vue-router'

import { useAuthStore } from '@/stores/auth'

import LoginView from '@/views/LoginView.vue'
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

router.beforeEach((to) => {
  const store = useAuthStore()

  if (!store.isAuth && to.name !== 'home') {
    alert('로그인 후 이용 가능합니다.')
    return { name: 'home' }
  }
})

export default router
