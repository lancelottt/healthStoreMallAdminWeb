<template>
	<div class="formDiv">
		<el-dialog title="提醒项列表数据" :visible.sync="dialogVisible" width="30%" :show-close='false' :close-on-click-modal='false'>
			<el-row :gutter="20" v-for="(item,i) in datalist" v-show="item.isTixing">
				<el-col :span="24">
					<div class="grid-content bg-purple" style="background: #ffffff;">{{item.remindClassifyName}}</div>
				</el-col>
				<el-col :span="24">
					<div class="grid-content bg-purple">
						<el-row :gutter="20">
							<el-col :span="6" v-for="(items,index) in item.remindItems">
								<div class="grid-content bg-purple" :class="{active:checkActive(items) }" @click="handLi(items)">{{items.remindItemName}}</div>
							</el-col>
						</el-row>
					</div>
				</el-col>
			</el-row>
			<span slot="footer" class="dialog-footer">
			    <el-button @click="cancleTi">取 消</el-button>
			    <el-button type="primary" @click="sureTi">确 定</el-button>
			 </span>
		</el-dialog>
	</div>
</template>
<script>
	import _ from 'lodash'
	export default {
		props: {
			datalist: {
				type: Array,
				default: []
			},
			tixingnowIndexes:{
				type: Array,
				default: []
			},
			dialogVisible: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				attary: [],
				nowObjArrayTi: []
			}
		},
		methods: {
			handLi(it) {
				if(!this.tixingnowIndexes.includes(it)){
					this.tixingnowIndexes.push(it)
				}else{
					this.tixingnowIndexes = _.remove(this.tixingnowIndexes, (idx) => {
	        			return idx.id !== it.id
			  		})
				}
			},
			sureTi() {
				console.log(this.tixingnowIndexes)
				this.$emit('on-change', this.tixingnowIndexes)
				this.$emit('on-tixindialog')
			},
			cancleTi() {
				this.$emit('on-change',  this.tixingnowIndexes)
				this.$emit('on-tixindialog')
			},
			checkActive(it) {
				return this.tixingnowIndexes.includes(it)
			}
		}
	}
</script>
<style scoped>
	.el-row {
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.el-col {
		border-radius: 4px;
	}
	
	.grid-content .bg-purple {
		border: 1px solid #dcdfe6 !important;
		margin-bottom: 10px;
		text-align: center;
		line-height: 36px;
	}
	
	.bg-purple-dark {
		background: #99a9bf;
	}
	
	.bg-purple-light {
		background: #e5e9f2;
	}
	
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
	
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
	
	.active {
		background: blue;
		color: #ffffff;
	}
	
	.formDiv {
		width: 100%;
		height: 400px;
	}
	
	.formName {
		width: 100%;
		height: 117px;
	}
	
	.tiitle {
		width: 10%;
		line-height: 60px;
		text-align: left;
		float: left;
	}
	
	.titleRight {
		width: 90%;
		float: right;
	}
	
	.titleRight ul li {
		float: left;
		width: 100px;
		height: 40px;
		border: 1px solid #cccccc;
		border-radius: 10px;
		list-style: none;
		margin: 0 10px 10px 0;
		text-align: center;
		line-height: 40px;
		cursor: pointer;
	}
	
	.jiahaoAdd {
		font-size: 25px;
	}
	
	.content {
		width: 100%;
		height: 400px;
		overflow-y: scroll;
	}
	
	.conOne {
		width: 100%;
		height: auto;
	}
	
	.conSh {
		width: 100px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		border: 1px solid #cccccc;
		border-radius: 10px;
		list-style: none;
	}
	
	.conXia {
		width: 100%;
		height: auto;
	}
	
	.conXia ul {
		zoom: 1
	}
	
	.conXia ul:after {
		clear: both;
		content: '';
		display: block;
		width: 0;
		height: 0;
		visibility: hidden;
	}
	
	.conXia ul li {
		list-style: none;
		float: left;
		width: 100px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		border: 1px solid #cccccc;
		border-radius: 10px;
		margin: 0 10px 10px 0;
		cursor: pointer;
	}
</style>