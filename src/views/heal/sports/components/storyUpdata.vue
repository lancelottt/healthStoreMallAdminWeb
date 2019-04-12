<template>
  <el-card>
    <div class="form-container" v-if="sportInfo">
      <form action="http://192.168.1.170:8080/userAthleticItem/update" method="post" >
        <div class="el-form-item el-form-item--small">
          <label for="informationName" class="el-form-item__label" style="width: 150px;">运动编号：</label>
          <div class="el-form-item__content" style="margin-left: 150px;">
            <div data-v-3218ab2e class="input-width el-input el-input--small">
              <input
                type="text"
                name="userAthleticItemCode"
                class="el-input__inner"
                v-model="sportId"
              >
            </div>
          </div>
        </div>
        <div class="el-form-item el-form-item--small">
          <label for="informationName" class="el-form-item__label" style="width: 150px;">运动项名称：</label>
          <div class="el-form-item__content" style="margin-left: 150px;">
            <div data-v-3218ab2e class="input-width el-input el-input--small">
              <input
                type="text"
                name="itemName"
                class="el-input__inner"
                v-model="sportInfo.itemName"
              >
            </div>
          </div>
        </div>

        <div class="el-form-item el-form-item--small">
          <label for="informationName" class="el-form-item__label" style="width: 150px;">运动项描述：</label>
          <div class="el-form-item__content" style="margin-left: 150px;">
            <div data-v-3218ab2e class="input-width el-input el-input--small">
              <input
                type="text"
                name="itemDescribe"
                class="el-input__inner"
                v-model="sportInfo.itemDescribe"
              >
            </div>
          </div>
        </div>

        <div class="el-form-item el-form-item--small">
          <label for="informationName" class="el-form-item__label" style="width: 150px;">视频时长：</label>
          <div class="el-form-item__content" style="margin-left: 150px;">
            <div data-v-3218ab2e class="input-width el-input el-input--small">
              <input
                type="text"
                name="itemDuration"
                class="el-input__inner"
                v-model="sportInfo.itemDuration"
              >
            </div>
          </div>
        </div>

        <div class="el-form-item el-form-item--small">
          <label for="informationName" class="el-form-item__label" style="width: 150px;">项目排序：</label>
          <div class="el-form-item__content" style="margin-left: 150px;">
            <div data-v-3218ab2e class="input-width el-input el-input--small">
              <input
                type="text"
                name="itemSort"
                class="el-input__inner"
                v-model="sportInfo.itemSort"
              >
            </div>
          </div>
        </div>

        <div class="el-form-item el-form-item--small">
          <label for="informationName" class="el-form-item__label" style="width: 150px;">视频：</label>
          <div class="el-form-item__content" style="margin-left: 150px;">
            <video width="320" height="240" controls>
              <source :src="this.basePath + sportInfo.itemPath" type="video/mp4">
              <source :src="this.basePath + sportInfo.itemPath" type="video/ogg">您的浏览器不支持 HTML5 video 标签。
            </video>
          </div>
        </div>

        <div class="el-form-item el-form-item--small">
          <label for="informationName" class="el-form-item__label" style="width: 150px;">图片：</label>
          <div class="el-form-item__content" style="margin-left: 150px;">
            <img :src="this.basePath + sportInfo.itemCoverPath" class width="150">
          </div>
        </div>
        <div class="submitBg">
          <input type="submit" value="提交" class="el-button el-button--primary el-button--small">
         </div>
      </form>
    </div>
  </el-card>
</template>
<script>
import { fetchSportsInfo, fetchSportsUpdata } from "@/api/sports";

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
      sportInfo: null,
      basePath: null,
      sportId: null
    };
  },
  created() {
    this.sportId = this.$route.query.id;
    fetchSportsInfo(this.$route.query.id).then(response => {
      this.sportInfo = response.data.userAthleticItem[0];
      this.basePath = response.data.basePath;
    });
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


