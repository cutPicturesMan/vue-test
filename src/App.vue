<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{titleName}}
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
      	debugger
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
        name: 'zz'
      }
    }
  },
  watch: {
//  	'obj.name': function(){
//  		return
//  		console.log(123);
//    },
//    'titleName': function(){
//  		console.error(123);
//    },
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
