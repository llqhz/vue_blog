<template>
 <div class="article-preview">
    <div class="img-section" v-if="left">
        <img src="~@/assets/img/pic01.jpg" alt="">
    </div>
    <div class="text-section">
        <h2>又一个标题</h2>
        <h4 class="sub-heading">我是副标题</h4>
        <div class="text-content">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    </div>
    <div class="img-section" v-if="!left">
        <img src="~@/assets/img/pic01.jpg" alt="">
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
      if ( this.direction == 'left' ) {
        return true;
      } else {
        return false;
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
    /* åŽ»é™¤.article-previewé—´é—´éš™ */
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
    font-size: 24px;
    letter-spacing: 1px;
}
.text-section p {
    font-size: 1.1rem;
    letter-spacing: 0.03vw;
}
.text-section .sub-heading {
    margin:-10px 0;
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
    .text-section p {
        font-size: 0.9rem;
        letter-spacing: 0;
    }
    .text-section h2 {
        margin-top: 0;
        font-size: 16px;
        letter-spacing: 1px;
    }
    .text-section h4 {
        font-size: 12px;
        letter-spacing: 1px;
    }
}


</style>



