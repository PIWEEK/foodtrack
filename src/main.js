import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import nfc from './nfc'

nfc.isEnabled().then(() => {
  console.log('NFC is enabled')
}).catch((reason) => {
  if (reason === 'NO_NFC') {
    console.log('El móvil no dispone de NFC')
  } else if (reason === 'NFC_DISABLED') {
    console.log('El móvil tiene el NFC desactivado')
  }
})

nfc.start()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
