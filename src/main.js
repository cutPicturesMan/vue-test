// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'jquery'
import App from './App'
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

new Vue({
    template: `<div><test/></div>`,
    components: {
        test: () => ({
            component: new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject()
                    // wait for promise resolve and then parent update
                    Promise.resolve().then(() => {
                        Vue.nextTick(next)
                    })
                }, 50)
            }),
            loading: { template: `<div>loading</div>` },
            error: { template: `<div>error</div>` },
            delay: 0
        })
    }
}).$mount('#app')