<template>
<div >
  <!-- 首页轮播 -->
  <el-carousel  height="500px" interval="2000" arrow="always">
    <el-carousel-item v-for="item in adList" :key="item.eventId">
       <img :src="item.eventImg" class="image" @click="showDetail(item.eventId)">
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
            <el-header><router-link to="/home/child" class="change">GUAN AI LIU SHOU</router-link></el-header>
            <el-main><router-link to="/home/child" class="change">关爱留守</router-link></el-main>
          </el-main>
        </el-col>
        <el-col :span="6" >
          <el-header height="10px"></el-header>
          <el-main>
            <el-header><router-link to="/home/help" class="change">XUN QIU AI XIN</router-link></el-header>
            <el-main><router-link to="/home/help" class="change">寻求爱心</router-link></el-main>
          </el-main>
        </el-col>
        <el-col :span="6" >
          <el-header height="10px"></el-header>
          <el-main>
            <el-header><router-link to="/home/loveUser" class="change">GONG YI XIN WEN</router-link></el-header>
            <el-main><router-link to="/home/loveUser" class="change">公益新闻</router-link></el-main>
          </el-main>
        </el-col>
        <el-col :span="6" >
          <el-header height="10px"></el-header>
          <el-main>
            <el-header><router-link to="/home/assist" class="change">WEI TA ZHU LI</router-link></el-header>
            <el-main><router-link to="/home/assist" class="change">为他助力</router-link></el-main>
          </el-main>
        </el-col>
      </el-row>
    </el-header>
  </el-main>
</el-container>
<!-- 首页图文 他们特殊的“故事“-->
<el-container>
  <el-main style="height:700px">
    <el-header height="80px" style="text-align:center;line-height:80px">
      <el-button type="success" plain ><router-link to="/home/child">他们特殊的“故事“>>></router-link></el-button>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="6" v-for="(item, index) in eventList" :key="item.eventId" :offset="index > 0 ?2 : 0">
          <el-card :body-style="{ padding: '20px' }">
            <img :src="item.eventImg" style="width:100%;height:130px" @click="showDetail(item.eventId)">
            <div style="padding: 14px;">
              <span @click="showDetail(item.eventId)" class="toHand">{{item.title}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ formatTime(item.createdTime) }}</time>
                <el-button type="text" class="button" @click="showDetail(item.eventId)">查看详情</el-button>
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
        <el-col :span="5" v-for="(item, index) in newsList" :key="item.newsId" :offset="index > 0 ?1 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.newsImg" class="image" @click="showNewsDetail(item.newsId)">
            <div style="padding: 14px;">
              <div @click="showNewsDetail(item.newsId)" class="toHand"><el-tag type="warning" >{{ item.title }}</el-tag></div>
              <span class="toHand" style="font-size:12px;display:block;margin-top:10px" @click="showNewsDetail(item.newsId)">{{item.content}}</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button" @click="showNewsDetail(item.newsId)">查看详情</el-button>
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
<el-container style="background-color:#fff;padding:0px">
  <el-main >
    <el-header style="width:100%;font-size:25px">公益访谈</el-header>
    <el-main>
      <el-row>
        <el-col :span="7">
          <div class="left" style="background-color: #004986;">

          </div>
        </el-col>
        <el-col :span="10.5">
          <div class="center"><img src="static/images/news/1.jpg"></div>
        </el-col>
        <el-col :span="6">
          <div class="right">
            <span class="title_main">绿色碳汇先行者</span>
            <div class="content">森林是陆地生态系统的主体,具有巨大的吸碳、储碳与维护生物多样性等多种功能，成为国际社会公认的降低温室气体浓度，减缓气候变暖的有效途径。植物通过光合作用吸收二氧化碳，放出氧气</div>
          </div>
        </el-col>
        <el-col :span="0.5">
          <div class="aside" style="background-color: #004986;">-</div>
        </el-col>
      </el-row>
    </el-main>

    <el-main>
      <el-row>
        <el-col :span="7">
          <div class="left" style="background-color: rgb(235,97,0);"></div>
        </el-col>
        <el-col :span="10.5">
          <div class="center"><img src="static/images/news/2.jpg"></div>
        </el-col>
        <el-col :span="6">
          <div class="right">
            <span class="title_main">绿色碳汇先行者</span>
            <div class="content">森林是陆地生态系统的主体,具有巨大的吸碳、储碳与维护生物多样性等多种功能，成为国际社会公认的降低温室气体浓度，减缓气候变暖的有效途径。植物通过光合作用吸收二氧化碳，放出氧气</div>
          </div>
        </el-col>
        <el-col :span="0.5">
          <div class="aside" style="background-color: rgb(235,97,0);">-</div>
        </el-col>
      </el-row>
    </el-main>

    <el-main>
      <el-row>
        <el-col :span="7">
          <div class="left" style="background-color: rgb(0,94,21)"></div>
        </el-col>
        <el-col :span="10.5">
          <div class="center"><img src="static/images/news/3.jpg"></div>
        </el-col>
        <el-col :span="6">
          <div class="right">
            <span class="title_main">绿色碳汇先行者</span>
            <div class="content">森林是陆地生态系统的主体,具有巨大的吸碳、储碳与维护生物多样性等多种功能，成为国际社会公认的降低温室气体浓度，减缓气候变暖的有效途径。植物通过光合作用吸收二氧化碳，放出氧气</div>
          </div>
        </el-col>
        <el-col :span="0.5">
          <div class="aside" style="background-color: rgb(0,94,21)">-</div>
        </el-col>
      </el-row>
    </el-main>
  </el-main>
