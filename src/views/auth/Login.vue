<template>
  <div class="container">
    <row>
      <i-col :md="{span:20,offset:2}" :sm="24">
        <row>
          <i-col :xs='24' :sm="16" class="list-left">
              <div class="form-container">
                <h4 class="form-title">登录</h4>
                <mt-cell title="用户名" class="mint-field">
                  <div class="mt-field-content">
                    <input type="text" v-model="username" placeholder="请输入用户名" class="mint-field-core" name="username" data-vv-as="用户名" v-validate="'required'">
                    <span class="ivu-notice-icon-error">{{ errors.first('username') }}</span>
                  </div>
                </mt-cell>
                <mt-cell title="密码" class="mint-field">
                  <div class="mt-field-content">
                    <input type="password" v-model="password" placeholder="请输入密码" class="mint-field-core" name="password" data-vv-as="密码" v-validate="'required'">
                    <span class="ivu-notice-icon-error">{{ errors.first('password') }}</span>
                  </div>
                </mt-cell>
                <mt-cell title="验证码" class="mint-field">
                  <div class="mt-field-content" style="flex:1">
                    <input type="text" v-model="code" placeholder="请输入验证码" class="mint-field-core" name="code" data-vv-as="验证码" v-validate="'required'">
                    <span class="ivu-notice-icon-error">{{ errors.first('code') }}</span>
                  </div>
                  <div>
                    <img :src="codeImg" @click="refreshCode" height="30px" width="100px">
                  </div>
                </mt-cell>
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

import { pageTo, notice, url } from "@/lib/utils";
import { mapGetters, mapActions } from "vuex";
import { getCodeImage } from "@/api/user";

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
      codeUrl: '',
      codeHash: '',
    }
  },
  computed:{
    ...mapGetters('user',{

    }),
    ...mapGetters('articles',{
      latest: 'latest',
      hot: 'hot',
      frendLinks: 'frendLinks'
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
    this.loadSignupParams()

  },
  methods: {
    ...mapActions('user',{
      handleLogin : 'handleLogin',
      getUserInfo : 'getUserInfo'
    }),

    refreshCode(){
      return getCodeImage()
      .then(res=>{
        this.codeUrl = res.url
        this.codeHash = res.hash
      })
    },

    loadSignupParams(){
      if ( this.$router.params ) {
        let {
          username='',
          password='',
        } = this.$router.params
        this.username = username
        this.password = password
      }
    },

    handleSubmit(){
      // 处理vue 绑定事件的错误，
      var user = {
        username: this.username,
        password: this.password,
        code: this.code,
        codeHash: this.codeHash,
      }
      return this.handleLogin(user).then(res=>{
        return this.getUserInfo().then(res=>{
          pageTo({
            name: this.$config.homeName
          })
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
