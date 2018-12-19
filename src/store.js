import Vue from 'vue'
import Vuex from 'vuex'

import nfc from '@/nfc'
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
    tupperRead: {
      tagId: undefined
    },
    servingEaten: {
      name: '',
      servings: 1,
      availableServings: 0
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
      state.tupperRead.tagId = null
      state.tupperCreated.name = payload.name
    },
    tupperEaten(state, payload) {
      state.tupperRead.tagId = null
      state.tupperEaten.name = payload.name
    },
    tupperRead(state, payload) {
      state.tupperRead.tagId = payload.tagId
    },
    servingEaten(state, payload) {
      state.tupperRead.tagId = null
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
    tupperEaten({ commit }, payload) {
      commit('tupperEaten', payload)
    },
    tupperRead({ commit }, payload) {
      commit('tupperRead', payload)
    },
    servingEaten({ commit }, payload) {
      commit('servingEaten', payload)
    },
    nfcCheck({ commit }) {
      return nfc.isEnabled().then(() => {
        commit('nfcCheck', true)
      }).catch((reason) => {
        commit('nfcCheck', reason)
      })
    },
  }
})
