<template>
  <div class="form-container">
    <h4 class="form-title">注册</h4>
    <mt-field label="姓名" placeholder="请输入姓名" v-model="name"></mt-field>
    <mt-field label="昵称" placeholder="请输入昵称" v-model="nickname"></mt-field>
    <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    <mt-field label="地址" placeholder="请输入地址" type="tel" v-model="phone"></mt-field>
    <mt-radio
      title="性别"
      v-model="sex"
      :options="[{label:'0',value:'未知'}, {label:'1',value:'男'},{label:'2',value:'女'}]">
    </mt-radio>
    <mt-radio
      title="性别"
      v-model="job"
      :options="[{label:'0',value:'其他'}, {label:'1',value:'学生'},{label:'2',value:'教师'}]">
    </mt-radio>
    <mt-cell title="头像" is-link>
      <span style="color: green">这里是元素</span>
    </mt-cell>
    <mt-field label="个性签名" placeholder="请输入签名" v-model="signature_title"></mt-field>
    <mt-field label="自我介绍" placeholder="请输入自我介绍" type="textarea" rows="4" v-modal="signature_desc"></mt-field>
  </div>
</template>

<script>

export default {
  name : "Submit",
  data : () => {
    return {
      name: '',
      avatar: '',
      nickname: '',
      sex: 0,
      age: 22,
      job: 0,
      address: '',
      mobile: '',
      email : '',
      tags: '',
      password : '',
      signature_title : '',
      signature_desc : '',
    }
  }
}
</script>

<style>

@import url('~@/assets/css/form.css');

  .form-container {

  }
</style>
