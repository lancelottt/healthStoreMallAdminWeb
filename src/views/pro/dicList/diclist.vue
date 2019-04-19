<template>
  <div class="app-container">
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>方案列表管理</span>
       <el-button size="mini" class="btn-add" @click="handleDicAdd()" style="margin-left: 20px">添加</el-button>
    </el-card>
    <div class="table-container">
      <el-table ref="flashTable" :data="list" style="width: 100%;" v-loading="listLoading" border>
        <el-table-column type="selection" width="60" align="center"></el-table-column>
        <el-table-column label="id" width="100" align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="标题" align="center">
          <template slot-scope="scope">{{scope.row.remindSchemeName}}</template>
        </el-table-column>
        <el-table-column label="内容" width="140" align="center">
          <template slot-scope="scope">{{scope.row.remindSchemeDescribe}}</template>
        </el-table-column>
        <!--创建时间**-->
         <el-table-column label="创建时间" width="140" align="center">
          <template slot-scope="scope">{{scope.row.createTime | formatDate}}</template>
        </el-table-column>
        <!--创建时间结束**-->
         <el-table-column label="显示隐藏" width="200" align="center">
          <template slot-scope="scope">
            <el-switch
              @change="handleShowStatusChange(scope.$index, scope.row)"
              :active-value="1"
              :inactive-value="9"
              v-model="scope.row.hidden">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="handleDicUpdate(scope.$index, scope.row)">编辑</el-button>
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
import { fetchBooksList,updateShowStatus ,addDicFlash ,upXiugaidateFlash} from "@/api/prolist";
import { formatDate } from "@/utils/date";
const defaultListQuery = {
  pageNum: 1,
  pageSize: 5,
  keyword: null
};
const defaultFlashPromotion = {
  navClassifyDicId: null,
  navClassifyName: null,
  describ: null,
  labelIds:null,
  systemRemindSchemeItem:''
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
    formatActiveStatus(row) {
      let nowTime = new Date().getTime();
      if (nowTime >= row.startDate && nowTime <= row.endDate) {
        return "活动进行中";
      } else if (nowTime > row.endDate) {
        return "活动已结束";
      } else {
        return "活动未开始";
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
//	显示与隐藏**
     handleShowStatusChange(index, row) {
        let data = new URLSearchParams();
        let navClassifyDicId=[];
        navClassifyDicId.push(row.id)
        data.append('id',navClassifyDicId);
        data.append('hidden',row.hidden);
        data.append('labelIds','');
        data.append('systemRemindSchemeItem','');
        updateShowStatus(data).then(response=>{
          this.$message({
            message: '修改成功',
            type: 'success',
            duration: 1000
          });
        });
      },
      handleDicAdd() {
      	 this.$router.push('/pro/addPro');
//      this.dialogVisible = true;
//      this.isEdit = false;
//      this.flashPromotion = Object.assign({},defaultFlashPromotion);
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
//      fetchDicDelete(row.navClassifyDicId).then(response => {
//        this.$message({
//          type: "success",
//          message: "删除成功!"
//        });
//        this.getList();
//      });
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
    	this.$router.push({path:'/pro/updatePro',query:{id:row.id,systemRemindSchemeCode:row.systemRemindSchemeCode}});
//      this.dialogVisible = true;
//      this.isEdit = true;
//      this.flashPromotion = Object.assign({},row);
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
      fetchBooksList(this.listQuery).then(response => {
        this.listLoading = false;
        this.list = response.data.list;
        this.total = response.data.total;
      });
    }
  }
};
</script>
<style></style>