import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../views/layout/Layout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Layout,
      redirect: '/hello',
      hidden: true,
      children: [
        {
          path: 'hello',
          name: 'hello',
          component: () => import('@/components/HelloWorld')
        },
        {
          path: 'test',
          name: 'test',
          component: () => import('@/views/dialog/detail')
        }
      ]
    },
    {
      path: '/home',
      name: 'Home',
      component: Layout,
      children: [
        {
          path: 'asset',
          name: 'asset',
          component: () => import('@/views/table/AssetTable.vue'),
          meta: { title: 'index', icon: 'home' }
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
          path: 'newasset',
          name: 'newAsset',
          component: () => import('@/views/form/newAsset.vue'),
          meta: { title: '资产录入', icon: 'new' }
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
