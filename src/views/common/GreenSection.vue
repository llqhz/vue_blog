<template>
  <section class="green-section">
    <div class="wrapper">
      <div>
        <h2>标题</h2>
        <h4>副标题</h4>
        <div class="hr"></div>
        <p class="sub-heading">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div class="icon-group">
        <span class="icon"><i class="fa fa-firefox fa-3x"></i></span>
        <span class="icon"><i class="fa fa-first-order fa-3x fa-rotate-45"></i></span>
        <span class="icon"><i class="fa fa-ge fa-3x"></i></span>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
