import Vue from 'vue'
import moment from 'moment'
import App from './App.vue'
import router from './router'
import store from './store'
import createTimer from './timer'

moment.locale('es')

Vue.config.productionTip = false

window.$router = router
window.$store = store

const timer = createTimer(store)
timer.start()

const vm = new Vue({
  router,
  store,
  render: h => h(App)
})
vm.$mount('#app')
