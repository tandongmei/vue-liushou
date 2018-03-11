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
          <i class="el-icon-date"></i>{{ this.event.returnTime }}
        </div>
        <!-- 评论区 -->
        <div style="background-color:rgb(243, 243, 243);border:1px solid #009688;border-radius:25px;">
          <!-- 发表评论 -->
          <div style="padding:20px;font-size:25px;color:#67C23A;font-family:'微软雅黑'">说点什么吧_____</div>
          <div style="margin:10px;padding:10px;">
             <el-input v-model="comment.replayContent" type="textarea" :rows="5" placeholder="请输入内容"  @focus="onFocus"> </el-input>
          </div>
          <div style="margin:10px;padding:10px">
            <div class="lineLeft"></div>
            <div class="lineRight" @click="beforeSubmit">发表评论</div>
          </div>
          <!-- 所有评论 -->
          <div style="margin:100px 10px;background-color:#fff;border-radius:25px;">
            <div style="height:40px;background-color:rgb(250, 250, 250);font-size:14px;color:rgb(119, 119, 119);line-height:40px;padding-left:10px;font-weight:bold">共收到{{this.totalCount}}条评论</div>
              <!-- 评论区 -->
              <div v-for="(item, key, index) in commentList" :key="item.commentId" style="padding: 20px;border-top:1px solid #eee;overflow: hidden;">
                <div style="float:left;"><img :src="item.replayUser.headImg" style="width:48px;height:48px;border-radius:120px"></div>
                <div style="float:right;width:580px">
                  <div>
                    <span style="color:#555;font-weight:bold">{{item.replayUser.nickName}}</span><span style="color:#777;padding:20px;font-size:14px">{{item.returnTime}}</span>
                    <span style="font-size:13px;color:red;padding-left:10px;cursor:pointer"  @click="replayShow(item)">回复</span>
                  </div>
                  <div style="color:#777;font-size:14px;line-height:20px;margin-top:10px">{{item.replayContent}}</div>
                  <!-- 对别人评论点击回复 -->
                  <div :class="{'show':item.isShow == 0}" >
                    <el-input
                      clearable
                      type="textarea"
                      :rows="2"
                      v-model="comment.replayContent"
                      placeholder="回复..."
                      style="margin-top:10px"
                      >
                    </el-input>
                    <el-tag type="warning" style="margin-top:10px;cursor:pointer;margin-left:510px"><span @click="beforeSubmit">发表</span></el-tag>
                  </div>
              <!-- 回复区 -->
              <div v-if="item.commentList != null" >
                  <div >
                    <div v-for="(item, key, index) in item.commentList" :key="item.commentId" class="item">
                      <img :src="item.replayUser.headImg" style="width:40px;height:40px;border-radius:120px;display:block;float:left">
                      <span style="font-size:14px;color:rgb(119, 119, 119);display:block;padding-left:50px">{{item.replayUser.nickName}}<span style="color: rgb(85, 85, 85);font-weight:bold">&nbsp;&nbsp;&nbsp;回复&nbsp;&nbsp;&nbsp;</span>{{item.replayCommentUser.nickName}}&nbsp;:&nbsp;{{item.replayContent}}</span>
                      <span style="font-size:12px;color:rgb(119, 119, 119);padding-left:50px">&nbsp;&nbsp;&nbsp;{{item.returnTime}}</span><span style="font-size:13px;color:red;padding-left:10px;cursor:pointer"  @click="replayShow(item)">回复</span>
                      <!-- 对别人评论点击回复 -->
                      <div :class="{'show':item.isShow == 0}">
                        <el-input
                          type="textarea"
                          :rows="2"
                          v-model="comment.replayContent"
                          placeholder="回复..."
                          style="margin-top:10px"
                          >
                        </el-input>
                        <el-tag type="warning" style="margin-top:10px;cursor:pointer;margin-left:510px"><span @click="beforeSubmit">发表</span></el-tag>
                      </div>
                    </div>
                  </div>
              </div>
              </div>
              </div>
          </div>
        </div>
      </el-main>
      <!-- 提示用户登陆弹出框 -->
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        >
        <span>你还没有登陆，是否前去登陆?</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitConfirm">确 定</el-button>
        </span>
      </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      event: {},
      comment: {
        eventId: '',
        replayUserId: '',
        parentId: 0,  // 被回复人，谁发表的文章，或者谁发表的评论
        replayContent: ''  // 回复内容
        
      },
      commentList: [],
      totalCount: 0,
      dialogVisible: false,
      isShow: false
    }
  },
  methods: {
    // 1.该方法统一判断用户是否登陆
    isLogin: function(){
      var flag = true;
      var nickName = sessionStorage.getItem('nickName');
      console.log("登陆信息："+nickName);
      if(nickName == null){
        // 尚未登陆
        flag = false;
      }
      return flag;
    },
    // 2.评论框获得焦点触发此函数
    onFocus: function(){
      console.log("!this.isLogin:"+!this.isLogin());
      if(!this.isLogin()){
          this.dialogVisible = true;
      }
    },
    // 3.点击“回复”，触发此函数
    replayShow: function(item){
      if(!this.isLogin()){
          this.dialogVisible = true;
      }else{
        // 已经登陆，打开评论框
        console.log("item.isShow:"+item.isShow);
        item.isShow = 1;
        console.log("item.isShow2:"+item.isShow);
        this.comment.parentId = item.commentId;
      }
    },

    // 4.点击所有“发表”按钮触发此函数
    beforeSubmit: function(){
      if(!this.isLogin()){
          this.dialogVisible = true;
      }
      // 已经登陆，提交评论到后台
      let para = {
        eventId: this.event.eventId,
        replayUserNickName: sessionStorage.getItem('nickName'),
        replayContent: this.comment.replayContent,
        parentId: this.comment.parentId
      }
      console.log("eventId:"+para.eventId);
      console.log("replayUserNickName:"+para.replayUserNickName);
      console.log("replayContent:"+para.replayContent);
      console.log("parentId:"+para.parentId);
      // 请求后台添加评论
      this.$Axios.put(this.$API.apiUri.comment.base,para).then((res) => {
        let {code, msg, data } = res.data;
        if(code === 0){
          this.$message.success('评论成功');
          this.queryAllComments(this.event.eventId);
          this.comment.parentId = 0;
          this.comment.replayContent = '';
        }
        if(code === -1 || code===1003){
          this.$message.success(msg);
          this.dialogVisible = true;
        }
      })
    },

    submitConfirm: function(){
      this.dialogVisible = false;
      this.$router.push({path:'/login'});
    },

    

    // 去后台查询事件下的所以评论
    queryAllComments(eventId){
      this.$Axios.get(this.$API.apiUri.comment.base+"/"+eventId).then((res) => {
        let {code, msg, data, totalRecords } = res.data;
        if(code === 0){
          this.commentList = data.commentList;
          this.totalCount = totalRecords;
        }
      })
    }
  },
  mounted: function(){
    this.event = this.$route.query.event;
    let eventId = this.event.eventId;
    this.queryAllComments(eventId);
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

.show {
  display: none;
}


</style>

