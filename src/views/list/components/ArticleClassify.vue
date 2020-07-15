<template>
  <ul>
    <div>
      <li @click="changeClassify(0)" :class="{active:i_tag==0}" >全部</li>
      <li v-for="(tag,index) in mtags" :class="{active:i_tag==tag.id}" @click="changeClassify(tag.id)" v-html="tag.title" :key='index'></li>
    </div>
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
    },
    i_tag: {}
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
  methods: {
    changeClassify(id){
      this.$emit('changeClassify',id)
    }
  }
}
</script>



<style lang="stylus" scoped>
ul {
  padding: 20px 30px;
  overflow: hidden;
  font-size: 14px;
  position: relative;
  height: 88px;

  div {
    position: absolute;
  }
}
ul li {
  display: inline-block;
  text-align: -webkit-match-parent;

  padding: 2px 5px;
  display: inline-block;
  margin-right: 8px;
  color: #666;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);

  cursor: pointer;
}

@keyframes hover-zoom {
  0% {
    font-size: 14px;
  }
  100% {
    font-size: larger;
    color: rgb(58, 57, 57);
  }
}

ul li:hover,ul li.active {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  animation: hover-zoom 0.5s;
  font-size: larger;
  color: rgb(58, 57, 57);
}
</style>
