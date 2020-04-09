import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/home')

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
        title: ''
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
