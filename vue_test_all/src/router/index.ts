import { createRouter, createWebHistory } from 'vue-router'
import { useRouter } from 'vue-router'
import {useStore}from '../stores/counter'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'

import Order from '../views/Order.vue'
import Goods from '../views/Goods.vue'
import AddGoods from '../views/AddGoods.vue'
import AddGood from '../views/AddGood.vue'
import GoodBaseSetting from '../views/GoodBaseSetting.vue'
import GoodDetailSetting from '../views/GoodDetailSetting.vue'
import GoodPriceSetting from '../views/GoodPriceSetting.vue'
import GoodCategory from '../views/GoodCategory.vue'
import ManagerList from '../views/ManagerList.vue'
import ManagerChange from '../views/ManagerChange.vue'
import Tradeinfo from '../views/Tradeinfo.vue'
import Tradelist from '../views/Tradelist.vue'
import Data from '../views/Data.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
 
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },

    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children:[
        {
          path:'ManagerChange/',
          component:ManagerChange,
          name:'ManagerChange',
        },
        {
          path:'Tradelist/',
          component:Tradelist,
          name:'Tradelist',
        },
        {
          path:'Data/',
          component:Data,
          name:'Data',
        },
        {
          path:'ManagerList/',
          component:ManagerList,
          name:'ManagerList',
        },
        {
          path:'Tradeinfo/',
          component:Tradeinfo,
          name:'Tradeinfo',
        },
        {
          path:'Order/:type',//0是普通订单，1是秒杀订单
          component:Order,
          name:'Order',
        },
        {
          path:'Goods/:type',//0是普通商品，1是秒杀商品，2是今日推荐
          component:Goods,
          name:'Goods',
        },
        {
          path:'AddGoods/:type',//商品分类
          component:AddGoods,
          name:'AddGoods',
        },
        {
          path:'AddGood',//商品添加
          component:AddGood,
          name:'AddGood',
          children:[
            {
              path: '/GoodBaseSetting',
              component:GoodBaseSetting,
              name:'GoodBaseSetting',

            },
            {
              path: '/GoodDetailSetting',
              component:GoodDetailSetting,
              name:'GoodDetailSetting',
              children:[
                {
                  path: '/GoodCategory',
                  component:GoodCategory,
                  name:'GoodCategory'},]



            },
            {
              path: '/GoodPriceSetting',
              component:GoodPriceSetting,
              name:'GoodPriceSetting',

            },
          ]
        },
        
      ],
      redirect:'/Home/Order/0'
    

    },

  ]
})
router.beforeEach((from)=>{
  let Store = useStore()
  let isLogin=Store.isLogin();
  if(isLogin || from.name=='Login'){
    return true;
  }else {
    console.log("重新跳转回Login");
    
    return{name:'Login'}
  }
})

export default router
