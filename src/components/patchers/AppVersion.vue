<template>
    <el-menu v-model="selectedItem" @select="selectItem">
      <el-menu-item v-for="item in apps" :key="item.versionId" :index="item.versionId">
        {{ item.versionName}}
      </el-menu-item>
    </el-menu>
  </template>
  
  <script>
   import axios from 'axios'

  export default {
    name:'AppVersion',

    data() {
      return {
        apps: [],
        selectedItem:'1'
      };
    },
    mounted(){
      console.info('获取app版本号')
      this.fetcherApps()
    },

    methods: {
      selectItem(item) {
        this.selectedItem = item;
      },

      showToast(msg){
      this.$message({
         message:msg
       })
    },

    fetcherApps(){
      axios.get('http://127.0.0.1:8080/apps').then(response => {
         this.apps = response.data.data
         this.selectedItem = this.apps[0]
      }
      ).catch(errror=>{
         console.error(errror)
      })
    },
    },

  }
  </script>