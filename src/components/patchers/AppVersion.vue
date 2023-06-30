<template>
    <el-menu>
      <el-menu-item v-for=" (item, index) in apps" :key="index" @click="selectItem(index)">
        {{ item.versionName}}
      </el-menu-item>
    </el-menu>
  </template>
  
  <script>
   import axios from 'axios'
   import bus from './../../js/EventBus'

  export default {
    name:'AppVersion',

    data() {
      return {
        apps: [],
        selectedItem:'1'
      };
    },
    mounted(){
      console.info('获取app版本号列表')
      this.fetcherApps()
    },

    methods: {
      selectItem(item) {
        this.selectedItem = item;
        this.sendMessage(this.apps[item])
      },

      showToast(msg){
      this.$message({
         message:msg
       })
    },

    sendMessage(versionName){
      console.info("切换版本"+versionName)
      bus.$emit("versionName",versionName)
      
    },

    fetcherApps(){
      axios.get('http://127.0.0.1:8080/apps').then(response => {
         this.apps = response.data.data
         this.selectItem(0)
      }
      ).catch(errror=>{
         console.error(errror)
      })
    },
    },

  }
  </script>