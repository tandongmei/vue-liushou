<template>
<div >
  <el-carousel indicator-position="outside" height="550px">
    <el-carousel-item v-for="(item,index) in imgList" :key="index">
      <!-- <img src="{{item.url}}" class="image"> -->
      <img src={{item}} class="image">
    </el-carousel-item>
  </el-carousel>
</div>
</template>
<script>
export default {
    data () {
      return {
        imgList: [
          'static/images/child/lunbo/1.jpg',
          'static/images/child/lunbo/2.jpg'
          
        ]
      }
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