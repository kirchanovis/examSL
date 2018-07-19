import Vue from 'vue'
import App from './App'
import router from './router'

import { VueHammer } from 'vue2-hammer'

Vue.use(VueHammer)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
