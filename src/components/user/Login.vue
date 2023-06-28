<template>
  <div class="login-container">
     <el-form
       ref="loginForm"
       :rules="rules"
       :model="loginForm"
       class="login-form"
     >
       <h1 class="title">欢迎登陆</h1>
       <el-form-item prop="username">
         <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
       </el-form-item>
       <el-form-item prop="password">
         <el-input v-model="loginForm.password" type="password" placeholder="请输入密码"></el-input>
       </el-form-item>
       <el-form-item>
         <el-button type="primary" @click="login">登录</el-button>
       </el-form-item>
     </el-form>
   </div>
 </template>
 
 <script>
 import  Vue from 'vue'
 import ElementUI from 'element-ui'
 import 'element-ui/lib/theme-chalk/index.css';
 import axios from 'axios'
 import router from '@/router';

 Vue.use(ElementUI)
 Vue.prototype.$axios = axios

 
 export default {
   name: 'Login',
   data() {
     return {
       loginForm: {
         username: '',
         password: ''
       },
       rules: {
         username: [
           { required: true, message: '请输入用户名', trigger: 'blur' }
         ],
         password: [
           { required: true, message: '请输入密码', trigger: 'blur' }
         ]
       }
     }
   },
   methods: {
    
     login() {
       this.$refs.loginForm.validate((valid) => {
         if (valid) {
           axios.defaults.withCredentials = true;
           axios.post("http://127.0.0.1:8080/login",{
             userName:this.loginForm.username,
             password:this.loginForm.password
           },{
             headers:{
               'content-type': 'application/json',
               'Access-Control-Allow-Origin': 'http://127.0.0.1:8080'
             },
             transformResponse: [(data) => {
                return JSON.parse(data);
              }]
           }).then(response=>{
              console.log("返回结果:"+response)
              if(response.data['code']==200){
                 this.showToast("登陆成功");  
                this.$router.push(name= 'patcherInfos')
              }
              else{
                 this.showToast("登陆失败")
              }
           }).catch(error=>{
                // this.showToast("登陆失败")
           })
           console.log(this.loginForm)
         } else {
           console.log('error submit!!')
           return false
         }
       });
     },
     showToast(msg){
       this.$message({
         message:msg
       })
     }
   }
 }
 </script>
 
 <style scoped>
 .login-container {
   width: 360px;
   margin: 100px auto;
   background-color: #fff;
   box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
   border-radius: 5px;
   overflow: hidden;
 }
 
 .title {
   font-size: 24px;
   text-align: center;
   margin: 24px;
 }
 
 .login-form {
   margin: 24px;
 }
 </style>