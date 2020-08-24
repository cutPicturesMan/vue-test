// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import { a } from './test.js';

Vue.config.errorHandler = (e) => {
  console.warn(e);
}
// const vm = new Vue({
//   data: {
//     a: {
//       b: 123
//     }
//   },
//   render (h) {
//     return h('div', [this.a.b])
//   }
// }).$mount('')
// // }).$mount('#app1')// TODO el为空，到底有没有挂载到页面？？？
// console.log(vm.$el.textContent, '123');

// const vm = new Vue({
//   template: '<input v-bind="test" id="foo" :class="test.value" class="z">',
//   data: {
//     test: {
//       id: 'test',
//       class: 'ok',
//       value: 'hello'
//     }
//   }
// }).$mount('#app1')
//
// // 'foo'
// console.log(vm.$el.getAttribute('id'));
// // 'hello'
// console.log(vm.$el.getAttribute('class'));
// // 'hello'
// console.log(vm.$el.value);
// vm.test.id = 'hi'
// vm.test.value = 'bye'
// setTimeout(()=>{
//   // 'foo'
//   console.log(vm.$el.getAttribute('id'));
//   // 'bye'
//   console.log(vm.$el.getAttribute('class'));
//   // 'bye'
//   console.log(vm.$el.value);
// }, 0)


// console.log(document.createElement('div'));
// const vm = new Vue({
//   data: {
//     message: 'Hello Vue.js!',
//     show: true ,
//     btnValue1: 'button 1',
//     btnValue2: 'button 2'
//   },
//   methods: {
//     show1 () {
//       this.show=!this.show;
//       this.$nextTick().then(()=>{
//         const children = this._vnode.children;
//         console.log(children[children.length-1].data);
//       })
//     }
//   },
//   template: `
//     <div>
//       <p>{{ message }}</p>
//       <input type="button" @click="show1" value="Toggle">（Switch multiple times to see the results）
//       <p>===========scene one=============</p>
//       <input v-if="show" type="button" value="btnValue1" data-ttt="1">
//       <input v-else type="button" :value="btnValue2" data-ttt="2">
//     </div>
//   `
// }).$mount('#app1')


// const vm = new Vue({
//   template: `<test v-bind="test" data-foo="foo" dataBar="bar"/>`,
//   components: {
//     test: {
//       template: '<div>{{ dataFoo }} {{ dataBar }}</div>',
//       props: ['dataFoo', 'dataBar']
//     }
//   },
//   data: {
//     test: {
//       dataFoo: 'hi',
//       dataBar: 'bye'
//     }
//   }
// }).$mount('#app1')
// // 'foo bar'
// console.log(vm.$el.textContent)


// const vm = new Vue({
//   data: { ok: true },
//   template: `
//     <div>
//       <input type="button" v-if="ok" value="a">
//       <input type="button" :value="'b'">
//     </div>
//   `
// }).$mount('#app1')
// // .toBe('a')
// console.log(vm.$el.children[0].value)
// vm.ok = false
// setTimeout(()=>{
//   // .toBe('b')
//   console.log(vm.$el.children[0].value)
//   vm.ok = true
//   setTimeout(()=>{
//     // a
//     console.log(vm.$el.children[0].value)
//   }, 0)
// }, 0)


// const vm = new Vue({
//   data: {
//     attr: {
//       name: 'zz'
//     }
//   },
//   template: `
//     <div>
//     {{attr.name}}
//       <input class="zz" type="text" value="123" id="input">
//       <div v-bind:name.prop="attr.name">123</div>
//       <foo :prop="attr"></foo>
//     </div>
//   `,
//   components: {
//     foo: {
//       template: `<div>{{name}}</div>`,
//       props: {
//         name: {
//           type: String
//         }
//       }
//     },
//   },
//   mounted () {
//     setTimeout(() => {
//       this.attr.name = 'bb';
//     }, 1000)
//     console.log(document.querySelector('#input').className);
//     console.log(document.querySelector('#input').class);
//   }
// }).$mount('#app1')




