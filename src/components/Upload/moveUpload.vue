<template>
  <div>
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      accept=".mp4, .qlv, .qsv, .ogg, .flv, .avi, .wmv, .rmvb"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-change="handleChange"
      :file-list="fileList"
      list-type="picture"
      :auto-upload="false"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <button @click="submitsd">tijiao </button>
  </div>
</template>
<script>
import { fetchSportsAdd } from "../../api//sports";
export default {
  data() {
    return {
      file: null,
      fileList: []
    };
  },
  methods: {
    handleChange(file, fileList) {
      this.file = fileList.slice(-3);
     
      console.log(this.file);
    },
    handlePreview() {},
    handleRemove() {},
    submitsd() {
       let formData = new FormData();
      formData.append("file",window.URL.createObjectURL( this.file[0].url));
      fetchSportsAdd(formData).then((res) => {
        console.log(res)
      })
    }
  }
};
// import {policy} from '@/api/oss'

// export default {
//   name: 'singleUpload',
//   props: {
//     value: String
//   },
//   computed: {
//     imageUrl() {
//       return this.value;
//     },
//     imageName() {
//       if (this.value != null && this.value !== '') {
//         return this.value.substr(this.value.lastIndexOf("/") + 1);
//       } else {
//         return null;
//       }
//     },
//     fileList() {
//       return [{
//         name: this.imageName,
//         url: this.imageUrl
//       }]
//     },
//     showFileList: {
//       get: function () {
//         return this.value !== null && this.value !== ''&& this.value!==undefined;
//       },
//       set: function (newValue) {
//       }
//     }
//   },
//   data() {
//     return {
//       dataObj: {
//         policy: '',
//         signature: '',
//         key: '',
//         ossaccessKeyId: '',
//         dir: '',
//         host: ''
//       },
//       dialogVisible: false
//     };
//   },
//   methods: {
//     emitInput(val) {
//       this.$emit('input', val)
//     },
//     handleRemove(file, fileList) {
//       this.emitInput('');
//     },
//     handlePreview(file) {
//       this.dialogVisible = true;
//     },
//     beforeUpload(file) {
//       let _self = this;
//       return new Promise((resolve, reject) => {
//         policy().then(response => {
//           _self.dataObj.policy = response.data.policy;
//           _self.dataObj.signature = response.data.signature;
//           _self.dataObj.ossaccessKeyId = response.data.accessKeyId;
//           _self.dataObj.key = response.data.dir + '/${filename}';
//           _self.dataObj.dir = response.data.dir;
//           _self.dataObj.host = response.data.host;
//           resolve(true)
//         }).catch(err => {
//           console.log(err)
//           reject(false)
//         })
//       })
//     },
//     handleUploadSuccess(res, file) {
//       this.showFileList = true;
//       this.fileList.pop();
//       this.fileList.push({name: file.name, url: this.dataObj.host + '/' + this.dataObj.dir + '/' + file.name});
//       this.emitInput(this.fileList[0].url);
//     }
//   }
// }
</script>
<style>
</style>


