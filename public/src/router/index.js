import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/login'
import Register from '@/components/register'
import AddBook from '@/components/addbook'
import PvdBook from '@/components/pvdbook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
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
    }
    ,
    {
      path: '/add/book',
      name: 'AddBook',
      component: AddBook
    },{
      path: '/pvd/book/:id',
      name: 'PvdBook',
      component: PvdBook
    }
  ]
})
