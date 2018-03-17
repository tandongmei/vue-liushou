<template>
  <!-- <div style="position:fixed; width:100%;height:60px"> -->
  <div>
    <el-row>
       <el-col :span="20">
          <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" 
                    background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
              <el-menu-item index="0"><span style="font-weight:bolder;font-size:35px;color:#ffd04b">Qi 爱</span></el-menu-item>
              <el-menu-item index="1"><router-link to="/shouye">网站首页</router-link></el-menu-item>
              <el-submenu index="2">
                  <template slot="title">留守之家</template>
                  <el-menu-item index="2-1" ><router-link to="/home/child" style="color:#fff">关爱留守</router-link></el-menu-item>
                  <el-menu-item index="2-2"><router-link to="/home/help" style="color:#fff">寻求帮助</router-link></el-menu-item>
              </el-submenu>
              <el-submenu index="3">
                  <template slot="title">爱心公益</template>
                  <el-menu-item index="3-1"><router-link to="/home/loveUser" style="color:#fff">公益新闻</router-link></el-menu-item>
                  <el-menu-item index="3-2"><router-link to="/home/assist" style="color:#fff">为他助力</router-link></el-menu-item>
              </el-submenu>
              <el-menu-item index="4">问卷调查</el-menu-item>
              <el-menu-item index="5">亲子互动</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="4"> 
          <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" 
                      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
              <el-submenu index="6" v-if="nickName">
                  <template slot="title"><img :src="headImg" style="width:38px;height:38px;border-radius:120px;margin-right:5px">{{nickName}}</template>
                  <el-menu-item index="6-1">我的评论<el-badge class="mark" :value="noReadCommentCount" /></el-menu-item>
                  <el-menu-item index="6-2" >我的回复<el-badge class="mark" :value="noReadReplyCount" /></el-menu-item>
                  <el-menu-item index="6-3"><router-link to="/update" style="color:#fff">修改资料</router-link></el-menu-item>
                  <el-menu-item index="6-4" @click="exit">退出登陆</el-menu-item>
              </el-submenu>
              <el-submenu index="6" v-else>
              <template slot="title">个人中心</template>
              <el-menu-item index="6"><router-link to="/login">登陆</router-link></el-menu-item>
              <el-menu-item index="7"><router-link to="/register">注册</router-link></el-menu-item>
              </el-submenu>
          </el-menu>
        </el-col>
    </el-row>
  <!-- 退出登录弹框 -->
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    :modal-append-to-body=false
    width="30%"
    >
    <span style="font-size:16px">确定退出登录吗?</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="cancleSubmit">确 定</el-button>
    </span>
  </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
      return {
        dialogVisible: false,
        activeIndex: '1',
        activeIndex2: '1',
        nickName: sessionStorage.getItem('nickName'),
        headImg: sessionStorage.getItem('headImg'),
        noReadCommentCount: sessionStorage.getItem('noReadCommentCount'),
        noReadReplyCount: sessionStorage.getItem('noReadReplyCount')
      };
    },
    methods: {
      exit: function(){
        this.dialogVisible = true;
      },
      cancleSubmit: function(){
        this.dialogVisible = false;
        // 从sessionStorage删除所有保存的数据
        sessionStorage.clear();
        location.reload(); // 刷新页面
        this.$router.push({path:'/shouye'}); // 去首页
      }
    }
}
</script>
<style>

</style>


