<template>
    <header id="header">
        <nav>
            <div class="logo" :class="{logined:isSigned}">
                <template v-if="isSigned">
                    <img :src="user.avatar" alt="个人中心">
                    <router-link to='/improve' tag='a'>{{user.nickname}}</router-link>
                </template>
                <template v-else>
                    <router-link to='/login' tag='a'>登录</router-link> | <router-link to='/submit' tag='a'>注册</router-link>
                </template>
            </div>
            <ul>
                <li v-for="(menu,index) in menuItems" :key="index">
                    <router-link :to='menu.url' tag='a'>  {{ menu.name }}  </router-link>
                </li>
                <li><a href="#"> &nbsp;<icon type="md-menu" />&nbsp;</a></li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters } from "vuex";


export default {
  name: 'NavTop',
  props: {
    activeMenu: {
      default: '/',

    }
  },
  data: () => {
    return {
      menuItem: [
        {
          url: '/',
          name: '首页'
        },
        {
          url: '/list',
          name: '文章列表'
        },
        /* {
          url: '/publish',
          name: '发布文章'
        } */
      ]
    }
  },
  computed: {
    ...mapGetters('user',{
      isSigned: 'isLogined',
      user: 'user'
    }),
    menuItems(){
      let menus = Object.assign([],this.menuItem)
      if ( this.isSigned ) {
          menus.push({
            url: '/publish',
            name: '发布文章'
          })
      }
      return menus
    }
  }

}
</script>

<style scoped>
    nav {
        height: 40px;
        background-color: rgba(134, 135, 136, 0.5);;
        /* position: fixed;
        width: 100%; */
        font-size: 12px;
    }

    nav ul {
        list-style-type: none;
        margin: 0px;
        float: right;
    }
    nav ul li , nav .logo{
        display: inline-block;
        height: 30px;
    }
    @media screen and (max-width: 600px) {
        #header nav .logo {
            /* display: none; */
            width: 92px;
        }
        #header nav .logo a {
            /* display: none; */
            font-size: 12px;
            padding-left: 3px;
            padding-right: 3px;
        }
    }
    /* a 鏈潵灏辨槸span鍏冪礌 => line-height<=height */
    /* inline-block => height */
    nav ul li a , .logo a {
        line-height: 40px;
        display: inline-block;
        height: 40px;
        padding-left: 8px;
        padding-right: 8px;
        text-decoration: none;
        color: #fff;
    }
    nav ul li:last-of-type a {
        padding-right: 16px;
    }

    /* 宸﹁竟logo */

    nav .logo {
        overflow: hidden;

        letter-spacing: 1px;
        font-size: 20px;
        font-weight: 700;
        float: left;
        padding-left: 20px;

        display: flex;
        width: 120px;
        align-items: center;
        height: 100%;
    }
    .logo {
        color: #fff;
        font-size: .5rem;
    }
    .logo img {
        height: 30px;
        border-radius: 50%;
        box-shadow: 0 0 4px grey;
        border: 1px solid lightgray;
    }
    nav .logo a {
        padding-left: 7px;
        padding-right: 7px;
        font-size: 14px;
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
        nav {
            font-size: 16px;
            height: 50px;
        }
        nav ul li , nav .logo{
            height: 50px;
        }
        nav ul li a , .logo a {
            line-height: 50px;
            height: 50px;
            padding-left: 12px;
            padding-right: 12px;
        }
        nav ul li:last-of-type a {
            padding-right: 24px;
        }
    }


    /* 设置登录后的logo */
    @media screen and (min-width: 660px){
        nav .logo.logined {
            width: 250px;
            padding-left: 40px;
        }
        nav .logo.logined img {
            height: 40px;
        }
        nav .logo.logined a {
            font-size: 14px;
            letter-spacing: 0;
        }
    }
    @media screen and (max-width: 659px){
        nav .logo.logined {
            width: 92px;
            padding-left: 5px;
        }
        nav .logo.logined img {
            height: 20px;
        }
        nav .logo.logined a {
            font-size: 10px;
            letter-spacing: 0;
        }
    }

</style>
