// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import { a } from './test.js';

const calls = []
const vm = new Vue({
  data: {
    a: 1
  },
  watch: {
    a () {
      calls.push(1)
    }
  },
  beforeUpdate () {
    calls.push(2)
  },
  // template: '<div><test :a="a"></test></div>',
  template: '<div>{{a}}</div>',
  // template: '#div',
  // render () {
  //   console.log(1);
  // },
  components: {
    // test: {
    //   props: ['a'],
    //   template: '<div>{{ a }}</div>',
    //   watch: {
    //     a () {
    //       calls.push(3)
    //     }
    //   },
    //   beforeUpdate () {
    //     calls.push(4)
    //   }
    // }
  }
}).$mount('#app1')
vm.a = 2
// Vue.config.async = true

//
// new Vue({
//   template: `<div>{{a}} - {{b}}</div>`,
//   data: { a: 100 },
//   computed: {
//     b () {
//       let b = this.a + 1;
//       return b;
//     }
//   },
//   created () {
//     setTimeout(() => {
//       this.a = 200
//     }, 1000)
//   }
// }).$mount('#app1')

// new Vue({
//   data: { none: null },
//   template: `<div @click=""></div>`
// }).$mount('#app1')

// Vue.component('test', {
//   template: '<button v-on:click="onClick">{{a}}<slot></slot></button>',
//   data () {
//     return {
//       test1: 5
//     }
//   },
//   inject: ['a'],
//   methods: {
//     onClick () {
//       this.$emit('testclick', 1, 2, 3);
//     }
//   }
// })
//
// const vm = new Vue({
//   template: `<div>
//   <button v-on:click="onEmit">emit</button>
//   <test @testclick="onClick">1</test>
//   <!--<test @testclick="onClick">2</test>-->
// </div>`,
//   // template: '<test @click.native="a"></test>',
//   data: {
//     name: 'zz'
//   },
//   // components: {
//   //   test: {
//   //     render (h, ctx) {
//   //       return h('div', 123)
//   //     }
//   //   }
//   // },
//   // provide: {
//   //   a: '123'
//   // },
//   provide () {
//     return {
//       a: this.data
//     }
//   },
//   methods: {
//     onClick(){
//       console.log(arguments)
//     },
//     onEmit () {
//       this.$emit('testclick', 1, 2, 3);
//     },
//     static(){
//     },
//     c(){
//       // let arr = Array.prototype.slice.call(arguments);
//       let arr = Array.slice(arguments);
//       arr.push('aaa');
//       console.log(arr);
//       console.log(arguments);
//     }
//   },
//   created () {
//     let a = 0;
//
//     function fn () {
//       console.log(++a);
//     }
//
//     function fn2 () {
//       console.log(++a);
//     }
//
//     this.$once('testclick', fn)
//     this.$once('testclick', fn2)
//     this.c(1, 2);
//
//     setTimeout(()=>{
//       this.name = 321;
//     }, 1000)
//   }
// }).$mount('#app1')

// const Tab = Vue.extend({
//   template: `
//   <div>{{ random }}</div>
//   `,
//
//   data: () => ({
//     random: ''
//   }),
//
//   created() {
//     this.random = Math.random();
//   }
// });
//
// new Vue({
//   template: `
//     <div>
//       <nav>
//         <a @click="goto('tab-a')">Tab A</a>
//         <a @click="goto('')">Tab B</a>
//         <a @click="goto('tab-c')">Tab C</a>
//       </nav>
//
//       <keep-alive>
//         <component :is="current"></component>
//       </keep-alive>
//     </div>
//   `,
//   components: {
//     'tab-a': Tab,
//     'tab-b': Tab,
//     'tab-c': Tab
//   },
//
//   data: {
//     current: 'tab-a'
//   },
//
//   methods: {
//     goto(target) {
//       this.current = target;
//     }
//   }
// }).$mount('#app1');

// new Vue({
//   render(h){
//     return h('test', {
//       scopedSlots: {
//         item: function(props){
//           return h('div', props.text)
//         }
//       }
//     })
//   },
//   components: {
//     test: {
//       render(h){
//         return h('strong', {
//           text: '123',
//         }, [
//           h('div', this.$scopedSlots.item)
//         ])
//       }
//     }
//   }
// }).$mount('#app1')

// new Vue({
//   render (h) {
//     return h('div', { key: Symbol('symbol') })
//   }
// }).$mount('#app1')


// Vue.component('base-input', {
//   props: ['value'],
//   render (h) {
//     return h('input', {
//       domProps: {
//         value: this.value
//       },
//       on: {
//         input: e => this.$emit('input', e.target.value)
//       }
//     })
//   }
// })
//
// Vue.component('functional-wrapper', {
//   functional: true,
//   render (h, ctx) {
//     console.log(ctx.data);
//     // delete ctx.data.model
//     return h('base-input', ctx.data)
//   }
// })
//
// new Vue({
//   el: '#app',
//   data: {
//     internalVal: ''
//   },
//   computed: {
//     val: {
//       get () {
//         return this.internalVal
//       },
//       set (val) {
//         console.log('input')
//         this.internalVal = val
//       }
//     }
//   }
// })
