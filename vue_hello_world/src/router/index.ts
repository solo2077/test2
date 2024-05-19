import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   /*  {
      path:'/login',
      component:Login,
      name:"login"
    },
    {
      path:'/home',
      component:Home,
      name:"home"
    }, */
    
  ]
})

export default router
