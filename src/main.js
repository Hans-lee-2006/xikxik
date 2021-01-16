import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import '../node_modules/semantic-ui-css/semantic.min.css'

import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
