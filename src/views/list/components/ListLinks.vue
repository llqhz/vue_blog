<template>
  <ul>
    <li><a href="#">个人空间</a></li>
    <li><a href="#">个人博客</a></li>
    <li><a href="#">个人网站</a></li>
    <li><a href="#">个人收藏</a></li>
  </ul>
</template>

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
