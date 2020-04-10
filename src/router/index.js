import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/home')

const User = () => import('../views/user/user')

const Sponsors = () => import('../views/sponsors/sponsors')

const Sponsor = () => import('../views/sponsor/sponsor')

const Activities = () => import('../views/activities/activities')

const Activity = () => import('../views/activity/activity')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        showFooter: true,
        title: '首页'
      }
    },
    {
      path: '/user',
      component: User,
      meta: {
        showFooter: true,
        title: '我的'
      }
    },
    {
      path: '/sponsors',
      component: Sponsors,
      meta: {
        showHeader: true,
        showFooter: true,
        title: '赞助专题'
      }
    },
    {
      path: '/sponsors/:id',
      component: Sponsor,
      meta: {
        showHeader: true,
        showBack: true,
        title: '赞助专题'
      }
    },
    {
      path: '/activities',
      component: Activities,
      meta: {
        showHeader: true,
        showFooter: true,
        title: '优惠活动'
      }
    },
    {
      path: '/activities/:id',
      component: Activity,
      meta: {
        showHeader: true,
        showBack: true,
        title: '优惠活动详情'
      }
    }
  ]
})
