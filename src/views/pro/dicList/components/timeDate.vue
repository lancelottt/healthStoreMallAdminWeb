<template>
	<div>
		<el-time-picker
		    v-model="datetime"
		    :format='format'
		    @change='chooseclick'
		    value-format="yyyy-MM-dd hh:mm:ss"
		    placeholder="任意时间点">
	    </el-time-picker>
	</div>
</template>

<script>
	export default {
		props:{
			ind:{
				type:Number,
				dafault:0
			},
			timePick:{
				type:String,
				default: new Date()
			}
		},
		data() {
			return {
				format:'HH:mm',
				datetime:''
			}
		},
		methods:{
			chooseclick(){
				let aaa = this.ind +','+this.datetime
				this.$emit('on-change',aaa)
			}
		},
		mounted(){
			this.datetime = this.timePick
		}
		
	}
</script>

<style>
</style>