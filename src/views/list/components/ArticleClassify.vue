<template>
  <ul>
    <li v-for="(tag,index) in mtags" v-html="tag.title" :key='index'></li>
  </ul>
</template>

<script>
export default {
  name: 'ArticleClassify',
  props: {
    tags: {
      default: function () {
        return []
      }
    }
  },
  data: () => {
    return {

    }
  },
  computed:{
    mtags(){
      // 字符串 或 数组
      return this.tags
    }
  },
}
</script>



<style scoped>
ul {
  padding: 20px 30px;
  overflow: hidden;
  font-size: 14px;
}
ul li {
  display: inline-block;
  text-align: -webkit-match-parent;

  padding: 2px 5px;
  display: inline-block;
  margin-right: 5px;
  color: #666;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);

  cursor: pointer;
}

ul li:hover {
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
}
</style>
