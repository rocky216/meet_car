// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "@/assets/fonts/iconfont.css"
import "@/assets/css/global.css" 
import "./rem"
import 'vant/lib/index.less';
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import _ from "lodash"

window._ = _;

Vue.config.productionTip = false

Vue.use(Vant);

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
