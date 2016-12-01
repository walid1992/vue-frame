<style src="./style.css"></style>

<template src="./template.html"></template>

<script>
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
        this.$api.common.salerank()
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
