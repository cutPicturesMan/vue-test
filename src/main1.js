import Vue from "vue";
import { a } from './test.js';
Vue.config.errorHandler = (e) => {
  console.warn(e);
}

class Model {
  constructor() {
    this.foo = '123'
    this._bar = 1
  }
  get bar() {
    return this._bar;
  }
  set bar(newvalue) {
    this._bar = newvalue;
  }
}


new Vue({
  data: {
    list: [{
      skus: '10001,10002,10003',
      skusData: []
    }, {
      skus: '20001,20002,20003',
      skusData: []
    }]
  }
}).mount('#app')



new Vue({
  template: `
    <div>

      <strong>1、{{a.b}}
      <strong>2、123
    </div>
  `,
  // delimiters: ['${', '}'],
  data: {
    abc: 1222,
    a: {
      b: 123
    },
    arr: [],
    test: new Model()
  },
  // render (h) {
  //   return h('div', [this.a.b])
  // }
}).$mount('#app1')
