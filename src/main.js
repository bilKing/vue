// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import book from './components/book'
import router from './router'
import axios from 'axios'
import $ from 'jquery'
import './assets/js/bootstrap.min.js' 
import './assets/css/bootstrap.min.css'
import 'bootstrap-table/dist/bootstrap-table.min.js'
import 'bootstrap-table/dist/locale/bootstrap-table-zh-CN.min.js'
import './assets/css/bootstrap-table.min.css'
Vue.prototype.$http=axios
new Vue({
  el: '#app',
  router,
  components: { book },
  template: '<book/>'
})


