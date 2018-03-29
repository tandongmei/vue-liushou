import Vue from 'vue'
import Router from 'vue-router'
/**
 * /components/common
*/
import Main from '../components/common/main.vue'
import Home from '../components/common/home.vue'
import Detail from '../components/common/detail'
import Baike from '../components/common/baike'
/**
 * /components/register
*/
import Register from '../components/register/register'
import Login from '../components/register/login'
import Update from '../components/register/update'

/**
 * /components/child
*/
import Child from '../components/child/child'
import Help from '../components/child/help'
import EventRedirect from '../components/child/redirect'

/**
 * /components/loveUser
*/
import LoveUser from '../components/loveUser/loveUser'
import Assist from '../components/loveUser/assist'
import NewsDetail from '../components/loveUser/newsDetail'
import NewsRedirect from '../components/loveUser/redirect'


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
// 注册，登陆,资料修改
    {
      path: '/register',
      component: Register
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/update',
      component: Update
    },
// 留守之家：关爱留守，寻求爱心
    // {
    //   path: '/child',
    //   component: Child
    // },
    // {
    //   path: '/help',
    //   component: Help
    // },
// 爱心公益：公益新闻，为他助力
    // {
    //   path: '/loveUser',
    //   component: LoveUser
    // },
    // {
    //   path: '/assist',
    //   component: Assist
    // },
// HOME
    {
      path: '/home',
      component: Home,
      children: [
        { path: 'child', component: Child },
        { path: 'help', component: Help },
        { path: 'loveUser', component: LoveUser },
        { path: 'assist', component: Assist },
        { path: 'detail', component: Detail },
        { path: 'newsDetail', component: NewsDetail },
        { path: 'newsRedirect',component: NewsRedirect},
        { path: 'eventRedirect',component: EventRedirect},
      ]
    },
    // 问卷调查
    // {
    //   path: '/shouye',
    //   component: Main
    // },
    // 留守百科
    {
      path: '/baike',
      component: Baike
    },

    

]


export default new Router({
 routes: routes
})
