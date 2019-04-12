<template>
  <el-card>
    <div class="form-container">
      <form
        action="http://192.168.1.170:8080/userAthleticItem/create"
        method="post"
        enctype="multipart/form-data"
        id="uploadForm"
      >
        <div class="el-form-item el-form-item--small">
          <label for="informationName" class="el-form-item__label" style="width: 150px;">运动项名称：</label>
          <div class="el-form-item__content" style="margin-left: 150px;">
            <div data-v-3218ab2e class="input-width el-input el-input--small">
              <input type="text" name="itemName" class="el-input__inner">
            </div>
          </div>
        </div>

        <div class="el-form-item el-form-item--small">
          <label for="informationName" class="el-form-item__label" style="width: 150px;">运动项描述：</label>
          <div class="el-form-item__content" style="margin-left: 150px;">
            <div data-v-3218ab2e class="input-width el-input el-input--small">
              <input type="text" name="itemDescribe" class="el-input__inner">
            </div>
          </div>
        </div>

        <div class="el-form-item el-form-item--small">
          <label for="informationName" class="el-form-item__label" style="width: 150px;">视频时长：</label>
          <div class="el-form-item__content" style="margin-left: 150px;">
            <div data-v-3218ab2e class="input-width el-input el-input--small">
              <input type="text" name="itemDuration" class="el-input__inner">
            </div>
          </div>
        </div>

        <div class="el-form-item el-form-item--small">
          <label for="informationName" class="el-form-item__label" style="width: 150px;">项目排序：</label>
          <div class="el-form-item__content" style="margin-left: 150px;">
            <div data-v-3218ab2e class="input-width el-input el-input--small">
              <input type="text" name="itemSort" class="el-input__inner">
            </div>
          </div>
        </div>

        <div class="el-form-item el-form-item--small">
          <label for="informationName" class="el-form-item__label" style="width: 150px;">视频：</label>
          <div class="el-form-item__content" style="margin-left: 150px;">
            <div
              data-v-3218ab2e
              class="input-width el-input el-input--small"
              style=" position: relative;"
            >
              <input type="file" name="file" class accept="audio/mp4, video/mp4" ref="imgbtn">
              <span
                class="el-button el-button--primary el-button--small"
                style="position: absolute;left: -12px;"
                @click="upImg()"
              >点击上传</span>
            </div>
          </div>
        </div>

        <div class="el-form-item el-form-item--small">
          <label for="informationName" class="el-form-item__label" style="width: 150px;">图片：</label>
          <div class="el-form-item__content" style="margin-left: 150px;">
            <div
              data-v-3218ab2e
              class="input-width el-input el-input--small"
              style=" position: relative;"
            >
              <input
                type="file"
                name="imgFile"
                class="resetInput"
                accept="image/gif, image/jpeg, image/png"
                ref="videobtn"
              >
              <span
                class="el-button el-button--primary el-button--small"
                style="position: absolute;left: -12px;"
                @click="upVideo()"
              >点击上传</span>
            </div>
          </div>
        </div>
        <div class="submitBg" @click="getSubmit">
          <input type="button" value="提交" class="el-button el-button--primary el-button--small">
        </div>
      </form>
    </div>
  </el-card>
  <!-- <el-card class="form-container" shadow="never">
    <el-form
      :model="homeAdvertise"
      :rules="rules"
      ref="homeAdvertiseFrom"
      label-width="150px"
      size="small"
    >
      <form
        id="uploadForm"
        enctype="multipart/form-data"
        action="http://192.168.1.170:8080/userAthleticItem/create"
        methods="“post”"
      >
        <el-form-item label="运动项目名称：" prop="storyTitle">
          <el-input v-model="homeAdvertise.itemName" class="input-width" name="itemName"></el-input>
        </el-form-item>
        <el-form-item label="运动项描述 ：" prop="storyAuthor">
          <el-input v-model="homeAdvertise.itemDescribe" class="input-width" name="itemDescribe"></el-input>
        </el-form-item>

        <el-form-item label="视频时间：" prop="createTime">
          <el-input v-model="homeAdvertise.itmDuration" class="input-width" name="itmDuration"></el-input>
        </el-form-item>

        <el-form-item label="封面：">
          <p>
            <input type="file" name="imgFile" @change="addImg" ref="inputer">
          </p>
          <img :src="imgs[0]">
        </el-form-item>

        <el-form-item label="视频：">
          <p>
            <input type="file" name="file" @change="addMove" ref="inputmove">
          </p>
        </el-form-item>
        <input type="submit" value="提交1231">

        <el-form-item label="上传封面：" prop="createTime">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-change="handleChangePic"
          :file-list="imgfileList"
          list-type="picture"
          :auto-upload="false"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>

      <el-form-item label="上传视频：" prop="createTime">
        <el-upload
          class="upload-demo"
          ref="upload"
          action="http://192.168.1.170:8080/userAthleticItem/create"
          :on-change="handleChangeMove"
          list-type="picture"
          :auto-upload="false"
          accept=".mp4, .qlv, .qsv, .ogg, .flv, .avi, .wmv, .rmvb"
          :data="homeAdvertise"
        >
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success">上传到服务器</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        </el-form-item>
      </form>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('homeAdvertiseFrom')">提交</el-button>
        <el-button v-if="!isEdit" @click="resetForm('homeAdvertiseFrom')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>-->
