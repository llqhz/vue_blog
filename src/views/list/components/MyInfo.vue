<template>
  <div class="about">
    <div class="avatar">
      <img :title="user.nickname" :src="user.avatar" :alt="user.nickname">
    </div>
    <div class="topspace-info">
      <h1>{{ user.signature_title }}</h1>
      <p>{{ user.signature_desc }}</p>
    </div>
    <div class="about_me">
      <p>
        <icon type="ios-contact" />
        <label for="">
          网名： <span class="value">{{ user.nickname }}</span>
        </label>
      </p>
      <p>
        <Icon type="logo-css3" />
        <label for="">
          职业： <span class="value">{{ user.job }}</span>
        </label>
      </p>
      <p>
        <Icon type="md-home" />
        <label for="">
          籍贯： <span class="value">{{ user.address }}</span>
        </label>
      </p>
      <p>
        <Icon type="ios-call" />
        <label for="">
          电话： <span class="value">{{ user.mobile }}</span>
        </label>
      </p>
      <p>
        <Icon type="ios-mail" />
        <label for="">
          邮箱： <span class="value">{{ user.email }}</span>
        </label>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'MyInfo',
  data(){
    return {

    }
  },
  computed: {
    ...mapGetters('user',{
      user: 'user'
    })
  },
  methods: {

  },
  created(){

  }

}
</script>



<style scoped>
.about {
  overflow: hidden;
  background:  url(https://www.yangqq.com/skin/850/images/banner.png) no-repeat top center;
  position: relative;
}
.about::after {
  filter: blur(1px);
  content: '';
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: 5%;
  z-index: 1;
  background: inherit;
}
.avatar {
    margin: 80px auto 20px;
    width: 100px;
}
.avatar img {
  width: 100px;
  border-radius: 50%;
  transition: border-radius 0.2s;
  cursor: pointer;
}
.avatar img:hover {
  border-radius: 0;
  border: 1px solid rgba(0, 0, 0,0.2);
  padding: 2px;
}

.topspace-info {
    background: rgba(0, 0, 0,0.01);
    padding: 40px 20px;
    color: slategray;
    box-shadow: 2px 2px 1px rgba(0, 0, 0,0.1);

    position: relative;
}
.topspace-info p {
  color: unset;
}
.topspace-info::after {
  filter: blur(1px);
  content: '';
  left: 0;
  top: 0;
  position: absolute;
  width: 101%;
  height: 103%;
  z-index: 1;
  background: rgba(0, 0, 0,0.1);
}

.about_me {
  padding: 20px 25px;
  font-size: 13px;
}
.about_me p {
  line-height: 25px;
  height: 25px;
}
.about_me p label {
  margin-left: 4px;
}
</style>