//
// new Vue({
//   template: `
//     <div>
//       <div :data-name="key">111</div>
//       <transition-group tag="div" name="trs-test">
//         <div v-for="(path, idx) in pathes" v-bind="{ 'key': path.key }" v-text="'fails: ' + path.key"></div>
//       </transition-group>
//     </div>
//   `,
//   data: {
//     key: 1,
//     pathes: [
//       { key: "a" },
//       { key: "b" },
//       { key: "c" }
//     ]
//   },
//   components: {
//     foo: {
//       props: {
//         key: String
//       },
//       data () {
//         return {ok: true}
//       },
//       template: `<div>{{key}}</div>`,
//     }
//   }
// }).$mount('#app1')

// new Vue({
//   template: '<div><strong :key="bool">{{is}}</strong></div>',
//   // template: '<strong :is="is">{{is}}</strong>',
//   // template: '<strong>{{is}}</strong>',
//   data: {
//     is: 'ccc',
//     attr: {
//       is: 'ccc'
//     },
//     bool: true
//   },
//   mounted () {
//     setTimeout(() => {
//       this.is = 'aaa';
//     }, 1000)
//   }
// }).$mount('#app1')

// new Vue({
//   template: `<div>
//     <test>
//       <template v-slot:header>
//         <h1>Here might be a page title</h1>
//       </template>
//
//       <p>A paragraph for the main content.</p>
//       <p>And another one.</p>
//
//       <template v-slot:footer="{ cname }">
//         <div>作用域插槽的值：{{cname}}</div>
//         <p>Here's some contact info</p>
//       </template>
//     </test>
//   </div>`,
//   components: {
//     test: {
//       template: `<div>
//         <div class="container">
//           <header>
//             <div>header----------</div>
//             <slot name="header"></slot>
//           </header>
//           <main>
//             <div>main----------</div>
//             <slot></slot>
//           </main>
//           <footer>
//             <div>footer----------{{cname}}</div>
//             <slot name="footer" :cname="cname"></slot>
//           </footer>
//         </div>
//       </div>`,
//       data () {
//         return {
//           cname: 'inner'
//         };
//       }
//     }
//   },
// }).$mount('#app1')

// const vm = new Vue({
//   template: `
//         <div>
//           <div1>div1</div1>
//           <test ref="test" data-aaa="123">
//             <template slot-scope="props">
//               <span>{{ props.msg }}</span>
//             </template>
//           </test>
//         </div>
//       `,
//   components: {
//     test: {
//       data () {
//         console.log(this);
//         return { msg: 'hello' }
//       },
//       template: `
//             <div>
//               <slot :msg="msg"></slot>
//             </div>
//           `
//     }
//   }
// }).$mount('#app1')
// // .toBe('<span>hello</span>')
// console.log(vm)
// console.log(vm.$el.innerHTML)
// vm.$refs.test.msg = 'world'
// setTimeout(() => {
//   // .toBe('<span>world</span>')
//   console.log(vm.$el.innerHTML)
// })


// // should handle slot nodes being reused across render
// const vm = new Vue({
//   template: `
//         <foo ref="foo">
//           <div>slot</div>
//         </foo>
//       `,
//   components: {
//     foo: {
//       data () {
//         return { ok: true }
//       },
//       functional: true,
//       render (h) {
//         const children = [
//           this.ok ? h('div', 'toggler ') : null,
//           h('div', [this.$slots.default, h('span', ' 1')]),
//           h('div', [h('label', ' 2')])
//         ]
//         return children
//       }
//     }
//   }
// }).$mount('#app1')

// const Child = {
//   functional: true,
//   render: h => ([h('foo'), h('bar')])
// }
// const vm = new Vue({
//   template: `<svg><child/></svg>`,
//   components: { Child }
// }).$mount('#app1')
//   console.log(vm.$el.childNodes[0].namespaceURI)



// const vm = new Vue({
//   template: `<test><p :style="style" :data-style="style" /></test>`,
//   data: {
//     style: { color: 'red' }
//   },
//   components: {
//     test: {
//       template: `<div><slot/></div>`
//     }
//   }
// }).$mount('#app1')
// // red
// console.log(vm.$el.children[0].style.color)
// vm.style.color = 'green'
// setTimeout(() => {
//   // 'green'
//   console.log(vm.$el.children[0].style.color)
// })

const vm = new Vue({
  data: {
    a: 1
  },
  template: `<div>{{a}}</div>`,
  mounted () {
    setTimeout(() => {
      this.a = 2;
    }, 1000)
  }
}).$mount('#app1')

