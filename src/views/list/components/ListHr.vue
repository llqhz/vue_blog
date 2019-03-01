<template>
  <h2>
    <p>
      <span>{{action}}</span>
      {{ name }}
    </p>
  </h2>
</template>

<script>
export default {
  name: 'ListHr',
  props: {
    titles: {
      default: '推荐,文章'
    }
  },
  computed: {
    action: function () {
      var arr = this.titles.split(',')
      return arr[0]
    },
    name: function () {
      var arr = this.titles.split(',')
      return arr[1]
    }
  }
}
</script>

<style scoped>
* {
  border: none;
}
h2 {
    font-size: 14px;
    font-family: "宋体";
    letter-spacing: 2px;
    border-bottom: 3px solid #c5c8ce;

    margin-top: 5px;
    /* margin-bottom: 5px; */
}

h2 p {
  color: #fff;
  display: inline-block;
  padding-left: 3px;
  padding-right: 3px;
  margin-left: 20px;
  background-color: #c5c8ce;
  box-shadow: 5px 3px 2px rgba(0,0,0,0.1);
}

h2 p span {
  font-weight: 700;
  font-size: 16px;
  margin-right: -5px;
}

</style>
