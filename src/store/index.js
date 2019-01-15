import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import regiontask from './modules/regiontask'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    regiontask
  }
})

export default store
