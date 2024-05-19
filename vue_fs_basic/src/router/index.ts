import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import  { Store2 } from '@/tools/Storage2'
import { ref } from 'vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/login',
      component:Login,
      name:'login'
    },
    {
      path:'/home',
      component:Home,
      name:'home'
    }
  ]
})
router.beforeEach((from)=>{
  const store = Store2() ;
  let isLogin2=ref<any>('');
/*   console.log(store.islogin()); */
  
   isLogin2.value = store.islogin()
  if(isLogin2.value ||from.name=='login'){
   /*  console.log('路由守卫进来了');
    console.log(from.name);
    console.log(isLogin2.value); */
    
    
    return true;

  }
  else{
    return {name:"login"}
  }
})
export default router
