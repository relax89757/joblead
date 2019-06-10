import Vue from 'vue'
import Router from 'vue-router'
import Joblead from "@/views/index/";
import account from "@/views/account/index";
import Signin from "@/views/account/signin";
import Signup from "@/views/account/signup";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Joblead',
      component: Joblead
    },
    {
      path: '/account',
      component: account,
      children: [
        { path: 'login', component: Signin },
        { path: 'register', component: Signup }
      ]
    }
  ]
})
