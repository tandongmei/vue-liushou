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
        <el-header style="height:100px;background-color:#FFF">
          
        </el-header>
        <el-main style="background-color:#FFF;margin-top:30px">
          <div>
             <!-- 输入您要助力的用户：<el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input> -->
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label="用户昵称">
                <el-input  placeholder="请输入您要助力的用户昵称" prefix-icon="el-icon-search"></el-input>
              </el-form-item>
              <el-form-item label="相关的文章">
                <el-input  placeholder="请输入与她/他相关的文章" prefix-icon="el-icon-search"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
              </el-form-item>
            </el-form>
            <!-- 渲染的表格区 -->
            <el-table :data="eventList" stripe style="width: 100%;cursor:pointer;" :default-sort = "{prop: 'createdTime', order: 'descending'}">
            <el-table-column prop="nickName" label="发表人" sortable width="180"></el-table-column>
            <el-table-column prop="title" label="标题"></el-table-column>
            <el-table-column prop="createdTime" label="发表日期" :formatter="formatTime" sortable  width="180"></el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">助力</el-button>
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
      total: 0
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
  },
  // 生命周期函数
  mounted: function(){
     this.queryEvents();
    }
}
</script>