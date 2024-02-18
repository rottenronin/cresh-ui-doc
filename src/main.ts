import { createApp } from 'vue'
import CreshUI from '@long2x/cresh-ui'

import App from './App.vue'
import routerPlugin from './plugins/router.plugin'
import CCodeSnippetVue
  from './components/layout/CCodeSnippet.vue'

// import cresh-ui style
import '@long2x/cresh-ui/style.css'
// import cresh-ui default theme
import '@long2x/cresh-ui/default-theme.css'
import i18nPlugin from './plugins/i18n.plugin'

const app = createApp(App)

app.component('CCodeSnippet', CCodeSnippetVue)

app.use(CreshUI)
app.use(i18nPlugin)
app.use(routerPlugin)

app.mount('#app')
