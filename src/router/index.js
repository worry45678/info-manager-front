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
    },
    {
      path: '/example',
      component: Layout,
      redirect: '/example/table',
      name: 'Example',
      meta: { title: 'Example', icon: 'example' },
      children: [
        {
          path: 'table',
          name: 'Table',
          component: () => import('@/views/dashboard/index'),
          meta: { title: 'Table', icon: 'table' }
        },
        {
          path: 'tree',
          name: 'Tree',
          component: () => import('@/views/dashboard/index'),
          meta: { title: 'Tree', icon: 'tree' }
        }
      ]
    },
    {
      path: '/form',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'Form',
          component: () => import('@/views/dashboard/index'),
          meta: { title: 'Form', icon: 'form' }
        }
      ]
    }
  ]
})
