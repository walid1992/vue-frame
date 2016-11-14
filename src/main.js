/**
 * Created by walid on 16/11/8.
 * 启动配置
 */

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App'
import ApiUtils from 'api/utils'
import store from 'store'
import router from 'router'

Vue.use(ElementUI)
ApiUtils.use()

process.on('unhandledRejection', function (reason, p) {
  console.log('Possibly Unhandled Rejection at: Promise ', p, ' reason: ', reason)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  template: '<App/>',
  components: {
    App
  }
})
