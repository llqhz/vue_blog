<template>
  <div class="mo-markdown">
    <mavon-editor v-model="text"/>
  </div>
</template>

<script>
export default {
  name: 'MoMarkdown',
  props: [
    'value'
  ],
  data () {
    return {
      text: this.value
    }
  },
  mounted () {
    // 获取导航栏到屏幕顶部的距离
    var $nav = $('.mo-markdown .v-note-op')
    var navHeight = $nav.outerHeight() // 高度
    var navBodyTop = $nav.offset().top // 文档定位top
    var distance = 0
    // 监听页面的滚动
    $(window).scroll(function () {
      // 获取距顶间距 = 相对与文档top - 文档移动了的top
      distance = navBodyTop - $(this).scrollTop()

      if (distance <= 0) {
        if (distance > -navHeight) {
          // 平滑偏移滚动
          $nav.css({ position: 'relative', top: -distance + 'px' })
        } else {
          // 吸附成功
          $nav.css({
            position: 'fixed',
            top: 0
          })
        }
      } else {
        // 不变
        $nav.css({ position: 'static', top: 'unset' })
      }
    })
  }
}
</script>

<style lang="stylus">
.mo-markdown .markdown-body
  min-height: 700px
</style>
