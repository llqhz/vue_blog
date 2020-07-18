<template>
  <div class="container">
    <row>
      <i-col :md="{span:20,offset:2}" :sm="24">
        <row>
          <i-col :xs='24' :sm="16" class="list-left">
              <div class="form-container">
                <h4 class="form-title">完善资料</h4>
                <mt-field label="姓名" placeholder="请输入姓名" v-model="model.name"></mt-field>
                <mt-field label="昵称" placeholder="请输入昵称" v-model="model.nickname"></mt-field>
                <image-upload label="头像" placeholder="请插入头像" v-model="model.avatar"></image-upload>
                <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="model.email"></mt-field>
                <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="model.mobile"></mt-field>
                <mt-field label="地址" placeholder="请输入地址" type="tel" v-model="model.address"></mt-field>
                <mt-radio
                  title="性别"
                  v-model="model.sex"
                  :options="sex_ops">
                </mt-radio>
                <mt-radio
                  title="职业"
                  v-model="model.job"
                  :options="job_ops">
                </mt-radio>
                <mt-field label="个性标签" placeholder="请输入个性标签（用英文逗号‘,’分割）"  v-model="model.tags"></mt-field>
                <mt-field label="个性签名" placeholder="请输入签名" v-model="model.signature_title"></mt-field>
                <mt-field label="自我介绍" placeholder="请输入自我介绍" type="textarea" rows="4" v-model="model.signature_desc"></mt-field>
                <divider class="divider form-btns" />
                <row>
                  <i-col :xs='{span:20,offset:2}' :md='{span:6,offset:5}' class="list-left">
                    <mt-button type="primary" @click="submit" size="large">保存</mt-button>
                  </i-col>
                </row>
              </div>
            <divider class="divider" />
          </i-col>
          <i-col :xs='{span:0}' :sm="8" class="list-right">
            <div class="right-content">
              <list-hr titles="个性,标签"></list-hr>
              <my-label :tags="user.tags" />
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
import ImageUpload from '@/views/common/tools/ImageUpload.vue'

import { mapGetters, mapActions } from "vuex";
import { pageTo } from "@/lib/utils";

export default {
  name : "Improve",
  components: {
    ListHr,
    MyLabel,
    ListLinks,
    ListNews,
    ImageUpload
  },
  data : () => {
    return {
      model: {
      },
    }
  },
  watch:{
    model: {
      handler(newValue,oldValue){
        console.log(newValue);
      },
      deep: true
    },
    user(newValue,oldValue){
      this.setModel(newValue)
    }
  },
  computed: {
    ...mapGetters('articles',{
      latest: 'latest',
      hot: 'hot',
      friendLinks: 'friendLinks'
    }),

    ...mapGetters('user',{
      user: 'user',
      ops: 'ops'
    }),

    sex_ops(){
      return this.transOps(this.ops.sex)
    },
    job_ops(){
      return this.transOps(this.ops.job)
    },
  },
  created(){
    this.setModel(this.user)
  },
  methods: {
    ...mapActions('user',{
      handleImprove: 'handleImprove'
    }),

    transOps(ops){
      return ops.map(op => {
         return {
           label: String(op.name),
           value: String(op.value)
         }
      });
    },
    setModel(user){
      this.model = {
        id: user.id,
        name: user.name,
        nickname: user.nickname,
        email: user.email,
        job: String(user.job),
        mobile: user.mobile,
        sex: String(user.sex),
        tags: user.tags,
        signature_title: user.signature_title,
        signature_desc: user.signature_desc,
        avatar: user.avatar,
        address: user.address
      }
    },
    submit(){
      return this.handleImprove(this.model)
        .then(res=>{
          this.$Message.success({
            content: '修改成功',
            onClose(){
              pageTo('index')
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
