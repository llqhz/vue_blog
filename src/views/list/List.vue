<template>
  <!-- 示例： http://demo.cssmoban.com/cssthemes5/ccps_27_bdv/index.html -->
  <div class="container">
    <row>
      <i-col :md="{span:20,offset:2}" :sm="24">
        <row>
          <i-col :xs='24' :sm="16" class="list-left">
            <list-swiper></list-swiper>
            <list-hr titles="文章列表,"></list-hr>
            <article-items></article-items>
            <divider class="divider" />
            <article-page :total="100" show-elevator />
          </i-col>
          <i-col :xs='{span:0}' :sm="8" class="list-right">
            <div class="right-content">
              <my-info :tags="user.tags" />
              <list-hr titles="个性,标签"></list-hr>
              <my-label />
              <list-hr titles="最新,文章"></list-hr>
              <list-news :news="latest" />
              <list-hr titles="最热,文章"></list-hr>
              <list-news :news="hot" />
              <list-hr titles="友情,链接"></list-hr>
              <list-links :links='frendLinks' />
            </div>
          </i-col>
        </row>
      </i-col>
    </row>
  </div>
</template>

<script>
import ListSwiper from './components/Swiper'
import ListHr from './components/ListHr'
import ArticleItems from './components/ArticleItems'
import ArticlePage from './components/ArticlePage'
import MyInfo from './components/MyInfo'
import MyLabel from './components/MyLabel'
import ListNews from './components/ListNews'
import ListLinks from './components/ListLinks'

import { mapGetters, mapActions } from "vuex";

export default {
  name: 'ArticleLIst',
  components: {
    ListSwiper,
    ListHr,
    ArticleItems,
    ArticlePage,
    MyInfo,
    MyLabel,
    ListNews,
    ListLinks
  },
  data(){
    return {

    }
  },
  computed: {

    ...mapGetters('user',{
      user: 'user',

    }),
    ...mapGetters('articles',{
      latest: 'latest',
      hot: 'hot',
      frendLinks: 'frendLinks'
    })
  },
  methods:{

    ...mapActions('user',{}),

    ...mapActions('articles',{
      getTopNews: 'getTopNews'
    })
  },
  created(){
    this.getTopNews()
  },
  watch: {
    // 监听路由参数变化
    $route (to,from) {
      console.log(this.$route.params);
    }
  },


}

</script>

<style lang="stylus" scoped>
.divider
  margin-top 10px
  margin-bottom 10px

.list-left
  border-right 2px solid #c2c3c3
  box-shadow 2px 2px 5px #999
  overflow hidden

.list-right
  padding 10px
  padding-top 0

  .right-content
    background-color #f7f7f7
</style>
