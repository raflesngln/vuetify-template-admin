import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Profile from '@/components/Profile'
import Dashboard from '@/components/Dashboard'
import Product from '@/components/product/listProduct'
import Users from '@/components/users/listUsers'

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
    { path: '/about', name: 'About', component: About },
    { path: '/product', name: 'Product', component: Product },
    { path: '/users', name: 'Users', component: Users }
  ]
})