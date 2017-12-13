import Vue from 'vue'
import Router from 'vue-router'
/**
 * /components/common
*/
import Main from '../components/common/main.vue'
/**
 * /components/register
*/
import Register from '../components/register/register'
import Login from '../components/register/login'

// 安装插件
Vue.use(Router)

let routes = [ 
 {
   path: '/shouye',
   component: Main
 },
 {
   path: '/register',
   component: Register
 },
 {
   path: '/login',
   component: Login
 }
]
export default new Router({
 routes: routes
})
