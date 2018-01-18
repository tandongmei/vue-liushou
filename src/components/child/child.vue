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
          <div style="width:576px;height:206px" @click="showDetail(item.id)"><a href="#" ><img :src="item.eventImg"></a></div>
          <div style="margin-top: 15px;color:rgb(176,176,176);font-size:13px;line-height:20px"><span>{{item.content}}</span></div>
        </el-card>
      </div>
      <!-- 分页 -->
      <div style="background-color:#E4E7ED;height:40px;margin-top:20px;padding-top:15px">
        <el-pagination style="margin-right:10px" background layout="prev, pager, next" :total="100"></el-pagination>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      eventList: [
          {
            id:1,
            title:'我们很坚强',
            content:'10月5日，也就是重阳节当天，广东电白县观珠镇河垌村委会发生一起惨剧，位于该村委会的南路小学的三名小学生名也就是重阳节当天，广东电白县观珠镇河垌村委会发生一起惨剧，位于该村委会的南路小学的三名小学生名广东电白县观珠镇河垌村委会发生一起惨剧，位于该村委会的南路小学广东电白县观珠镇河垌村委会发生一起惨剧，位于该村委会的南路小学广东电白县观珠镇河垌村委会发生一起惨剧，位于该村委会的南路小学',
            eventImg:'static/images/child/detail/2.jpg',
            createdTime:'2017/12/09'
          },
          {
            id:2,
            title:'课堂上他们认真的脸',
            content:'课堂上很坚强',
            eventImg:'static/images/child/detail/3.jpg',
            createdTime:'2017/11/10'
          },
          {
            id:3,
            title:'爸爸妈妈，你们回来了吗',
            content:'爸妈回来了吗',
            eventImg:'static/images/child/detail/4.jpg',
            createdTime:'2017/09/10'
          },
          {
            id:4,
            title:'只有她一个人的家',
            content:'一个人的家',
            eventImg:'static/images/child/detail/5.jpg',
            createdTime:'2017/03/10'
          },
          {
            id:5,
            title:'我想爸爸',
            content:'想爸',
            eventImg:'static/images/child/detail/6.jpg',
            createdTime:'2017/11/10'
          },
          {
            id:6,
            title:'美丽的心灵',
            content:'美丽',
            eventImg:'static/images/child/detail/2.jpg',
            createdTime:'2016/11/10'
          }
        ]
    }
  },
   methods: {
      showDetail: function(id){
          console.log(id);
          // 根据id查看详情

          // 路由跳转
          this.$router.push({path:'/home/detail'})
      }
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