//
// // 'toggler slot 1 2'
// console.log(vm.$el.textContent)
// vm.$refs.foo.ok = false
// setTimeout(() => {
//   // 'slot 1 2'
//   console.log(vm.$el.textContent)
//   vm.$refs.foo.ok = true
//   setTimeout(() => {
//     // 'toggler slot 1 2'
//     console.log(vm.$el.textContent)
//     vm.$refs.foo.ok = false
//     setTimeout(() => {
//       // 'slot 1 2'
//       console.log(vm.$el.textContent)
//       vm.$refs.foo.ok = true
//     })
//   })
// })


// const vm = new Vue({
//     template: `
//         <foo ref="foo">
//           <symbol>1</symbol>
//           <div>slot</div>
//           <glyph>slot</glyph>
//         </foo>
//       `,
//     components: {
//         foo: {
//             data () {
//                 return { ok: true }
//             },
//             render (h) {
//                 const children = [
//                     this.ok ? h('div', 'toggler ') : null,
//                     h('div', [this.$slots.default, h('span', ' 1')]),
//                     h('div', [h('label', ' 2')])
//                 ]
//                 return h('div', children)
//             }
//         }
//     }
// }).$mount('#app1')
// //


// const vm = new Vue({})
// const h = vm.$createElement
// const vnode = h('svg', [h('foreignObject', [h('p')])])
// // 'svg'
// console.log(vnode.ns);
// // 'svg'
// console.log(vnode.children[0].ns);
// // undefined
// console.log(vnode.children[0].children[0].ns);

// const vm = new Vue({
//   data: {
//     t: 1
//   },
//   template: `
// <div>
// <div>{{t}}</div>
//         <svg>
//           <test></test>
//         </svg>
// </div>
//
//       `,
//   components: {
//     test: {
//       template: `
//           <foreignObject>
//             <svg>123</svg>
//             <p>111</p>
//           </foreignObject>
//           `
//     }
//   }
// }).$mount('#app1')

// const vm = new Vue({
//   data: {
//     t: 1
//   },
//   template: `
//     <div><foo></foo></div>
//   `,
//   components: {
//     foo: {
//       data () {
//         return {
//           a: 1,
//           b: 2
//         }
//       },
//       template: `
//           <div>
//       <math>
//         <mrow>
//           <mrow>
//             <msup>
//               <mi>a</mi>
//               <mn>{{a}}</mn>
//             </msup>
//             <mo>+</mo>
//             <msup>
//               <mi>b</mi>
//               <mn>{{b}}</mn>
//             </msup>
//           </mrow>
//           <mo>=</mo>
//           <msup>
//             <mi>c</mi>
//             <mn>2</mn>
//           </msup>
//         </mrow>
//       </math>
//         <polygon points="5,5 195,10 185,185 10,195" />
//
//         <!-- Common use case: embed HTML text into SVG -->
//         <foreignObject x="20" y="20" width="160" height="160">
//           <!--
//             In the context of SVG embeded into HTML, the XHTML namespace could
//             be avoided, but it is mandatory in the context of an SVG document
//           -->
//           <div xmlns="http://www.w3.org/1999/xhtml">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Sed mollis mollis mi ut ultricies. Nullam magna ipsum,
//             porta vel dui convallis, rutrum imperdiet eros. Aliquam
//             erat volutpat.
//           </div>
//         </foreignObject>
//     </div>
//     `
//     }
//   }
// }).$mount('#app1')
//
//
// console.log(vm);
// // toggler slot 1 2
// console.log(vm.$el.textContent);
// vm.$refs.foo.ok = false
// setTimeout(() => {
//   // slot 1 2
//   console.log(vm.$el.textContent);
//   vm.$refs.foo.ok = true
//   setTimeout(() => {
//     // toggler slot 1 2
//     console.log(vm.$el.textContent);
//     vm.$refs.foo.ok = false
//     setTimeout(() => {
//       // slot 1 2
//       console.log(vm.$el.textContent);
//       vm.$refs.foo.ok = true
//     }, 0)
//   }, 0)
// }, 0)

// console.log(vm.$createElement('p', {}, '123'));
// console.log(vm._e());


// new Vue({
//   render (h) {
//     return h('div', { key: Symbol('symbol') })
//   }
// }).$mount('#app1')


// vm.a = null
// vm.$nextTick(()=>{
//   vm.a = { b: 234 }
//
//   vm.$nextTick(()=> {
//     console.log(vm.$el.textContent, '234');
//     Vue.config.errorHandler = null
//   })
// })


