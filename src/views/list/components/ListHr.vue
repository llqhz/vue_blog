<template>
  <h2>
    <p>
      <span>推荐</span>
      文章
    </p>
  </h2>
</template>

<script>
export default {
  name: 'ListHr'
}
</script>

<style scoped>
* {
  border: none;
}
h2 {
    font-size: 14px;
    font-family: "微软雅黑";
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
}

</style>
