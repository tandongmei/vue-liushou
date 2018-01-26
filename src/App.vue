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
        nickName: ''
      }
    },
    components: {
      headVue,
      footVue
    },
    methods: {
        userLogin(nickName){
          sessionStorage.setItem("key", nickName);
          console.log("4---"+sessionStorage.getItem('key'));
      }
    }
  }
</script>

<style>
  
</style>
