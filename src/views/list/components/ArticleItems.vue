<template>
  <ul>
    <li v-for="(items,index) in [1,2,3,4,5,6,7,8,9,10,11,22]" :key='index'>
      <row class="row">
        <i-col :xs="24" :sm="8" class="col-left">
          <div class="img-left">
            <!-- <img src="http://img1.qunarzz.com/piao/fusion/1806/ee/b889bce65d6dcf02.jpg_750x200_b1cb6a9f.jpg" alt=""> -->
          </div>
        </i-col>
        <i-col :xs="24" :sm="16" class="col-right">
          <h3>从摄影作品中获取网页颜色搭配技巧</h3>
          <p class="author">
            作者：<span class="name">筱怪</span> &nbsp;
            发表于：<time>2018-10-23</time>
          </p>
          <div class="content">
            作为一个优秀、专业的网页设计师，首先要了解各种颜色的象征，以及不同类型网站常用的色彩搭配。色彩搭配看似复杂,但并不神秘。一般来说,网页的背景色应该柔和一些、素一些、淡一些,再配上深色的文字,使人看起来自然、舒畅。色彩是人的视觉最敏感的东西。主页的色彩处理得好，可以锦上添花，达到事半功倍的效果。
          </div>
          <div class="label">
            <label for="">分类：[<span>网站建设</span>]</label>
            <label for="">浏览：<span>459</span></label>
            <label for="">评论：<span>30</span></label>
          </div>
        </i-col>
      </row>
      <divider class="divider" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ArticleItems',
  data: () => {
    return {

    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 10px;
  padding-bottom: 0px;
}
.label {
  margin-top: 3px;
  font-weight: normal;
  font-size: 9px;
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
}
.col-left .img-left {
  background-image: url(http://img1.qunarzz.com/piao/fusion/1806/ee/b889bce65d6dcf02.jpg_750x200_b1cb6a9f.jpg);
  width: 100%;
  background-origin: content-box;
  background-position: center;
  background-size: cover;
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
    height: 45vw;
    margin: 0;
    margin-bottom: 5px;
  }
  .row .col-right h3 {
    text-indent: 0;
  }
}

.col-right {
  padding: 5px;
}
/* 标题 */
.col-right h3 {
  text-indent: 1em;
  cursor: pointer;
}
.col-right h3:hover{
  color: #333;
  text-shadow: 1px 1px 2px #888;
}
.author {
  text-align: right;
  font-weight: normal;
  font-size: 9px;
  color: #778899;
}
.author .name,.author time {
  font-weight: 900;
  vertical-align: baseline;
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
</style>
