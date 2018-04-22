<template>
  <div>
      <!-- 面包屑 -->
      <el-header style="margin-bottom: 20px;height:40px;background-color:#E4E7ED;padding:15px">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/shouye' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>为他助力</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <!-- 内容区 -->
      <el-container>
        <el-header style="height:100px;background-image: url('static/images/common/ad4.jpg') ">
          
        </el-header>
        <el-main style="background-color:#FFF;margin-top:30px">
          <div>
             <!-- 输入您要助力的用户：<el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input> -->
            <el-form :inline="true" v-model="filters" class="demo-form-inline">
              <el-form-item label="用户昵称">
                <el-input v-model="filters.nickName" clearable placeholder="请输入您要助力的用户昵称" prefix-icon="el-icon-search"></el-input>
              </el-form-item>
              <el-form-item label="相关的文章">
                <el-input v-model="filters.title" clearable placeholder="请输入与她/他相关的文章" prefix-icon="el-icon-search"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSerach">查询</el-button>
              </el-form-item>
            </el-form>
            <!-- 渲染的表格区 -->
            <el-table :data="eventList" stripe style="width: 100%;cursor:pointer;" :default-sort = "{prop: 'createdTime', order: 'descending'}">
            <el-table-column prop="nickName" label="用户昵称" sortable width="120"></el-table-column>
            <!-- <el-table-column prop="userId" label="id" sortable width="80" hidden></el-table-column> -->
            <el-table-column prop="age" label="年龄" sortable width="80"></el-table-column>
            <el-table-column prop="tel" label="联系方式"  width="120"></el-table-column>
            <el-table-column prop="title" label="相关文章" width="200"></el-table-column>
            <el-table-column prop="createdTime" label="发表日期" width="200" :formatter="formatTime" sortable ></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleAssist(scope.$index, scope.row)">我要赞助</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination style="height:30px;background-color:#E4E7ED;padding:15px"
            background
            layout="prev, pager, next"
            :pageSize="pageSize" 
            @current-change="currentChange"
            :total='total'>
          </el-pagination>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { formatCreatedTime } from '../../utils/converterUtil';

export default {
  data() {
    return {
      eventList: [],
      pageNo: 1,
      pageSize: 15,
      sort: 'createdTime',
      dir: 'desc',
      total: 0,
      filters: {
        nickName: '',
        title: ''
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
    onSerach: function(){
      this.queryEvents();
    },
      // 查询所有事件
    queryEvents: function(){
        let para = {
          pageNo: this.pageNo,
          pageSize: this.pageSize,
          sort: this.sort,
          dir: this.dir,
          filters: JSON.stringify(this.filters)
        }
        this.$Axios.get(this.$API.apiUri.event.base,{params: para}).then((res) => {
          let {code, msg, data, totalRecords} = res.data;
          if(code === 0){
            this.eventList = data;
            this.total = totalRecords;
          }
        })
    },
    // 我要赞助
    handleAssist: function(index,value){
      var userId = value.userId;
      this.$Axios.get(this.$API.apiUri.user.base+"/"+userId).then((res) => {
            let { code, msg, data } = res.data;
            if(code === 0){
                var payNo = data.payNo;
                var payUrl = data.payUrl;
                if(payNo && payUrl){
                    this.$alert('<div><strong>支付宝：'+payNo+'</strong></div><div>二维码：<img src='+payUrl+' class=img></div>', '通过以下方式赞助：', {
                    dangerouslyUseHTMLString: true
                  });
                }else if(payNo){
                    this.$alert('<div><strong>支付宝：'+payNo+'</strong></div>', '通过以下方式赞助：', {
                    dangerouslyUseHTMLString: true
                  });
                }else if(payUrl){
                    this.$alert('<div>二维码：<img src='+payUrl+' class=img></div>', '通过以下方式赞助：', {
                    dangerouslyUseHTMLString: true
                  });
                }else{
                  this.$alert('<div><strong>该用户还没添加支付宝账号！</strong></div>', '温馨提示：', {
                    dangerouslyUseHTMLString: true
                  });
                }
            }
        })
    }
  },
  // 生命周期函数
  mounted: function(){
     this.queryEvents();
    }
}
</script>
<style>
.img {
  width: 300px;
  height: 300px;
}
</style>
