<template>
  <div class="container">
    <row>
      <i-col :md="{span:20,offset:2}" :sm="24">
        <row>
          <i-col :xs='24' :sm="16" class="list-left">
              <div class="form-container">
                <h4 class="form-title">注册</h4>
                <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
                <mt-field label="昵称" placeholder="请输入昵称" v-model="nickname"></mt-field>
                <mt-field label="密码" type='password' placeholder="请输入昵称" v-model="password"></mt-field>
                <mt-field label="确认密码" type='password' placeholder="请输入密码" v-model="repassword"></mt-field>
                <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
                <mt-field label="验证码" v-model="code" placeholder="请输入验证码">
                  <img :src="codeImg" @click="refreshCode" height="30px" width="100px">
                </mt-field>
                <divider class="divider form-btns" />
                <row>
                  <i-col :xs='{span:8,offset:2}' :md='{span:6,offset:5}' class="list-left">
                    <mt-button @click="handleSubmit" type="primary" size="large">注册</mt-button>
                  </i-col>
                  <i-col :xs='{span:8,offset:2}' :md='{span:6,offset:1}' class="list-left">
                    <mt-button type="danger" @click="jumpToLgin" size="large">登录</mt-button>
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
              <list-links :links='friendLinks' />
            </div>
          </i-col>
        </row>
      </i-col>
    </row>
  </div>

</template>

<script>

import ListHr from '../list/components/ListHr'
import MyLabel from '../list/components/MyLabel'
import ListLinks from '../list/components/ListLinks'
import ListNews from '../list/components/ListNews'

import { mapGetters, mapActions } from "vuex";
import { pageTo, notice, url } from "@/lib/utils";
import { getCodeImage } from "@/api/user";

export default {
  name : "Submit",
  components: {
    ListHr,
    MyLabel,
    ListLinks,
    ListNews,
  },
  data : () => {
    return {
      username: '',
      password: '',
      repassword: '',
      nickname: '',
      email : '',
      code: '',
      codeUrl: '',
      codeHash: '',
    }
  },
  computed: {
    ...mapGetters('articles',{
      latest: 'latest',
      hot: 'hot',
      friendLinks: 'friendLinks'
    }),

    codeImg(){
      if (!this.codeUrl && !this.isCodeGetInited) {
        this.isCodeGetInited = true
        this.refreshCode()
      }
      return url(this.codeUrl,'api_')
    }
  },

  mounted(){
    /* setTimeout(() => {
      pageTo('login',{id:3});
    }, 2000); */
  },

  methods: {
    refreshCode(){
      return getCodeImage()
      .then(res=>{
        this.codeUrl = res.url
        this.codeHash = res.hash
      })
    },

    ...mapActions('user',{
      handleSignup: 'handleSignup'
    }),

    jumpToLgin() {
      pageTo('login')
    },

    handleSubmit(){
      // 处理vue 绑定事件的错误，
      var user = {
        username: this.username,
        password: this.password,
        code: this.code,
        repassword: this.repassword,
        nickname: this.nickname,
        email: this.email,
        codeHash: this.codeHash,
      }
      return this.handleSignup(user).then(res=>{
        this.$Message.success({
          content: '注册成功', 
          onClose: () => {
            pageTo('login',res)
          }
        })
      })
      .catch(err=>{
        this.$Message.warning(err.message)
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
    background-color #fff

  .form-title
    margin-bottom 20px

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
