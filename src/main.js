import Vue from 'vue'
import App from './App'
import router from './router'

import '@/styles/index.scss'
import '@/styles/icon.css'

import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'demo'
  next()
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
