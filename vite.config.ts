import { defineConfig } from 'vite'
import VueRouter from 'unplugin-vue-router/vite'
import vue from '@vitejs/plugin-vue'
import {
  getFileBasedRouteName,
} from 'unplugin-vue-router'

import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      routesFolder: 'src/pages',
      extensions: ['.vue'],
      exclude: [],
      // Path for the generated types. Defaults to `./typed-router.d.ts` if typescript
      // is installed. Can be disabled by passing `false`.
      dts: './typed-router.d.ts',
      // Change the import mode of page components. Can be 'async', 'sync', or a function with the following signature:
      // (filepath: string) => 'async' | 'sync'
      importMode: 'async',
      // transform route name: /form-controls/Input => /form-controls/input
      getRouteName: (routeNode) => {
        const name = getFileBasedRouteName(routeNode)
        const transformedName = name.split('').reduce((acc, current) => {
          if (current >= 'A' && current <= 'Z') {
            const lowercase = current.toLocaleLowerCase()
            // skip first majuscule, insert - otherwise
              acc.push(lowercase)
          } else {
            acc.push(current)
          }
          return acc
        }, Array<string>()).join('')
        return transformedName
      }
    }),
    vue()
  ],
  server: {
    port: 8090,
    host: true,
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
    },
  },
})
