<style>
  @import url('./assets/css/bootstrap.min.css');

  html, body {
    width: 100%;
    height: 100%;
  }
</style>

<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <!-- 转场加载动画 -->
    <vue-progress-bar/>
  </div>
</template>

<script>
  export default {
    mounted () {
      // 当App.vue完成加载关闭进度条
      this.$Progress.finish()
    },
    created () {
      // 当App.vue首次加载进度条开始
      this.$Progress.start()
      // 钩进度条开始之前router-view移动
      this.$router.beforeEach((to, from, next) => {
        let progress
        if (to.meta && to.meta.progress) {
          progress = to.meta.progress
        } else {
          progress = {
            func: [
              {call: 'color', modifier: 'temp', argument: '#00bf11'},
              {call: 'fail', modifier: 'temp', argument: '#00bf11'},
              {call: 'location', modifier: 'temp', argument: 'top'},
              {call: 'transition', modifier: 'temp', argument: {speed: '1.0s', opacity: '0.2s'}}
            ]
          }
        }
        // 设置转场参数
        this.$Progress.parseMeta(progress)
        // 启动动画
        this.$Progress.start()
        // 跳转目标路由
        next()
      })
      // 路由进度条完成后完成router-view移动
      this.$router.afterEach((to, from) => {
        this.$Progress.finish()
      })
    }
  }
</script>
