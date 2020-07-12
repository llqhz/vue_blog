<template>
  <!-- 示例： http://demo.cssmoban.com/cssthemes5/ccps_27_bdv/index.html -->
  <div class="container">
    <row>
      <i-col :md="{span:20,offset:2}" :sm="24">
        <row>
          <i-col :xs='24' :sm="16" class="list-left">
            <list-swiper></list-swiper>
            <list-hr titles="文章,列表"></list-hr>
            <article-items></article-items>
            <divider class="divider" />
            <article-page
              :page='page'
              @on-change='onPageChange'
              @on-page-size-change='onPageSizeChange'
            />
          </i-col>
          <i-col :xs='{span:0}' :sm="8" class="list-right">
            <div class="right-content" :class="{'info-div-top':!isLogined}">
              <div v-show="isLogined" class="info-div">
                <my-info />
                <list-hr titles="个性,标签"></list-hr>
                <my-label :tags="user.tags" />
              </div>
              <list-hr titles="文章,分类"></list-hr>
              <article-classify :tags="classify" :i_tag='page.classify_id' @changeClassify='changeClassify' />
              <list-hr titles="最新,文章"></list-hr>
              <list-news :news="latest" />
              <list-hr titles="最热,文章"></list-hr>
              <list-news :news="hot" />
              <list-hr titles="友情,链接"></list-hr>
              <list-links :links='friendLinks' />
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
import ArticleClassify from './components/ArticleClassify'
import ListNews from './components/ListNews'
import ListLinks from './components/ListLinks'

import { mapGetters, mapActions } from "vuex"
import { isDefined } from "@/lib/utils";

export default {
  name: 'ArticleList',
  components: {
    ListSwiper,
    ListHr,
    ArticleItems,
    ArticlePage,
    MyInfo,
    MyLabel,
    ListNews,
    ListLinks,
    ArticleClassify
  },
  data(){
    return {
      page: {
        current: 1,
        total: 0,
        pageSize: 10,
        user_id: 0,
        classify_id: 0,
        word: '',

        pageSizeOptions: [10,20,30,50],
        placement: 'top',
        showTotal: true,
        showElevator: true,
        showSizer: true,
        transfer: true,
        prevText: '上一页',
        nextText: '下一页',
      },
      pageDefault: {
        current: 1,
        total: 0,
        pageSize: 10,
        user_id: 0,
        classify_id: 0,
        word: '',
      }
    }
  },
  computed: {
    ...mapGetters('user',{
      user: 'user',
      isLogined: 'isLogined'
    }),
    ...mapGetters('articles',{
      latest: 'latest',
      hot: 'hot',
      friendLinks: 'friendLinks',
      classify: 'classify',
      listParams: 'listParams'
    })
  },
  methods:{

    ...mapActions('user',{

    }),

    ...mapActions('articles',{
      getTopNews: 'getTopNews',
      getArticles: 'getArticles',
    }),

    changeClassify(id){
      this.page.classify_id = id
      this.updatePageList()
    },

    updatePageList(){
      let data = {
        current: this.page.current,
        pageSize: this.page.pageSize,
        user_id: this.page.user_id,
        classify_id: this.page.classify_id,
        word: this.page.word,
      }
      console.log('date 1',data);
      return this.getArticles(data)
        .then(res=>{
          this.setPageMeta(res._meta)
        })
    },
    setPageMeta(page){
      this.page.current = page.currentPage
      this.page.pageSize = page.perPage
      this.page.total = page.totalCount
    },
    pageInit(type='all'){
      this.page.current = this.pageDefault.current
      this.page.pageSize = this.pageDefault.pageSize
      this.page.total = this.pageDefault.total
      if ( type == 'page' ) {
        return
      }
      this.page.user_id = this.pageDefault.user_id
      this.page.classify_id = this.pageDefault.classify_id
      this.page.word = this.pageDefault.word
    },
    // 设置分页参数
    getPageParams(params){
      isDefined(params.current) && (this.page.current = params.current)
      isDefined(params.pageSize) && (this.page.pageSize = params.pageSize)
      isDefined(params.user_id) && (this.page.user_id = params.user_id)
      isDefined(params.classify_id) && (this.page.classify_id = params.classify_id)
      isDefined(params.word) && (this.page.word = params.word)
    },
    onPageSizeChange(pageSize){
      this.getPageParams({
        current: 1,
        pageSize,
      })
      return this.updatePageList()
    },
    onPageChange(current){
      this.getPageParams({
        current,
      })
      return this.updatePageList()
    }
  },
  created(){
    // 页面数据初始化
    // this.getTopNews()
    // 获取文章数据
    this.pageInit()
    this.getPageParams(this.$route.params)
    this.updatePageList()
  },
  watch: {
    // 监听路由参数变化 仅包括 分类id和用户id 忽略未传参数
    listParams: function (params,oldValue) {
        this.pageInit('all')
        if ( params ) {
          let {
            // 传0表示全部, 不传表示不变
            classify_id=undefined,
            user_id=undefined,
            word=undefined,
          } = params
          console.log('start: ',params);
          this.getPageParams({
            classify_id,
            word,
            user_id,
          })
          this.updatePageList()
        }
      },
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

.info-div-top {
  padding-top 30px
}
</style>
