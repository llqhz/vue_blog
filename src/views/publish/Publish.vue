<template>
  <div class="container">
    <row>
      <i-col :md="{span:20,offset:2}" :sm="24">
        <row>
          <i-col :xs='24' :sm="16" class="list-left">
            <article-form :formTitle='formTitle'></article-form>
          </i-col>
          <i-col :xs='{span:0}' :sm="8" class="list-right">
            <div class="right-content">
              <my-info />
              <list-hr titles="个性标签"></list-hr>
              <my-label :tags="user.tags" />
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
import MoMarkdown from '@/views/common/tools/MoMarkdown.vue'

import ListHr from '../list/components/ListHr'
import MyLabel from '../list/components/MyLabel'
import ListLinks from '../list/components/ListLinks'
import ListNews from '../list/components/ListNews'
import MyInfo from '../list/components/MyInfo'

import ArticleForm from './ArticleForm'

import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Publish',
  components: {
    MoMarkdown,
    ListHr,
    MyLabel,
    ListLinks,
    ListNews,
    MyInfo,
    ArticleForm
  },
  data () {
    return {
      formTitle: '编辑文章'
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
  mounted () {

  }
}
</script>

<style lang="stylus">
@import url('~@/assets/css/form.css');

@media screen and (min-width 768px)
  .form-container
    min-height 1000px
    background-color #fff

  .form-title
    margin-bottom 20px
    letter-spacing 10px
    padding-left 10px

@media screen and (max-width 768px)
  .form-container
    min-height 800px
    .form-title
      margin-bottom 20px
      margin-top 20px
      letter-spacing 7px
      padding-left 7px

.divider.form-btns
  margin-top 20px
  margin-bottom 20px


</style>
