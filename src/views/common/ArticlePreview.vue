<template>
 <div class="article-preview">
    <div class="img-section" v-if="left">
        <img src="~@/assets/img/pic01.jpg" alt=""
          data-aos="flip-left"
          data-aos-delay="50"
          data-aos-offset="200"
          data-aos-duration="1000"
        >
    </div>
    <div class="text-section">
        <h2
          data-aos="fade-right"
          data-aos-delay="250"
          data-aos-offset="200"
          data-aos-duration="1000"
        >又一个标题</h2>
        <h4 class="sub-heading"
          data-aos="fade-left"
          data-aos-delay="450"
          data-aos-offset="200"
          data-aos-duration="1000"
        >我是副标题</h4>
        <div class="text-content"
          data-aos="fade-right"
          data-aos-delay="750"
          data-aos-offset="200"
          data-aos-duration="1000"
        >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
    </div>
    <div class="img-section" v-if="!left">
        <img src="~@/assets/img/pic01.jpg" alt=""
          data-aos="flip-right"
          data-aos-delay="50"
          data-aos-offset="200"
          data-aos-duration="1000"
        >
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {

    }
  },
  props: {
    direction: {
      default: 'left'
    }
  },
  computed: {
    left: function () {
      if (this.direction == 'left') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>

.img-section img {
    width: 100%;
    max-height: 400px;
}

.article-preview {
    background: rgba(19, 11, 18, 0.7);
    color: white;
    /* .article-previe 去除图片外边框 */
    font-size: 0;
    padding: 0;
}
.article-preview:nth-child(odd) {
    background-color: rgba(18, 9, 19, 0.57);
}

.img-section {
    width: 45%;
}
.text-section {
    width: 54%;
    box-sizing: border-box;
    /* padding: 58px 50px; */
    padding: 2% 2%;
}
.text-section h2 {
    text-align: center;
    font-size: 24px;
    letter-spacing: 1px;
    /* margin: 5px auto; */
}

.text-section .text-content {
    font-size: 1.1rem;
    letter-spacing: 0.03vw;

    text-indent: 2em;

    overflow: hidden;
    /* white-space: nowrap; */
    text-overflow: ellipsis;

}
.text-section .sub-heading {
    margin: 3px auto 10px auto;
    font-size: 15px;
    text-indent: 2em;
}

.article-preview > div {
    float: left;
}

.article-preview::after {
    content: '';
    display: block;
    clear: both;
}
.article-preview .text-content {
    height: 20%;
    max-height: 20vw;
    overflow: hidden;
    line-height: 25px;
}
/*@media screen and (max-width: 600px) {
    nav .logo {
        display: none;
    }
}*/
@media screen and  (max-width: 1100px) {
    .article-preview .text-content {
        line-height: 18px;
    }
    .text-section .text-content {
        font-size: 0.6rem;
        letter-spacing: 0;
        text-indent: 0;
    }
    .text-section h2 {
        margin: 0;
        font-size: 14px;
        letter-spacing: 1px;
        text-align: left;
        text-indent: 8px;
    }
    .text-section .sub-heading {
        text-indent: 8px;
        font-size: 8px;
        margin: 0px;
        text-align: left;
    }
}

</style>
