<template>
    <div class="banner">
        <div class="inner">
            <div class="hr"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-offset="200"
                data-aos-duration="600"
            ></div>
            <h2
                data-aos="flip-right"
                data-aos-delay="250"
                data-aos-offset="200"
                data-aos-duration="600"
            >
                {{ banner.name }}
            </h2>
            <div class="hr"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-offset="200"
                data-aos-duration="600"
            ></div>
            <p class="sub-heading"
                data-aos="fade-up"
                data-aos-delay="750"
                data-aos-offset="200"
                data-aos-duration="600"
            >
                {{ banner.motto }}
            </p>
            <button type="button"
                data-aos="fade-up"
                data-aos-delay="1450"
                data-aos-offset="200"
                data-aos-duration="1200"
            >了解更多</button>
            <div class="more"
                data-aos="fade-up"
                data-aos-delay="2400"
                data-aos-offset="200"
                data-aos-duration="1200"
            >
                <i class="fa fa-angle-double-down fa-3x"></i>
                <p>更多</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Banner',
  data: () => {
    return {
      
    }
  },
  props: {
    banner: {
      type: Object,
      default: () => {
        return {
          name: "☆筱怪☆",
          motto: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      }
    } 
  }
}
</script>

<style scoped>

    .hr {
        height: 2px;
        margin: 0 auto;
        background: #fff;
    }

    button, button:focus {
        background: #2dc1a0;
        border: 0px;
        padding: 14px 40px;
        outline-width: 0px;
        color: white;

        /* 鼠标形状：手形 */
        cursor: pointer;
    }

    .banner {
        background: rgba(0,0,0,0.40);
        height: 100vh/* 607px */;
    }

    /* inner */
    .banner .inner {
        max-width: 300px;
        margin: 0 auto;
        text-align: center;
        position: relative;
        top: 16vh;
        color: white;
    }
    .banner .inner .hr {
        width: 8rem;
    }
    .banner .inner h2 {
        margin: 7px;
        height: 30px;
    }
    .banner .inner .sub-heading {
        margin: 30px;
        letter-spacing: 1px;
    }
    .banner .inner .more {
        margin-top: 11px;
        cursor: pointer;
    }

    @keyframes more-arrow {
        0% { top:0px; }
        100% { top:20px }
    }
    .banner .inner .more i {
        position: relative;
        animation: more-arrow 1s infinite;
    }
    .banner .inner .more p {
        margin: 10px auto;
    }

</style>
