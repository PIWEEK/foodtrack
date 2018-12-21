import Vue from 'vue'
import Vuex from 'vuex'

import nfc from '@/nfc'
import api from '@/api'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lightbox: 'none',
    confirmRemove: {
      _id: null,
      name: ''
    },
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
    alerts: [],
    tuppers: [
      {
        tagId: '0cc175b9c0f1b6a831c399e269772661',
        tupperId: 'a',
        name: 'Pollo al Curry',
        content: 'Al rico pollo al curry con su arrocito y sus mandangas',
        created: moment().toDate(),
        modified: moment().toDate(),
        storedAt: 'fridge',
        cookedAt: moment().toDate(),
        notifyMeAt: moment().add(2, 'days').toDate(),
        servings: 1
      },
      {
        tagId: '92eb5ffee6ae2fec3ad71c777531578f',
        tupperId: 'b',
        name: 'Paella de verduras',
        content: 'Paellita ipsum dolor sit amet, c\'est la vie, garçon',
        created: moment().toDate(),
        modified: moment().toDate(),
        storedAt: 'fridge',
        cookedAt: moment().toDate(),
        notifyMeAt: moment().add(2, 'days').toDate(),
        servings: 2
      }
    ],
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
      const tupper = state.tuppers.find((tupper) => tupper.tagId === payload.tagId)
      if (tupper) {
        state.tupperRead._id = tupper._id
        state.tupperRead.name = tupper.name
        state.tupperRead.tupperId = tupper.tupperId
        state.tupperRead.content = tupper.content
        state.tupperRead.storedAt = tupper.storedAt
        state.tupperRead.servings = tupper.servings
        state.tupperRead.cookedAt = tupper.cookedAt
        state.tupperRead.notifyMeAt = tupper.notifyMeAt
      }
    },
    tupperEatWhole(state, payload) {
      const tupper = state.tuppers.find(tupper => tupper._id === payload._id)
      state.servingEaten.servings = tupper.servings
      tupper.servings = 0
      state.servingEaten.name = tupper.name
      state.servingEaten.availableServings = tupper.servings
      state.tupperRead.servings = 0
    },
    tupperEatServing(state, payload) {
      const tupper = state.tuppers.find(tupper => tupper._id === payload._id)
      tupper.servings -= payload.servings
      state.tupperRead.servings -= payload.servings
      state.servingEaten.name = tupper.name
      state.servingEaten.servings = payload.servings
      state.servingEaten.availableServings = tupper.servings
      state.tupperRead.tagId = null
    },
    tupperMove(state, payload) {
      const tupper = state.tuppers.find(tupper => tupper._id === payload._id)
      tupper.storedAt = payload.storedAt
      state.tupperRead.storedAt = payload.storedAt
    },
    tupperRemove(state, payload) {
      state.tupperRead.tagId = null
    },
    lightboxNone(state, payload) {
      state.lightbox = 'none'
    },
    lightboxShareFridge(state, payload) {
      state.lightbox = 'share-fridge'
    },
    lightboxConfirmRemove(state, payload) {
      state.lightbox = 'confirm-remove'
      state.confirmRemove._id = payload._id
    },
    lightboxAlert(state, payload) {
      state.lightbox = 'alert'
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
    },
    timer(state) {
      state.alerts = state.tuppers.filter((tupper) => {
        const duration = moment.duration(moment(tupper.notifyMeAt).diff(moment()))
        return (duration.asDays() <= 0)
      })
    }
  },
  actions: {
    tupperList({ commit }) {
      return api.tuppers.list().then((tuppers) => {
        commit('tupperList', tuppers)
      })
    },
    tupperCreate({ dispatch }, payload) {
      return api.tuppers.create(payload).then(() => {
        return dispatch('tupperCreated', {
          name: payload.name
        })
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
    tupperEatServing({ state, commit }, payload) {
      return api.tuppers.eatServing({
        _id: state.tupperRead._id
      }, payload.quantity).then(() => {
        commit('tupperEatServing', {
          _id: state.tupperRead._id,
          servings: payload.quantity
        })
      })
    },
    tupperEatWhole({ state, commit }, payload) {
      return api.tuppers.eatWhole({ _id: state.tupperRead._id })
        .then(() => {
          commit('tupperEatWhole', {
            _id: state.tupperRead._id,
            servings: 0
          })
        })
    },
    tupperMove({ state, commit }, payload) {
      return api.tuppers.move({
        _id: state.tupperRead._id
      }, state.tupperRead.storedAt === 'fridge' ? 'freezer' : 'fridge')
        .then(() => {
          commit('tupperMove', {
            _id: state.tupperRead._id,
            storedAt: state.tupperRead.storedAt === 'fridge' ? 'freezer' : 'fridge'
          })
        })
    },
    tupperRemove({ state, commit }) {
      commit('lightboxNone')
      return api.tuppers.remove({
        _id: state.confirmRemove._id
      }).then(() => {
        commit('tupperRemove')
      })
    },
    lightboxNone({ commit }, payload) {
      commit('lightboxNone', payload)
    },
    lightboxAlert({ commit }, payload) {
      commit('lightboxAlert', payload)
    },
    lightboxConfirmRemove({ commit }, payload) {
      commit('lightboxConfirmRemove', payload)
    },
    lightboxShareFridge({ commit }, payload) {
      commit('lightboxShareFridge', payload)
    },
    nfcCheck({ commit }) {
      return nfc.isEnabled().then(() => {
        commit('nfcCheck', true)
      }).catch((reason) => {
        commit('nfcCheck', reason)
      })
    },
    timer({ commit }) {
      const hour = moment().hour()
      if ((hour >= 12 && hour <= 16)
       || (hour >= 19 && hour <= 23)) {
        commit('timer')
      }
    }
  }
})
