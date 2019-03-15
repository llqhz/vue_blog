<template>
  <div class="container">
    <row>
      <i-col :md="{span:20,offset:2}" :sm="24">
        <row>
          <i-col :xs='24' :sm="16" class="list-left">
              <div class="form-container">
                <h4 class="form-title">登录</h4>
                <mt-field label="用户名"  placeholder="请输入用户名" v-model="username" :attr="{name:'username'}" >
                  <span>{{ errors.first('username') }}</span>
                </mt-field>
                <mt-field label="密码" type='password' placeholder="请输入密码" v-model="password"></mt-field>
                <mt-field label="验证码" v-model="code" placeholder="请输入验证码">
                  <img src="http://wx.dwh027.com/2018/zt_sjh_cms/index.php/login/verify.html" onclick="this.src='http://wx.dwh027.com/2018/zt_sjh_cms/index.php/login/verify.html'+'?id='+Math.random()" height="30px" width="100px">
                </mt-field>
                <divider class="divider form-btns" />
                <row>
                  <i-col :xs='{span:8,offset:2}' :md='{span:6,offset:5}' class="list-left">
                    <mt-button type="primary" size="large" @click="handleSubmit">登录</mt-button>
                  </i-col>
                  <i-col :xs='{span:8,offset:2}' :md='{span:6,offset:1}' class="list-left">
                    <mt-button type="danger" size="large" @click="">注册</mt-button>
                  </i-col>
                </row>

              </div>
            <divider class="divider" />
          </i-col>
          <i-col :xs='{span:0}' :sm="8" class="list-right">
            <div class="right-content">
              <list-hr titles="最新,文章"></list-hr>
              <list-news :news="latest" />
              <list-hr titles="最热,文章"></list-hr>
              <list-news :news="hot" />
              <list-hr titles="友情,链接"></list-hr>
              <list-links :links='frendLinks' />
            </div>
          </i-col>
        </row>
      </i-col>
    </row>
  </div>

</template>

<script>

import ListHr from '../list/components/ListHr'
import ListLinks from '../list/components/ListLinks'
import ListNews from '../list/components/ListNews'

import { pageTo, notice } from "@/lib/utils";

import { mapGetters, mapActions } from "vuex";

export default {
  name : "Login",
  components: {
    ListHr,
    ListLinks,
    ListNews,
  },
  data : () => {
    return {
      username: '',
      password: '',
      code: '',
    }
  },
  computed:{
    ...mapGetters('user',{

    }),
    ...mapGetters('articles',{
      latest: 'latest',
      hot: 'hot',
      frendLinks: 'frendLinks'
    })
  },
  methods: {
    ...mapActions('user',{
      handleLogin : 'handleLogin',
      getUserInfo : 'getUserInfo'
    }),

    handleSubmit(){
      var user = {
        username: this.username,
        password: this.password,
        code: this.code
      }
      return this.handleLogin(user).then(res=>{
        return this.getUserInfo().then(res=>{
          pageTo({
            name: this.$config.homeName
          })
        })
      })
    }
  }
}
</script>

<style lang='stylus' scoped>
@import url('~@/assets/css/form.css');

.divider
  margin-top 10px
  margin-bottom 10px

.list-left
  border-right 2px solid #c2c3c3
  box-shadow 2px 2px 5px #999
  overflow hidden

.list-right
  padding 10px
  padding-top 0

  .right-content
    padding-top 30px
    background-color #f7f7f7

@media screen and (min-width 768px)
  .form-container
    min-height 1000px
    background #fff

  .form-title
    margin-bottom 50px

@media screen and (max-width 768px)
  .form-container
    min-height 800px
    .form-title
      margin-bottom 20px
      margin-top 20px

.divider.form-btns
  margin-top 20px
  margin-bottom 40px
</style>
