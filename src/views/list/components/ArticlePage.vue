<template>
  <row class="row">
    <i-col :xs="24" :sm='0'>
      <Page
        class="page-xs"
        :total="page.total"
        :current='page.current'
        :pageSize="page.pageSize"

        :page-size-opts="page.pageSizeOptions"
        :placement="page.placement"
        :show-elevator='page.showElevator'
        :show-sizer='page.showSizer'
        @on-change='onPageChange'
        @on-page-size-change="onPageSizeChange"
      />
    </i-col>
    <i-col :xs="0" :sm="24">
      <Page
        class="page-sm"
        :total="page.total"
        :current='page.current'
        :pageSize="page.pageSize"

        :page-size-opts="page.pageSizeOptions"
        :placement="page.placement"
        :show-elevator='page.showElevator'
        :show-sizer='page.showSizer'
        @on-change='onPageChange'
        @on-page-size-change="onPageSizeChange"
      />
    </i-col>
  </row>
</template>
<script>
export default {
  name: 'ArticlePage',
  props: [
    'page'
  ],
  methods: {
    onPageChange(current){
      console.log('onPageChange',current);
      this.$emit('on-change',current)
    },
    onPageSizeChange(pageSize){
      console.log('onPageSizeChange',pageSize);
      this.$emit('on-page-size-change',pageSize)
    }
  }
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
.row >>> .ivu-select .ivu-select-arrow {
  top: 72%;
}
</style>
