<template>
  <div class="mo-markdown">
    <mavon-editor v-model="text" ref="mkdown" @imgAdd="$imgAdd"/>
  </div>
</template>

<script>
import { imageUpload } from "@/api/tools";

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
    var navBodyTop = $nav.offset().top  // // 文档定位top
    var width = $nav.width()            // 宽度
    var isComputed = false
    var distance = 0
    // 监听页面的滚动
    $(window).scroll(function () {
      // 获取距顶间距 = 相对与文档top - 文档移动了的top
      if ($nav.is(':visible')) {
        if ( !isComputed ) {
          navBodyTop = $nav.offset().top
          width = $nav.width()
        }
        isComputed = true
      } else {
        return
      }
      distance = navBodyTop - $(window).scrollTop()
      //console.log(distance);

      if (distance <= 0) {
        if (distance > -navHeight) {
          // 平滑偏移滚动
          $nav.css({ position: 'relative', top: -distance + 'px',width:width+'px' })
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
      imageUpload($file)
        .then(res=>{
          // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
          /**
         * $vm 指为mavonEditor实例，可以通过如下两种方式获取
         * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
         * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
         */
          this.$refs.mkdown.$img2Url(pos, res.url);
          this.$Message.info('上传成功',()=>{
            this.$emit('input',res.url)
          })
        })
        .catch(err=>{
          console.log(err);
          this.$Message.error(err.msg||'上传失败 !')
        })
    }
  }
}
</script>

<style lang="stylus">
.mo-markdown .markdown-body
  min-height: 700px
</style>
