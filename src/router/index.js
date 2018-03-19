import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
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
      name: 'hello',
      component: Layout,
      chideren: [
        {
          path: 'wel',
          name: 'hello',
          component: () => import('@/views/table/AssetTable.vue')
        }
      ]
    },
    {
      path: '/example',
      component: Layout,
      redirect: '/example/table',
      name: 'Example',
      meta: { title: '资产管理', icon: 'example' },
      children: [
        {
          path: 'table',
          name: 'Table',
          component: () => import('@/views/table/AssetTable.vue'),
          meta: { title: '资产表', icon: 'table' }
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
