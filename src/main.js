// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
// import router from './router'

// Vue.config.productionTip = false
//
// var Profile = Vue.extend({
//   template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
// });
// Vue.mixin({ data: function () {
//   return {
//     firstName: 'Walter',
//     lastName: 'White',
//     alias: 'Heisenberg'
//   }
// }});
// new Profile().$mount('#app');

// const Test = Vue.extend({
//   name: 'z',
//   template: '<div>你的名字：{{ firstName }},{{ bbb }}</div>',
// 	filters: {
// 		capitalize: function (value) {
// 			if (!value) return ''
// 			value = value.toString()
// 			return value.charAt(0).toUpperCase() + value.slice(1)
// 		}
// 	},
//   data: function () {
//     return {
//       firstName: 'Walter',
//       lastName: 'White',
//       alias: 'Heisenberg'
//     }
//   }
// })
//
// Test.component('zzz', function(){
//   console.log(this);
//   debugger
// });

// Inject options later
// vue-loader and vue-hot-reload-api are doing like this
// Test.options.computed = {bbb: () => 123}
//
// const Test2 = Test.extend({
// 	props: {
// 		myName: {
// 			type: String,
// 			default: '测试'
// 		}
// 	}
// })

// Test2.component('bbb', {
//   name: 'bbb',
//   template: '<strong>{{name}}</strong>',
//   data(){
//     return {
//       name: 123
//     }
//   }
// });

// Update super constructor's options
// Vue.mixin({})

// mount the component
// const vm = new Test({
//   template: '<div>{{ firstName }}</div>'
// }).$mount('#app')

// new Test2({
// 	template: '<div>{{ myName }}<bbb></bbb></div>'
// }).$mount('#app1')

// new Vue({
//   template: '<strong :key="true"><span :key="true">1</span><span :key="true">2</span></strong>',
//   data: {
//     key: {}
//   }
// }).$mount('#app1')

// Vue.component('anchored-heading', {
//   render: function (h) {
//     return h(
//       'h1',   // 标签名称
//       this.$slots.default // 子节点数组
//     )
//   }
// })

// new Vue({
//   render(h){
//     debugger
//     return h(
//       'div', {
//       scopedSlots: {
//         default: props => h('span', 'span')
//       }
//     })
//   }
// }).$mount('#app2')

// Vue.component('vtest', { template: ` <div>Hello World</div>` })
// const vm = new Vue({
//   render (h) {
//     return h('vtest', {
//       pre: true
//     })
//   },
//   components: {
//     test: {
//       data () {
//         return { msg: 'hello' }
//       },
//       render (h) {
//         return h('span', [
//           this.$scopedSlots.default({ msg: this.msg })
//         ])
//       }
//     }
//   }
// }).$mount('#app2')

// Vue.component('vtest', { template: ` <div>Hello World</div>` })
// const vm = new Vue({
//   template: '<div v-pre><vtest></vtest><bbb></bbb></div>',
//   replace: true
// })
// vm.$mount('#app2')


