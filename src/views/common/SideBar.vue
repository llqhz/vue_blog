<template>
  <div>
    <div class="mask"></div>
    <div class="sideBar">
        <ul>
            <li><a href="#">item1</a></li>
            <li><a href="#">item2</a></li>
            <li><a href="#">item3</a></li>
            <li><a href="#">item4</a></li>
            <li><a href="#">item5</a></li>
        </ul>
    </div>
    <button class="back-to-top">
        返回顶部
    </button>
  </div>
</template>

<style scoped>
.sideBar {
    width: 300px;
    background: #888;
    position: fixed;
    z-index: 2;
    top: 0px;
    right: -300px;
    bottom: 0px;

    font-size: 16px;
}
.sideBar ul {
    margin: 20px 0;
    list-style-type: none;
    padding-top: 20px;
    padding-left: 20px;
}
.sideBar ul li {
    width: 200px;
    padding: 15px 20px;
}
.sideBar ul li:hover {
    background: rgba(0,0,0,0.2);
}
.sideBar ul li a {
    display: inline-block;
    width: 100%;
    text-decoration: none;
    color: white;
}

.mask {
    display: none;
    background: rgba(0,0,0,0.4);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

button,button:focus {
    border: 0px;
    padding: 14px 40px;
    outline-width: 0px;
    color: white;
    cursor: pointer;
}

.back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(0,0,0,0.5);

    display: none;
}
.back-to-top:focus {
    background: rgba(0,0,0,0.5);
}
.back-to-top:hover {
    background: rgba(0,0,0,0.7);
}

@media screen and (max-width: 660px) {
  body .sideBar {
      width: 220px;
  }
  .sideBar ul{
      padding-left: 10px;
  }
}
</style>
