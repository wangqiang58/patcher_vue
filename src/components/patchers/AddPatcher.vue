<template>
   <div>

   <el-form ref="uploadForm" :model="formData" label-width="100px">
    <div class="title_form_item">创建</div>
     <el-form-item label="App版本">
       <el-input v-model="formData.versionName" placeholder="必填,例如3.0.1" class="input_form_item"></el-input>
     </el-form-item>

     <!-- <el-form-item label="类型">
      <el-radio-group v-model="selectedOption">
          <el-radio label="option1">app_test</el-radio>
          <el-radio label="option2">app_prod_q</el-radio>
          <el-radio label="option3">app_prod</el-radio>
      </el-radio-group>
     </el-form-item> -->

     <el-form-item label="补丁文件">
      <el-upload
       ref="upload"
       action="http://127.0.0.1:8080/plugin/upload"
       :headers="{
        'Content-Type': 'multipart/form-data',
       }"
       :before-upload="beforeUpload" 
       :on-success="handleSuccess" 
       :on-error="handleError" 
       :auto-upload="false"
      >
       <el-button type="primary">选择文件</el-button>
       <div slot="tip" class="el-upload__tip">只支持上传apk文件，且不超过5MB</div>
      </el-upload> 
     </el-form-item>

     <el-form-item label="备注" >
       <el-input v-model="formData.mark" placeholder="非必需"  
       type="textarea"
       :rows="5" class="input_form_item"></el-input>
     </el-form-item>

     <el-form-item>
       <el-button type="primary" @click="submitForm">确认</el-button>
     </el-form-item>

   </el-form>
   </div>
 </template>
 
 <script>
  import axios from 'axios'

 export default {
   data() {
     return {
      formData: {
         versionName: '',
         mark: '',
         flavor: '默认值'
       },
       uploadData: {},
     };
   },
   methods: {
     submitForm() {
      const formData = new FormData();

// 添加额外的参数到 FormData
formData.append('versionName', this.formData.versionName);      
formData.append('mark',  this.formData.mark);
formData.append('flavor',  this.formData.flavor);

const file = this.$refs.upload.uploadFiles[0];
formData.append('file',file.raw)
      // file.raw = formData;

      axios.post('http://127.0.0.1:8080/plugin/upload',formData,{
         headers: {
    'Content-Type': 'multipart/form-data',
  },
}).then(response=>{
   console.info(response)
}).catch(error=>{
  console.error(error)
})
     },

  beforeUpload(file) {


     

       // 返回 false 以阻止自动上传
       return false;
},
     handleSuccess(){
      console.info('上传成功')
     },
     handleError(){
      console.info('上传失败')
     },
     }
   };
 </script>
  
<style>

.input_form_item{
   width:50%;
}

.title_form_item{
   font-size: 20px;
   margin-left: 30px;
   margin-bottom: 30px;
   margin-top: 30px;

}

</style>