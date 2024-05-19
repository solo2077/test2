
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Charts from '@/views/Charts.vue'
import Charts1 from '@/views/Charts1.vue'
import Charts2 from '@/views/Charts2.vue'
import Charts3 from '@/views/Charts3.vue'
import Charts4 from '@/views/Charts4.vue'
import Charts5 from '@/views/Charts5.vue'
import Charts6 from '@/views/Charts6.vue'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('Charts', Charts)
app.component('Charts1', Charts1)
app.component('Charts2', Charts2)
app.component('Charts3', Charts3)
app.component('Charts4', Charts4)
app.component('Charts5', Charts5)
app.component('Charts6', Charts6)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}

app.mount('#app')
