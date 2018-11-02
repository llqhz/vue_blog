<template>
  <div id="app" class="main-wrapper">
    <nav-top />
    <!-- <router-link to="/">Home</router-link> -->
    <router-view />
    <com-footer />
    <side-bar></side-bar>
  </div>
</template>

<script>
import NavTop from './views/common/NavTop.vue'
import ComFooter from '@/views/common/Footer';
import SideBar from '@/views/common/SideBar';
// 在此引入全局js
// import 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js'
import $ from 'jquery'
import '@/assets/js/index.js'

// import $ from 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js'

export default {
  name: 'app',
  components: {
    NavTop,
    ComFooter,
    SideBar
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
@import url('~@/assets/css/default.css');

/* 统一在此引入公共文件 */
@import 'https://cdn.bootcss.com/normalize/8.0.0/normalize.min.css';
@import 'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css';

</style>

<style lang="stylus">
button,button:focus
    background #2dc1a0
    border 0px
    padding 14px 40px
    outline-width 0px
    color white
    cursor pointer

</style>
