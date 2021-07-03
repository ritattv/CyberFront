import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TeamList from '@/components/Team/TeamList'
import TeamCreate from '@/components/Team/TeamCreate'
import TeamUpdate from '@/components/Team/TeamUpdate'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Dashboard from '@/components/Dashboard'
import PlayerList from '@/components/Player/PlayerList'
import PlayerCreate from '@/components/Player/PlayerCreate'
import PlayerUpdate from '@/components/Player/PlayerUpdate'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/team/list',
      name: 'TeamList',
      component: TeamList
    },
    {
      path: '/team/create',
      name: 'TeamCreate',
      component: TeamCreate
    },
    {
      path: '/team/update/:id',
      name: 'TeamUpdate',
      component: TeamUpdate
    },
    {
      path: '/player/list',
      name: 'PlayerList',
      component: PlayerList
    },
    {
      path: '/player/create',
      name: 'PlayerCreate',
      component: PlayerCreate
    },
    {
      path: '/player/update/:id',
      name: 'PlayerUpdate',
      component: PlayerUpdate
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
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
