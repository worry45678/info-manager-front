import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: 'token',
    name: 'defalut-name',
    messageCount: 6,
    avatar: '',
    avatarIcon: 'admin',
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
    sidebar: state => state.sidebar,
    avatarIcon: state => state.avatarIcon,
    messageCount: state => state.messageCount
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
