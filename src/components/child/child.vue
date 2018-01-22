<template>
  <div>
      <!-- 面包屑 -->
      <el-header style="margin-bottom: 20px;height:40px;background-color:#E4E7ED;padding:15px">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/shouye' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>关爱留守</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <!-- 卡片 -->
      <div v-for="(item, index) in eventList" :key="item.id">
        <el-card :body-style="{ padding: '25px' }" style="margin-bottom: 20px;height:400px">
          <div style="height:50px;font-size:20px;color:#000;" class="titleDiv" @click="showDetail(item.id)"><a href="#" >{{item.title}}</a></div>
          <div style="width:576px;height:206px" @click="showDetail(item.id)"><a href="#" ><img :src="item.eventImg" style="width:576px;height:206px"></a></div>
          <div style="margin-top: 15px;color:rgb(176,176,176);font-size:13px;line-height:20px"><span>{{item.content}}</span></div>
        </el-card>
      </div>
      <!-- 分页 -->
      <div style="background-color:#E4E7ED;height:40px;margin-top:20px;padding-top:15px">
        <el-pagination style="margin-right:10px" background layout="prev, pager, next" :pageSize="pageSize" @current-change="currentChange" :total="total"></el-pagination>
      </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      eventList: [],
      pageNo: 1,
      pageSize: 6,
      sort: 'createdTime',
      dir: 'desc',
      total: 0,
      filters: {isLeftChild: 1}
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
          filters: JSON.stringify(this.filters)   // 对象解析为字符串
        }
        console.log("para.filters:"+para.filters);
        this.$Axios.get(this.$API.apiUri.event.base,{params: para}).then((res) => {
          let {code, msg, data, totalRecords} = res.data;
          if(code === 0){
             this.eventList = data;
             this.total = totalRecords;
          }
        })
    },
  showDetail: function(id){
      console.log(id);
      // 根据id查看详情

      // 路由跳转
      this.$router.push({path:'/home/detail'})
    }
  },
  // 生命周期函数
  mounted: function(){
    console.log("mountedkaishi");
    this.queryEvents();
  }

}
</script>
<style>

.titleDiv a{
  text-decoration: none;
}
.titleDiv a:hover {
  color: #39c;
}
</style>


