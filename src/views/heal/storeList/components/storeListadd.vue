<template>
  <el-card class="form-container" shadow="never" v-if="homeAdvertise">
    <el-form
      :model="homeAdvertise"
      :rules="rules"
      ref="homeAdvertiseFrom"
      label-width="150px"
      size="small"
    >
      <el-form-item label="门店名称：">
        <el-input v-model="homeAdvertise.storeName" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="省会：">
        <el-input v-model="homeAdvertise.province" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="城市：">
        <el-input v-model="homeAdvertise.city" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="详细地址：">
        <el-input v-model="homeAdvertise.detailAddress" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="手机号：">
        <el-input v-model="homeAdvertise.storePhone" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="营业时间：">
        <el-input v-model="homeAdvertise.operateTime" class="input-width"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('homeAdvertiseFrom')">提交</el-button>
        <el-button v-if="!isEdit" @click="resetForm('homeAdvertiseFrom')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
import SingleUpload from "@/components/Upload/singleUpload";
import { fetStoreUpdate, fetStoreAdd, fetStoredate } from "@/api/storeList";
import {
  fetchFoodMenuCreate,
  fetchFoodMenuUpdateInfo,
  fetchFoodMenuUpdate
} from "@/api/foodMenu";
const defaultTypeOptions = [
  {
    label: "PC首页轮播",
    value: 0
  },
  {
    label: "APP首页轮播",
    value: 1
  }
];
const defaultHomeAdvertise = {
  id: "",
  storeName: "",
  province:"",
  city: "",
  detailAddress: "",
  storePhone: "",
  operateTime: ""
};
export default {
  name: "HomeAdvertiseDetail",
  components: { SingleUpload },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      homeAdvertise: null,
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        foodMenuName: [
          { required: true, message: "请输入食物名称", trigger: "blur" }
        ],
        foodEvaluation: [
          { required: true, message: "请输入食物描述", trigger: "blur" }
        ],
        foodLevel: [{ required: true, message: "请输入级别", trigger: "blur" }],
        url: [{ required: true, message: "请输入广告链接", trigger: "blur" }]
      },
      typeOptions: Object.assign({}, defaultTypeOptions),
      timeOptions: [
        {
          label: "星期一"
        },
        {
          label: "星期二"
        },
        {
          label: "星期三"
        },
        {
          label: "星期四"
        },
        {
          label: "星期五"
        },
        {
          label: "星期六"
        },
        {
          label: "星期日"
        }
      ],
      startTime: "",
      endTime: ""
    };
  },
  created() {
    if (this.isEdit) {
      fetStoredate(this.$route.query.id).then(response => {
        this.homeAdvertise = response.data;
      });
    } else {
      this.homeAdvertise = Object.assign({}, defaultHomeAdvertise);
    }
  },
  methods: {
    onEditorChange({ quill, html, text }) {
      this.content = html;
      this.homeAdvertise.storyContent = this.content;
      console.log(this.homeAdvertise.storyContent);
    },
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$confirm("是否提交数据", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }).then(() => {
            if (this.isEdit) {
              (this.homeAdvertise.id = this.$route.query.id),
                fetStoreUpdate(this.homeAdvertise).then(response => {
                  this.$refs[formName].resetFields();
                  this.$message({
                    message: "修改成功",
                    type: "success",
                    duration: 1000
                  });
                  this.$router.back();
                });
            } else {
              fetStoreAdd(this.homeAdvertise).then(response => {
                this.$refs[formName].resetFields();
                this.homeAdvertise = Object.assign({}, defaultHomeAdvertise);
                this.$message({
                  message: "提交成功",
                  type: "success",
                  duration: 1000
                });
              });
            }
          });
        } else {
          this.$message({
            message: "验证失败",
            type: "error",
            duration: 1000
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.homeAdvertise = Object.assign({}, defaultHomeAdvertise);
    }
  }
};
</script>
<style scoped>
.input-width {
  width: 70%;
}
</style>


