<template>
  <div class="container">
    <row>
      <i-col :md="{span:20,offset:2}" :sm="24">
        <div class="page">
          <mavon-editor v-model="text"/>
        </div>
      </i-col>
    </row>
  </div>
</template>

<script>
export default {
  name: 'Publish',
  data () {
    return {
      text: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.page
  background-color: #159957;
  background-image: linear-gradient(120deg,#155799,#159957);
</style>
