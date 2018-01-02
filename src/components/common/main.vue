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
      <el-button type="success" plain>他们特殊的“故事“>>></el-button>
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
            <!-- <div class="newsTitle">{{item.title}}</div> -->
            <img :src="item.newsImg" class="image">
            <div style="padding: 14px;">
              <div><el-tag type="warning">{{ item.title }}</el-tag></div>
              <span style="font-size:10px;display:block">{{item.content}}</span>
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
        eventList: [
          {
            id:1,
            title:'我们很坚强',
            content:'我是小乖乖，我很坚强',
            eventImg:'static/images/child/lunbo/1.jpg',
            createdTime:'2017/12/09'
          },
          {
            id:2,
            title:'课堂上他们认真的脸',
            content:'课堂上很坚强',
            eventImg:'static/images/child/lunbo/2.jpg',
            createdTime:'2017/11/10'
          },
          {
            id:3,
            title:'爸爸妈妈，你们回来了吗',
            content:'爸妈回来了吗',
            eventImg:'static/images/child/lunbo/3.jpg',
            createdTime:'2017/09/10'
          },
          {
            id:4,
            title:'只有她一个人的家',
            content:'一个人的家',
            eventImg:'static/images/child/lunbo/4.jpg',
            createdTime:'2017/03/10'
          },
          {
            id:5,
            title:'我想爸爸',
            content:'想爸',
            eventImg:'static/images/child/lunbo/5.jpg',
            createdTime:'2017/11/10'
          },
          {
            id:6,
            title:'美丽的心灵',
            content:'美丽',
            eventImg:'static/images/child/lunbo/6.jpg',
            createdTime:'2016/11/10'
          }
        ],
        newsList: [
          {
            id:1,
            title:'我有一颗感恩的心',
            content:'10月5日，也就是重阳节当天，广东电白县观珠镇河垌村委会发生一起惨剧，位于该村委会的南路小学的三名小学生..',
            newsImg:'static/images/child/detail/t3.jpg',
            createdTime:'2017/12/09'
          },
          {
            id:2,
            title:'美丽的心灵',
            content:'10月5日，也就是重阳节当天，广东电白县观珠镇河垌村委会发生一起惨剧，位于该村委会的南路小学的三名小学生名...',
            newsImg:'static/images/child/detail/t1.jpg',
            createdTime:'2017/12/09'
          },
          {
            id:3,
            title:'我有一颗感恩的心',
            content:'10月5日，也就是重阳节当天，广东电白县观珠镇河垌村委会发生一起惨剧，位于该村委会的南路小学的三名小学生名...',
            newsImg:'static/images/child/detail/t3.jpg',
            createdTime:'2017/12/09'
          },
          {
            id:4,
            title:'美丽的心灵',
            content:'10月5日，也就是重阳节当天，广东电白县观珠镇河垌村委会发生一起惨剧，位于该村委会的南路小学的三名小学生名...',
            newsImg:'static/images/child/detail/t1.jpg',
            createdTime:'2017/12/09'
          }
        ] 
      }
    },
    methods: {
      showDetail: function(id){
          console.log(id);
          // 根据id查看详情

          // 路由跳转
          this.$router.push({path:'/home/child'})
      }
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