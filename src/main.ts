import { createApp } from 'vue'
import CreshUI from '@long2x/cresh-ui'

import App from './App.vue'
import routerPlugin from './plugins/router.plugin'
import CCodeSnippetVue
  from './components/layout/CCodeSnippet.vue'


import i18nPlugin from './plugins/i18n.plugin'
import { localforageService } from './services'

const app = createApp(App)

app.component('CCodeSnippet', CCodeSnippetVue)

const defaultLocale = 'fr'

localforageService.getItem('locale').then(savedLocale => {
  app.use(i18nPlugin(savedLocale || defaultLocale))
}).catch(() => {
  app.use(i18nPlugin(defaultLocale))
}).finally(() => {
  app.use(CreshUI)
  app.use(routerPlugin)
  
  app.mount('#app')
})
