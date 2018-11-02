<template>
    <header id="header">
        <nav>
            <div class="logo"><a href="#">☆筱怪☆</a></div>
            <ul>
                <li><a href="#">首页</a></li>
                <li><a href="#">文章模板</a></li>
                <li><a href="#">标题3</a></li>
                <li><a href="#">侧边栏</a></li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

export default class NavTop extends Vue {

}
</script>

<style scoped>
    nav {
        height: 50px;
        background-color: rgba(134, 135, 136, 0.5);;
        /* position: fixed;
        width: 100%; */
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
        margin-right: 20px;
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

</style>
