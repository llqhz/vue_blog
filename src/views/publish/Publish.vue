<template>
  <div class="container">
    <row>
      <i-col :md="{span:20,offset:2}" :sm="24">
        <row>
          <i-col :xs='24' :sm="16" class="list-left">
            <div class="form-container">
              <h4 class="form-title">完善资料</h4>
              <mt-field label="姓名" placeholder="请输入姓名" v-model="name"></mt-field>
              <mt-field label="昵称" placeholder="请输入昵称" v-model="nickname"></mt-field>
              <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
              <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="mobile"></mt-field>
              <mt-field label="地址" placeholder="请输入地址" type="tel" v-model="address"></mt-field>
              <mt-radio
                title="性别"
                v-model="sex"
                :options="sexOps">
              </mt-radio>
              <mt-radio
                title="性别"
                v-model="job"
                :options="jobOps">
              </mt-radio>
              <mt-cell title="头像" is-link>
                <span style="color: green">这里是元素</span>
              </mt-cell>
              <mt-field label="个性签名" placeholder="请输入签名" v-model="signature_title"></mt-field>
              <mt-field label="自我介绍" placeholder="请输入自我介绍" type="textarea" rows="4" v-model="signature_desc"></mt-field>
              <divider class="divider form-btns" />
              <row>
                <i-col :xs='{span:8,offset:2}' :md='{span:6,offset:5}' class="list-left">
                  <mt-button type="primary" size="large">登录</mt-button>
                </i-col>
                <i-col :xs='{span:8,offset:2}' :md='{span:6,offset:1}' class="list-left">
                  <mt-button type="danger" size="large">注册</mt-button>
                </i-col>
              </row>
            </div>
            <divider class="divider" />
            <mo-markdown ></mo-markdown>
            <hr>
            <vue-ueditor-wrap v-model="msg"></vue-ueditor-wrap>
          </i-col>
          <i-col :xs='{span:0}' :sm="8" class="list-right">
            <div class="right-content">
              <my-info :tags="user.tags" />
              <list-hr titles="个性标签"></list-hr>
              <my-label :tags="tags" />
              <list-hr titles="最新,文章"></list-hr>
              <list-news />
              <list-hr titles="最热,文章"></list-hr>
              <list-news />
              <list-hr titles="友情链接"></list-hr>
              <list-links />
            </div>
          </i-col>
        </row>
      </i-col>
    </row>
  </div>
</template>

<script>
import MoMarkdown from '@/views/common/tools/MoMarkdown.vue'

import ListHr from '../list/components/ListHr'
import MyLabel from '../list/components/MyLabel'
import ListLinks from '../list/components/ListLinks'
import ListNews from '../list/components/ListNews'
import MyInfo from '../list/components/MyInfo'

import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Publish',
  components: {
    MoMarkdown,
    ListHr,
    MyLabel,
    ListLinks,
    ListNews,
    MyInfo,
  },
  data () {
    return {
      value: '',
      msg: '<h1>success</h1>',

      name: '',
      avatar: '',
      nickname: '',
      sex: '0',
      age: 22,
      job: '0',
      address: '',
      mobile: '',
      email : '',
      tags: '',
      password : '',
      signature_title : '',
      signature_desc : '',

      tags: ['青空','study','青青唠叨','青空','study','青青唠叨','青空','study','青青唠叨','青空','study','青青唠叨'],
      sexOps: [{
          label: '未知',
          value: '0',
        },
        {
          label: '男',
          value: '1'
        },
        {
          label: '女',
          value: '2'
        }],
      jobOps : [{'label':'其他','value':'0'}, {'label':'学生','value':'1'},{'label':'教师','value':'2'}],
    }
  },
  computed: {
    ...mapGetters('user',{
      user: 'user',
    }),
  },
  mounted () {

  }
}
</script>

<style lang="stylus">
@import url('~@/assets/css/form.css');

@media screen and (min-width 768px)
  .form-container
    min-height 1000px
    background-color #fff

  .form-title
    margin-bottom 20px
    letter-spacing 10px
    padding-left 10px

@media screen and (max-width 768px)
  .form-container
    min-height 800px
    .form-title
      margin-bottom 20px
      margin-top 20px
      letter-spacing 7px
      padding-left 7px

.divider.form-btns
  margin-top 20px
  margin-bottom 40px


</style>
