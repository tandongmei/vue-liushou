<template>
<div>
  <el-container style="background-color:#fff">
    <!-- 面包屑 -->
    <el-header style="margin:20px;width:95%;height:35px;border-bottom:2px solid #000">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>新闻详情</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main>
      <div style="font-size:25px;margin:10px">
        {{this.news.title}}
      </div>
      <div style="margin-left:15px">
        <img :src="this.news.headImg" style="width:28px;border-radius:120px;margin-right:5px"></img>
        <span style="margin-top:0">{{this.news.userName}}</span>
        <span>{{this.news.createdTime}}</span>
      </div>
      <el-main>
        <span style="color:#606266;line-height:22px;">{{this.news.content}}</span>
        <img :src="this.news.newsImg" style="width:80%;height:200px;margin-top:20px"></img>
      </el-main>

    </el-main>
  </el-container>
 
 
</div>
 

</template>
<script>
export default {
  data() {
      return {
        news: {}
      }
  },
  mounted: function(){
      this.news = this.$route.query.news;
  }
}
</script>

