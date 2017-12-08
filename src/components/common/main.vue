<template>
<div >
  <el-carousel indicator-position="outside" height="550px">
    <el-carousel-item v-for="item in imgList" :key="item.id">
       <img :src="item.url" class="image">
    </el-carousel-item>
  </el-carousel>
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