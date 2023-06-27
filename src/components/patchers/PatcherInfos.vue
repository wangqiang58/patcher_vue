<template>
    <div>
      <h1>My List</h1>
      <el-table :data="myList">
        <el-table-column label="Name" prop="name"></el-table-column>
        <el-table-column label="Age" prop="age"></el-table-column>
        <el-table-column label="Gender" prop="gender"></el-table-column>
      </el-table>
    </div>
  </template>

   
 <script>
 import  Vue from 'vue'
 import ElementUI from 'element-ui'
 import 'element-ui/lib/theme-chalk/index.css';


 export default {
  name : 'PatcherInfos',
  data() {
    return {
      myList: [
        { name: 'Alice', age: 25, gender: 'F' },
        { name: 'Bob', age: 30, gender: 'M' },
        { name: 'Charlie', age: 35, gender: 'M' }
      ]
    }
  },
  methods:{

  }
}

 </script>