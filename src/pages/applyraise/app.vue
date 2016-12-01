<style src="./style.css" scoped></style>

<template src="./template.html"></template>

<script>
  import urlUtils from 'utils/url'
  export default {
    data() {
      return {
        channel: '',
        phoneNumber: '',
        canApply: false
      }
    },
    ready() {
      this.channel = urlUtils.getParams('channel')
    },
    watch: {
      phoneNumber(curVal, oldVal) {
        this.canApply = curVal && curVal.length == 11
        console.log('canApply', this.canApply)
      }
    },
    methods: {
      $onApply: function () {
        if (!this.canApply) {
          this.$alert('请输入正确手机号')
          return
        }
        window.location.href = `https://www.shuidihuzhu.com/charitys/applysuccess?channel=${this.channel}&phoneNumber=${this.phoneNumber}`
      }
    }
  }
</script>
