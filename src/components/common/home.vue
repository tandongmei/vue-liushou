<template>
  <div>
      <el-container style="padding:0px">
        <el-main style="margin: 10px 30px 10px -19px;">
          <!-- 子路由 -->
          <router-view></router-view>
        </el-main>
        <!-- 侧边栏固定 -->
        <el-aside style="margin-top: 30px;margin-right: 70px;">
          <el-card class="box-cards" >
              <div class="title">
                <span>爱心榜</span>
              </div>
              <!-- 侧边轮播 -->
              <el-carousel  interval="2000" arrow="always" style="height:200px">
                <el-carousel-item v-for="item in newsList" :key="item.newsId">
                  <img :src="item.newsImg" class="toHand" style="width:300px;height:200px;"  @click="showDetail(item.newsId)">
                </el-carousel-item>
              </el-carousel>
              <div @click="showDetail(item.newsId)" v-for="item in newsList" :key="item.newsId" class="text item toHand"  style="margin-top:20px">
                <span >{{item.title }}</span>
              </div>
          </el-card>
          <el-card class="box-cards">
            <div class="title">
              <span>热门推荐</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item toHand">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
          <el-card class="box-cards">
            <div class="title">
              <span>最新文章</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item toHand">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
          <el-card class="box-cards">
            <div class="title">
              <span>随便看看</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item toHand">
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
      newsList: {},
      news: {
        newsId: '',
        userId: '',
        hostId: '',
        title: '',
        content: '',
        newsImg: '',
        headImg: '',
        createdTime: ''
      }
    }
  },
  methods: {
    // 查询爱心榜
    queryLoveNews: function(){
      let para = {
          pageNo: 1,
          pageSize: 3,
          sort: 'createdTime',
          dir: 'desc',
          hostId: ''
        }
        this.$Axios.get(this.$API.apiUri.news.base,{params: para}).then((res) => {
            let { code, msg, data } = res.data;
            if( code === 0){
              this.newsList = data;
            }
        })
    },
    // 爱心榜详情
    showDetail: function(newsId){
      console.log(newsId);
      // 根据id查看详情
      this.$Axios.get(this.$API.apiUri.news.base+"/"+newsId).then((res) => {
        let { code, msg, data } = res.data;
        if( code === 0){
          this.news = data;
          console.log("before: news.title:"+this.news.title);
          // 路由跳转
          this.$router.push({path:'/home/newsRedirect', query:{news: this.news}});
        }
      })
    },
  },

  mounted: function() {
    this.queryLoveNews();
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

  .el-carousel__container {
    height: 200px;
  }

.image {
    width: 100%;
    display: block;
    cursor:pointer;
  }
</style>


