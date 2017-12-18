// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/simple-line-icons/css/simple-line-icons.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import zComponent from './components/index'

Vue.config.productionTip = false
Vue.use(zComponent)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
