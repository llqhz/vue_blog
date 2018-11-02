<template>
    <div>
        <h1> {{ msg }} </h1>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

export default class Index extends Vue {
    data () {
        return {
            msg: 'Index Pages'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="stylus" scoped>

</style>
