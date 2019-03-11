import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
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

import VueUeditorWrap from 'vue-ueditor-wrap' // ES6 Module

Vue.use(iView)
Vue.use(VueAwesomeSwiper/* { default global options } */)

Vue.use(mavonEditor) //markdown编辑器
Vue.component('vue-ueditor-wrap', VueUeditorWrap)  //ueditor富文本编辑器

import MintUI from 'mint-ui'

/**
 * @description 全局注册应用配置
 */
import config from "./config"
Vue.prototype.$config = config

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
  store, // 自动注册到所有子组件里 子组件使用 this.$store访问
  render: h => h(App),
  mounted(){
    // 页面全局初始化
    this.$store.dispatch('init')
  }
}).$mount('#app')
