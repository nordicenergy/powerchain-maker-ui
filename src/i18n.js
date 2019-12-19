import Vue from 'vue'
import VueI18n from 'vue-i18n'
import translations from './translations/translations'
import config from './config'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: config.locale,
  messages: translations
})
