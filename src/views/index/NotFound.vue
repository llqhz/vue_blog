<template>
  <div class="empty-404">
    <h1>404</h1>
    <h2> {{ msg }} </h2>
  </div>
</template>

<script>
import config from "@/config";

export default {
  components: {

  },
  name: 'NotFound',
  data: () => {
    return {
      msg: config.NotFoundTitle
    }
  },
  mounted: function () {
    console.log(NotFoundTitle);
  }
}
</script>

<style scoped>

.empty-404 h1 {
  text-align: center;
  font-size: 24vw;
  letter-spacing: 2vw;
  font-family: "文泉驿正黑";
  width: 80%;
  margin: 25% auto 0;
  border-bottom: 1px solid #ccc;
  font-weight: bold;
  text-shadow: 0 0 10px #E91E63;
  color: #00BCD4;
}

.empty-404 h2 {
  font-size: 5vw;
  text-align: center;
  margin-top: 3%;
  margin-bottom: 50%;
  letter-spacing: 1vw;
}

@media screen and (min-width: 768px) {
  .empty-404 h1 {
    font-size: 12vw;
    margin: 2% auto 0;
  }
  .empty-404 h2 {
    font-size: 2vw;
    margin-top: 2%;
    margin-bottom: 8%;
  }
}

</style>
