<template>
  <el-menu
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    class="v-header"
    @select="selectTab"
  >
    <el-menu-item v-for="(item, index) in menuItems" :key="index" :index="String(index)">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.name }}</span>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          name: '首页',
          icon: 'location',
          path: '/home',
        },
        {
          name: '对话平台',
          icon: 'menu',
          path: '/dialog',
        },
        {
          name: '留言记录',
          icon: 'edit',
          path: '/message',
        },
        {
          name: '历史记录',
          icon: 'document',
          path: '/history',
        },
        {
          name: '设置',
          icon: 'setting',
          path: '/setting',
        },
      ],
    }
  },
  methods: {
    selectTab(index) {
      this.$router.replace(this.menuItems[index].path)
    },
  },
}
</script>

<style lang="scss" scoped>
.v-header {
  min-height: 100%;
}
</style>
