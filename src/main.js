import Vue from 'vue'
import App from './App.vue'
import router from './router'

//将此值设置为 false ,会关闭 Vue 启动时的提示信息，推荐
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,   // 引入路由
}).$mount('#app')
