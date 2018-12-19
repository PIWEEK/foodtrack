import Vue from 'vue'
import Vuex from 'vuex'

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
    }
  },
  mutations: {
    tupperCreated(state, payload) {
      state.tupperCreated.name = payload.name
    },
    tupperEaten(state, payload) {
      state.tupperEaten.name = payload.name
    },
    srevingEaten(state, payload) {
      state.servingEaten.name = payload.name
    }
  },
  actions: {
    tupperCreated({ commit }, payload) {
      commit('tupperCreated', payload)
    },
    tupperEaten({ commit }, payload) {
      commit('tupperEaten', payload)
    },
    servingEaten({ commit }, payload) {
      commit('servingEaten', payload)
    }
  }
})
