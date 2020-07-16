<template>
  <div v-show="article.title">
    <h2 class="title">{{ article.title }}</h2>
    <h4 class="sub-title">{{ article.sub_title }}</h4>
    <p class="author">
      作者：<span class="name">{{ article.author }}</span> &nbsp;
      发表于：<time >{{ article.updated_at }}</time>
    </p>
    <div class="markdown-body" v-if="article.music">
        <music :src='article.music'></music>
    </div>
    <divider class="divider" />
    <div class="markdown-body" v-html='content'>
    </div>
    <divider class="divider" />
    <div class="label markdown-body">
      <label for="">分类：[<span>{{ article.classify }}</span>]</label>
      <label for="">浏览：<span>{{ article.view_num }}</span></label>
      <label for="">评论：<span>{{ article.comment_num }}</span></label>
      <label for="">点赞：<icon type="thumbsup"></icon> <span>{{ article.love_num }}</span></label>
    </div>
  </div>
</template>

<script>
// import Stackedit from 'stackedit-js'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
// import 'highlight.js/styles/monokai-sublime.css'
import 'highlight.js/styles/github.css'
import music from '@/views/common/tools/music'

import { mapGetters, mapActions } from "vuex";


const md = new MarkdownIt({
  html: true,
  xhtmlOut: true,
  breaks: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(lang, str, true).value +
               '</code></pre>'
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
  }
})
export default {
  name: 'Article',
  data: () => {
    return {

    }
  },
  computed: {
    content: function () {
      if ( this.article.content_type==1 ) {
        return md.render(this.article.content)
      }
      return this.article.content
    },
    ...mapGetters('article',{
      article: 'article'
    })

  },
  created(){
    var params = this.$route.query
    if ( params && params.id ) {
      this.getArticle(params.id)
      .then(res => {
        document.title = this.article.title
      })
      .catch(err=>{
          this.$Message.error('获取文章内容出错');
        })
    } else {
      this.$Message.error('获取文章内容出错');
    }
  },
  mounted: function () {
    // hljs.initHighlightingOnLoad()
    //this.demo = this.$refs.demo.innerHTML
  },
  methods: {
    ...mapActions('article',{
      getArticle: 'getArticle'
    })
  },
  components: {
    music
  }
}
</script>

<style scoped>
@import '~@/assets/css/github-markdown.css';
/* @import 'highlight.js/styles/github.css' */

.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media screen and  (max-width: 767px) {
  .markdown-body {
    padding: 15px;
    font-size: 13px;
    line-height: 1.4;
  }
}
@media screen and (min-width: 768px) {
  h2.title {
    font-size: 35px;
  }
  h4.sub-title {
    font-size: 20px;
    margin-top: 0;
    margin-bottom: 15px;
  }
  div.label,p.author {
    font-size: 14px;
  }
}
textarea {
  width: 100%;
}

.title {
  text-align: center;
  margin-top: 20px;
}
.sub-title {
  text-align: center;
  margin: 10px auto;
}
.author {
  text-align: center;
  font-weight: normal;
  font-size: 9px;
  color: #778899;
  margin: 4px;
}
.author .name, .author time {
  font-weight: 900;
  vertical-align: baseline;
}
.divider {
  margin: 10px auto;
  background-color: #ccc;
  width: 90%;
  max-width: 950px;
}

.label {
  margin-top: 3px;
  font-weight: normal;
  font-size: 12px;
  color: #778899;

  padding-top: 10px;
  padding-bottom: 10px;
}
.label label {
  margin-right: 10px;
}
.label label span {
  font-weight: 900;
  cursor: pointer;
}

</style>