// const vm = new Vue({
//   data: {
//     a: 1
//   },
//   // template: '#div',
//   template: '<div>123</div>',
//   // template: '<div><test :a="a"></test></div>',
//   components: {
//     // test: {
//     //   props: ['a'],
//     //   template: '<div>{{ a }}</div>',
//     //   watch: {
//     //     a () {
//     //       calls.push(3)
//     //     }
//     //   },
//     //   beforeUpdate () {
//     //     calls.push(4)
//     //   }
//     // }
//   }
// }).$mount('#app1')
// vm.a = 2
// console.log(vm.$el);

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

function spy1 () {
  console.log(1);
}

function spy2 () {
  console.log(2);
}

//
// const mixinA = Vue.extend({
//   el: '#app1',
//   data () {
//     return {
//       test1: 1
//     }
//   },
//   created: spy1,
//   directives: {
//     c: {}
//   },
//   methods: {
//     a: function () {}
//   }
// })
//
// const mixinB = mixinA.extend({
//   el: '#app2',
//   data () {
//     return {
//       test2: 2
//     }
//   },
//   created: spy2
// })
//

// Vue.mixin({
//   el: '#app1',
//   data () {
//     return {
//       test1: 3
//     }
//   },
//   methods: {
//     a: function () {}
//   },
//   created: spy1,
// })
//
// Vue.mixin({
//   el: '#app1',
//   data () {
//     return {
//       test1: 3
//     }
//   },
//   watch: {
//     test1: {
//       handler() {
//         console.log('mixin-watch-test1');
//       }
//     }
//   },
//   methods: {
//     a: function () {}
//   },
//   created: spy1,
// })
//
// const vm = new Vue({
//   // el: '#app3',
//   // mixins: [{
//   //   data: {
//   //     test2: 6
//   //   },
//   // }],
//   data: {
//     test2: 4
//   },
//   watch: {
//     test1 () {
//       console.log('new-watch-test1');
//     }
//   },
//   methods: {
//     b: function () {}
//   },
//   created () {
//     console.log(111);
//   }
//   // created () {
//   //   console.log(this.$el);
//   //   console.log(this.test2);
//   //   console.log(this);
//   //   console.log(this.$options.methods);
//   // }
// })

// function spy1 () {
//
//   console.log(1);
// }
//
// function spy2 () {
//   console.log(2);
// }
//
// new Vue({
//   methods: { foo: spy1, bar: spy2 },
//   data: {
//     ok: true
//   },
//   components: {
//     test: {
//       template: '<div></div>'
//     }
//   },
//   render (h) {
//     setTimeout(()=>{
//       this.ok = false
//     }, 1000)
//
//     return this.ok
//       ? h('test', { on: { click: this.foo }})
//       : h('test', { on: { click: this.bar, foo: null }})
//   }
// }).$mount('#app1')

// Vue.config.errorHandler = function(err) {
//   console.log('handle error', err.message);
// }
//
// Vue.component('custom-button', {
//   template: '<button @click="onClick">click me</button>',
//   methods: {
//     onClick(e) {
//       console.log(2);
//       this.$emit('foo');
//     }
//   }
// });
//
// new Vue({
//   el: '#app1',
//   template: `<custom-button @foo="onFoo" />`,
//   methods: {
//     onFoo(e) {
//       console.log(1);
//       return Promise.reject(new Error('Error ' + Date.now()))
//     },
//   },
// })

// console.log('script start');
// setTimeout(function () {
//   console.log('setTimeout');
// }, 0);
// Promise.resolve().then(function () {
//   console.log('promise1');
// }).then(function () {
//   console.log('promise2');
// });
// console.log('script end');
// const calls = []
// const vm = new Vue({
//   data: {
//     a: 1
//   },
//   watch: {
//     a () {
//       calls.push(1)
//     }
//   },
//   beforeUpdate () {
//     calls.push(2)
//   },
//   template: '<div><test :a="a"></test></div>',
//   components: {
//     test: {
//       props: ['a'],
//       template: '<div>{{ a }}</div>',
//       watch: {
//         a () {
//           calls.push(3)
//         }
//       },
//       beforeUpdate () {
//         calls.push(4)
//       }
//     }
//   }
// }).$mount()
// vm.a = 2
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
