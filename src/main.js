// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import zComponent from './components/index'

Vue.config.productionTip = false
Vue.use(zComponent)

import VueToastr from './components/data-display/toastr/index-lib'
Vue.use(VueToastr, {
  defaultPosition: 'toast-bottom-left',
  defaultType: 'info',
  defaultTimeout: 1000
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
