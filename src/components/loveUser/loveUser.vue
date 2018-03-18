<template>
  <div>
      <!-- 面包屑 -->
      <el-header style="margin-bottom: 20px;height:40px;background-color:#E4E7ED;padding:15px">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/shouye' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>公益新闻</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <!-- 新闻列表 -->
      <el-tabs type="border-card"  @tab-click="changeTab">
        <!-- 板块循环 -->
          <el-tab-pane v-for="(item, index) in hostList" :key="item.hostId" :label="item.title" >
            <!-- 板块新闻列表循环 -->
              <el-card v-for="(item, index) in newsList" :key="item.newsId" :body-style="{ padding: '25px'  }" style="margin-top: 20px;margin_bottom:40px"> 
                <div>
                  <div style="float:left;">
                     <div style="height:30px;font-weight:500;font-family:'微软雅黑';font-size:25px;width:500px;color:#323232" class="titleDiv" @click="showDetail(item.newsId)"><a href="#" >{{item.title}}</a></div> 
                    <div style="width:500px;margin-top: 15px;color:#606266;font-size:13px;line-height:26px"><span>{{item.content}}</span></div>
                  </div>
                  <div style="float:right;">
                     <div style="" @click="showDetail(item.newsId)"><a href="#" ><img :src="item.newsImg" style="width:150px;height:100px"></a></div> 
                  </div>
                </div>
              </el-card>
              <!-- 分页  -->
              <el-pagination style="height:30px;background-color:#E4E7ED;padding:15px"
                background
                layout="prev, pager, next"
                :pageSize="pageSize" 
                @current-change="currentChange"
                :total='total'>
              </el-pagination>
          </el-tab-pane>
      </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hostList: [],
      newsList: [],
      pageNo: 1,
      pageSize: 6,
      hostId: 1,
      sort: 'createdTime',
      dir: 'desc',
      total: 0,
    }
  },
  methods: {
     // 处理分页
    currentChange: function(val){
      this.pageNo = val;
      this.changeTab();
    },
    getHost: function(){
      this.$Axios.get(this.$API.apiUri.host.base).then((res) => {
          let { code, msg, data } = res.data;
          if(code === 0){
              this.hostList = data;
              
          }
      })
    },
    changeTab:  function (tab, event) {
        if(event != null){
          this.hostId = parseInt(event.target.getAttribute('id').substring(4))+1;
        }
        let para = {
          pageNo: this.pageNo,
          pageSize: this.pageSize,
          sort: this.sort,
          dir: this.dir,
          hostId: this.hostId
        }
        this.$Axios.get(this.$API.apiUri.news.base,{params: para}).then((res) => {
              let { code, msg, data, totalRecords } = res.data;
              if(code === 0){
                  this.newsList = data;
                  this.total = totalRecords;
              }
          })
      }
  },
  mounted: function(){
    this.changeTab();
    this.getHost();
  }
  
}
</script>
<style>
a {
  text-decoration: none;
  color:black;
}
a:hover {
  color: #606266;
}
</style>
