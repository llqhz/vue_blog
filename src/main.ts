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
import 'iview/dist/styles/iview.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'



Vue.use(iView)
Vue.use(VueAwesomeSwiper/* { default global options } */)

Vue.use(mavonEditor) //markdown编辑器

import MintUI from 'mint-ui'

Vue.config.productionTip = false
/* router.prototype.goBack = function () {
　　this.isBack = true
　　window.history.go(-1)
} */
/* NProgress 顶部加载进度条 */
router.beforeEach((to,from,next) => {
  NProgress.start();
  next();
});
router.afterEach(transition => {
  NProgress.done();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
