/**
 * Created by walid on 16/11/8.
 * 启动配置
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App'
import store from './store'
import router from './router'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)

// Vue.http.options.root = 'http://103.37.145.195:8830'

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
