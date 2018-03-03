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
      <el-tabs type="border-card">
        <!-- 板块循环 -->
        <div v-for="(item, index) in hostList" :key="item.hostId">
          <el-tab-pane :label="item.title">
            <!-- 板块新闻列表循环 -->
            <div v-for="(item, index) in eventList" :key="item.eventId"> 
              <el-card :body-style="{ padding: '25px'  }" style="margin-top: 20px;margin_bottom:40px"> 
                <div>
                  <div style="float:left;">
                    <div style="height:30px;font-weight:500;font-family:'微软雅黑';font-size:25px;width:500px;color:#323232" class="titleDiv" @click="showDetail(item.eventId)"><a href="#" >{{item.title}}</a></div>
                    <div style="width:500px;margin-top: 15px;color:#606266;font-size:13px;line-height:26px"><span>{{item.content}}</span></div>
                  </div>
                  <div style="float:right;">
                    <div style="" @click="showDetail(item.eventId)"><a href="#" ><img :src="item.eventImg" style="width:150px;height:100px"></a></div>
                  </div>
                </div>
              </el-card> 
            </div> 
          </el-tab-pane>
        </div>  
      </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hostList: [
        {
          hostId: 1,
          title: '板块1'
        },
        {
          hostId: 2,
          title: '板块2'
        },
        {
          hostId: 3,
          title: '板块3'
        },
        {
          hostId: 4,
          title: '板块4'
        }
      ],
      eventList: [{
          id: 1,
          title: '爸爸妈妈，你们在哪',
          eventImg: 'static/images/child/lunbo/1.jpg',
          content: '10月5日，也就是重阳节当天，广东电白县观珠镇河垌村委会发生一起惨学的三名小学生名也就是重阳节学的三名小学生名也就是重阳节学的三名小学生名也就是重阳节'
        }, {
          id: 21,
          title: '爸爸妈妈，你们在哪',
          eventImg: 'static/images/child/lunbo/1.jpg',
          content: '10月5日，也就是重阳节当天，广东电白县观珠镇河垌村委会发生一起惨学的三名小学生名也就是重阳节学的三名小学生名也就是重阳节学的三名小学生名也就是重阳节'
        },{
          id: 13,
          title: '爸爸妈妈，你们在哪',
          eventImg: 'static/images/child/lunbo/1.jpg',
          content: '10月5日，也就是重阳节当天，广东电白县观珠镇河垌村委会发生一起惨学的三名小学生名也就是重阳节学的三名小学生名也就是重阳节学的三名小学生名也就是重阳节'
        },{
          id: 1,
          title: '爸爸妈妈，你们在哪',
          eventImg: 'static/images/child/lunbo/1.jpg',
          content: '10月5日，也就是重阳节当天，广东电白县观珠镇河垌村委会发生一起惨学的三名小学生名也就是重阳节学的三名小学生名也就是重阳节学的三名小学生名也就是重阳节'
        },{
          id: 1,
          title: '爸爸妈妈，你们在哪',
          eventImg: 'static/images/child/lunbo/1.jpg',
          content: '10月5日，也就是重阳节当天，广东电白县观珠镇河垌村委会发生一起惨学的三名小学生名也就是重阳节学的三名小学生名也就是重阳节学的三名小学生名也就是重阳节'
        },{
          id: 1,
          title: '爸爸妈妈，你们在哪',
          eventImg: 'static/images/child/lunbo/1.jpg',
          content: '10月5日，也就是重阳节当天，广东电白县观珠镇河垌村委会发生一起惨学的三名小学生名也就是重阳节学的三名小学生名也就是重阳节学的三名小学生名也就是重阳节'
        },{
          id: 1,
          title: '爸爸妈妈，你们在哪',
          eventImg: 'static/images/child/lunbo/1.jpg',
          content: '10月5日，也就是重阳节当天，广东电白县观珠镇河垌村委会发生一起惨学的三名小学生名也就是重阳节学的三名小学生名也就是重阳节学的三名小学生名也就是重阳节'
        }]
    }
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
