// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 封装组件
import GlobalComponents from './components/Loading/index.js'
Vue.use(GlobalComponents)
// 路由
import VueRouter from 'vue-router'
import Home from './components/routes/home.vue'
import News from './components/routes/news.vue'
import List from './components/routes/list.vue'
Vue.use(VueRouter)
const router = new VueRouter({
	routes:[
		{
			path:'*',redirect:'home'
		},
		{
			path:'/home',component:Home,
			// 子路由嵌套
			children:[
				{path:'/home/list', component:List}
			]
				
				
		},
		{
			path:'/news',component:News
		}
	]
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	  router,
	  el: '#app',
	  components: { App },
	  template: '<App/>'
})
