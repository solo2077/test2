

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import emitter from './views/mitt'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import MainBanner from '@/components/MainBanner.vue'
import bordder from '@/components/bordder.vue'
import MainList1 from '@/components/MainList1.vue'

import Vue from 'vue';

const app = createApp(App)

app.use(createPinia())

app.component("Footer", Footer)
app.component("Header", Header)
app.component("MainList1",MainList1)
app.component("MainBanner", MainBanner)



app.mount('#app')

