import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import Splash from './views/Splash.vue'

import Register from './views/Register.vue'
import Login from './views/Login.vue'
import Profile from './views/Profile.vue'

import TupperCreation from './views/TupperCreation.vue'
import TupperDetail from './views/TupperDetail.vue'
import TupperCreated from './views/TupperCreated.vue'
import TupperEaten from './views/TupperEaten.vue'
import ServingEaten from './views/ServingEaten.vue'
import TupperList from './views/TupperList.vue'
import Scanning from './views/Scanning.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/',
      name: 'Splash',
      component: Splash
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/tupper-creation',
      name: 'TupperCreation',
      component: TupperCreation
    },
    {
      path: '/tupper-detail',
      name: 'TupperDetail',
      component: TupperDetail
    },
    {
      path: '/tupper-list',
      name: 'TupperList',
      component: TupperList,
      props: (route) => ({ view: route.query.view })
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/tupper-created',
      name: 'TupperCreated',
      component: TupperCreated
    },
    {
      path: '/tupper-eaten',
      name: 'TupperEaten',
      component: TupperEaten
    },
    {
      path: '/serving-eaten',
      name: 'ServingEaten',
      component: ServingEaten
    },
    {
      path: '/scanning',
      name: 'Scanning',
      component: Scanning
    }
  ]
})
