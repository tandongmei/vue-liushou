<template>
  <div>
      <el-container style="background-color:rgb(243,243,243);">
        <el-main style="margin: 10px 10px 10px 70px;">
          <!-- 子路由 -->
          <router-view></router-view>
        </el-main>
        <!-- 侧边栏固定 -->
        <el-aside style="margin-top: 30px;margin-right: 70px;">
          <el-card class="box-cards" >
              <div class="title">
                <span>排行榜</span>
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
              </div>
          </el-card>
          <el-card class="box-cards">
            <div class="title">
              <span>热门推荐</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
          <el-card class="box-cards">
            <div class="title">
              <span>最新文章</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
          <el-card class="box-cards">
            <div class="title">
              <span>随便看看</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-aside>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
  
}
</script>
<style>
.title{
    border-bottom: 1px solid #009688;
    font-size: 15px;
    font-weight: 500;
    padding: 0 0 10px 0;
    margin-bottom: 15px;
}
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 13px;
  }

  .box-cards {
    margin-bottom: 20px;
    width: 290px;
  }

</style>


