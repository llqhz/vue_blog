<template>
  <row class="row">
    <i-col :xs="24" :sm='0'>
      <Page :total="100" show-elevator class="page-xs" />
    </i-col>
    <i-col :xs="0" :sm="24">
      <Page :total="100" show-elevator class="page-sm"/>
    </i-col>
  </row>
</template>
<script>
export default {
  name: 'ArticlePage'
}
</script>

<style scoped>
.page-xs >>> li,.page-xs >>> input {
  min-width: 24px;
  height: 25px;
  line-height: 25px;
  margin-right: 0px;
}
.page-xs >>> input {
  width: 40px;
}

.page-sm {
  display: flex;
  justify-content: center;
}

.row {
  padding: 0px 10px 10px 10px;
}
</style>
