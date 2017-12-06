import Vue from 'vue'
import Router from 'vue-router'
import mainVue from '../components/common/main.vue'

Vue.use(Router)


let routes = [ 
  {
    path: '/shouye',
    component: mainVue
  }
]
export default new Router({
  routes: routes
})
