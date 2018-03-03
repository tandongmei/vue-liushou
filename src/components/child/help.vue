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
        :total="1000">
      </el-pagination>
      <!-- 发表文章 -->
      <div style="text-align:center;font-size:25px;background-color:#E4E7ED;margin-top:40px;padding-top:20px;color:#E6A23C">说出你的故事</div>
      <el-form ref="form" :model="form" label-width="80px" style="padding:20px 20px;background-color:#E4E7ED">
        <el-form-item label="标题">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="详细描述">
          <el-input type="textarea" v-model="form.desc" :rows="15" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="所属模块">
          <el-select v-model="form.region" placeholder="请选择所属模块">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="上传图片">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确认发表</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        eventList: [],
        pageNo: 1,
        pageSize: 7,
        sort: 'createdTime',
        dir: 'desc',
        total: 0,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
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
            dir: this.dir
          }
          this.$Axios.get(this.$API.apiUri.event.base,{params: para}).then((res) => {
            let {code, msg, data, totalRecords} = res.data;
            if(code === 0){
              this.eventList = data;
              this.total = totalRecords;
            }
          })
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      onSubmit() {
        console.log('submit!');
      } 
    },
  // 生命周期函数
  mounted: function(){
     this.queryEvents();
    }
  }
</script>
