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
              <!-- 评论区 -->
              <div v-for="(item, index) in commentList" :key="item.commentId" style="padding: 20px;border-top:1px solid #eee;overflow: hidden;">
                <div style="float:left;"><img :src="item.replayUser.headImg" style="width:48px;height:48px;border-radius:120px"></div>
                <div style="float:right;width:580px">
                  <div><span style="color:#555;font-weight:bold">{{item.replayUser.nickName}}</span><span style="color:#777;padding:20px">{{index+1}}楼</span><span style="color:#777;">{{item.createdTime}}</span></div>
                  <div style="color:#777;font-size:14px;line-height:20px;margin-top:10px">{{item.replayContent}}</div>
              <!-- 回复区 -->
              <div v-if="item.commentList != null" >
                  <div class="box-card">
                    <div v-for="(item, index) in item.commentList" :key="item.commentId" class="item">
                      <img :src="item.replayUser.headImg" style="width:40px;height:40px;border-radius:120px;display:block;float:left">
                      <span style="font-size:14px;color:rgb(119, 119, 119);display:block;padding-left:50px">{{item.replayUser.nickName}}<span style="color: rgb(85, 85, 85);font-weight:bold">&nbsp;&nbsp;&nbsp;回复&nbsp;&nbsp;&nbsp;</span>{{item.replayCommentUser.nickName}}&nbsp;:&nbsp;{{item.replayContent}}</span>
                      <span style="font-size:12px;color:rgb(119, 119, 119);display:block;padding-left:50px">&nbsp;&nbsp;&nbsp;2017/12/12</span>
                    </div>
                  </div>
              </div>
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
      commentList: []
    }
  },
  methods: {
   
  },
  mounted: function(){
    this.event = this.$route.query.event;
    let eventId = this.event.eventId;
    this.$Axios.get(this.$API.apiUri.comment.base+"/"+eventId).then((res) => {
      let {code, msg, data } = res.data;
      if(code === 0){
        console.log("data:"+data);
        this.commentList = data;
      }
    })

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


.item {
  padding: 10px 0;
}

.box-card {
  width: 480px;
}

</style>

