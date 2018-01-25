<template>
  <div>
      <!-- 面包屑 -->
      <el-header style="margin-bottom: 20px;height:40px;background-color:#E4E7ED;padding:15px">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/shouye' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>详情页</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main style="background:#FFF;padding: 20px 20px;">
        <!-- 详情区 -->
        <div style="height:60px;font-size:20px;line-height:60px;text-align: center;border-bottom:1px solid rgb(254,63,0)">
          {{ this.event.title }}
        </div>
        <div style="margin:20px;line-height:40px;text-indent:2em">
          <div v-html="this.event.content"> </div>
        </div>
        <div style="text-align:center;margin:30px 30px 60px 30px">
          <img :src="this.event.eventImg" style="width:600px">
        </div>
        <div style="margin:30px 30px 60px 30px">
          <i class="el-icon-date"></i>{{ this.event.createdTime }}
        </div>
        <!-- 评论区 -->
        <div style="margin:30px;padding:20px;background-color:rgb(243, 243, 243);border:1px solid #009688;border-radius:25px;">
          <!-- 发表评论 -->
          <div style="font-size:25px;color:#67C23A;font-family:'微软雅黑'">说点什么吧_____</div>
          <div style="margin:10px;padding:10px;">
             <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="event.content"> </el-input>
          </div>
          <div style="margin:10px;padding:10px">
            <div class="lineLeft"></div>
            <div class="lineRight">发表评论</div>
          </div>
          <!-- 所有评论 -->
          <div style="margin:100px 20px;background-color:#fff;border-radius:25px;">
            <div style="height:40px;background-color:rgb(250, 250, 250);font-size:14px;color:rgb(119, 119, 119);line-height:40px;padding-left:10px;font-weight:bold">共收到13条评论</div>
              <div v-for="(item, index) in commentList" :key="item.commentId" style="padding: 20px;min-height:50px;border-top:1px solid #eee;overflow: hidden;">
                <div style="float:left;"><img :src="item.replayUserHeadImg" style="width:48px;height:48px;border-radius:120px"></div>
                <div style="float:right;width:550px">
                  <div><span style="color:#555;font-weight:bold">{{item.replayUserName}}</span><span style="color:#777;padding:20px">{{index+1}}楼</span><span style="color:#777;">{{item.createdTime}}</span></div>
                  <div style="color:#777;font-size:14px;line-height:20px;margin-top:10px">{{item.replayContent}}</div>
                </div>
              </div>
          </div>
        </div>
      </el-main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      event: {
        eventId: '',
        userId: '',
        title: '',
        content: '',
        eventImg: '',
        flag: '',
        hostId: '',
        createdTime: ''
      },
      commentList: [
        {
          commentId: 1,
          eventId: 1,
          replayUserName: 'wangwu',
          replayUserHeadImg: 'static/images/child/detail/1.jpg',
          replayContent: '写的很不错写的很不错写的很不错写的很不错写的很不错写的很不错写的很不错写的很不错写的很不错写的很不错写的很不错写的很不错写的很不错写的很不错写的很不错写的很不错写的很不错写的很不错。',
          createdTime: '2018/12/12'
        },
        {
          commentId: 2,
          eventId: 1,
          replayUserName: 'wangwu',
          replayUserHeadImg: 'static/images/child/detail/1.jpg',
          replayContent: '写的很不错。',
          createdTime: '2018/12/12'
        },
        {
          commentId: 3,
          eventId: 1,
          replayUserName: 'wenwne',
          replayUserHeadImg: 'static/images/child/detail/1.jpg',
          replayContent: '写的很不错。',
          createdTime: '2018/12/12'
        },
        {
          commentId: 4,
          eventId: 1,
          replayUserName: 'sunyang',
          replayUserHeadImg: 'static/images/child/detail/1.jpg',
          replayContent: '写的很不错。',
          createdTime: '2018/12/12'
        },
        {
          commentId: 5,
          eventId: 1,
          replayUserName: '乖乖',
          replayUserHeadImg: 'static/images/child/detail/1.jpg',
          replayContent: '写的很不错。',
          createdTime: '2018/12/12'
        },
        {
          commentId: 6,
          eventId: 1,
          replayUserName: '吉吉',
          replayUserHeadImg: 'static/images/child/detail/1.jpg',
          replayContent: '写的很不错。',
          createdTime: '2018/12/12'
        }
      ]
    }
  },
  methods: {
   
  },
  mounted: function(){
    this.event = this.$route.query.event;
  }
}
</script>
<style>
.lineLeft {
  width:85%;
  height:40px;
  float:left;
  border-bottom:2px solid #67C23A;
}
.lineRight {
  width:14.4%;
  height:40px;
  border:2px solid #67C23A;
  float:right;
  border-radius:5px;
  text-align:center;
  background-color:#67C23A;
  color: #fff;
  line-height:40px;
}
.lineRight:hover {
  background-color:#55C55A;
  cursor: pointer;
}

</style>

