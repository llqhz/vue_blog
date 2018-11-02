<template>
  <div id="app" class="main-wrapper">
    <nav-top />
    <!-- <router-link to="/">Home</router-link> -->
    <router-view />
  </div>
</template>

<script>
import NavTop from './views/common/NavTop.vue'

// 在此引入全局js
// import 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js'
import $ from 'jquery'
import '@/assets/js/index.js'

// import $ from 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js'

export default {
  name: 'app',
  components: {
    NavTop
  },
  data () {
    return {
      pageName: '',
      routerAnimate: false,
      enterAnimate: '', // 页面进入动效
      leaveAnimate: '' // 页面离开动效
    }
  }
}
</script>

<style lang="css">
/* 引入css文件和css里面的bg-img等url需要加上"~@" */
/* @import url('~@/assets/css/index.css'); */

/* 统一在此引入公共文件 */
@import 'https://cdn.bootcss.com/normalize/8.0.0/normalize.min.css';
@import 'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css';

</style>

<style lang="stylus">
#app
  padding 0;
</style>
