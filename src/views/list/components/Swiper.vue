<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="swiper-div">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="img in imgs" :key="img.id">
        <img :src="img.src" class="swipper-img">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'ListSwiper',
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // 参数网址：https://www.swiper.com.cn/api/pagination/362.html
        loop: true,
        autoplay: 3000,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      imgs: [
        {
          id: 1,
          src: 'http://img1.qunarzz.com/piao/fusion/1806/ee/b889bce65d6dcf02.jpg_750x200_b1cb6a9f.jpg'
        },
        {
          id: 2,
          src: 'http://img1.qunarzz.com/piao/fusion/1808/74/cad6bf966300902.jpg_750x200_7641ba93.jpg'
        }
      ]

    }
  }
}
</script>

<style scoped>
  /* 设置图片占位宽高比 */
  .swiper-div {
    width: 100%;
    overflow: hidden;
    height: 0;
    padding-bottom: 26.7%;
    padding-left: 10px;
    padding-right: 10px;
  }
  .swiper-div .swipper-img {
    width: 100%;
  }
  /* 设置引用组件内的样式 */
  .swiper-div >>> .swiper-pagination-bullet-active {
    background-color: rgba(255, 255, 255,0.8);
  }
</style>
