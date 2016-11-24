/**
 * Created by walid on 16/11/8.
 * 启动配置
 */

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueProgressBar from 'vue-progressbar'

import App from './App'
import Axios from 'api/axios'
import store from 'store'
import router from 'router'

Vue.use(ElementUI)
Axios.use()

Vue.use(VueProgressBar, {
  thickness: '5px',
  color: '#00bf11',
  autoRevert: true,
  location: 'top',
  inverse: false
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
