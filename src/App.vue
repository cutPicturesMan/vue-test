<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{titleName}}
    age：{{age}}
    obj: {{obj}}, {{obj.arr}} ,{{obj.b}}
    <!--<router-view/>-->
  </div>
</template>

<script>
export default {
  name: 'App',
//  props: ['title', 'user'],
//  props: {
//    title: String,
//    user: Boolean
//  },
  props: {
    titleName: {
      type: [Boolean, String, Object],
      default(){
      	return {};
      }
    },
    user: {
    	type: String,
      required: true,
      default: ''
    }
  },
  data(){
  	console.log(this.titleName);
  	return {
      obj: {
        a: 1,
        arr: [1, 2, {
          name: 'zz'
        }]
      }
    }
//    return ['a']
  },
  watch: {
//  	'obj.name': function(){
//  		return
//  		console.log(123);
//    },
//    'titleName': function(){
//  		console.error(123);
//    },
  },
  mounted(){
  	console.log(this._data);
    this.obj = Object.assign(this.obj, { b: 2 })
    this.obj.arr[0] = 3;
    setTimeout(()=>{
      debugger
      this.obj.arr[2].name = 'bbb';
    }, 1000)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
