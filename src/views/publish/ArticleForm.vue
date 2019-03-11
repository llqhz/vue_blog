<template>
  <div>
    <div class="form-container">
      <h4 class="form-title">{{ formTitle }}</h4>
      <mt-field label="标题" placeholder="请输入标题" v-model="article.title"></mt-field>
      <mt-field label="副标题" placeholder="请输入副标题" v-model="article.sub_title"></mt-field>
      <image-upload label="封面图" placeholder="请插入封面图" v-model="article.image"></image-upload>
      <mt-field label="背景音乐" placeholder="请插入背景音乐(选填)" v-model="article.music"></mt-field>
      <mt-field label="文章简介" placeholder="请输入文章简介" type="textarea" rows="4"  v-model="article.summary"></mt-field>
      <mt-radio
        title="文章分类"
        v-model="article.classify_id"
        :options="classify_id_ops">
      </mt-radio>
      <mt-radio
        title="文章类型"
        v-model="article.content_type"
        :options="content_type_ops">
      </mt-radio>
      <mt-cell title="文章内容"></mt-cell>
      <div class="article-edit-content" v-show="article.content_type==='1'">
        <mo-markdown v-model="article.content"></mo-markdown>
      </div>
      <div class="article-edit-content" v-show="article.content_type!=='1'">
        <vue-ueditor-wrap v-model="article.content" :config="ueditorConfig"></vue-ueditor-wrap>
      </div>
      <divider class="divider form-btns" />
      <row>
        <i-col :xs='{span:8,offset:2}' :md='{span:6,offset:5}' class="list-left">
          <mt-button type="primary" size="large">保存</mt-button>
        </i-col>
        <i-col :xs='{span:8,offset:2}' :md='{span:6,offset:1}' class="list-left">
          <mt-button type="danger" size="large">重置</mt-button>
        </i-col>
      </row>
    </div>
    <divider class="divider" />

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MoMarkdown from '@/views/common/tools/MoMarkdown.vue'
import ImageUpload from '@/views/common/tools/ImageUpload.vue'

export default {
  name: 'ArticleForm',
  components: {
    MoMarkdown,
    ImageUpload
  },
  data:() => {
    return {
      ueditorConfig: {
        // 初始容器高度
        initialFrameHeight: 600,
        // 初始容器宽度
        initialFrameWidth: '100%',
      }
    }
  },
  props: {
    article: {
      default: () => {
        return {
          content_type: '1',
          classify_id: '0',
        }
      }
    },
    formTitle: {
      default(){
        return '编辑文章'
      }
    }
  },
  computed: {
    ...mapGetters('article',{
      classify_id_ops: 'classify_id_ops',
      content_type_ops: 'content_type_ops'
    })
  }
}
</script>

<style lang="stylus" scoped>
.article-edit-content
  padding 2%

.divider.form-btns ~ div.ivu-row
  padding-bottom 20px

</style>

