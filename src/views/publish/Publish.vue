<template>
  <div class="container">
    <row>
      <i-col :md="{span:20,offset:2}" :sm="24">
        <mo-markdown ></mo-markdown>
      </i-col>
    </row>
  </div>
</template>

<script>
import MoMarkdown from '@/views/common/tools/MoMarkdown.vue'

export default {
  name: 'Publish',
  components: {
    MoMarkdown
  },
  data () {
    return {
      value: ''
    }
  },
  mounted () {

  }
}
</script>

<style lang="stylus">

</style>
