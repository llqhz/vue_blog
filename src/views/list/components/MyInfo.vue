<template>
  <div class="about">
    <div class="avatar">
      <img title="筱怪" src="http://thirdwx.qlogo.cn/mmopen/vi_32/rgmtJfdPRoianrDeicYkkl5Y9cukTMCzvD2McCcpJ7ZJK2y23yVgtISrSKUjNFPJvblNuZbSepkVvFCc42xzgKbg/0" alt="">
    </div>
    <div class="topspace-info">
      <h1>执子之手，与子偕老</h1>
      <p>于千万人之中，我遇见了我所遇见的人....</p>
    </div>
    <div class="about_me">
      <p>
        <label for="">
          网名： <span class="value">DanceSmile | 即步非烟</span>
        </label>
      </p>
      <p>
        <label for="">
          职业： <span class="value">Web前端设计师、网页设计</span>
        </label>
      </p>
      <p>
        <label for="">
          籍贯： <span class="value">四川省—成都市</span>
        </label>
      </p>
      <p>
        <label for="">
          电话： <span class="value">13662012345</span>
        </label>
      </p>
      <p>
        <label for="">
          邮箱： <span class="value">dancesmiling@qq.com</span>
        </label>
      </p>
    </div>
  </div>
</template>

<style scoped>
.about {
  overflow: hidden;
  background:  url(http://www.yangqq.com/skin/850/images/banner.png) no-repeat top center;
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
  padding: 20px;
  font-size: 15px;
}
.about_me p {
  line-height: 25px;
  height: 25px;
}
</style>
