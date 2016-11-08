<style src="./style.css"></style>

<template src="./template.html"></template>

<script>
import CommonApi from 'api/common/common.js'

export default {
  data () {
    return {
      lists: []
    }
  },
  mounted () {
    this.refresh()
  },
  methods: {
    refresh () {
      CommonApi.salerank().then(res => {
        this.lists = res
      }, res => {
        this.$message({
          message: res.msg,
          type: 'error'
        })
      })
    }
  }
}
</script>
