<template>
  <div class="app-container">
  	<!--搜索**-->
   <el-card class="filter-container" shadow="never">
    <div>
      <i class="el-icon-search"></i>
      <span>筛选搜索</span>
      <el-button
        style="float: right"
        @click="searchBrandList()"
        type="primary"
        size="small">
        查询结果
      </el-button>
    </div>
    <div style="margin-top: 15px">
      <el-form :inline="true" :model="listQuery" size="small" label-width="140px">
        <el-form-item label="输入搜索：">
          <el-input style="width: 203px" v-model="listQuery.username" placeholder="用户名"></el-input>
        </el-form-item>
      </el-form>
    </div>
</el-card>
  	<!--搜索结束**-->
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>会员管理列表</span>
    </el-card>
    <div class="table-container">
      <el-table ref="flashTable" :data="list" style="width: 100%;" v-loading="listLoading" border>
        <el-table-column type="selection" width="60" align="center"></el-table-column>
        <el-table-column label="id" width="100" align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="用户名" align="center">
          <template slot-scope="scope">{{scope.row.username}}</template>
        </el-table-column>
         <!--创建时间**-->
         <el-table-column label="注册时间" width="140" align="center">
          <template slot-scope="scope">{{scope.row.createTime | formatDate}}</template>
        </el-table-column>
        <!--创建时间结束**-->
        <el-table-column label="手机号" align="center">
          <template slot-scope="scope">{{scope.row.phone}}</template>
        </el-table-column>
        <!--男女**-->
      <el-table-column label="性别" width="100" align="center">
          <template slot-scope="scope">
            <p>{{scope.row.gender | verifyStatusFilter}}</p>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="details(scope.$index, scope.row)">详情 |健康打卡</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination-container">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes,prev, pager, next,jumper"
        :current-page.sync="listQuery.pageNum"
        :page-size="listQuery.pageSize"
        :page-sizes="[5,10,15]"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import { memberList, fetchDicDelete,updateShowStatus ,addDicFlash ,upXiugaidateFlash} from "@/api/diclist";
import { formatDate } from "@/utils/date";
const defaultListQuery = {
  pageNum: 1,
  pageSize: 5,
  username: null
};
const defaultFlashPromotion = {
  navClassifyDicId: null,
  navClassifyName: null,
  describ: null
};
export default {
  name: "flashPromotionList",
  data() {
    return {
      listQuery: Object.assign({}, defaultListQuery),
      list: null,
      total: null,
      listLoading: false,
      dialogVisible: false,
      flashPromotion: Object.assign({}, defaultFlashPromotion),
      isEdit: false
    };
  },
  created() {
    this.getList();
  },
  filters: {
  	  verifyStatusFilter(value) {
        if (value === 0) {
          return '未知';
        } else if(value === 1) {
          return '男';
        }else{
          return '女';
        }
      },
    formatDate(time) {
      if (time == null || time === "") {
        return "N/A";
      }
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    }
  },
  methods: {
//	跳转到详情**
    details (index,row) {
    	 this.$router.push({path: '/shop/decailsShop',query:{id:row.id}})
    },
  	searchBrandList() {
        this.listQuery.pageNum = 1;
        this.getList();
      },
//	上架和下架**
     handleShowStatusChange(index, row) {
        let data = new URLSearchParams();
        let navClassifyDicId=[];
        navClassifyDicId.push(row.navClassifyDicId)
        data.append('navClassifyDicId',navClassifyDicId);
        data.append('stautsSign',row.stautsSign);
        updateShowStatus(data).then(response=>{
          this.$message({
            message: '修改成功',
            type: 'success',
            duration: 1000
          });
        });
     },
    handleResetSearch() {
      this.listQuery = Object.assign({}, defaultListQuery);
    },
    handleSearchList() {
      this.listQuery.pageNum = 1;
      this.getList();
    },
    handleSizeChange(val) {
      this.listQuery.pageNum = 1;
      this.listQuery.pageSize = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.pageNum = val;
      this.getList();
    },
    handleStatusChange(index, row) {
      this.$confirm("是否要修改该状态?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          updateStatus(row.id, {
            status: row.status
          }).then(response => {
            this.$message({
              type: "success",
              message: "修改成功!"
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消修改"
          });
          this.getList();
        });
    },
    handleDicDelete(index, row) {
      this.$confirm("是否要删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        fetchDicDelete(row.navClassifyDicId).then(response => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.getList();
        });
      });
    },
//  添加下级**
   AddWordList(index, row){
   	this.$router.push({path:'/dic/ziliebiao', query:{navClassifyCode: row.navClassifyCode}});
   },
//  handleUpdate(index, row) {
//    // this.dialogVisible = true;
//    // this.isEdit = true;
//    // this.flashPromotion = Object.assign({}, row);
//    this.$router.push({path:'/heal/storyupdata', query:{id: row.id}});
//  },
    handleDicUpdate(index, row) {
        this.dialogVisible = true;
        this.isEdit = true;
        this.flashPromotion = Object.assign({},row);
      },
    handleDialogConfirm() {
      this.$confirm("是否要确认?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        if (this.isEdit) {
        	const navName={}
        	navName.navClassifyName=this.flashPromotion.navClassifyName
        	navName.describ=this.flashPromotion.describ
        	navName.navClassifyDicId=this.flashPromotion.navClassifyDicId
          upXiugaidateFlash(navName).then(
            response => {
              this.$message({
                message: "修改成功！",
                type: "success"
              });
              this.dialogVisible = false;
              this.getList();
            }
          );
        } else {
         addDicFlash(this.flashPromotion).then(response => {
            this.$message({
              message: "添加成功！",
              type: "success"
            });
            this.dialogVisible = false;
            this.getList();
          });
        }
      });
    },
    getList() {
      this.listLoading = true;
      memberList(this.listQuery).then(response => {
        this.listLoading = false;
        this.list = response.data.list;
        this.total = response.data.total;
	    this.totalPage = response.data.totalPage;
	    this.pageSize = response.data.pageSize;
      });
    }
  }
};
</script>
<style></style>