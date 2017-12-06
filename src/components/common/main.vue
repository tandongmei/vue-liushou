<template>
<el-row>
  <el-col :span="24">
    <div class="grid-content bg-purple-dark">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>圖片{{ item }}</h3>
        </el-carousel-item>
    </el-carousel>
   </div>
  </el-col>
</el-row>
</template>
<script>
export default {
   data() {
    
  }
}
</script>
<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>