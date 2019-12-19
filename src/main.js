import './styles/style.less'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from './bootstrap'
import { i18n } from './i18n'

Vue.config.productionTip = false

const app = (ethereum) => {
  new Vue({
    el: '#app',
    render: createElement => createElement(App),
    router: router(ethereum),
    store,
    i18n,
    provide: {
      ethereum: ethereum
    }
  })
}

let hasEthereumClient = false

bootstrap()
  .then(async ethereum => {
    hasEthereumClient = true
    app(ethereum)
  })
  .catch(async error => {
    hasEthereumClient = false
    app(null)
  })

