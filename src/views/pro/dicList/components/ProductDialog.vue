<template>
	<div class="formDiv">
		<el-dialog title="字典列表数据" :visible.sync="dialogVisible" width="40%" :show-close='false' :close-on-click-modal='false'>
			<el-row :gutter="20" v-for="(item,i) in list" v-show="item.ischildren">
				<el-col :span="24">
					<div class="grid-content bg-purple" style="background: #ffffff;">{{item.navClassifyName}}</div>
				</el-col>
				<el-col :span="24">
					<div class="grid-content bg-purple">
						<el-row :gutter="20">
							<el-col :span="6" v-for="(items,index) in item.children">
								<div class="grid-content bg-purple" :class="{active:checkActive(items) }" @click="handLi(items)">{{items.navValue}}</div>
							</el-col>
						</el-row>
					</div>
				</el-col>
			</el-row>
			<span slot="footer" class="dialog-footer">
				    <el-button @click="cancle">取 消</el-button>
				    <el-button type="primary" @click="sure">确 定</el-button>
		    </span>
		</el-dialog>
	</div>
</template>
<script>
	import _ from 'lodash'
	export default {
		props: {
			list: {
				type: Array,
				default: []
			},
			nowIndexes:{
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
				nowObjArray: []
			}
		},
		methods: {
			handLi(it) {
				if(!this.nowIndexes.includes(it)){
					this.nowIndexes.push(it)
				}else{
					this.nowIndexes = _.remove(this.nowIndexes, (idx) => {
	        			return idx.navDicId !== it.navDicId
			  		})
				}

			},
			sure() {
				this.$emit('on-change', this.nowIndexes)
				this.$emit('on-closedialog')
			},
			cancle() {
//				this.nowObjArray = []
//				this.$emit('on-change', this.nowObjArray)
				this.$emit('on-closedialog')

			},
			checkActive(it) {
				return this.nowIndexes.includes(it)
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
	
	.bg-purple {}
	
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
		background: #409EFF;
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