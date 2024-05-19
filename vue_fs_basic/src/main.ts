import { createApp ,provide} from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import Loading from './Loading.vue'
import  Child from './child.vue'

import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Search from './Search.vue'
import Transition from './Transition.vue'
import Child_child1 from './Child_child1.vue'
import Child_child2 from './Child_child2.vue'
import router from './router'
import  { Store2 } from './tools/Storage2'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import "animate.css"
import { ElMessage  } from 'element-plus';
import axios from "axios";

/*  import { v4 as uuidv4 } from 'uuid'; 
 */

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}
app.provide("axios",axios)
app.component("Loading",Loading)
app.component("Child",Child)

app.component("Child_child1",Child_child1)
app.component("Child_child2",Child_child2)
app.component("Search",Search)
app.component("Transition02",Transition)
app.mount('#app')
/* npm i axios 
 npm i element-plus --save
  npm install @element-plus/icons-vue*/
 /* 
  在组件中这么用全局pinia
 import  { Store2 } from '@/tools/Storage2'

  export default {
    setup() {
      const store = Store2() // 来获取 store使用 Store2() 
  
      // 访问 store 中的状态
      console.log(store.username.value)
      console.log(store.userpassword.value)
  
      // 调用 store 中的方法
      store.increment()
      console.log(store.islogin())
  
      // 监听 store 中的状态变化
      store.$watch(
        (store) => store.username.value,
        (newVal, oldVal) => {
          console.log('Username changed from', oldVal, 'to', newVal)
        }
      )
  
      return {
        // 可以在模板中直接使用 store 的状态和方法
        username: store.username,
        userpassword: store.userpassword,
        islogin: store.islogin,
        increment: store.increment
      }
    }
  } */