</template>
<script>
import { quillEditor } from "vue-quill-editor";
import {
  createHomeAdvertise,
  getHomeAdvertise,
  updateHomeAdvertise
} from "@/api/homeAdvertise";

import { fetchStoryAdd, fetchStoryUpdate, fetchStorydate } from "@/api/story";
import { fetchSportsAdd } from "@/api/sports";
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
  itmDuration: null,
  itemName: null,
  itemDescribe: null,
  imgFile: null,
  file: null
};
export default {
  name: "HomeAdvertiseDetail",
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formData: new FormData(),
      imgfileList: [],
      videoFlag: false, //刚开始的时候显示为flase
      videoUploadPercent: "0%", //进度条刚开始的时候为0%
      paramsdata: {
        参数: "参数值" //添加其他参数
      },
      homeAdvertise: null,
      imgLen: 0,
      imgs: [],
      rules: {
        name: [
          { required: true, message: "请输入广告名称", trigger: "blur" },
          {
            min: 2,
            max: 140,
            message: "长度在 2 到 140 个字符",
            trigger: "blur"
          }
        ],
        url: [{ required: true, message: "请输入广告链接", trigger: "blur" }],
        startTime: [
          { required: true, message: "请选择开始时间", trigger: "blur" }
        ],
        endTime: [
          { required: true, message: "请选择到期时间", trigger: "blur" }
        ],
        pic: [{ required: true, message: "请选择广告图片", trigger: "blur" }]
      },
      typeOptions: Object.assign({}, defaultTypeOptions)
    };
  },
  created() {
    if (this.isEdit) {
      fetchStorydate(this.$route.query.id).then(response => {
        this.homeAdvertise = response.data;
      });
    } else {
      this.homeAdvertise = Object.assign({}, defaultHomeAdvertise);
    }
  },
  methods: {
    getSubmit() {
      var itemName = document.getElementsByName("itemName")[0].value;
      var itemDescribe = document.getElementsByName("itemDescribe")[0].value;
      var itemDuration = document.getElementsByName("itemDuration")[0].value;
      var file = document.getElementsByName("file")[0].value;
      var imgFile = document.getElementsByName("imgFile")[0].value;
      if (itemName && itemDescribe && itemDuration && imgFile && file) {
        var _this = this;
        $("#uploadForm").ajaxSubmit({
          type: "POST",
          url: "http://2b3665801a.51mypc.cn:20626/userAthleticItem/create",
          success: function(data) {
            _this.$message({
              message: "添加成功!",
              type: "success"
            });
          },
          error: function() {
            _this.$message({
              message: "添加成功!",
              type: "success"
            });
          }
        });
      }
    },
    upImg() {
      this.$refs.imgbtn.click();
    },
    upVideo() {
      this.$refs.videobtn.click();
    },
    submitUpload2() {},
    // 视频上传事件
    handleChangeMove(file) {
      console.log(file);
    },
    //图片
    handleChangePic(file) {
      this.homeAdvertise.imgFile = file.url;
      console.log(this.homeAdvertise.imgFile);
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    beforeUploadVideo(file) {
      //视频上传之前判断他的大小
      const isLt10M = file.size / 1024 / 1024 < 2000;
      if (!isLt10M) {
        this.$message.error("上传视频大小不能超过2000MB哦!");
        return false;
      }
    },
    uploadVideoProcess(event, file, fileList) {
      //视频上传的时候获取上传进度传给进度条
      this.videoFlag = true;
      this.videoUploadPercent = parseInt(file.percentage);
      console.log(this.videoUploadPercent);
    },
    handleVideoSuccess(res, file) {
      //视频上传成功之后返回视频地址
      this.videoFlag = false;
      this.videoUploadPercent = 0;
      console.log(res);
      this.Video = res.data[0];
    },
    addImg(event) {
      let inputDOM = this.$refs.inputer;
      // 通过DOM取文件数据
      this.fil = inputDOM.files;
      this.homeAdvertise.imgFile = this.fil[0].name;
      console.log(this.homeAdvertise.imgFile);
      // this.imgs.push(this.fil[0].name);
    },
    addMove(event) {
      console.log("change");
      let inputDOM = this.$refs.inputmove;
      // 通过DOM取文件数据
      this.fil = inputDOM.files;
      this.homeAdvertise.file = this.fil[0].name;
      console.log(inputDOM.files);
      console.log(this.homeAdvertise.file);
    },
    submitUpload2() {
      let fromDom = this.$refs.fromDom;
      var formData = new FormData(fromDom);
      this.formData.append("file", this.homeAdvertise.file);
      console.log(this.formData);
      fetchSportsAdd(this.formData);
      // formData.append('file': this.homeAdvertise.file)

      console.log(formData);
      // formData.append(this.homeAdvertise);  //自定义参数传递
    },
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
              fetchStoryUpdate(this.$route.query.id, this.homeAdvertise).then(
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
              fetchStoryAdd(this.homeAdvertise).then(response => {
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
.submitBg {
  width: 100%;
  text-align: center;
}
.submitBg input {
  margin: 0 auto;
}
.resetInput {
  border: 0;
}
</style>


