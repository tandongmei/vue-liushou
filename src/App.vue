<template>
<div>
  <el-container>
    <!-- <el-header style="width:100%;height:60px;position:fixed;top:0px;left:0;z-index:50;margin-left:-20px"> -->
    <!-- <el-header style="position:fixed;top:0px;left:0;z-index:50;margin-left:-20px"> -->
    <a name="top"></a>
    <el-header height="60px">
      <head-vue ></head-vue>
    </el-header>

    <!-- <el-main style="padding:0px"> -->
    <el-main>
      <a href="#top"><span class="el-icon-upload2" id="toTop"></span></a>
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
  #toTop {
    width: 40px;
    height: 40px;
    background-color: #000;
    border-radius: 25px;
    color: #FFF;
    font-size: 40px;
    line-height: 40px;
    position: fixed;
    z-index:99;
    right: 20px;
    bottom: 30px; 
  }
</style>
