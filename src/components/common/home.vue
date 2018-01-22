<template>
  <div>
      <el-container style="background-color:rgb(243,243,243);">
        <el-main style="margin: 10px 10px 10px 70px;">
          <!-- 子路由 -->
          <router-view></router-view>
        </el-main>
        <!-- 侧边栏固定 -->
        <el-aside style="margin-top: 30px;margin-right: 70px;">
          <el-card class="box-card">
              <div class="title">
                <span>排行榜</span>
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
              </div>
          </el-card>
          <el-card class="box-card">
            <div class="title">
              <span>热门推荐</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
          <el-card class="box-card">
            <div class="title">
              <span>最新文章</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
          <el-card class="box-card">
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
    return {
    //   eventList: [
    //       {
    //         id:1,
    //         title:'我们很坚强',
    //         content:'10月5日，也就是重阳节当天，广东电白县观珠镇河垌村委会发生一起惨剧，位于该村委会的南路小学的三名小学生名也就是重阳节当天，广东电白县观珠镇河垌村委会发生一起惨剧，位于该村委会的南路小学的三名小学生名广东电白县观珠镇河垌村委会发生一起惨剧，位于该村委会的南路小学广东电白县观珠镇河垌村委会发生一起惨剧，位于该村委会的南路小学广东电白县观珠镇河垌村委会发生一起惨剧，位于该村委会的南路小学',
    //         eventImg:'static/images/child/detail/2.jpg',
    //         createdTime:'2017/12/09'
    //       },
    //       {
    //         id:2,
    //         title:'课堂上他们认真的脸',
    //         content:'课堂上很坚强',
    //         eventImg:'static/images/child/detail/3.jpg',
    //         createdTime:'2017/11/10'
    //       },
    //       {
    //         id:3,
    //         title:'爸爸妈妈，你们回来了吗',
    //         content:'爸妈回来了吗',
    //         eventImg:'static/images/child/detail/4.jpg',
    //         createdTime:'2017/09/10'
    //       },
    //       {
    //         id:4,
    //         title:'只有她一个人的家',
    //         content:'一个人的家',
    //         eventImg:'static/images/child/detail/5.jpg',
    //         createdTime:'2017/03/10'
    //       },
    //       {
    //         id:5,
    //         title:'我想爸爸',
    //         content:'想爸',
    //         eventImg:'static/images/child/detail/6.jpg',
    //         createdTime:'2017/11/10'
    //       },
    //       {
    //         id:6,
    //         title:'美丽的心灵',
    //         content:'美丽',
    //         eventImg:'static/images/child/detail/2.jpg',
    //         createdTime:'2016/11/10'
    //       }
    //     ],
    }
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

  .box-card {
    margin-bottom: 20px;
  }
</style>


