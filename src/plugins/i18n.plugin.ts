import {
  createI18n,
} from 'vue-i18n'

import frJson from '../locales/fr.json'
import enJson from '../locales/en.json'

export default createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'fr',
  messages: {
    fr: frJson,
    en: enJson,
  }
})