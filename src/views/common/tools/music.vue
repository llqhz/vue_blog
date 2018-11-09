<template>
  <div>
    22222
    <audio src="http://w.llqhz.cn/p/static/fengju.mp3" controls="controls">不支持music</audio>
    33333
  </div>
</template>

<script>
import '@/components/com/audiojs.js'

export default {
  name: 'music',
  mounted: function () {
    audiojs.events.ready(function() {
      var as = audiojs.createAll();
    });
  }
}
</script>
