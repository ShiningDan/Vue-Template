<template>
  <el-container id="app">
    <el-header class="app-header">这里是标题</el-header>
    <el-main class="app-main">
      <el-container class="app-main-container">
        <el-aside width="200px"><v-header></v-header></el-aside>
        <router-view></router-view>
      </el-container>
    </el-main>
    <el-footer class="app-footer">这里是底栏</el-footer>
  </el-container>
</template>

<script>
import VHeader from '@/components/header/index.vue'

export default {
  components: {
    VHeader,
  },
}
</script>

<style lang="scss" scoped>
.app-header,
.app-footer {
  text-align: center;
  padding: 10px;
  font-size: 20px;
}
.app-main {
  height: 100%;
  .app-main-container {
    height: inherit;
  }
}
.el-main.app-main {
  padding: 0px;
}
</style>
