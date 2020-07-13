<template>
  <footer>
    <ul>
        <li v-for="(icon, index) in footer.icons" :key="icon.link">
            <a :href="icon.link"><i :class="icon.icon"></i></a>
        </li>
    </ul>
    <div class="copy">
        {{ footer.copy }}
        <br>
        <span class="beian" @click="open(footer.police.link,'__blank')"> {{ footer.police.text }} </span>
        |
        <span class="beian" @click="open(footer.record.link,'__blank')"> {{ footer.record.text }} </span>
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
