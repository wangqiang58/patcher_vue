 <template>
     <div>
    <el-table :data="tableData" border>
      <el-table-column prop="versionName" label="App版本"></el-table-column>
      <el-table-column prop="flavor" label="渠道"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column prop="time" label="创建时间"></el-table-column>
      <el-table-column prop="mark" label="备注"></el-table-column>
      <el-table-column prop="operate" label="操作" >
        <template slot-scope="scope" >
          <div class="button_container">
          <el-button @click="handleButton1(scope.row)" class="button_item" style="background-color:green; margin-left:1ch;">发布</el-button>
          <el-button @click="handleButton2(scope.row)" class="button_item" style="background-color: grey;">灰度</el-button>
          <el-button @click="handleButton3(scope.row)" class="button_item" style="background-color: grey;">设备</el-button>
          <el-button @click="handleButton4(scope.row)" class="button_item" style="background-color: red;">撤回</el-button>
          </div>
        </template>
      </el-table-column>



    </el-table>
  </div>
 </template>
  
  <script>
  import axios from 'axios';
  import bus from './../../js/EventBus'

  export default {
    name:'AppDetail',
    
    data() {
      return {
        tableData: [
        ]
      };
    },

    mounted(){
      bus.$on('versionName',data=> {
         this.featchPlugins(data['versionName'])
      })
    },

    methods: {
      handleButton1(row) {
      this.showToast('发布')
    },
    handleButton2(row) {
      this.showToast('灰度')
    },
    handleButton3(row) {
      this.showToast('设备')
    },
    handleButton4(row) {
      this.showToast('撤回')
    },

    showToast(msg){
      this.$message({
         message:msg
       })
    },

    featchPlugins(appVersionName){
      axios.get('http://127.0.0.1:8080/plugins',{
        params: {
          "appVersionName":appVersionName
        }
      }).then(response => {
         this.tableData = response.data.data
      }
      ).catch(errror=>{
         console.error(errror)
      })
    }

    }
  }
  </script>

<style>

 .button_item{
  height: 2ch;
  width: auto;
  display: flex;
  margin-top: 1ch;
  font-size: 1ch;
  justify-content: center;
  color: white;
  align-items: center;
  align-self: center;
  text-align: center;
 }

 .button_container{
  flex-direction: column;
   display: flex;
   align-content: center;
  justify-content: center;
  align-items: center;
 }
</style>