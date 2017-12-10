// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    userName: '',
    questionIndex: 0,
    questionPhrase: 0, // 0-waiting, 1-highlited, 2-answerd
    currentQuestion: {},
    answerHistory: []
  },
  mutations: {
    setName (state, payload) {
      state.userName = payload.userName
    },
    updateCurrentQuestion (state, questionData) {
      state.questionPhrase = 1
      state.updateCurrentAnswer = questionData
    },
    finishQuestion (state, questionData) {
      state.questionPhrase = 2
      state.answerHistory.push(questionData)
    }
  },
  actions: {
    updateUserName ({ commit }, payload) {
      commit('setName', payload)
      console.log('test')
    },
    updateCurrentAnswer ({ commit }, payload) {
      commit('updateCurrentQuestion', payload)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
