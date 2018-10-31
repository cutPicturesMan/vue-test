<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<router-view/>-->
  </div>
</template>

<script>
export default {
  name: 'App',
//  props: ['title', 'isPublished'],
//  props: {
//    title: Object,
//    isPublished: Boolean
//  },
  props: {
    title: {
      type: String,
      required: true,
      default: 100
    },
    isPublished: {
    	type: Boolean,
      required: true,
      default: false
    }
  },
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
