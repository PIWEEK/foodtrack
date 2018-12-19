import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tupperCreated: {
      _id: '',
      name: ''
    }
  },
  mutations: {
    tupperCreated(state, payload) {
      state.tupperCreated.name = payload.name
    }
  },
  actions: {
    tupperCreated({ commit }, payload) {
      commit('tupperCreated', payload)
    }
  }
})
