import Vue from 'vue'
import Vuex from 'vuex'

import api from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tupperCreated: {
      name: ''
    },
    tupperEaten: {
      name: ''
    },
    servingEaten: {
      name: ''
    },
    tuppers: [],
    nfc: {
      status: undefined,
      isEnabled: undefined
    }
  },
  mutations: {
    tupperList(state, payload) {
      state.tuppers = payload
    },
    tupperCreated(state, payload) {
      state.tupperCreated.name = payload.name
    },
    tupperEaten(state, payload) {
      state.tupperEaten.name = payload.name
    },
    servingEaten(state, payload) {
      state.servingEaten.name = payload.name
    },
    nfcCheck(state, payload) {
      if (payload === true) {
        state.nfc.isEnabled = payload
        state.nfc.status = 'available'
      } else if (payload === 'NO_NFC') {
        state.nfc.isEnabled = false
        state.nfc.status = 'unavailable'
      } else if (payload === 'NFC_DISABLED') {
        state.nfc.isEnabled = false
        state.nfc.status = 'available'
      }
    }
  },
  actions: {
    tupperList({ commit }) {
      return api.tuppers.list().then((tuppers) => {
        commit('tupperList', tuppers)
      })
    },
    tupperCreated({ commit }, payload) {
      commit('tupperCreated', payload)
    },
    nfcCheck({ commit }) {
      return nfc.isEnabled().then(() => {
        commit('nfcCheck', true)
      }).catch((reason) => {
        commit('nfcCheck', reason)
      })
    },
    tupperEaten({ commit }, payload) {
      commit('tupperEaten', payload)
    },
    servingEaten({ commit }, payload) {
      commit('servingEaten', payload)
    }
  }
})
