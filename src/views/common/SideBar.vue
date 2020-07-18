<template>
  <div>
    <div class="mask"></div>
    <div class="sideBar">
      <ul>
        <li>
          <a href="javascript:void(0)" @click="toClassifyArticles(0)">  全部  </a>
        </li>
        <li v-for="(classify,index) in classifies" :key="classify.name">
          <a href="javascript:void(0)" @click="toClassifyArticles(classify.id)"> {{ classify.title }}  </a>
        </li>
        <hr class="sidebar-split">
        <template v-if="isLogined">
          <li>
            <a href="javascript:void(0)" @click="toImprove">  个人信息  </a>
          </li>
          <li v-if="false">
            <a href="javascript:void(0)" @click="toMyArticles">  我的文章  </a>
          </li>
          <li>
            <a href="javascript:void(0)" @click="toLogout">  退出  </a>
          </li>
        </template>
        <template v-else>
          <li @click='closeSidebar'>
            <router-link tag='a' to='login'>登录</router-link>
          </li>
        </template>
      </ul>
    </div>
    <button class="back-to-top">
      返回顶部
    </button>
  </div>
</template>

<script>

import { mapGetters, mapActions } from "vuex";
import { pageTo } from "@/lib/utils";

export default {
  name: 'SideBar',
  data(){
    return {

    }
  },
  computed:{
    ...mapGetters('user',{
      isLogined: 'isLogined',
      user: 'user'
    }),
    ...mapGetters('articles',{
      classifies: 'classify',
    })
  },
  methods: {
    ...mapActions('user',{
      logout: 'handleLogout',
    }),
    closeSidebar(){
      document.querySelector('.mask').click()
    },
    toImprove(){
      this.closeSidebar()
      pageTo('improve', {'user_id': this.user.id})
    },
    toLogout(){
      this.closeSidebar()
      this.logout().then(()=>{
        this.$Message.success({
          content: '注销成功',
          onClose: () => {
            pageTo('index')
          }
        })
      })
      .catch(err=>{
        console.log(err);
      })
    },
    ...mapActions('articles',{
        updateParams: 'updateParams'
    }),
    toMyArticles(){
      let params = {
        user_id: this.user.id
      }
      this.updateParams(params)
      this.$router.push({name:'list', params})
      this.closeSidebar()
    },
    toClassifyArticles(classify_id){
      let params = {
        user_id: null,
        classify_id: classify_id,
        current: 1,
        pageSize: 10,
        word: "",
      };
      this.updateParams(params)
      this.$router.push({name:'list', params})
      this.closeSidebar()
    },
    onSidebarClick(menu){
      var location = {
        name: 'list',
        params: {
          type_id: menu.type_id
        }
      }
      this.$router.push(location)
      this.closeSidebar()
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

  .sidebar-split {
    box-shadow: 0px 0px 5px white;
    border-bottom: 1px solid #d3d3d36a;
    border-left: none;
    border-right: none;
    border-top: none;
    margin-bottom: 4px;
    height: 0px;
  }
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
