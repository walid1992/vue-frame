<style src="./style.css" scoped></style>

<template src="./template.html"></template>

<script>
  import platform from 'utils/platform'

  export default {
    data() {
      return {
        isWechat: false
      }
    },
    ready() {
      this.isWechat = platform.isShowInWechat()
    },
    methods: {
      toCancel: function (event) {
        this.showStatus = 'origin'
      }
    }
  }
</script>
