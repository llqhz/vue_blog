<template>
  <div class="player">
    <audio src="http://w.llqhz.cn/p/static/fengju.mp3"
      preload="auto"
      ref="audio"
      controls  loop
    ></audio>
  </div>
</template>

<script>

export default {
  name: 'music',
  data: () => {
    return {
      audio: null
    }
  },
  mounted: function () {
    if (!this.audio) {
      this.audio = this.$refs.audio
    }
    $(this.audio).audioPlayer({
      classPrefix: 'audioplayer'
    })
  }
}
</script>

<style scoped>
@import url('~@/assets/css/audiojs.css');

.player >>> .audioplayer {
  border: 1px solid rgb(165, 166, 166);
  background: rgba(39,37,34,0.3);
}

.player >>> .audioplayer-bar {
  background: #b59696;
}
.player >>> .audioplayer-bar-loaded {
  background: rgba(253, 81, 179, 0.86);
}

.audioplayer:not(.audioplayer-mini) .audioplayer-playpause {
  border: none;
}

</style>
