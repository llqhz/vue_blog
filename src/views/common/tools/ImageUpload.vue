<template>
  <div class="mt-img-field">
    <mt-cell title="标题文字" >
      <div class="mt-filed-image-content imgs-fields">
        <div class="mt-filed-image-content-image div-image" :style="{backgroundImage:'url('+image+')'}"  @click="handleButtonClick"></div>
        <div class="mt-filed-image-content-button">
          <i-button type="info" size="small" @click='handleButtonClick'>点击上传</i-button>
          <input type="file" hidden @change="onImageChange">
        </div>
      </div>
    </mt-cell>
  </div>
</template>


<script>
import utils from "@/components/com/utils.js";

export default {
  name: "ImageUpload",
  data(){
    return {
      image: '',
      file: null,
    }
  },
  props: {
    value: {
      default(){
        return ''
      }
    }
  },
  methods: {
    onImageChange(e){
      this.file = e.target.files[0]
      this.uploadImage(this.file)
        .then(res=>{
          this.image = utils.fileToImage(this.file)
          this.$Message.info('上传成功',()=>{
            this.$emit('input',res.url)
          })
        })
        .catch(err=>{
          this.$Message.error(err.msg||'上传失败 !')
        })
    },
    uploadImage(file){
      return new Promise((resolve,reject)=>{
          let formdata = new FormData()
          formdata.append('image',file,file.name)
          axios({
            url: 'https://www.llqhz.cn/app/api/backend/web/index.php/?r=api/tools/img-upload',
            method: 'post',
            data: formdata,
            headers: { 'Content-Type': 'multipart/form-data' },
          }).then((res) => {
            // 第二步.将返回的url替换到文本原位置
            if ( res.data.code == 1 ) {
              resolve(res)
            } else {
              reject(res)
            }
          })
        })
      axios.post('')
    },
    handleButtonClick(e){
      $(e.target).parents('.imgs-fields').find('input').click()
    }
  }
}
</script>


<style lang="stylus" scoped>

.mt-img-field >>> .mint-cell-wrapper .mint-cell-title
  max-width 75px

.mt-filed-image-content-image
  width 100px
  height 100px
  border 1px dotted #2db7f5

.mt-filed-image-content-button
  padding-top 5px
  padding-bottom 10px

div.div-image
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
</style>

