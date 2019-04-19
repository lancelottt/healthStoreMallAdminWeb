<template>
  <div class="app-container">
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>提醒项分类</span>
      <el-button size="mini" class="btn-add" @click="handleDicAdd()" style="margin-left: 20px">添加</el-button>
    </el-card>
    <div class="table-container">
      <el-table ref="flashTable" :data="list" style="width: 100%;" v-loading="listLoading" border>
        <el-table-column type="selection" width="60" align="center"></el-table-column>
        <el-table-column label="编号" width="100" align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="名字分类" align="center">
          <template slot-scope="scope">{{scope.row.remindClassifyName}}</template>
        </el-table-column>
        <el-table-column label="内容" width="140" align="center">
          <template slot-scope="scope">{{scope.row.remindClassifyText}}</template>
        </el-table-column>
        <!--<el-table-column label="封面" width="140" align="center">
          <template slot-scope="scope">
            <img v-bind:src="scope.row.icon" width="50" height="50">
          </template>
        </el-table-column>-->
        <el-table-column label="创建时间" width="140" align="center">
          <template slot-scope="scope">{{scope.row.createTime | formatDate}}</template>
        </el-table-column>
        <!--<el-table-column label="区间" width="140" align="center">
          <template slot-scope="scope">{{scope.row.remindSection}}</template>
        </el-table-column>-->
        <!--显示与隐藏**-->
        <el-table-column label="显示与隐藏" width="200" align="center">
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
            <el-button size="mini" type="text" @click="handleUpdate(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            <el-button size="mini" type="text" @click="AddWordList(scope.$index, scope.row)">添加下级</el-button>
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
    <el-dialog title="添加提醒项分类" :visible.sync="dialogVisible" width="40%">
      <el-form :model="flashPromotion" ref="flashPromotionForm" label-width="150px" size="small">
        <el-form-item label="名字分类：">
          <el-input v-model="flashPromotion.remindClassifyName" style="width: 250px"></el-input>
        </el-form-item>
         <el-form-item label="内容：">
          <el-input v-model="flashPromotion.remindClassifyText" style="width: 250px"></el-input>
        </el-form-item>
        <!--<el-form-item label="开始时间：">
          <el-date-picker v-model="flashPromotion.createTime" type="date" placeholder="请选择时间"></el-date-picker>
        </el-form-item>-->
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="handleDialogConfirm()" size="small">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { fetchNewsList,fetchNewsDelete ,updateFlash,updateShowStatus,createFlash} from "@/api/remind";
import { formatDate } from "@/utils/date";
const defaultListQuery = {
  pageNum: 1,
  pageSize: 5,
  keyword: null
};
const defaultFlashPromotion = {
  id: null,
  remindClassifyName:null,
  remindClassifyText:null,
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
        let id=[];
        id.push(row.id)
        data.append('id',id);
        data.append('hidden',row.hidden);
        updateShowStatus(data).then(response=>{
          this.$message({
            message: '修改成功',
            type: 'success',
            duration: 1000
          });
        });
      },
    handleDicAdd() {
        this.dialogVisible = true;
        this.isEdit = false;
        this.flashPromotion = Object.assign({},defaultFlashPromotion);
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
    handleDelete(index, row) {
      this.$confirm("是否要删除该活动?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
      	const aaa={}
      	aaa.id=row.id
      	aaa.remindClassifyCode=row.remindClassifyCode
        fetchNewsDelete(aaa).then(response => {
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
   	this.$router.push({path:'/dic/remindZiji', query:{remindClassifyCode: row.remindClassifyCode}});
  },
//  编辑**
    handleUpdate(index, row) {
    	  this.dialogVisible = true;
        this.isEdit = true;
        this.flashPromotion = Object.assign({},row);
      // this.dialogVisible = true;
      // this.isEdit = true;
      // this.flashPromotion = Object.assign({}, row);
//    this.$router.push({path:'/heal/newsupdata', query:{id: row.id}});
    },
    handleDialogConfirm() {
      this.$confirm("是否要确认?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        if (this.isEdit) {
        	const navName={}
        	navName.remindClassifyName=this.flashPromotion.remindClassifyName
        	navName.remindClassifyText=this.flashPromotion.remindClassifyText
        	navName.id=this.flashPromotion.id
          updateFlash(navName).then(
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
          createFlash(this.flashPromotion).then(response => {
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
      fetchNewsList(this.listQuery).then(response => {
        this.listLoading = false;
        this.list = response.data.list;
        this.total = response.data.total;
      });
    }
  }
};
</script>
<style></style>