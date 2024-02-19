import {
  createI18n,
} from 'vue-i18n'

import frJson from '../locales/fr.json'
import enJson from '../locales/en.json'

const setupI18n = (locale = 'fr') => createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'fr',
  messages: {
    fr: frJson,
    en: enJson,
  }
})

export default setupI18n
