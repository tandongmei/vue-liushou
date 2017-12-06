import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/common/main.vue'


// 安装插件
Vue.use(Router)

let routes = [ 
 {
   path: '/',
   component: Main
 }
]
export default new Router({
 routes: routes
})
