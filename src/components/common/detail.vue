<template>
  <div>
      <!-- 面包屑 -->
      <el-header style="margin-bottom: 20px;height:40px;background-color:#E4E7ED;padding:15px">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/shouye' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>详情页</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main style="background:#FFF;padding: 20px 20px;">
        <!-- 详情区 -->
        <div style="height:60px;font-size:20px;line-height:60px;text-align: center;border-bottom:1px solid rgb(254,63,0)">
          {{ this.event.title }}
        </div>
        <div style="margin:20px;line-height:40px;text-indent:2em">
          <div v-html="this.event.content"> </div>
        </div>
        <div style="text-align:center;margin:30px 30px 60px 30px">
          <img :src="this.event.eventImg" style="width:600px">
        </div>
        <div style="margin:30px 30px 60px 30px">
          <i class="el-icon-date"></i>{{ this.event.createdTime }}
        </div>
        <!-- 评论区 -->
        <div style="margin:30px;padding:20px;height:800px;background-color:rgb(243, 243, 243);border:1px solid #009688;border-radius:25px;">
          <div style="height:150px;background-color:#fff;border-radius:25px;margin:10px">
             <input type="text" class="inputStyle">    
          </div>
        </div>
      </el-main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      event: {
        eventId: '',
        userId: '',
        title: '',
        content: '',
        eventImg: '',
        flag: '',
        hostId: '',
        createdTime: ''
      }
    }
  },
  mounted: function(){
    this.event = this.$route.query.event;
  }
}
</script>
<style>
.inputStyle {
  box-sizing: border-box;
  text-align:center;
  font-size:1.4em;
  height:2.7em;
  border-radius:4px;
  border:1px solid #ff3;
  color:#6a6f77;
  -web-kit-appearance:none;
  -moz-appearance: none;
  display:block;
  outline:0;
  padding:0 1em;
  text-decoration:none;
  width:100%;
}
</style>

