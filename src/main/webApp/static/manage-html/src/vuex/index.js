/**
 * Created by 7coder on 2017/12/28.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let pageSize = localStorage.getItem('pageSize')
export default new Vuex.Store({
  state: {
    pageSize: pageSize || 10
  },
  mutations: {
    setPageSize(state, pageSize){
      state.pageSize = pageSize
    },

  },
  actions: {

  },
  getters: {
    getPageSize: (state) => state.pageSize
  }
})
