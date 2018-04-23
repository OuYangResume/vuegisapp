import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect:'/dashboard',
      name: 'Dashboard',
      hidden:true,
      children:[{
        path:'dashboard',
        component: () => import('@/views/dashboard/index')
      }]
    }
  ]
})
