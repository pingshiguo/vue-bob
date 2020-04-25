import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/home')

const User = () => import('../views/user/user')

const Profile = () => import('../views/profile/profile')

const Username = () => import('../views/username/username')

const Sponsors = () => import('../views/sponsors/sponsors')

const Sponsor = () => import('../views/sponsor/sponsor')

const Activities = () => import('../views/activities/activities')

const Activity = () => import('../views/activity/activity')

const Service = () => import('../views/service/service')

const Setting = () => import('../views/setting/setting')

const About = () => import('../views/about/about')

const Agent = () => import('../views/agent/agent')

const Join = () => import('../views/join/join')

const Login = () => import('../views/login/login')

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
      path: '/profile',
      component: Profile,
      meta: {
        showHeader: true,
        showBack: true,
        title: '个人资料'
      }
    },
    {
      path: '/profile/username',
      component: Username,
      meta: {
        showHeader: true,
        showBack: true,
        title: '个人资料'
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
    },
    {
      path: '/service',
      component: Service,
      meta: {
        showHeader: true,
        showFooter: true,
        title: '常见问题'
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/setting',
      component: Setting,
      meta: {
        showHeader: true,
        showBack: true,
        title: '个人设置'
      }
    },
    {
      path: '/about',
      component: About,
      meta: {
        showHeader: true,
        showBack: true,
        title: '关于我们'
      }
    },
    {
      path: '/agent',
      component: Agent,
      meta: {
        showHeader: true,
        showBack: true,
        title: '合营计划'
      }
    },
    {
      path: '/join',
      component: Join,
      meta: {
        showHeader: true,
        showBack: true,
        title: '加入我们'
      }
    }
  ]
})
