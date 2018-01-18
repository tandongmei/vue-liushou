import Vue from 'vue'
import Router from 'vue-router'
/**
 * /components/common
*/
import Main from '../components/common/main.vue'
import Home from '../components/common/home.vue'
/**
 * /components/register
*/
import Register from '../components/register/register'
import Login from '../components/register/login'

/**
 * /components/child
*/
import Child from '../components/child/child'
import Help from '../components/child/help'

/**
 * /components/loveUser
*/
import LoveUser from '../components/loveUser/loveUser'
import Assist from '../components/loveUser/assist'

/**
 *  /components/common
*/
import Detail from '../components/common/detail'

// 安装插件
Vue.use(Router)

let routes = [ 
    {
      path: '/',
      component: Main
    },
// 首页
    {
      path: '/shouye',
      component: Main
    },
// 注册，登陆
    {
      path: '/register',
      component: Register
    },
    {
      path: '/login',
      component: Login
    },
// 留守之家：关爱留守，寻求爱心
    {
      path: '/child',
      component: Child
    },
    {
      path: '/help',
      component: Help
    },
// 爱心公益：公益新闻，为他助力
    {
      path: '/loveUser',
      component: LoveUser
    },
    {
      path: '/assist',
      component: Assist
    },
// HOME
    {
      path: '/home',
      component: Home,
      children: [
        { path: 'child', component: Child },
        { path: 'help', component: Help },
        { path: 'loveUser', component: LoveUser },
        { path: 'assist', component: Assist },
        { path: 'detail', component: Detail }
      ]
    }

]


export default new Router({
 routes: routes
})
