<template>
	<div id="home">
		<h1>{{msg}}</h1>
		<h2>{{msg2}}</h2>
		<router-link to='/home/list'>列表页</router-link>
		<router-view></router-view>
	</div>
</template>
<script>
	export default{
		name:'home',
		data(){
			return{
				msg:'this components is Home',
				msg2:'hello my home'
				
			}
		}
	}
	
</script>

<style scoped>
	
</style>