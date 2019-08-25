// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import md5 from 'js-md5'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/style.css'

// import './assets/css/bootstrap.min.css'

Vue.use(ElementUI)


Vue.config.productionTip = false
Vue.prototype.$md5 = md5;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
