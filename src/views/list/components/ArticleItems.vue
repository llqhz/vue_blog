<template>
  <ul>
    <li v-for="(article,index) in articles"
      class="wow fadeInLeft"
      data-wow-duration="2s"
      :key='index'>
      <row class="row">
        <i-col :xs="8" :sm="8" class="col-left">
          <div class="img-left" :style="{ backgroundImage: 'url(' + article.image + ')' }">
            <!-- <img src="http://img1.qunarzz.com/piao/fusion/1806/ee/b889bce65d6dcf02.jpg_750x200_b1cb6a9f.jpg" alt=""> -->
          </div>
        </i-col>
        <i-col :xs="16" :sm="16" class="col-right">
          <h3 @click="toArticle(article.id)">{{ article.title }}</h3>
          <p class="author">
            作者：<span class="name">{{ article.author }}</span> &nbsp;
            发表于：<time>{{ article.updated_at }}</time>
          </p>
          <div class="content">
            {{ article.summary }}
          </div>
          <div class="label">
            <label for="">分类：[<span>{{ article.classify }}</span>]</label>
            <label for="">浏览：<span>{{ article.view_num }}</span></label>
            <label for="">评论：<span>{{ article.comment_num }}</span></label>
          </div>
        </i-col>
      </row>
      <divider class="divider" />
    </li>
    <li v-if="!articles || !articles.length">
      <p class="center">~ 暂无数据 ~</p>
    </li>
  </ul>
</template>

<script>

import { mapGetters, mapActions } from "vuex";
import { pageTo } from "@/lib/utils";

export default {
  name: 'ArticleItems',
  data: () => {
    return {

    }
  },
  computed: {
    ...mapGetters('articles',{
      articles: 'articles'
    })
  },
  created(){

  },
  methods: {
    toArticle(id){
      this.$router.push({
        name: 'article',
        query: {id:id}
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
ul {
  list-style-type: none;
  padding: 10px;
  padding-bottom: 0px;

  .center {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    font-size: 20px;
    margin: 40px;
    text-align: center;
  }
}
.label {
  margin-top: 3px;
  font-weight: normal;
  font-size: 10px;
  color: #778899;
}
.label label {
  margin-right: 10px;
}
.label label span {
  font-weight: 900;
  cursor: pointer;
}

.row,.col-left {
  display: flex;
  align-items:stretch;
}
.col-left {
  box-sizing: border-box;
  padding: 1px;
  border: 3px solid rgba(0, 0, 0, 0.15);
  padding: 5px;
  /* max-height: 150px; */
}
.col-left .img-left {
  /*
   * background-image: url(https://img1.qunarzz.com/piao/fusion/1806/ee/b889bce65d6dcf02.jpg_750x200_b1cb6a9f.jpg);
  */
  width: 100%;
  background-origin: content-box;
  background-position: center;
  background-size: cover;
}
.row .col-right h3 {
  font-size: 14px;
}
/* .left-content {
  max-height: 150px;
  overflow: hidden;
}
.left-content .img-left {
  background-image: url(http://img1.qunarzz.com/piao/fusion/1806/ee/b889bce65d6dcf02.jpg_750x200_b1cb6a9f.jpg);
  height: 100%;
  width: 100%;
}
.img-left img {
  width: 100%;
} */

@media (max-width: 768px) {
  .row {
    display: block;
  }
  .col-left {
    height: 32vw;
    margin: 0;
    margin-bottom: 5px;
  }
  .row .col-right h3 {
    text-indent: 0;
    font-size: 11px;
  }
  .col-right .content {
    margin: 3px auto;
    height: 17vw;
  }
  .label {
    margin-top: 0px;
  }
}

@media screen and (min-width: 769px) {
  .col-right .content {
    text-indent: 1.2em;
    height: 5.3vw;
  }
  .col-left {
    max-height: 150px;
  }
}

.col-right {
  padding: 5px;
}
/* 标题 */
.col-right h3 {
  text-indent: 1em;
  cursor: pointer;
  font-size: 12px;
}
.col-right h3:hover{
  color: #333;
  text-shadow: 1px 1px 2px #888;
}
.author {
  text-align: right;
  font-weight: normal;
  font-size: 10px;
  color: #778899;
}
.author .name,.author time {
  font-weight: 900;
  vertical-align: baseline;
}
.col-right .content {
  overflow: hidden;
  font-size: 10px;
}

ul li >>> .ivu-divider-horizontal {
  margin: 12px 0;
}
ul li:last-of-type >>> .ivu-divider-horizontal {
  margin-bottom: 0;
  height: 0;
}

.divider {
  background-color: #ccc;
}
ul li .divider >>> .ivu-divider-horizontal {
  margin: 14px 0;
}

</style>
