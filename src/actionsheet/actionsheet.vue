<template>
	<div >
		<div class="actionsheet" v-show="value" @click.stop="hideActionSheet"></div>
		<div class="actionsheet-content" :class="{active: value}" @click.stop="">
			<div class="actionsheet-list">
				<div class="actionsheet-item" v-for="item,index in actions" :key="index" @click.stop="choose(index)">{{item.name}}</div>
			</div>
			<div class="actionsheet-cencel" @click.stop="hideActionSheet">{{cancelText}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'myActionsheet',
		props: {
			actions: {
				type: Array,
				default: () => {
					return []
				}
			},
			cancelText: {
				type: String,
				default: '取消'
			},
			show: {
				type: Boolean,
				default: false
			},
			value:{
				type: Boolean,
				default: false
				
			}
		},
		data() {
			return {
				
			}
		},
		mounted() {
			
		},
		methods:{
			hideActionSheet() {
				// this.$emit('update:show', false); //触发 input 事件，并传入新值  给组件传值的时候 使用.sync修饰符  子组件就可以同步修改父组件内容
				this.$emit('input', false); //触发 input 事件，并传入新值 // 使用v-model给组件传值，要在props中使用value接收传入的值，然后使用找各种方法就可以同步修改父组件中的值
			},
			choose(index){
				this.$emit('confirm', index)
				this.hideActionSheet()
			}
		}
	}
</script>

<style scoped="scoped">
	.actionsheet{position: fixed; width: 100%; height: 100%; top:0; left: 0; z-index: 100000;  background-color: rgba(30,30,30, 0.5); }
	.actionsheet-content{height: auto; padding: 10px 0 30px;  z-index: 100001; position: fixed; bottom: -100%; left: 0; width: 100%; transition: all 0.3s ease-in-out;}
	.actionsheet-content.active{bottom: 0;}
	.actionsheet-list{width: 90%; margin: 0 auto; overflow: hidden; background-color: rgb(240,240,240, 1); color: rgb(114,148,249); border-radius: 10px;}
	.actionsheet-item{ height: 50px; cursor: pointer; font-size: 16px; border-bottom: 1px solid #bbb; display: flex; align-items: center; justify-content: center;}
	.actionsheet-item:last-child{border-bottom: none;}
	.actionsheet-cencel{width: 90%; margin: 0 auto; margin-top: 10px; font-weight: bold; color: rgb(65,110,251); height: 50px; display: flex; align-items: center; justify-content: center; background-color: #fff; border-radius: 10px; cursor: pointer;}
</style>
