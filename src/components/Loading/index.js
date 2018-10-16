import loading1 from './loading.vue'
import loading2 from './loading2.vue'
const Loading ={
	 install:function(aaa){
		 aaa.component('a1',loading1),
		 aaa.component('a2',loading2)
	 }
 };
export default Loading;