//
// const data = {
//   is: 'zz',
//   bindClass: {
//     width: 200
//   },
//   text: '全局text',
//   arr: [{name: 'zz', value: '福建'}, {name: 'zz1', value: '福建1'}],
//
//   name: 1,
//   obj: {
//     // level1: {
//     //   level2: {
//     //     level3: 3
//     //   }
//     // }
//   }
// };
//
// let template = `
//   <section>
//     <vh-a :level="1">
//       <template v-slot:header>
//         <h1>头部</h1>
//         <div>分割线</div>
//       </template>
//       <div>我是标题h1</div>
//       <div>我是标题h2</div>
//       <template v-slot:footer>
//         <h1>尾部</h1>
//         <div>分割线</div>
//       </template>
//     </vh-a>
//     <div v-pre>
//       <v-input></v-input>
//     </div>
//     <App></App>
//   </section>
// `
//
// var getChildrenTextContent = function (children) {
//   return children.map(function (node) {
//     return node.children
//       ? getChildrenTextContent(node.children)
//       : node.text
//   }).join('')
// }
//
// Vue.component('vh-a', {
//   props: {
//     level: {
//       type: Number,
//       required: true
//     }
//   },
//   data: () => ({ a: 1234 }),
//   render(h){
//     // 创建 kebab-case 风格的 ID
//     var headingId = getChildrenTextContent(this.$slots.default)
//       .toLowerCase()
//       .replace(/\W+/g, '-')
//       .replace(/(^-|-$)/g, '')
//
//     return h(
//       'h' + this.level,
//       [
//         h('a', false, this.$slots.default, 1),
//         h('component', {
//           is: 'zz',
//           name: 'bb'
//         })
//       ]
//     )
//
//     // var myParagraphVNode = h('p', 'hi')
//     // return h('div', [
//     //   // 错误 - 重复的 VNode
//     //   myParagraphVNode, myParagraphVNode
//     // ])
//   }
// })
//
// /* eslint-disable no-new */
// let vm = new Vue({
//   el: '#app',
//   // router,
//   // data: {
//   //   cartNum1: 5,
//   //   cartNum2: 3,
//   //   cartNum3: 4,
//   //   title: '测试标题',
//   //   info: {
//   //     user: 'zz',
//   //     address: {
//   //       province: 'xx省',
//   //       city: 'xx市',
//   //       county: 'xx县'
//   //     }
//   //   },
//   // },
//   // watch: {
//   //   cartNum1(){
//   //     console.log(1);
//   //   }
//   // },
// //   <slot>123</slot>
// //   <div v-text="text"></div>
// //   <div>hello world</div>
// // <div v-for="(item, index) in arr">
// //   <p>{{item.name}}</p>
// // <p>{{item.value}}</p>
// // <p>{{index}}</p>
// // <p>---</p>
// // </div>
// //   <div><p v-if="text == 1">hello world</p><p v-else-if="123">hello world2</p><div v-else><p><span>foo bar</span></p></div></div>
//   data,
//   components: { App },
//   template,
//   // template: `test<123>`,
//   // template: `
//   // <div class="d">
//   //   <div v-for="(item, index) in arr">
//   //     <p>{{item.name}}</p>
//   //     <p>{{item.value}}</p>
//   //     <p>{{index}}</p>
//   //     <p>---</p>
//   //   </div>
//   //   text
//   //   <strong>a1</strong>
//   //   <strong>a2</strong>
//   // </div>
//   // `,
//   mounted(){
//     this.$on('aB', (res)=>{
//       console.log(1)
//     })
//     this.$on('aB', (res)=>{
//       console.log(2)
//     })
//
//
//     setTimeout(()=>{
//       // this.obj.arr[0].name = 2;
//       // this.obj.arr.push({name: 2});
//       // this.$set(this.obj.arr[0], 'age', 26);
//       this.$emit('aB', 1, 2)
//     }, 1000)
//   }
// })

// new Vue({
//     template: `<div><test/></div>`,
//     components: {
//         test: () => ({
//             component: new Promise(resolve => {
//                 setTimeout(() => {
//                     resolve({ template: '<div>hi</div>' })
//                 }, 50)
//             }),
//             loading: { template: `<div>loading</div>` },
//             delay: 0
//         })
//     }
// }).$mount('#app')

// new Vue({
//     template: `<div><test/></div>`,
//     components: {
//         test: () => ({
//             component: new Promise((resolve, reject) => {
//                 console.log(123);
//                 setTimeout(() => {
//                   debugger
//                   resolve()
//                     // wait for promise resolve and then parent update
//                     Promise.resolve().then(() => {
//                         // Vue.nextTick(next)
//                     })
//                 }, 5000)
//             }),
//             loading: { template: `<div>loading</div>` },
//             error: { template: `<div>error</div>` },
//             delay: 100
//         })
//     }
// }).$mount('#app')

// new Vue({
//   data: {
//     ok: true,
//     arr: [{name: 'zz', k: Symbol('z')}, {name: 'bb', k: Symbol('b')}],
//     obj: {
//       name: 'zz'
//     }
//   },
//   template: `
//         <div id="tpl">
//           <div :id="'item' + item.name" v-for="item in arr" :key="item.k">{{item.name}}</div>
//         </div>
//       `,
//   mounted(){
//     setTimeout(()=>{
//       debugger
//       this.ok = false;
//     }, 1000)
//   }
// }).$mount('#app1')

