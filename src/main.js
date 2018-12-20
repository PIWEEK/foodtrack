import Vue from 'vue'
import moment from 'moment'
import App from './App.vue'
import router from './router'
import store from './store'

moment.locale('es')

Vue.config.productionTip = false

window.$router = router
window.$store = store

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
