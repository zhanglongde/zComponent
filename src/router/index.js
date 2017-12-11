import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Common from '@/views/Common'
import DataDisplay from '@/views/DataDisplay'
import DataEntry from '@/views/DataEntry'
import Container from '@/views/Container'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Common',
      name: 'Common',
      component: Common
    },
    {
      path: '/Data-Display',
      name: 'DataDisplay',
      component: DataDisplay
    },
    {
      path: '/Data-Entry',
      name: 'DataEntry',
      component: DataEntry
    },
    {
      path: '/Container',
      name: 'Container',
      component: Container
    }
  ]
})
