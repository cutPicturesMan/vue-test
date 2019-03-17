<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
    <slot></slot>
    <strong>{{name}}</strong>
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
//  props: {
//    titleName: {
//      type: [Boolean, String, Object],
//      default(){
//      	return {};
//      }
//    },
//    user: {
//    	type: String,
//      required: true,
//      default: ''
//    }
//  },
  data(){
  	return {
  	  name: 'zz'
    }
  },
  methods: {

  },
  watch: {

  },
  mounted(){

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
