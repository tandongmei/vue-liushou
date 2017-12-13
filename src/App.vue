<template>
<div >
  <el-container>
    <el-header>
      <head-vue></head-vue>
    </el-header>
    <el-container>
      <el-main style="z-index: -99;">
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer height="160px">
      <footVue></footVue>
    </el-footer>
  </el-container>
</div>
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
