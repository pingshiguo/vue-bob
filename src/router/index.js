import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/home')

const Activityies = () => import('../views/activities/activities')

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
      component: Activityies,
      meta: {
        showHeader: true,
        showFooter: true,
        title: '优惠活动'
      }
    }
  ]
})
