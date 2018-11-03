<template>
  <div class="content main-wrapper">
    <banner />
    <green-section />
    <section class="gray-section">
      <article-preview direction='left' />
      <article-preview direction='right' />
      <article-preview direction='left' />
      <article-preview direction='right' />
      <article-preview direction='left' />
      <article-preview direction='right' />
    </section>
    <purple-section></purple-section>

  </div>
</template>

<script>
import Banner from '@/views/common/Banner'
import GreenSection from '@/views/common/GreenSection'
import ArticlePreview from '@/views/common/ArticlePreview'
import PurpleSection from '@/views/common/PurpleSection'

export default {
  components: {
    Banner,
    GreenSection,
    ArticlePreview,
    PurpleSection
  },
  name: 'Index',
  data: () => {
    return {
      msg: 'hello'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

/* .wrapper {
    max-width: 860px;
    margin: 0 auto;
    padding: 10px;
} */

/* .main-wrapper {
    background: #444 url('../img/banner.jpg');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-size: cover;
    background-size: contain;
    background-position: center center;
} */
/* 某些移动端不支持: background-attachment: fixed; */
.main-wrapper:before {
  content: ' ';
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #444 url('~@/assets/img/banner.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.gray-section {
    background: gray;
}
</style>
