<template>
  <ul>
    <li v-for="(link,index) in news" :key='index'>
      <a @click="toArticle(link.id)" :title='link.title'>{{ link.title }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ListNews',
  props: {
    news: {
      default(){
        return []
      },
    }
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


<style scoped>
ul {
  list-style-position: inside;
  margin-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;

  font-size: 13px;
}
ul li {
  margin-top: 5px;
  margin-bottom: 9px;
}
ul li a:hover {
  text-shadow: 1px 1px 1px #000;
}

ul li a {
  color: #17233d;
  text-shadow: 1px 1px 1px #aeafaf;
}
</style>
