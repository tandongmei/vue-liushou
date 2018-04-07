<template>
  <div>
      <!-- 面包屑 -->
      <el-header style="margin-bottom: 20px;height:40px;background-color:#E4E7ED;padding:15px">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/shouye' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>寻求帮助</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <!-- 最新发表 -->
        <el-header style="height:50px;background-color:#E6A23C;padding:15px;color:#fff">
          最新发表
      </el-header>  
      <el-table :data="eventList" stripe style="width: 100%;cursor:pointer;" @row-click="showDetail">
        <el-table-column  label="发表日期" :formatter="formatTime"  width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ formatTime(null,null,scope.row.createdTime) }}</span>
          </template>
        </el-table-column>
        <el-table-column  label="发表人"  width="180">
          <template slot-scope="scope">
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.nickName }}</el-tag>
              </div>
          </template>
        </el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
      </el-table>
      <el-pagination style="height:30px;background-color:#E4E7ED;padding:15px"
        background
        layout="prev, pager, next"
        :pageSize="pageSize" 
        @current-change="currentChange"
        :total='total'>
      </el-pagination>
      <!-- 发表文章 -->
      <div style="text-align:center;font-size:25px;background-color:#E4E7ED;margin-top:40px;padding-top:20px;color:#E6A23C">说出你的故事</div>
      <el-form :disabled="isDisabled" :rules="rules"  ref="eventForm" :model="event" label-width="80px" style="padding:20px 20px;background-color:#E4E7ED">
        <el-form-item label="标题" prop="title">
          <el-input v-model="event.title" @focus="beforeInput" ></el-input>
        </el-form-item>
        <el-form-item label="详细描述" prop="content">
          <el-input  type="textarea" @focus="beforeInput" v-model="event.content" :rows="15" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="上传图片" prop="eventImg">
          <el-upload
          @focus="beforeInput"
              class="avatar-uploader"
              action="https://up.qiniup.com"
              :data="this.postData"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="this.event.eventImg" :src="this.event.eventImg" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确认发表</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      >
      <span>确认发表吗?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sumbitComfirm">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 提示用户登陆弹出框 -->
      <el-dialog
        title="提示"
        :visible.sync="dialogLoginVisible"
        width="30%"
        >
        <span>你还没有登陆，是否前去登陆?</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogLoginVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitLogin">确 定</el-button>
        </span>
      </el-dialog>
  </div>
</template>
<script>
import { formatCreatedTime } from '../../utils/converterUtil';

  export default {
    data() {
      return {
        isDisabled: false,
        filters: { nickName: sessionStorage.getItem('nickName')},
        postData: {
            token: '',
            key: ''
        },
        dialogImageUrl: '',
        dialogVisible: false,
        dialogLoginVisible: false,
        eventList: [],
        pageNo: 1,
        pageSize: 7,
        sort: 'createdTime',
        dir: 'desc',
        total: 0,
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
        rules: {
          title: [
            { required: true, message: '请输入用户昵称标题', trigger: 'blur' }
          ],
          content: [
            { required: true, message: '请输入详细内容', trigger: 'blur' }
          ],
          eventImg: [
            { required: true, message: '请上传图片', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      formatTime: function(row,column,val){
        console.log(val);
        return formatCreatedTime(val);
      },
      // 处理分页
      currentChange: function(val){
        this.pageNo = val;
        this.queryEvents();
      },
       // 查询所有事件
      queryEvents: function(){
          let para = {
            pageNo: this.pageNo,
            pageSize: this.pageSize,
            sort: this.sort,
            dir: this.dir,
            filters: ''
          }
          this.$Axios.get(this.$API.apiUri.event.base,{params: para}).then((res) => {
            let {code, msg, data, totalRecords} = res.data;
            if(code === 0){
              this.eventList = data;
              this.total = totalRecords;
            }
          })
      },
      // 新增事件
      sumbitComfirm: function() {
        this.dialogVisible = false;
        let para = this.event;
        this.$Axios.put(this.$API.apiUri.event.base, para ).then((res) => {
          let {code, msg, data} = res.data;
            if(code === 0){
                this.$refs['eventForm'].resetFields();
                this.$message.success('发表成功');
                this.queryEvents();
                location.reload(); // 刷新页面
            }
        } )
      },
      handleAvatarSuccess(res, file) {
            this.event.eventImg = "http://p3ga0tg9o.bkt.clouddn.com/"+file.name;
        },
      beforeAvatarUpload(file) {
          let suffix = file.name;
          let key = encodeURI(`${suffix}`);
          this.postData.key = key;
          return this.postData;
      },
      onSubmit(){
        if(!this.isLogin()){
            this.dialogLoginVisible = true;
        }else{
          this.$refs['eventForm'].validate((valid) => {
            if (valid) {
              this.dialogVisible = true;
            }
          })
        }
      },
      // 获取上传token
      getToken(){
          // 请求后台获取token
          this.$Axios.get(this.$API.apiUri.file.base).then((res) => {
              let { code, msg, data } = res.data;
              if(code === 0){
                  this.postData.token = data;
              }
          })
      },
      // 判断是否登录
      beforeInput(){
        if(!this.isLogin()){
            this.dialogLoginVisible = true;
        }
      },
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
      // 前去登录
      submitLogin: function(){
        this.dialogVisible = false;
        this.$router.push({path:'/login'});
      },
      showDetail: function(row, event, column){
        var eventId = row.eventId
         // 根据id查看详情
        this.$Axios.get(this.$API.apiUri.event.base+"/"+eventId).then((res) => {
          let { code, msg, data } = res.data;
          if( code === 0){
            this.event = data;
            console.log("eventId:"+this.event.eventId);
            // 路由跳转
            this.$router.push({path:'/home/detail', query:{event: this.event}});
          }
        })
      },
      // 判断input框是否禁用
      isShow: function(){
            let para = {
                filters: JSON.stringify(this.filters)
            };
            this.$Axios.get(this.$API.apiUri.user.base,{params: para}).then((res) => {
                let { code, msg, data } = res.data;
                if(code === 0){
                    var isLeftChild = data[0].isLeftChild;
                    if(isLeftChild == 0){
                      this.isDisabled = true;
                    }
                    console.log("isLeftChild:"+isLeftChild);
                }
            })
        },  
    },
    
  // 生命周期函数
  mounted: function(){
     this.queryEvents();
     this.getToken();
     this.isShow();
    }
  }
</script>
<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

