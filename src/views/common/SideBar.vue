<template>
  <div>
    <div class="mask"></div>
    <div class="sideBar">
      <ul>
          <li>
            <router-link tag='a' to="/improve">  个人信息  </router-link>
          </li>
          <li v-for="(menu,index) in menuItems" :key="index" @click="onSidebarClick(menu)">
            <a :title="menu.name"> {{ menu.name }} </a>
          </li>
      </ul>
    </div>
    <button class="back-to-top">
      返回顶部
    </button>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data(){
    return {
      menuItems: [
        { type_id: 1, name: '网站建设' },
        { type_id: 2, name: '数据管理' },
      ],
    }
  },
  methods: {
    onSidebarClick(menu){
      var location = {
        name: 'list',
        params: {
          type_id: menu.type_id
        }
      }
      console.log(location);

      this.$router.push(location)
      document.querySelector('.mask').click()
    }
  }
}
</script>


<style lang='stylus' scoped>
zIndex = 2000

.sideBar {
  width: 300px;
  background: #888;
  position: fixed;
  z-index: zIndex;
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
  padding-right: 20px;
}
.sideBar ul li {
  width: 100%;
  padding: 0px 20px;
}
.sideBar ul li:hover {
  background: rgba(0,0,0,0.2);
}
.sideBar ul li a {
    display: inline-block;
    width: 100%;
    height: 45px;
    line-height: 45px;
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

    z-index: zIndex;
}

button,button:focus {
    border: 0px;
    padding: 10px 30px;
    outline-width: 0px;
    color: white;
    cursor: pointer;
    font-size: 14px;
}

.back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(0,0,0,0.5);

    display: none;
    z-index: zIndex;
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
      font-size: 12px;
  }
  .sideBar ul{
      padding-left: 10px;
  }
  .sideBar ul li {
      width: 200px;
      padding: 0px 15px;
  }
  .sideBar ul li a {
      height: 38px;
      line-height: 38px;
  }
  button,button:focus {
      font-size: 12px;
      padding: 10px 28px;
  }
}
</style>
