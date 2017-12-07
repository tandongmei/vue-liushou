<template>
<div >
  <!-- 首页轮播 -->
  <el-carousel indicator-position="outside" height="550px">
    <el-carousel-item v-for="item in imgList" :key="item.id">
       <img :src="item.url" class="image">
    </el-carousel-item>
  </el-carousel>
  <!-- 首页进度条 -->
  <!-- <el-row>
    <el-col :span="6"><el-progress :percentage="100" :stroke-width="18" status="exception"></el-progress></el-col>
    <el-col :span="6"><el-progress :percentage="100" :stroke-width="18" status="exception"></el-progress></el-col>
    <el-col :span="6"><el-progress :percentage="100" :stroke-width="18" status="exception"></el-progress></el-col>
    <el-col :span="6"><el-progress :percentage="100" :stroke-width="18" status="exception"></el-progress></el-col>
</el-row> -->
<!-- 首页警示条 -->
<el-container>
  <el-main style="background-color:rgb(254,63,0)">
    <el-header height="60px">
      <el-row style="text-align:center;font-size:20px;color:#fff;">
        <el-col :span="6" >
          <el-header height="10px"></el-header>
          <el-main>
            <el-header>GUAN AI LIU SHOU</el-header>
            <el-main>关爱留守</el-main>
          </el-main>
        </el-col>
        <el-col :span="6" >
          <el-header height="10px"></el-header>
          <el-main>
            <el-header>XUN QIU AI XIN</el-header>
            <el-main>寻求爱心</el-main>
          </el-main>
        </el-col>
        <el-col :span="6" >
          <el-header height="10px"></el-header>
          <el-main>
            <el-header>GONG YI XIN WEN</el-header>
            <el-main>公益新闻</el-main>
          </el-main>
        </el-col>
        <el-col :span="6" >
          <el-header height="10px"></el-header>
          <el-main>
            <el-header>WEI TA ZHU LI</el-header>
            <el-main>为他助力</el-main>
          </el-main>
        </el-col>
      </el-row>
    </el-header>
  </el-main>
</el-container>
<!-- 首页图文 -->
<el-container>
  <el-main style="background-color:rgb(243,243,243);height:550px">
    <el-header height="80px" style="text-align:center">
      <span>他们特殊的“故事”</span>
    </el-header>
    <el-main></el-main>
  </el-main>
</el-container>
</div>
</template>
<script>
export default {
    data () {
      return {
        imgList: [
          { id:1,
            url:'static/images/child/lunbo/1.jpg'
          },
          { id:2,
            url:'static/images/child/lunbo/2.jpg'
          },
          { id:3,
            url:'static/images/child/lunbo/3.jpg'
          },
          { id:4,
            url:'static/images/child/lunbo/4.jpg'
          },
          { id:5,
            url:'static/images/child/lunbo/5.jpg'
          }
        ]
      }
    }
  }

</script>
<style >
 .headDiv {

 } 
</style>