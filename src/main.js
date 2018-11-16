// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'jquery'
import App from './App'
// import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  // router,
  data: {
    cartNum1: 5,
    cartNum2: 3,
    title: '测试标题',
    info: {
      user: 'admin',
      address: {
        province: 'xx省',
        city: 'xx市',
        county: 'xx县'
      }
    }
  },
  components: { App },
  template: '<App title-name1="title-name"/>'
})

// 函数
vm.$watch(
  function () {
    debugger

    return this.cartNum1 + this.cartNum2
  }, function (newVal, oldVal) {
    // 做点什么
  }, {
    deep: true
  }
)

// 函数
vm.$watch(
  function () {
    debugger

    return this.info
  }, function (newVal, oldVal) {
    // 做点什么
  }, {
    deep: true
  }
)


