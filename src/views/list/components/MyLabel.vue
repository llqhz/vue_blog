<template>
  <ul>
    <li v-for="(tag,index) in tags" v-html="tag" :key='index'></li>
  </ul>
</template>

<script>
export default {
  name: 'MaLabel',
  props: {
    tags: {
      default: function () {
        return ['青空','study','青青唠叨']
      }
    }
  },
  data: () => {
    return {

    }
  }
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
