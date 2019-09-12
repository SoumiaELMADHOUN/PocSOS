import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    auth : false
  },

  mutations: {
    changeAuth(state){
      state.auth = true
    }
  },
  actions: {
    commitChangeAuth(state){
      state.commit('changeAuth')
    }
  }
})
