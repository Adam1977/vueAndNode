import Vue from 'vue'
import Vuex from 'vuex'
// 引入modules
// import example from './modules/example'


Vue.use(Vuex)

const store =  new Vuex.Store({
  state: {
    message: 'login.vue'
  },
  mutations: {
    INDEX_SET(state, data){
      state[data['target']] = data.data
    }
  },
  actions: {
    UPDATE_MESSAGE({commit}, params) {
      commit('INDEX_SET', {
        target: 'message',
        data: params
      })
    }
  },
  modules: {
    // example
  }
})
export default store
