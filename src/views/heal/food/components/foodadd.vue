<template>
  <el-card class="form-container" shadow="never">
    <el-form
      :model="homeAdvertise"
      :rules="rules"
      ref="homeAdvertiseFrom"
      label-width="150px"
      size="small"
    >
      <el-form-item label="名称：" prop="foodName">
        <el-input v-model="homeAdvertise.foodName" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="图片：" prop="pic">
        <single-upload v-model="homeAdvertise.foodImgurl"></single-upload>
      </el-form-item>
      <el-form-item label="评价：" prop="foodEvaluation">
        <el-input v-model="homeAdvertise.foodEvaluation" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="级别：" prop="foodLevel">
        <el-input v-model="homeAdvertise.foodLevel" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="热量（千卡）：" prop="storyAuthor">
        <el-input v-model="homeAdvertise.foodHeat" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="蛋白质12（克）：" prop="storyAuthor">
        <el-input v-model="homeAdvertise.foodProtein" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="碳水化合物（克）：" prop="storyAuthor">
        <el-input v-model="homeAdvertise.foodCarbonWater" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="脂肪（克）：" prop="storyAuthor">
        <el-input v-model="homeAdvertise.foodFat" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="纤维素（克）：" prop="storyAuthor">
        <el-input v-model="homeAdvertise.foodCellulose" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="维生素A（微克）：" prop="storyAuthor">
        <el-input v-model="homeAdvertise.foodVitaminA" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="维生素C（微克）：" prop="storyAuthor">
        <el-input v-model="homeAdvertise.foodVitaminC" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="维生素E（微克）：" prop="storyAuthor">
        <el-input v-model="homeAdvertise.foodVitaminE" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="胡萝卜素（微克）：" prop="storyAuthor">
        <el-input v-model="homeAdvertise.foodCarotene" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="硫黄素（毫克）：" prop="storyAuthor">
        <el-input v-model="homeAdvertise.foodThiamine" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="核黄素（豪克）：" prop="storyAuthor">
        <el-input v-model="homeAdvertise.foodRiboflavin" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="烟酸（豪克）：" prop="storyAuthor">
        <el-input v-model="homeAdvertise.foodNiacin" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="胆固醇（豪克）：" prop="storyAuthor">
        <el-input v-model="homeAdvertise.foodCholesterol" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="镁（豪克）：" prop="storyAuthor">
        <el-input v-model="homeAdvertise.foodMagnesium" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="钙（豪克）：" prop="storyAuthor">
        <el-input v-model="homeAdvertise.foodCalcium" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="锌（豪克）：" prop="storyAuthor">
        <el-input v-model="homeAdvertise.foodZinc" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="铜（豪克）：" prop="storyAuthor">
        <el-input v-model="homeAdvertise.foodCopper" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="锰（豪克）：" prop="storyAuthor">
        <el-input v-model="homeAdvertise.foodManganese" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="钾（豪克）：" prop="storyAuthor">
        <el-input v-model="homeAdvertise.foodPotassium" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="磷（豪克）：" prop="storyAuthor">
        <el-input v-model="homeAdvertise.foodPhosphorus" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="纳（豪克）：" prop="storyAuthor">
        <el-input v-model="homeAdvertise.foodSodium" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="硒（豪克）：" prop="storyAuthor">
        <el-input v-model="homeAdvertise.foodSelenium" class="input-width"></el-input>
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
import { quillEditor } from "vue-quill-editor";

import {
  createHomeAdvertise,
  getHomeAdvertise,
  updateHomeAdvertise
} from "@/api/homeAdvertise";

import {
  fetchFoodCreate,
  fetchFoodUpdate,
  fetchFoodUpdateInfo,
  
} from "@/api/food";
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
  foodCalcium: null,
  foodCarbonWater: null,
  foodCarotene: null,
  foodCellulose: null,
  foodCholesterol: null,
  foodCopper: null,
  foodEvaluation: null,
  foodFat: null,
  foodHeat: null,
  foodId: null,
  foodImgurl: null,
  foodIron: null,
  foodLevel: null,
  foodMagnesium: null,
  foodManganese: null,
  foodMenuId: null,
  foodName: null,
  foodNiacin: null,
  foodPhosphorus: null,
  foodPotassium: null,
  foodProtein: null,
  foodRiboflavin: null,
  foodSelenium: null,
  foodSodium: null,
  foodThiamine: null,
  foodVitaminA: null,
  foodVitaminC: null,
  foodVitaminE: null,
  foodZinc: null
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
        foodName: [
          { required: true, message: "请输入食物名称", trigger: "blur" }
        ],
        foodEvaluation: [
          { required: true, message: "请输入食物描述", trigger: "blur" }
        ],
        foodLevel: [{ required: true, message: "请输入级别", trigger: "blur" }],
        url: [{ required: true, message: "请输入广告链接", trigger: "blur" }],
        // startTime: [
        //   { required: true, message: "请选择开始时间", trigger: "blur" }
        // ]
      },
      typeOptions: Object.assign({}, defaultTypeOptions)
    };
  },
  created() {
    if (this.isEdit) {
      fetchFoodUpdateInfo(this.$route.query.id).then(response => {
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
              defaultHomeAdvertise.foodId = this.$route.query.id;
              fetchFoodUpdate(this.homeAdvertise).then(
                response => {
                  this.$refs[formName].resetFields();
                  this.$message({
                    message: "修改成功",
                    type: "success",
                    duration: 1000
                  });
                  this.$router.back();
                }
              );
            } else {
              fetchFoodCreate(this.homeAdvertise).then(response => {
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


