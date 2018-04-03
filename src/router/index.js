import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Profile from '@/components/Profile'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard  
    },
    { path: '/hello', name: 'HelloWorld', component: HelloWorld},
    { path: '/profile', name: 'Profile', component: Profile },
    { path: '/about', name: 'About', component: About }
  ]
})