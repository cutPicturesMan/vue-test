<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    {{titleName}}
    age：{{age}}
    obj: {{obj}}, {{obj.a}} ,{{obj.b}}
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
        a: 1
      }
    }
//    return ['a']
  },
  methods: {
  	sm: function(){
      console.log(123);
    }
  },
  watch: {
  	'obj': 'sm',
//    'titleName': function(){
//  		console.error(123);
//    },
  },
  mounted(){
  	console.log(this.obj);
    this.obj = Object.assign(this.obj, { b: 2 })

    this.$set(this.obj, 'c', 3)
    this.$set({
      aa: 1
    }, 'bb', 2)
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
