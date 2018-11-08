// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'jquery'
import App from './App'
// import router from './router'
import { b as c } from './test'

console.log(c);
Vue.config.productionTip = false

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>'
})

// 函数
// vm.$watch(
//   function () {
//     debugger
//     console.log(this);
//     return this.a.b;
//
//     return this.a + this.b
//   },
//   function (newVal, oldVal) {
//     // 做点什么
//   }
// )

function fn(){
  try{
    a
    console.log('-1');
    return 1;
  } catch (e){
    console.log(e);
    throw 111
    console.log('-2');

    return 2;
  } finally {
    console.log('-3');
  }

  return 4;
}
// console.log(fn());
//
//
try{
  console.log(fn());
} catch (e){
  console.log(123);
  console.log(e);
}


