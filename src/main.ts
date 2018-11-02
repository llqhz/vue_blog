import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// import utils from '@/components/com/utils.js'
// css import
// import '@/assets/css/index.css'
// import 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js'
// import '@/assets/js/index.js'
import iView from 'iview'
Vue.use(iView)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
