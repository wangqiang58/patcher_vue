<template>
  <div>
    <el-container >
      <el-aside width="200px">
        <AppVersion></AppVersion>
      </el-aside>

      <el-main>
        <el-container style="height:fit-content;">
          <el-header style="height:fit-content;">
            <el-button class="button_add">新增</el-button>
          </el-header>
          <el-main>
           <AppDetail></AppDetail>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

   
 <script>
import AppVersion from './AppVersion.vue'
import AppDetail from './AppDetail.vue';



 export default {
  name : 'PatcherInfos',
  components:{
    AppVersion,AppDetail
  },

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

 <style>
  .button_add{
    width: 8ch;
    background-color: blue;
    color: white;
    font-size: 1ch;
    display: flex;
    justify-content: center;
  }
</style>