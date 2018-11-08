<template>
  <div id="app" >
    <nav-top />
    <!-- <router-link to="/">Home</router-link> -->
    <transition
      appear
      appear-active-class='animated fadeIn'
      enter-active-class='animated fadeIn'
      leave-active-class='animated fadeOut'
      :duration="{enter: 150, leave: 150}"
      mode='out-in'
    >
      <router-view class="router" :key='Math.floor( Math.random()*9000 )' />
    </transition>
    <com-footer />
    <side-bar></side-bar>
  </div>
</template>

<script>

import NavTop from './views/common/NavTop.vue'
import ComFooter from '@/views/common/Footer'
import SideBar from '@/views/common/SideBar'
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
      leaveAnimate: '', // 页面离开动效
      transitionName: 'slide-right' // 默认动态路由变化为slide-right
    }
  },
  mounted: function () {
    this.$Message.success('欢迎来到 筱怪的博客~ !')
  },
  watch: {
    /* '$route': function (to, from) {
      let isBack = this.$router.isBack
      if (isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
    } */
  }
}
</script>

<style lang="css">
/* 引入css文件和css里面的bg-img等url需要加上"~@" */
/* @import url('~@/assets/css/index.css'); */
@import url('~@/assets/css/default.css');

/* 统一在此引入公共文件 */
/* @import 'https://cdn.bootcss.com/normalize/8.0.0/normalize.min.css'; */
@import 'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css';
@import 'https://unpkg.com/iview/dist/styles/iview.css';
@import 'https://lib.baomitu.com/animate.css/3.7.0/animate.css'

</style>

<style lang="stylus">
#app
  background rgba(0,0,0,0.08)
</style>
