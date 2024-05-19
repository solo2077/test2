import { createRouter, createWebHistory } from 'vue-router'
import home from '@/components/home.vue'
import customer from '@/components/customer.vue'
import master from '@/components/master.vue'
import us from '@/components/us.vue'
import worker from '@/components/worker.vue'
import usinf from '@/components/usinf.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/home",
      component:home
    },
    {
      path:"/customer",
      component:customer
    },
    {
      name:"yuanzhang",
      path:"/master",
      component:master
    },
    {
      name:"youke",
      path:"/us",
      component:us,
      children: [{
        
          name:"usinf",
        path:"/us/usinf/",
        component:usinf,

        //props: true
       props(router){
        return router.query
       }

      }
       
      ],
    
    },
    {
      path:"/worker",
      component:worker
    },
    {
      path:"/",
      redirect:"/home"
    },

  ]
})

export default router
