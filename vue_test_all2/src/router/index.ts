import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/home.vue'
import Cart from '@/components/cart.vue'
import Inf from '@/components/inf.vue'
import User from '@/components/usersetting.vue'
import Home_search from '@/view/home_search.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path: '/home',
      name: 'home',
      component: Home
    },
     {
      path: '/usersetting',
      name: 'usersetting',
      component: User
    },
     {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
     {
      path: '/home_search',
      name: 'home_search',
      component: Home_search
    },
     {
      path: '/inf',
      name: 'inf',
      component: Inf
    },
    /*
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    } */
  ]
})

export default router