// new Vue({
//   template: `
//     <test :t="text" length="1">
//       {{text}}
//       <template v-slot="p">
//         <div>{{p.obj.text}}</div>
//       </template>
//     </test>
//   `,
//   props: {
//     a: {
//       type: Number,
//       default: 123
//     }
//   },
//   data: {
//     text: '1'
//   },
//   components: {
//     test: {
//       props: {
//         t: {
//           type: [String, Number],
//           default: 2
//         }
//       },
//       data(){
//         return {
//           obj: {
//             text: '文字'
//           }
//         }
//       },
//       template: `
//         <div><slot :obj="obj"></slot></div>
//       `,
//     }
//   },
//   mounted(){
//     setTimeout(()=>{
//       this.text = 2
//     }, 1000)
//   }
// }).$mount('#app1')

// new Vue({
//   template: `<fb>
//     <template v-slot:foo>
//       first
//     </template>
//     <p>second</p>
//   </fb>`,
//   data: {
//     title: 'test'
//   },
//   components: {
//     'fb': {
//       functional: true,
//       render(createElement, ctx) {
//         console.log(ctx.slots());
//         debugger
//         return createElement('button', ctx.children)
//       }
//     }
//   }
// }).$mount('#app1')

// const vm = new Vue({
//   template: `
//          <svg>
//            <test></test>
//          </svg>
//        `,
//   components: {
//     test: {
//       template: `
//            <foreignObject>
//              <p xmlns="http://www.w3.org/1999/xhtml"></p>
//            </foreignObject>
//            `
//     }
//   }
// }).$mount('#app1')

// let one = {
//   template: '<div>one</div>',
//   created: () => {
//     console.log('one created')
//   },
//   mounted: () => {
//     console.log('one mounted')
//   },
//   activated: () => {
//     console.log('one activated')
//   },
//   deactivated: () => {
//     console.log('one deactivated')
//   },
//   destroyed: () => {
//     console.log('one destroyed')
//   }
// }
// let two = {
//   template: '<div>two</div>',
//   created: () => {
//     console.log('two created')
//   },
//   mounted: () => {
//     console.log('two mounted')
//   },
//   activated: () => {
//     console.log('two activated')
//   },
//   deactivated: () => {
//     console.log('two deactivated')
//   },
//   destroyed: () => {
//     console.log('two destroyed')
//   }
// }
//
//
// one.template = '<div><two/><two/><span>123</span></div>'
// one.components = {two}
//
// const vm = new Vue({
//   template: `
//         <div>
//           <keep-alive>
//             <one v-if="ok"/>
//             2
//           </keep-alive>
//         </div>
//       `,
//   data: {
//     ok: true
//   },
//   components: {
//     one,
//   }
// }).$mount('#app1')
//
// setTimeout(() => {
//   vm.ok = false
//   setTimeout(() => {
//     vm.ok = true
//   }, 1000)
// }, 1000)

// const child = {
//   template: `
//         <div>
//           <div class="default"><slot></slot></div>
//           <div class="named"><slot name="foo"></slot></div>
//         </div>
//       `
// }
//
// const vm = new Vue({
//   template: '<test><span slot="foo"> </span><span> </span></test>',
//   components: {
//     test: {
//       render (h, ctx) {
//         const slots = ctx.slots()
//         debugger
//         return h(child, slots.foo)
//       }
//     }
//   }
// }).$mount('#app1')

Vue.component('test', {
  template: '<button v-on:click="onClick"><slot></slot></button>',
  methods: {
    onClick () {
      this.$emit('testclick', 1, 2, 3);
    }
  }
})

const vm = new Vue({
  template: `<div>
  <button v-on:click="onEmit">emit</button>
  <!--<test @testclick="onClick">1</test>-->
  <!--<test @testclick="onClick">2</test>-->
</div>`,
  // template: '<test @click.native="a"></test>',
  data: {

  },
  // components: {
  //   test: {
  //     render (h, ctx) {
  //       return h('div', 123)
  //     }
  //   }
  // },
  methods: {
    onClick(){
      console.log(arguments)
    },
    onEmit () {
      this.$emit('testclick', 1, 2, 3);
    },
    static(){
    },
    c(){
      console.log(1);
    }
  },
  created () {
    let a = 0;

    function fn () {
      console.log(++a);
    }

    function fn2 () {
      console.log(++a);
    }

    this.$once('testclick', fn)
    this.$once('testclick', fn2)
  }
}).$mount('#app1')

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
