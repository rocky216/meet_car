import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views'
import Home from '@/views/home'
import Login from "@/views/login"
import Signin from "@/views/signin"
import Aprocess from "@/views/aprocess"
import Reimburs from "@/views/reimburs"
import Work from "@/views/work"
import SubmitWork from "@/views/work/submit_work"
import Warn from "@/views/warn"
import Approval from "@/views/warn/approval"
import News from "@/views/news"
import NewsDetail from "@/views/news/detail"
import Process from "@/views/process"
import FlowChart from "@/views/process/flow_chart"
import AdminApprove from "@/views/adminapprove"
import Joinsign from "@/views/joinsign"
import JoinsignDetail from "@/views/joinsign/detail"
import Parts from "@/views/parts"
import PartApproval from "@/views/parts/part_approval"

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
        }, 
        {
          path: '/aprocess',
          component: Aprocess,
          meta: {
            index: 1
          }
        },
        {
          path: '/reimburs',
          component: Reimburs,
          meta: {
            index: 1
          }
        },
        {
          path: '/work',
          component: Work,
          meta: {
            index: 1
          }
        },
        {
          path: '/submit_work',
          component: SubmitWork,
          meta: {
            index: 2
          }
        },
        {
          path: '/warn',
          component: Warn,
          meta: {
            index: 1
          }
        },
        {
          path: '/approval',
          component: Approval,
          meta: {
            index: 2
          }
        },
        {
          path: '/news',
          component: News,
          meta: {
            index: 1
          }
        },
        {
          path: '/news_detail',
          component: NewsDetail,
          meta: {
            index: 2
          }
        },
        {
          path: '/process',
          component: Process,
          meta: {
            index: 1
          }
        },
        {
          path: '/flow_chart',
          component: FlowChart,
          meta: {
            index: 2
          }
        },
        {
          path: '/adminapprove',
          component: AdminApprove,
          meta: {
            index: 1
          }
        },
        {
          path: '/joinsign',
          component: Joinsign,
          meta: {
            index: 1
          }
        },
        {
          path: '/joinsign/detail',
          component: JoinsignDetail,
          meta: {
            index: 2
          }
        },
        {
          path: '/parts',
          component: Parts,
          meta: {
            index: 1
          }
        }, 
        {
          path: '/partapproval',
          component: PartApproval,
          meta: {
            index: 2
          }
        }, 
      ]
    }        
  ],
  scrollBehavior (to, from, savedPosition) {
    
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})
