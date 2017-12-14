<template>
  <div style="position:fixed; width:100%;height:60px">
    <el-row >
      <el-col :span="24">
      <div class="grid-content bg-purple-dark">
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-row>
              <el-col :span="4">
                <el-menu-item index="0"><span style="font-weight:bolder;font-size:35px;color:#ffd04b">LIU SHOU</span></el-menu-item>
              </el-col>
              <el-col :span="17">
                <el-menu-item index="1"><router-link to="/shouye">网站首页</router-link></el-menu-item>
                <el-submenu index="2">
                    <template slot="title">留守之家</template>
                    <el-menu-item index="2-1">关爱留守</el-menu-item>
                    <el-menu-item index="2-2">寻求爱心</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">爱心公益</template>
                    <el-menu-item index="3-1">公益新闻</el-menu-item>
                    <el-menu-item index="3-2">为他助力</el-menu-item>
                </el-submenu>
                <el-menu-item index="4">心灵大使</el-menu-item>
                <el-menu-item index="5">亲子互动</el-menu-item>
                
              </el-col>
              <el-col :span="3">
                <el-menu-item index="6"><router-link to="/login">登陆</router-link></el-menu-item>
                <el-menu-item index="7"><router-link to="/register">注册</router-link></el-menu-item>
              </el-col>
            </el-row>
        </el-menu>
      </div>
    </el-col>
  </el-row>
  </div>
</template>
<script>
export default {
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style>

</style>


