<style src="./style.css"></style>

<template src="./template.html"></template>

<script>
import CommonApi from 'api/common'

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
      CommonApi.salerank()
         .then(res => {
           this.lists = res
         })
         .catch(error => {
           this.$message({
             message: error.msg,
             type: 'error'
           })
         })
    }
  }
}

</script>
