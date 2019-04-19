<template>
	<div class="app-container">
		<el-row :gutter="20">
			<el-col :span="3">
				<div class="grid-content bg-purple">方案名称:</div>
			</el-col>
			<el-col :span="4">
				<el-input placeholder="请输入方案名称" v-model="input10" clearable>
				</el-input>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="3">
				<div class="grid-content bg-purple">方案描述:</div>
			</el-col>
			<el-col :span="4">
				<el-input placeholder="请输入方案描述" v-model="input11" clearable>
				</el-input>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="3">
				<div class="grid-content bg-purple">方案使用描述:</div>
			</el-col>
			<el-col :span="4">
				<el-input placeholder="请输入方案使用描述" v-model="input12" clearable>
				</el-input>
			</el-col>
		</el-row>
		
		<el-row :gutter="20">
			<el-col :span="3">
				<div class="grid-content bg-purple">标题:</div>
			</el-col>
			<el-col :span="21">
				<div class="title_cont">
					<ul>
						<li v-for="ite in nowObjArray"> {{ ite.navValue }}</li>
						<li @click="liAdd()">+</li>
					</ul>
				</div>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="3">
				<div class="grid-content bg-purple">提醒项:</div>
			</el-col>
			<el-col :span="21">
				<div class="title_cont1">
					<ul>
						<li v-for="(ite,index) in tixingnowIndexes" :index='index'>
							<div class="tiixng_text">
								{{ ite.remindItemName }}
							</div>
							<div class="tiixng_time">
								<time-date :ind='index' @on-change='timeChange($event)' :timePick='ite.timePick'></time-date>
							</div>
						</li>
						<li class="tixingadd" @click="tixingxinag()">+</li>
					</ul>
				</div>
			 </el-col>
		</el-row>
		<el-row>
			 <el-col :span="3" :offset='3'>
		 		 <el-button type="primary" @click="determine">确定</el-button>
		 	 </el-col>
		</el-row>
		<dialog-pro :dialogVisible='isdialogshow' :nowIndexes='nowIndexes' :list="list" @on-change='titleList($event)' @on-closedialog='closeDia'></dialog-pro>
		<tixing-pro :dialogVisible='isdialogTixing' :tixingnowIndexes='tixingnowIndexes' :datalist="datalist" @on-change='tixingList($event)' @on-tixindialog='closeDiaTi'></tixing-pro>
	</div>
</template>
<script>
	import { proAddList, proTixingList, determineAjax } from "@/api/prolist";
	import dialogPro from "./ProductDialog";
	import tixingPro from "./tixing"
	import timeDate from "./timeDate"
	import _ from 'lodash'
	export default {
		data() {
			return {
				nowIndexes: [],
				tixingnowIndexes:[],
				isdialogshow: false,
				isdialogTixing: false,
				nowObjArray: [],
				nowObjArrayTi: [],
				list: [],
				datalist: [],
				input10: '',
				input11: '',
				input12: '',
			}
		},
		methods: {
			liAdd() {
				this.isdialogshow = true
			},
			titleListData(){
				proAddList().then(response => {
					response.data.forEach(item => {
						if(item.children.length > 0) {
							item.ischildren = true
						} else {
							item.ischildren = false
						}
						this.list = response.data;
					})
				});
			},
			titleList(params) {
				this.nowObjArray = params
				this.nowIndexes = params
			},
			tixingList(t) {
				this.tixingnowIndexes = t
			},
			closeDia() {
				this.isdialogshow = false
			},
			closeDiaTi() {
				this.isdialogTixing = false
			},
			//		提醒项**
			tixingxinag() {
				this.isdialogTixing = true
			},
			tixingxinagData(){
				proTixingList().then(response => {
					response.data.forEach(itemTi => {
						if(itemTi.remindItems.length > 0) {
							itemTi.isTixing = true
							itemTi.remindItems.forEach(item => {
								item.timePick = this.nowTime()
							})
						} else {
							itemTi.isTixing = false
						}
					})
					this.datalist = response.data
				})
			},
			nowTime(){
				let aaa = new Date();
				let days = aaa.getFullYear() + '-' + (aaa.getMonth()+1) + '-' + aaa.getDate() +"  " +'00:00:00'
				return days
			},
			timeChange(params){
				let aaa = params.split(',')
				let index = aaa[0]
				this.tixingnowIndexes[index].timePick = aaa[1]
			},
			determine() {
				let aaa = ''
				let dataSh = ''
				this.nowObjArray.forEach(item => {
					aaa += item.navDicId + ','
				})
				aaa = aaa.substring(0, aaa.lastIndexOf(',')); //字典的id
				this.tixingnowIndexes.forEach(itemx => {
					dataSh += itemx.id + ',' + itemx.timePick + ';'
				})
				dataSh = dataSh.substring(0, dataSh.lastIndexOf(';')); //提醒项的id
				const remind = {}
				remind.remindSchemeName = this.input10
				remind.remindSchemeDescribe = this.input11
				remind.schemeSuitable = this.input12
				remind.labelIds = aaa //字典的id
				remind.systemRemindSchemeItem = dataSh
				determineAjax(remind).then(
					response => {
						this.$message({
							message: "添加成功！",
							type: "success"
						});
				this.$router.push('/pro/diclist');
					}
				)
			}
		},
		components: {
			dialogPro,
			tixingPro,
			timeDate
		},
		created(){
			this.titleListData()
			this.tixingxinagData()
		}
	}
</script>
<style scoped>

.title_cont{
	width: 100%;
	height: 36px;
}
.title_cont ul{
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
}
.title_cont ul li{
	width: 15%;
	height: 36px;
	list-style: none;
	float: left;
	margin-right: 10px;
	border: 1px solid #dcdfe6;
	box-sizing: border-box;
	text-align: center;
	line-height: 36px;
	margin-bottom: 10px;
	
}
.title_cont1{
	width: 100%;
	height: 36px;
}
.title_cont1 ul{
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
}
.title_cont1 ul li{
	width: 20%;
	height: 36px;
	list-style: none;
	float: left;
	margin-right: 10px;
	border: 1px solid #dcdfe6;
	box-sizing: border-box;
	text-align: center;
	line-height: 36px;
	overflow: hidden;
	margin-bottom: 10px;
}
.tixingadd{
	width: 15% !important;
}
.tiixng_text,.tiixng_time{
	width: 50%;
	float: left;
}
	.el-row {
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	.el-col {
		border-radius: 4px;
	}
	
	.bg-purple-dark {
		background: #99a9bf;
	}
	
	.bg-purple {
		background: #d3dce6;
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
	
	.grid-content,.bg-purple{
		text-align: center;
		padding: 10px 0;
	}
	.bg-purple[data-v-d9570ae8] {
   	 background: #fff;
	}
	.active {
		background: blue;
		color: #ffffff;
	}
</style>