</el-container>
</div>
</template>
<script>

import { formatCreatedTime } from './../../utils/converterUtil';

export default {
  
    data () {
      return {
        eventList: [],
        adList: [],
        newsList: [],
        event: {},
        news: {} 
      }
    },
    methods: {
      formatTime: function(time){
        return formatCreatedTime(time);
      },
      // 根据id查看事件详情
      showDetail: function(eventId){
        this.$Axios.get(this.$API.apiUri.event.base+"/"+eventId).then((res) => {
        let { code, msg, data } = res.data;
        if( code === 0){
          this.event = data;
          this.$router.push({path:'/home/detail', query:{event: this.event}, meta:{ scrollToTop: true }});
        }
      })
      },
      // 查看新闻详情
      showNewsDetail: function(newsId){
         this.$Axios.get(this.$API.apiUri.news.base+"/"+newsId).then((res) => {
        let { code, msg, data } = res.data;
        if( code === 0){
          this.news = data;
          this.$router.push({path:'/home/newsDetail', query:{news: this.news}, meta:{ scrollToTop: true }});
        }
      })
      },
      queryEvents: function(){
        let eventPara = {
          pageNo: 1,
          pageSize: 6,
          sort: 'createdTime',
          dir: 'desc',
          filters: ''
        }
         let newsPara = {
          pageNo: 1,
          pageSize: 4,
          sort: 'createdTime',
          dir: 'desc'
        }
         let adPara = {
          pageNo: 1,
          pageSize: 3,
          sort: 'createdTime',
          dir: 'asc'
        } 
        this.$Axios.get(this.$API.apiUri.event.base,{params: eventPara}).then((res) => {
            let { code, msg, data } = res.data;
            if( code === 0){
              this.eventList = data;
            }
        })
         this.$Axios.get(this.$API.apiUri.event.base,{params: adPara}).then((res) => {
            let { code, msg, data } = res.data;
            if( code === 0){
              this.adList = data;
            }
        })
        this.$Axios.get(this.$API.apiUri.news.base,{params: newsPara}).then((res) => {
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
<style>
.change {
  color:#fff
}
.change:hover {
  color: #000;

}

.el-carousel__arrow--left {
  background-color: #303133;
}
.el-carousel__arrow--right {
  background-color: #303133;
}

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
    cursor:pointer;
  }
  .toHand {
    cursor:pointer;
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

  .left {
    width: 100%;
    height: 220px;
    
  }

  .center {
    height: 220px;
    margin-top: 20px;
  }

  .right {
    height: 190px;
    margin-top: 20px;
    padding: 5px 10px;
    color:#707070;
  }

  .right:hover {
    background-color: #E6A23C;
    color:#FFF;
  }

  .right .title_main {
    font-size: 18px;
    /* color: #474747; */
    margin-top: 10px;
    line-height: 1.5;
  }

  .right .content {
    font-size: 14px;
    /* color: #707070; */
    margin-top: 12px;
    line-height: 1.5;
    margin-right: 10px;
  }

  .aside {
    height: 200px;
    margin-top: 20px;
  }
</style>