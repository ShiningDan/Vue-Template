<template>
  <div>
    <el-container>
      <el-header>对话平台</el-header>
      <el-main>
        <el-form :inline="true" :model="formData" size="small" @submit.native.prevent="search">
          <el-form-item label="姓名">
            <el-input v-model="formData.name" placeholder="请填写用户姓名"></el-input>
          </el-form-item>
          <el-form-item v-if="formData.greet.length > 0" label="回答">
            <el-tag type="success">{{ formData.greet }}</el-tag>
          </el-form-item>
          <el-form-item><el-button type="primary" @click="search">查询</el-button></el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import agent from '@/common/lib/agent'

export default {
  data() {
    return {
      formData: {
        name: '',
        greet: '',
      },
    }
  },
  methods: {
    async search() {
      const name = this.formData.name.trim()
      try {
        const data = await agent.get(`/home/greet?name=${name}`)
        this.formData.greet = data
      } catch (err) {
        this.$notify({
          title: '请输入用户名',
          message: err.message,
          type: 'error',
        })
      }
    },
  },
}
</script>
