<template>
<div>
  <el-container>
    <!-- <el-header style="width:100%;height:60px;position:fixed;top:0px;left:0;z-index:50;margin-left:-20px"> -->
    <!-- <el-header style="position:fixed;top:0px;left:0;z-index:50;margin-left:-20px"> -->
    <el-header height="60px">
      <head-vue ></head-vue>
    </el-header>

    <!-- <el-main style="padding:0px"> -->
    <el-main>
      <router-view @userSignIn="userLogin"></router-view>
    </el-main>
   
    <!-- <el-footer style="left:0;z-index:50;"> -->
    <el-footer>
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
          sessionStorage.setItem("noReadCommentCount",arr[2]);
          sessionStorage.setItem("noReadReplyCount",arr[3]);
      }
    }
  }
</script>

<style>
  a {
    text-decoration: none;
  }
</style>
