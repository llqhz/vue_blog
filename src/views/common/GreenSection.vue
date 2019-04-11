<template>
  <section class="green-section">
    <div class="wrapper">
      <div>
        <h2
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-offset="200"
          data-aos-duration="600"
        >标题</h2>
        <h4
          data-aos="fade-right"
          data-aos-delay="250"
          data-aos-offset="200"
          data-aos-duration="600"
        >副标题</h4>
        <div class="hr"
          data-aos="flip-left"
          data-aos-delay="350"
          data-aos-offset="200"
          data-aos-duration="600"
        ></div>
        <p class="sub-heading"
          data-aos="fade-up"
          data-aos-delay="650"
          data-aos-offset="200"
          data-aos-duration="1000"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div class="icon-group">
        <span class="icon"
          data-aos="zoom-in-right"
          data-aos-delay="1300"
          data-aos-offset="200"
          data-aos-duration="1000"
        ><i class="fa fa-firefox fa-3x"></i></span>
        <span class="icon"
          data-aos="zoom-in"
          data-aos-delay="1300"
          data-aos-offset="200"
          data-aos-duration="1000"
        ><i class="fa fa-first-order fa-3x fa-rotate-45"></i></span>
        <span class="icon"
          data-aos="zoom-in-left"
          data-aos-delay="1300"
          data-aos-offset="200"
          data-aos-duration="1000"
        ><i class="fa fa-ge fa-3x"></i></span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
    max-width: 860px;
    margin: 0 auto;
    padding: 10px;
}

.hr {
    height: 2px;
    max-width: 92vw;
    margin: 0 auto;
    background: #fff;
}

section.green-section .hr{
    width: 600px;
    margin: 30px auto;
    background: rgba(255, 255, 255, 0.234);
}

section.green-section {
    text-align: center;
    height: 700px;
    background: #2dc1a0;
    color: white;
}

.sub-heading {
    font-size: 18px;
}

.green-section h2 {
    margin-top: 10%;
}

.green-section .icon-group .icon {
    display: inline-block;
    /* background: #eee; */
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    margin:0 3%;
}

.green-section .icon-group {
    margin-top: 2.5rem/* 40px */;
    font-size: 1.2625rem/* 25px */;
}
</style>
