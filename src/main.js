import Vue from 'vue'
import App from './App'
import router from './router'

//使用ElementUI 
import ElementUI from 'element-ui'                                      //  UI
import 'element-ui/lib/theme-chalk/index.css'                           //  ui
Vue.use(ElementUI)  

// 默认样式
import '@/assets/scss/index.scss'

// 控制是否在生产模式下显示Vue的性能提示信息的开关
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
