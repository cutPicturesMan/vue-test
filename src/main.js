// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'jquery'
import App from './App'
// import router from './router'

Vue.config.productionTip = false

const data = {
  name: 1,
  obj: {
    // level1: {
    //   level2: {
    //     level3: 3
    //   }
    // }
    arr: [{name: 1}]
  }
};

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  // router,
  // data: {
  //   cartNum1: 5,
  //   cartNum2: 3,
  //   cartNum3: 4,
  //   title: '测试标题',
  //   info: {
  //     user: 'zz',
  //     address: {
  //       province: 'xx省',
  //       city: 'xx市',
  //       county: 'xx县'
  //     }
  //   },
  // },
  // watch: {
  //   cartNum1(){
  //     console.log(1);
  //   }
  // },
  data,
  components: { App },
  // template: `<App></br><p><a>1<a href="">2</a><div>123</div></p></App>`,
  // template: `test<123>`,
  template: `
  <div class="d">
    <style>
      .d {
        background-color: yellow;
      }
    </style>
    <strong>a</strong>
  </div>
  `,
  mounted(){
    this.$on('aB', (res)=>{
      console.log(1)
    })
    this.$on('aB', (res)=>{
      console.log(2)
    })


    setTimeout(()=>{
      // this.obj.arr[0].name = 2;
      // this.obj.arr.push({name: 2});
      // this.$set(this.obj.arr[0], 'age', 26);
      this.$emit('aB', 1, 2)
    }, 1000)
  }
})
