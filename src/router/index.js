import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import hello from '../components/Hello.vue'
import Layout from '../views/layout/Layout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/vue',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/hello',
      name: 'hello',
      component: hello
    }
  ]
})
