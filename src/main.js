// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 路由
import router from './router'
// 引入element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// axios
import Axios from 'axios'
import API from './api/api'

Vue.use(ElementUI)
Vue.prototype.$Axios = Axios
Vue.prototype.$API = API

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
// 解决路由跳转页面回到顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});


// router.scrollBehavior (to, from, savedPosition) {
//   if (savedPosition) {
//     return savedPosition
//   } else {
//     return { x: 0, y: 0 }
//   }
// }



