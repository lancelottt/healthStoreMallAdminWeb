<template>
	<div class="app-container" id="details">
		<el-row>
			<el-col :span="24">
				<div class="grid-content bg-purple-dark">
			<el-row>
				  <el-col :span="1">
				  	<div class="grid-content bg-purple">
				  		<img src="../../../../static/images/head.png"/>
				  	</div>
				  </el-col>
				  <el-col :span="23">
				  	<div class="grid-content bg-purple-light zaosh">
				  		早上好 XXXX
				  	</div>
				  </el-col>
            </el-row>
				</div>
			</el-col>
		</el-row>
	<!--快捷入口**-->
	<el-row class="rigou">
           <el-col :span="24">
           	<div class="grid-content bg-purple-dark kuaijie">快捷入口
           	   <el-row>
				  <el-col :span="24">
				  	<div class="grid-content bg-purple">
				  	<el-row :gutter="20">
						  <el-col :span="3">
						  	<div class="grid-content bg-purple">
						  		<div>
						  			<img src="../../../../static/images/huiyuan.png"/>
						  		</div>
						  		<div class="healhar">会员管理</div>
						  	</div>
						  </el-col>
						  <el-col :span="3">
						  	<div class="grid-content bg-purple">
						  		<div>
						  			<img src="../../../../static/images/jiankang.png"/>
						  		</div>
						  		<div class="healhar">健康信息</div>
						  	</div>
						  </el-col>
						  <el-col :span="3">
						  	<div class="grid-content bg-purple">
						  		<div>
						  			<img src="../../../../static/images/family.png"/>
						  		</div>
						  		<div class="healhar">家人关系</div>
						  	</div>
						  </el-col>
						  <el-col :span="3">
						  	<div class="grid-content bg-purple">
						  		<div>
						  			<img src="../../../../static/images/daka.png"/>
						  		</div>
						  		<div class="healhar">打卡记录</div>
						  	</div>
						  </el-col>
						   <el-col :span="3">
						  	<div class="grid-content bg-purple">
						  		<div>
						  			<img src="../../../../static/images/genduo.png"/>
						  		</div>
						  		<div class="healhar" style="padding-left: 16px;box-sizing: border-box;">更多</div>
						  	</div>
						  </el-col>
					</el-row>
				  	</div>
				  </el-col>
            </el-row>
           	</div>
           </el-col>
    </el-row>
    <!--用户详情**-->
       	<el-row class="rigou">
           <el-col :span="24">
           	<div class="grid-content bg-purple-dark kuaijie">
           		<span><img src="../../../../static/images/person.png"/></span>
           		<span class="gridNa">用户详情</span> 
           	     <el-table
				    :data="tableData"
				    border
				    style="width: 100%">
				    <el-table-column
				      prop="name"
				      label="用户名称"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="phone"
				      label="手机号码"
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="shengao"
				      label="身高">
				    </el-table-column>
				      <el-table-column
				      prop="qianWei"
				      label="当前体重">
				    </el-table-column>
				      <el-table-column
				      prop="mbWei"
				      label="目标体重">
				    </el-table-column>
				      <el-table-column
				      prop="xianbie"
				      label="性别">
				    </el-table-column>
				     <el-table-column
				      prop="shenri"
				      label="注册时间">
				    </el-table-column>
				  </el-table>
           	</div>
           </el-col>
    </el-row>
    <!--用户详情结束**-->
    <!--家人关系图**-->
       <el-row class="rigou">
           <el-col :span="24">
           	<div class="grid-content bg-purple-dark kuaijie">
           		<span>
           			<img src="../../../../static/images/jirenGu.png"/>
           		</span>
           		<span>家人关系图</span>
           	</div>
           </el-col>
    </el-row>
    <!--家人关系图结束**-->
	</div>
</template>

<script>
	import { details } from "@/api/diclist";
	import { formatDate } from "@/utils/date";
	export default {
		data() {
			return {
		        tableData: [ 
		        ]
			}
		},
		created() {
			this.getList();
		},
		methods: {
			getList() {
				details(this.$route.query.id).then(response => {
					let aaa = {}
//					this.list = response.data
//					console.log(this.list);
					aaa.name=response.data.username   //	用户名**
					aaa.phone=response.data.phone  //手机号码
					
					  //身高
					if(response.data.stature == null || response.data.stature == "") {
						aaa.shengao= '无' 
					}else{
						aaa.shengao=response.data.stature 
					}
					//当前体重
					if(response.data.currWeight == null || response.data.currWeight== "") {
						aaa.qianWei=  '无' 
					}else{
						aaa.qianWei=  response.data.currWeight 
					}
					//目标体重
				    if(response.data.targetWeight == null || response.data.targetWeight== "") {
					        aaa.mbWei=  '无' 
					}else{
						aaa.mbWei=response.data.targetWeight
					}
//					//身份证号
//                    if(response.data.idCard  == null || response.data.idCard == "") {
//					    aaa.idCard='无' 
//					}else{
//						aaa.idCard=response.data.idCard 
//					}      
//					aaa.icon=response.data.icon //头像
					 //男/女
					if(response.data.gender === 0){
						aaa.xianbie='未知'
					}else if(response.data.gender === 1){
						aaa.xianbie='男'
					}else{
						aaa.xianbie='女'
					}
					aaa.shenri=	this.handFang(response.data.createTime) //注册时间
					this.tableData.push(aaa)
				});
			},
			handFang(t) {
			    var _time=new Date(t);
			    var   year=_time.getFullYear();//2017
			    var   month=_time.getMonth()+1;//7
			    var   date=_time.getDate();//10
			    return   year+"-"+month+"-"+date
			}
	}
	}
</script>

<style scoped="scoped">
	.el-table__body-wrapper .is-scrolling-none{
		text-align: center;
	}
	.gridNa{
		font-size: 22px;
		margin-left: 10px;
		color: #666666;
	}
	.healhar{
		font-size: 14px;
		color: #666666;
		margin-top: 6px;
	}
	.zaosh{
		color: #333333 !important;
		font-size: 16px !important;
	}
	.rigou{
		width:95%;
		margin-left: 39px !important;
	}
	.app-container{
		padding: 0 !important;
		
	}
	.kuaijie{
	   padding-left: 20px !important;
	   color: #999999;
	   padding-bottom: 20px !important;
	   font-size: 22px;
	   padding-top: 20px;
	}
	#details {
		background: #f5f5f5;
	}
	.el-row {
		    margin-left: 13px;
    margin-bottom: 20px;
    padding-top: 6px;
    box-sizing: border-box;
		margin-left: 20px;
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	.grid-content{
		background: #FFFFFF;
	}
	.grid-content .bg-purple img{
		background-size: 100% 100%;
	}
	.el-col {
		border-radius: 4px;
	}
	
	.bg-purple-dark {
		background: #FFFFFF;
	}
	
	.bg-purple {
		background: #FFFFFF;
	}
	
	.bg-purple-light {
		background: #FFFFFF;
		line-height: 44px;
	}
	
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
	
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
</style>