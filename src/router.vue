<template>
	<div id="rot">
		{{msg}}
		<router-link to='/home'>Home</router-link>
		<router-link to='/news'>News</router-link>
		<router-view></router-view>
	</div>
</template>
<script>
	export default{
		name:'rot',
		data(){
			return{
				msg:'this components is router'
				
			}
		}
	}
	
</script>

<style scoped>
	
</style>