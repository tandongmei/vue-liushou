<template>
  <el-container>
    <el-header>
      <head-vue></head-vue>
    </el-header>
    <el-container>
      <!-- <el-main>
        <mainVue></mainVue>
      </el-main>
      
      <el-aside width="300px">
        <aside-vue></aside-vue>
      </el-aside> -->
      <router-view></router-view>
    </el-container>
    <el-footer>
      <footVue></footVue>
    </el-footer>
  </el-container>
</template>

<script>
  import headVue from './components/common/head.vue'
  import footVue from './components/common/foot.vue'
  
  export default {
    components: {
      headVue,
      footVue
    }
  }
</script>

<style>
  
</style>
