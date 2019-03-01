<template>
  <ul>
    <li v-for="(link,index) in links" :key='index'>
      <a :href="link.url" :title="link.title">{{ link.title }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ListLinks',
  props: {
    links: {
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-top: 10px;
  padding-bottom: 30px;

  font-size: 14px;
}
ul li {
  border-bottom: 1px dotted #666;
  width: 50%;
  max-width: 200px;
  margin: 0 auto;
  text-align: center;
  margin-top: 10px;
  padding-bottom: 5px;
}

ul li a:hover {
  text-shadow: 1px 1px 1px #000;
}

ul li a {
  color: #17233d;
  text-shadow: 1px 1px 1px #aeafaf;
}
</style>
