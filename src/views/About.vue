<template>
  <div class="about">
    <h1>Music22222</h1>
    <row>
      <i-col :xs="{span:20,offset:2}">
        <music></music>
      </i-col>
    </row>

  </div>
</template>

<script>
import music from '@/views/common/tools/music'

export default {
  components: {
    music
  }
}
</script>
