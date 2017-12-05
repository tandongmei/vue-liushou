<template>
  <el-container>
    <el-header>
      <head-vue></head-vue>
    </el-header>
    <el-container>
      <el-main>
        <mainVue></mainVue>
      </el-main>
      <el-aside width="300px">
        <aside-vue></aside-vue>
      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
  import headVue from './components/common/head.vue'
  import mainVue from './components/common/main.vue'
  import asideVue from './components/common/aside.vue'
  
  export default {
    components: {
      headVue,
      mainVue,
      asideVue
    }
  }
</script>

<style>
  
</style>
