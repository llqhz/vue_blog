<template>
    <header id="header">
        <nav>
            <div class="logo"><a href="#">☆筱怪☆</a></div>
            <ul>
                <li v-for="(menu,index) in menuItems" :key="index">
                    <router-link :to='menu.url' tag='a'>  {{ menu.name }}  </router-link>
                </li>
                <li><a href="#"> ≡ </a></li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

export default {
  name: 'NavTop',
  props: {
    activeMenu: {
      default: '/'
    }
  },
  data: () => {
    return {
      menuItems: [
        {
          url: '/',
          name: '首页'
        },
        {
          url: '/list',
          name: '文章列表'
        },
        {
          url: '/article',
          name: '文章模板'
        },
        {
          url: '/about',
          name: '关于'
        }
      ]
    }
  }

}
</script>

<style scoped>
    nav {
        height: 50px;
        background-color: rgba(134, 135, 136, 0.5);;
        /* position: fixed;
        width: 100%; */
        font-size: 16px;
    }

    nav ul {
        list-style-type: none;
        margin: 0px;
        float: right;
    }
    nav ul li , nav .logo{
        display: inline-block;
        height: 50px;
    }
    @media screen and (max-width: 600px) {
        nav .logo {
            display: none;
        }
    }
    /* a 鏈潵灏辨槸span鍏冪礌 => line-height<=height */
    /* inline-block => height */
    nav ul li a , .logo a {
        line-height: 50px;
        display: inline-block;
        height: 50px;
        padding-left: 8px;
        padding-right: 8px;
        text-decoration: none;
        color: #fff;
    }

    /* 宸﹁竟logo */

    nav .logo {
        letter-spacing: 1px;
        font-size: 20px;
        font-weight: 700;
        float: left;
        padding-left: 20px;
    }
    .logo a {
        color: #fff;
    }

    .router-link-exact-active {
        background-color: rgba(0,0,0,0.1);
        color: #fff;
    }

    @media screen and (min-width: 660px){
        nav ul li a {
            padding-left: 20px;
            padding-right: 20px;
        }
    }
</style>
