import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import Splash from './views/Splash.vue'

import AddTupper from './views/AddTupper.vue'
import TupperDetail from './views/TupperDetail.vue'

import Register from './views/Register.vue'
import Login from './views/Login.vue'
import Created from './views/Created.vue'
import Profile from './views/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/splash',
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
      path: '/add-tupper',
      name: 'AddTupper',
      component: AddTupper
    },
    {
      path: '/tupper-detail',
      name: 'TupperDetail',
      component: TupperDetail
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
      path: '/created',
      name: 'Created',
      component: Created
    }

  ]
})
