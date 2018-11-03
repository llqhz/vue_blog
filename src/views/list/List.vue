<template>
  <!-- 示例： http://demo.cssmoban.com/cssthemes5/ccps_27_bdv/index.html -->
  <div class="container">
    <row>
      <i-col :md="{span:20,offset:2}" :sm="24">
        <row>
          <i-col :xs='24' :sm="16">
            <list-swiper></list-swiper>
            <list-hr></list-hr>
            <article-items></article-items>
            <divider class="divider" />
            <article-page :total="100" show-elevator />
          </i-col>
          <i-col :xs='24' :sm="8">右侧</i-col>
        </row>
      </i-col>
    </row>

    <!-- <div class="list-left">
      <list-swiper></list-swiper>
      <div>分割线</div>
      <div>文章图文列表</div>
    </div>
    <div class="list-right">
      <div>个人简介</div>
      <div>个人动态</div>
      <div>推荐阅读</div>
    </div> -->
  </div>
</template>

<script>
import ListSwiper from './components/Swiper'
import ListHr from './components/ListHr'
import ArticleItems from './components/ArticleItems'
import ArticlePage from './components/ArticlePage'
export default {
  name: 'ArticleLIst',
  components: {
    ListSwiper,
    ListHr,
    ArticleItems,
    ArticlePage
  }
}
</script>

<style lang="stylus" scoped>
.divider
  margin-top 10px
  margin-bottom 10px
</style>
