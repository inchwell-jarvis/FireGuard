import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', name: 'index', component: resolve => require(['@/components/index'], resolve)
    },
    {
      path: '/index2', name: 'index2', component: resolve => require(['@/components/index'], resolve)
    }
  ]
})
