<template>
  <footer>
    <ul>
        <li><a href="#"><i class="fa fa-weibo"></i></a></li>
        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
        <li><a href="#"><i class="fa fa-qq"></i></a></li>
        <li><a href="#"><i class="fa fa-github"></i></a></li>
    </ul>
    <div class="copy">
        Copyright &copy; 2018~2020 · ☆ 筱怪 ☆
        <br>
        <span class="beian" @click="open('http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42010202000693','__blank')"> 鄂公网安备 42010202000693 号 </span>
        |
        <span class="beian" @click="open('http://www.miibeian.gov.cn/','__blank')"> 鄂ICP备17026562号-1 </span>
    </div>
  </footer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: 'Footer',
    computed: {
        ...mapGetters('articles', {
            footer: 'footer'
        })
    },
    methods: {
        open(url,type){
            return window.open(url,type)
        }
    }
}
</script>


<style scoped>
footer {
    min-height: 160px;
    text-align: center;
    background: #151523;
    color: white;
    font-size: 16px;
}
footer ul {
    /* width: 1080px; */
    margin: 0 auto;
    padding: 20px;
}
footer ul li {
    display: inline-block;
    padding: 10px;
}
footer ul li a {
    color: white;
}
.copy {
    margin-top: 10px;
    padding-bottom: 10px;
}

@media screen and (max-width: 660px) {
    footer {
        min-height: 110px;
        font-size: 12px;
    }
    footer ul {
        padding: 10px
    }
    .beian {
        font-size: 8px;
    }
}

.beian {
    font-size: 10px;
    cursor: pointer;
    color: lightgray;
}
.beian:hover {
    color: white;
}

</style>
