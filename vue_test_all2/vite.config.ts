import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
 
    }
  },
   server: {
    proxy:{
      '/user':{
        target: 'http://192.168.183.147:9090',
        changeOrigin: true,
        //rewrite: (path) => path.replace("/app1", '')
      },
      '/api':{
        target: 'https://api.uomg.com',
        changeOrigin: true,
        //rewrite: (path) => path.replace("/app1", '')
      }
    }
  }  
})
