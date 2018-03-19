// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'babel-polyfill' // 兼容IE
import axios from 'axios' // 测试用

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App' // AppMain
import router from './router' // Route
import store from './store' // vuex

import '@/styles/index.scss' // global css
import '@/icons' // icon

import request from './utils/request'

Vue.config.productionTip = false

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
    return {
      axios // 测试用
    }
  },
  router,
  store,
  methods: {
    request
  },
  components: { App },
  template: '<App/>',
  mounted: function() {
    window.vue = this
  }
})
