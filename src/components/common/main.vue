<template>
<div >
  <!-- 首页轮播 -->
  <el-carousel  height="550px" interval="2000" arrow="always">
    <el-carousel-item v-for="item in eventList" :key="item.id">
       <img :src="item.eventImg" class="image">
    </el-carousel-item>
  </el-carousel>
<!-- 首页警示条 -->
<el-container>
  <el-main style="background-color:rgb(254,63,0);margin-top:20px">
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
<!-- 首页图文 他们特殊的“故事“-->
<el-container>
  <el-main style="background-color:rgb(243,243,243);height:650px">
    <el-header height="80px" style="text-align:center;line-height:80px">
      <el-button type="success" plain ><router-link to="/home/child">他们特殊的“故事“>>></router-link></el-button>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="5" v-for="(item, index) in eventList" :key="item.id" :offset="index > 0 ?3 : 0">
          <el-card :body-style="{ padding: '20px' }">
            <img :src="item.eventImg" class="image">
            <div style="padding: 14px;">
              <span>{{item.title}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ item.createdTime }}</time>
                <el-button type="text" class="button" @click="showDetail(item.id)">查看详情</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
    <el-footer height="20px">
    </el-footer>
  </el-main>
</el-container>
<!-- 首页图文 我们的行动-->
<el-container>
  <el-main style="height:650px">
    <el-header height="80px" style="text-align:center;line-height:80px">
      <el-button type="success" plain>我们的行动  >>></el-button>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="5" v-for="(item, index) in newsList" :key="item.id" :offset="index > 0 ?1 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.eventImg" class="image">
            <div style="padding: 14px;">
              <div><el-tag type="warning">{{ item.title }}</el-tag></div>
              <span style="font-size:10px;display:block;margin-top:10px">{{item.content}}</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button" @click="showDetail(item.id)">查看详情</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
    <el-footer height="20px">
    </el-footer>
  </el-main>
</el-container>
<!-- 首页>> 大图区 -->
<el-container >
  <el-main style="height:1200px;background-color:red">
    <div>
      <span><img src="static/images/child/big/big1.png" class="image"></span>
      <span><img src="static/images/child/big/big1.png" class="image"></span>
    </div>
    <!-- <el-row>
      <el-col :span="12">
        <div><img src="static/images/child/big/big1.png" class="image"></div>
      </el-col>
      <el-col :span="12"><img src="static/images/child/big/big1.png" class="image"></el-col>
    </el-row> -->
    <!-- <el-row>
      <el-col :span="12"><img src="static/images/child/big/big1.png" class="image"></el-col>
      <el-col :span="12"><img src="static/images/child/big/big1.png" class="image"></el-col>
    </el-row> -->
  </el-main>
</el-container>
</div>
</template>
<script>
export default {
    data () {
      return {
        eventList: [],
        newsList: [] 
      }
    },
    methods: {
      showDetail: function(id){
          console.log(id);
          // 根据id查看详情

          // 路由跳转
          this.$router.push({path:'/home/detail'})
      },
      queryEvents: function(){
        let para = {
          pageNo: 1,
          pageSize: 6,
          sort: 'createdTime',
          dir: 'desc',
          filters: {isLeftChild: 1}
        }
         let para2 = {
          pageNo: 1,
          pageSize: 4,
          sort: 'createdTime',
          dir: 'desc',
          filters: {isLeftChild: 0}
        }
        this.$Axios.get(this.$API.apiUri.event.base,{params: para}).then((res) => {
            let { code, msg, data } = res.data;
            if( code === 0){
              this.eventList = data;
            }
        })
        this.$Axios.get(this.$API.apiUri.event.base,{params: para2}).then((res) => {
            let { code, msg, data } = res.data;
            if( code === 0){
              this.newsList = data;
            }
        })
      }
    },
    mounted: function(){
      this.queryEvents();
    }
  }

</script>
<style >
.el-carousel__arrow--left {
  background-color: #303133;
}
.el-carousel__arrow--right {
  background-color: #303133;
}
/* .el-carousel__button {
  background-color: red;
} */
.el-carousel__indicator.is-active button {
  background-color: red;
  height: 5px;
}
 .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

  .newsTitle {
    width: 100%;
    height:150px;
    display: block;
  }
</style>