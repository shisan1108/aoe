<template>
  <div id="app">
		<Router></Router>
   <a1></a1>
	 <a2></a2>
  </div>
</template>

<script>
import Router from './router.vue'

export default {
  name: 'App',
  components: {
   Router
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
