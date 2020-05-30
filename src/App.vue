<template>
	<div class="app">
		<button @click="show = !show">show actionsheet</button>
		<my-actionsheet v-model="show" :actions="actions" @confirm="confirm" cancel-text="知道了"></my-actionsheet>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				show: false,
				actions: ['选项1','选项2']
			}
		},
		mounted() {
			
		},
		methods:{
			confirm(index){
				alert(index)
			}
		}
	}
</script>