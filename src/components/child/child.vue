<template>
  <div>
      <el-container style="background-color:rgb(243,243,243);">
        <el-main>
          <div v-for="(item, index) in eventList" :key="item.id">
            <el-card :body-style="{ padding: '20px' }">
              <img :src="item.eventImg" class="image">
              <div style="padding: 14px;">
                <span>{{item.title}}</span>
                <div class="bottom clearfix">
                  <time class="time">{{ item.createdTime }}</time>
                  <el-button type="text" class="button" @click="showDetail(item.id)">查看详情</el-button>
                </div>
              </div>
            </el-card>
          </div>
        </el-main>
        <el-aside>3</el-aside>
    </el-container>
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
            content:'我是小乖乖，我很坚强',
            eventImg:'static/images/child/detail/t1.jpg',
            createdTime:'2017/12/09'
          },
          {
            id:2,
            title:'课堂上他们认真的脸',
            content:'课堂上很坚强',
            eventImg:'static/images/child/detail/t1.jpg',
            createdTime:'2017/11/10'
          },
          {
            id:3,
            title:'爸爸妈妈，你们回来了吗',
            content:'爸妈回来了吗',
            eventImg:'static/images/child/detail/t1.jpg',
            createdTime:'2017/09/10'
          },
          {
            id:4,
            title:'只有她一个人的家',
            content:'一个人的家',
            eventImg:'static/images/child/detail/t1.jpg',
            createdTime:'2017/03/10'
          },
          {
            id:5,
            title:'我想爸爸',
            content:'想爸',
            eventImg:'static/images/child/detail/t1.jpg',
            createdTime:'2017/11/10'
          },
          {
            id:6,
            title:'美丽的心灵',
            content:'美丽',
            eventImg:'static/images/child/detail/t1.jpg',
            createdTime:'2016/11/10'
          }
        ],
    }
  }
  
}
</script>
<style>
  .item {
    /* padding: 58px 0; */
  }

  .box-card {
    width: 980px;
    height: 200px;
    margin-bottom: 20px;
  }
</style>


