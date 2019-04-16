import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views'
import Home from '@/views/home'
import List from '@/views/list'
import Login from "@/views/login"
import Signin from "@/views/signin"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: Home,
          meta: {
            index: 0
          }
        },
        {
          path: '/list',
          component: List,
          meta: {
            index: 1,
          }
        },
        {
          path: '/login',
          component: Login,
          meta: {
            index: 0
          }
        },
        {
          path: '/signin',
          component: Signin,
          meta: {
            index: 1
          }
        }
      ]
    }        
  ]
})
