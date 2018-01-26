<template>
<div>
  <el-container>
    <el-header style="width:100%;height:60px;position:fixed;top:0px;left:0;z-index:50;margin-left:-20px">
      <head-vue ></head-vue>
      <span>LLL{{nickName}}</span>
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
        nickName: sessionStorage.nickName
      }
    },
    components: {
      headVue,
      footVue
    },
    methods: {
        userLogin(nickName){
          console.log("sessionStorage.nickName"+sessionStorage.nickName);
          console.log("2---"+nickName);
        sessionStorage.nickName = nickName;
        this.nickName = sessionStorage.nickName;
        console.log("3---"+this.nickName);
      }
    }
  }
</script>

<style>
  
</style>
