// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'jquery'
import App from './App'
// import router from './router'
import a from './a'
import Dep from './test'
console.log(Dep.target);
(new Dep()).log()
console.log(Dep.target);

Vue.config.productionTip = false

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  // router,
  data: {
    cartNum1: 5,
    cartNum2: 3,
    cartNum3: 4,
    title: '测试标题',
    info: {
      user: 'zz',
      address: {
        province: 'xx省',
        city: 'xx市',
        county: 'xx县'
      }
    }
  },
  watch: {
    cartNum1(){
      console.log(1);
    }
  },
  components: { App },
  template: '<App title-name1="title-name" user=""/>',
  mounted(){
    setTimeout(()=>{
      this.cartNum1 = 0;
      this.cartNum3 = 2;
    }, 1000)
  }
})

// 函数
vm.$watch(
  function watch () {
    return this.cartNum1 + this.cartNum2
  }, function handleWatch (newVal, oldVal) {
    if(newVal){
      // 做点什么
      console.log(this._watchers[1].deps);
      console.log(this);
      console.log(`${newVal}, ${oldVal}`);
    }
  }, {
    deep: true,
    immediate: true
  }
)

// 函数
vm.$watch(
  function watch () {
    return this.cartNum1
  }, function handleWatch (newVal, oldVal) {
    if(newVal) {
      this._watchers[2].deps[0].subs = [];
      console.log('不会执行');
    }
  }, {
    deep: true,
    immediate: true
  }
)

// 函数
vm.$watch(
  function watch () {
    return this.cartNum3
  }, function handleWatch (newVal, oldVal) {
    if(newVal) {
      console.log('不会执行2');
    }
  }, {
    deep: true,
    immediate: true
  }
)

// // 函数
// vm.$watch(
//   function () {
//     debugger
//
//     return this.info
//   }, function (newVal, oldVal) {
//     // 做点什么
//   }, {
//     deep: true
//   }
// )

var obj = {
  name1: 'zz'
}

var keys = Object.keys(Object.create(obj, {
  title: {
    value: '标题',
    enumerable: true
  },
  age: {
    enumerable: true
  }
}))

console.log(keys);


