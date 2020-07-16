<template>
  <div class="content main-wrapper">
    <banner :banner="home.banner" />
    <green-section :article="home.greenSection" />
    <section class="gray-section">
      <article-preview 
        v-for="(article, index) in home.graySection" :key="index" 
        :direction="index%2 == 0 ? 'left' : 'right'"
        :article="article"
      />
    </section>
    <purple-section :articles="home.purpleSection"></purple-section>
  </div>
</template>

<script>
import Banner from '@/views/common/Banner'
import GreenSection from '@/views/common/GreenSection'
import ArticlePreview from '@/views/common/ArticlePreview'
import PurpleSection from '@/views/common/PurpleSection'
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Index',
  components: {
    Banner,
    GreenSection,
    ArticlePreview,
    PurpleSection
  },
  data: () => {
    return {
      
    }
  },
  computed: {
    ...mapGetters('articles', {
      home: 'home'
    })
  },
  mounted: function () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="stylus" scoped>

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
/* 某些移动端不支持: background-attachment: fixed;
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
 */

.gray-section {
    background: gray;
}
</style>

<style lang="stylus" scoped>
.content
  font-size 16px
</style>
