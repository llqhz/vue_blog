<template>
  <footer>
    <ul>
        <li><a href="#"><i class="fa fa-weibo"></i></a></li>
        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
        <li><a href="#"><i class="fa fa-qq"></i></a></li>
        <li><a href="#"><i class="fa fa-github"></i></a></li>
    </ul>
    <div class="copy">
        Copyright &copy; 2017 · ☆ 筱怪 ☆
    </div>
  </footer>
</template>

<style scoped>
footer {
    min-height: 160px;
    text-align: center;
    background: #151523;
    color: white;
    font-size: 16px;
}
footer ul {
    /* width: 1080px; */
    margin: 0 auto;
    padding: 40px;
}
footer ul li {
    display: inline-block;
    padding: 10px;
}
footer ul li a {
    color: white;
}
.copy {
    margin-top: 10px;
    padding-bottom: 10px;
}

@media screen and (max-width: 660px) {
    footer {
        min-height: 110px;
        font-size: 12px;
    }
    footer ul {
        padding: 10px
    }
}

</style>
