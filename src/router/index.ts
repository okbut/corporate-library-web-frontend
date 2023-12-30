import { createRouter, createWebHistory } from 'vue-router'

import { useAuthStore } from '@/stores/auth'

import LoginView from '@/views/LoginView.vue'
import BookListView from '@/views/BookListView.vue'
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
      component: BookListView
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
  } else if (store.isAuth && to.name === 'home') {
    return { name: 'book list' }
  } else if (!store.isAdmin && to.name === 'add book') {
    alert('관리자만 접근할 수 있습니다.')
    return { name: 'book list' }
  }
})

export default router
