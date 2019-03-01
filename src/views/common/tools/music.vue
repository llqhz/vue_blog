<template>
  <div class="player">
    <div class="audio green-audio-player" ref='audioplayer' tabindex="1">
      <div class="loading">
        <div class="spinner"></div>
      </div>
      <div class="play-pause-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24">
          <path fill="#566574" fill-rule="evenodd" d="M18 12L0 24V0"
          class="play-pause-icon playPause" />
        </svg>
      </div>

      <div class="controls">
        <span class="current-time">0:00</span>
        <div class="slider" data-direction="horizontal">
          <div class="progress">
            <div class="pin progress-pin" data-method="rewind"></div>
          </div>
        </div>
        <span class="total-time">0:00</span>
      </div>

      <div class="volume">
        <div class="volume-btn" >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="#566574" fill-rule="evenodd" d="M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z" class="speaker" />
          </svg>
        </div>
        <div class="volume-controls hidden">
          <div class="slider" data-direction="vertical">
            <div class="progress">
              <div class="pin volume-pin" data-method="changeVolume"></div>
            </div>
          </div>
        </div>
      </div>

      <audio>
        <source :src="src" type="audio/mpeg">
      </audio>
    </div>

  </div>
</template>

<script>
import audioPlayer from '@/assets/js/audiojs_2.js'

export default {
  name: 'music',
  data: () => {
    return {
      audioplayer: null,
      isAutoPlay: true
    }
  },
  props: {
    src: {
      default: 'http://w.llqhz.cn/p/static/fengju.mp3'
    }
  },
  mounted: function () {
    this.player()
    /* $(this.audio).audioPlayer({
      classPrefix: 'audioplayer'
    }) */
  },
  created: function () {

  },
  methods: {
    player: function () {
      if (!this.audioplayer) {
        this.audioplayer = this.$refs.audioplayer
      }
      audioPlayer.player(this.audioplayer)
    }
  }
}
</script>

<style lang='stylus' >
/* @import url('~@/assets/css/audiojs.css'); */
bg-padding = 12px

.audio.green-audio-player {
  width: 100%;
  min-width: 300px;
  max-width 800px;
  height: 56px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  border-radius: 4px;
  user-select: none;
  -webkit-user-select: none;
  background-color: #fff;
}
.audio.green-audio-player:focus {
  outline: 0;
}
.audio.green-audio-player .play-pause-btn {
  display: none;
  cursor: pointer;
}
.audio.green-audio-player .spinner {
  width: 18px;
  height: 18px;
  /* background-image: url(img/loading.png); */
  background-size: cover;
  background-repeat: no-repeat;
  animation: spin 0.4s linear infinite;
}
.audio.green-audio-player .slider {
  flex-grow: 1;
  background-color: #D8D8D8;
  cursor: pointer;
  position: relative;
}
.audio.green-audio-player .slider .progress {
  background-color: #44BFA3;
  border-radius: inherit;
  position: absolute;
  pointer-events: none;
}
.audio.green-audio-player .slider .progress .pin {
  height: 16px;
  width: 16px;
  border-radius: 8px;
  background-color: #44BFA3;
  position: absolute;
  pointer-events: all;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.32);
}
.audio.green-audio-player .controls {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 18px;
  color: #55606E;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  margin-left: 24px;
  margin-right: 24px;
}
.audio.green-audio-player .controls .slider {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 2px;
  height: 4px;
}
.audio.green-audio-player .controls .slider .progress {
  width: 0;
  height: 100%;
}
.audio.green-audio-player .controls .slider .progress .pin {
  right: -8px;
  top: -6px;
}
.audio.green-audio-player .controls span {
  cursor: default;
}
.audio.green-audio-player .volume {
  position: relative;
}
.audio.green-audio-player .volume .volume-btn {
  cursor: pointer;
}
.audio.green-audio-player .volume .volume-btn.open path {
  fill: #44BFA3;
}
.audio.green-audio-player .volume .volume-controls {
  width: 30px;
  height: 135px;
  background-color: rgba(0, 0, 0, 0.62);
  border-radius: 7px;
  position: absolute;
  left: -3px;
  bottom: 52px;
  flex-direction: column;
  align-items: center;
  display: flex;
}
.audio.green-audio-player .volume .volume-controls.hidden {
  display: none;
}
.audio.green-audio-player .volume .volume-controls .slider {
  margin-top: 12px;
  margin-bottom: 12px;
  width: 6px;
  border-radius: 3px;
}
.audio.green-audio-player .volume .volume-controls .slider .progress {
  bottom: 0;
  height: 100%;
  width: 6px;
}
.audio.green-audio-player .volume .volume-controls .slider .progress .pin {
  left: -5px;
  top: -8px;
}

.audio.green-audio-player svg, img {
  display: block;
}

@keyframes spin {
  from {
    transform: rotateZ(0);
  }
  to {
    transform: rotateZ(1turn);
  }
}

@media screen and ( max-width 659px ) {
  .audio.green-audio-player {
    height 35px
    padding-left bg-padding
    padding-right bg-padding
  }
  .audio.green-audio-player .controls {
    font-size 12px
    margin-left bg-padding
    margin-right bg-padding
  }
  .audio.green-audio-player svg {
    height 14px
    width 14px
  }
}

</style>
