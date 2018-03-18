import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: 'token',
    name: '',
    avatar: '',
    roles: [],
    sidebar: {
      opened: true
    }
  },
  getters: {
    token: state => state.token,
    name: state => state.name,
    avator: state => state.avatar,
    roles: state => state.avatar,
    sidebar: state => state.sidebar
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      state.sidebar.opened = !state.sidebar.opened
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    }
  }
})
export default store
