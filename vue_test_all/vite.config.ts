import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      'myApi': {
        target: 'http://192.168.228.147:9090',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/myApi/, '')
    }
    }
  }, 
})
/* import module from "module";

module.exports = {
    devServer: {
        proxy: {
            '/myApi': {
                target: 'http: //192.168.228.147:9090/',
                changeOrigin: true,
                pathRewrite: {
                    '^/myApi': ''
                }
            }
        }
    }
} */