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
      <el-table :data="eventList" stripe style="width: 100%">
        <el-table-column prop="createdTime" label="发表日期"  width="180"></el-table-column>
        <el-table-column prop="nickName" label="发表人"  width="180"></el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
      </el-table>
      <el-pagination style="height:30px;background-color:#E4E7ED;padding:15px"
        background
        layout="prev, pager, next"
        :total='total'>
      </el-pagination>
      <!-- 发表文章 -->
      <div style="text-align:center;font-size:25px;background-color:#E4E7ED;margin-top:40px;padding-top:20px;color:#E6A23C">说出你的故事</div>
      <el-form ref="form" :model="event" label-width="80px" style="padding:20px 20px;background-color:#E4E7ED">
        <el-form-item label="标题">
          <el-input v-model="event.title"></el-input>
        </el-form-item>
        <el-form-item label="详细描述">
          <el-input type="textarea" v-model="event.content" :rows="15" placeholder="请输入内容"></el-input>
        </el-form-item>
        <!-- <el-form-item label="所属模块">
          <el-select v-model="form.region" placeholder="请选择所属模块">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item> -->
        <el-form-item label="上传图片" prop="headImg">
          <el-upload
              class="avatar-uploader"
              action="https://up.qiniup.com"
              :data="postData"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="event.eventImg" :src="event.eventImg" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="30%"
          >
          <span>确认提交吗?</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="sumbitComfirm">确 定</el-button>
          </span>
        </el-dialog>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确认发表</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>
<script>
import { formatCreatedTime } from '../../utils/validateUtil'


  export default {
    data() {
      return {
        postData: {
            token: '',
            key: ''
        },
        dialogImageUrl: '',
        dialogVisible: false,
        eventList: [],
        pageNo: 1,
        pageSize: 7,
        sort: 'createdTime',
        dir: 'desc',
        total: 0,
        event: {
          title:'',
          content: '',
          eventImg: ''
        }
      }
    },
    methods: {
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
        this.$Axios.put(this.$API.apiUri.event.base,{params: para}).then((res) => {
          let {code, msg, data} = res.data;
            if(code === 0){
              
            }
        } )
      },
      handleAvatarSuccess(res, file) {
            console.log("file:"+file.name);
            // this.user.headImg = URL.createObjectURL(file.raw);
            this.event.headImg = "http://p3ga0tg9o.bkt.clouddn.com/"+file.name;
            console.log("this.user.headImg:"+this.event.headImg);
        },
        beforeAvatarUpload(file) {
            let suffix = file.name;
            let key = encodeURI(`${suffix}`);
            this.postData.key = key;
            return this.postData;
        },
      onSubmit() {
        this.dialogVisible = true;
        console.log('submit!');
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
        } 
    },
    // computed: {
    //   returnDate: formatCreatedTime(2222)
    // },
  // 生命周期函数
  mounted: function(){
     this.queryEvents();
     this.getToken();
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

