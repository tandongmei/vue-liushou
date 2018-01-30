<template>
<div>
  <el-container>
    <el-header style="width:100%;height:60px;position:fixed;top:0px;left:0;z-index:50;margin-left:-20px">
      <head-vue ></head-vue>
    </el-header>

    <el-main >
      <router-view @userSignIn="userLogin"></router-view>
    </el-main>
   
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
    data () {
      return {
      }
    },
    components: {
      headVue,
      footVue
    },
    methods: {
        userLogin(arr){  // 传过来的是一个数组
          sessionStorage.setItem("nickName", arr[0]);
          sessionStorage.setItem("headImg", arr[1]);
      }
    }
  }
</script>

<style>
  
</style>
