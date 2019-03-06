<template>
  <div class="mo-markdown">
    <mavon-editor v-model="text" ref="mkdown" @imgAdd="$imgAdd"/>
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
  },
  methods: {
    // 绑定@imgAdd event
    $imgAdd(pos, $file){
      // 第一步.将图片上传到服务器.
      var formdata = new FormData();
      formdata.append('image', $file);
      axios({
        url: 'https://www.llqhz.cn/app/api/backend/web/index.php/?r=api/tools/img-upload',
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then((res) => {
        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        /**
       * $vm 指为mavonEditor实例，可以通过如下两种方式获取
       * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
       * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
       */
        if ( res.data.code == 1 ) {
          this.$refs.mkdown.$img2Url(pos, res.data.url);
        } else {
          this.$Message.error('上传失败 !')
        }
      })
    }
  }
}
</script>

<style lang="stylus">
.mo-markdown .markdown-body
  min-height: 700px
</style>
