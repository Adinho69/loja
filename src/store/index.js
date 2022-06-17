import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logado: false
  },
  getters: {
  },
  mutations: {
    setLogado(state, payload){
      state.logado = payload
      console.log(state)
    }
  },
  actions: {
  },
  modules: {
  }
})
