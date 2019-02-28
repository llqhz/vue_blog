<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="swiper-div">
    <swiper :options="swiperOption" ref='list_swiper'>
      <!-- slides -->
      <swiper-slide v-for="(img,index) in imgs" :key="img.id">
        <div class='slide-div'>
          <img :src="img.src" @load='img_position(index,img.src,img.id,$event)' class="swipper-img" :class="img.img_mode" >
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

import { mapGetters, mapActions } from "vuex";

export default {
  name: 'ListSwiper',
  data () {
    return {
      list_swiper: null,
      imgObject: null,
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // 参数网址：https://www.swiper.com.cn/api/pagination/362.html
        loop: true,  // 设置为true会复制slide
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },

  computed: {
    ...mapGetters('swiper',{
      imgs : 'swiperImages'
    })
  },


  // 注意时机为created 而不是mounted
  created: function(){
    // 发送api请求
    this.updateSwiperImages()
  },

  mounted: function(){
    this.resizeSwiper()
  },

  methods: {
    img_position: function (index,src,id,event) {
      // 计算图片缩略图
      let el = event.path[0];
      if ( !this.imgObject ) {
        this.imgObject = new Image();
      }
      this.imgObject.src = src;
      let mode = '',
          w = this.imgObject.width,
          h = this.imgObject.height;
      if ( (w/h) > 2.498 ) {
        mode = 'width_img';
      } else {
        mode = 'height_img'
      }
      this.$store.commit('swiper/setSwiperImagesMode', {img_mode:mode,index:index})
    },
    resizeSwiper(){
      this.list_swiper = this.$refs.list_swiper;
      setTimeout(() => {
        this.list_swiper.update();
      }, 3000);
      window.onresize = () =>　{
        if ( this.isResizeing ) {
          return;
        } else {
          this.isResizeing = true;
        }
        setTimeout(() => {
          this.list_swiper.update();
          this.isResizeing = false;
        }, 1000);
      }
    },
    ...mapActions('swiper',{
      updateSwiperImages: 'updateSwiperImages',
    })

  }

}
</script>

<style scoped>
  /* 设置图片占位宽高比 */
  .swiper-div {
    width: 100%;
    overflow: hidden;
    height: 0;
    /* padding-bottom: 26.7%; */
    padding-bottom: 40%;
    padding-left: 10px;
    padding-right: 10px;
  }
  .swiper-div .swipper-img {
    /* width: 100%; */
    height: 100%;
    margin: auto auto;
  }

  .slide-div {
    height: 0;
    padding-bottom: 40%;
    overflow: hidden;
    position: relative;
    vertical-align: middle;
    text-align: center;
  }
  .slide-div .width_img,.default {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
  }

  /* 设置引用组件内的样式 */
  .swiper-div >>> .swiper-pagination-bullet-active {
    background-color: rgba(255, 255, 255,0.8);
  }

  @media screen and (max-width: 660px) {
    .swiper-div,.slide-div {
      padding-bottom: 60%;
    }
  }
</style>
