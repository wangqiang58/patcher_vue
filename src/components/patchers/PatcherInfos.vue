<template>
  <div>
    <el-container>
      <el-header class="fixed-header">
        <div style="color: white; font-size: 2ch" >Robust热修复-后台</div>
      </el-header>

      <el-main class="scrollable-main">
        <el-container>
          <el-aside width="200px">
            <AppVersion></AppVersion>
          </el-aside>

          <el-main>
            <el-container style="height: fit-content">
              <el-header style="height: fit-content">
                <el-button class="button_add" @click="handleAddPatcher"
                  >新增</el-button
                >
              </el-header>
              <el-main>
                <AppDetail></AppDetail>
              </el-main>
            </el-container>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

   
 <script>
import AppVersion from "./AppVersion.vue";
import AppDetail from "./AppDetail.vue";

export default {
  name: "PatcherInfos",
  components: {
    AppVersion,
    AppDetail,
  },

  data() {
    return {};
  },

  methods: {
    handleAddPatcher() {
      this.$router.push((name = "/add/patcher"));
    },
  },
};
</script>

 <style>
.button_add {
  width: 8ch;
  background-color: blue;
  color: white;
  font-size: 1ch;
  display: flex;
  justify-content: center;
}

.container {
  height: 100vh;
  overflow: hidden; /* 禁止整个容器滚动 */
}

.fixed-header {
  position: fixed; /* 固定头部位置 */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1; /* 设置一个较高的 z-index 值，确保在页面上方显示 */
  background-color: black;
  align-content: center;
  display: flex;
  align-items: center;
}

.scrollable-main {
  padding-top: 60px; /* 设置与头部高度相同的 padding-top，确保内容不会被头部遮挡 */
  overflow-y: auto; /* 使 main 区域出现滚动条 */
}
</style>