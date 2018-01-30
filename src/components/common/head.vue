<template>
  <div style="position:fixed; width:100%;height:60px">
    <el-row >
      <el-col :span="24">
      <div class="grid-content bg-purple-dark">
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-row>
              <el-col :span="4">
                <el-menu-item index="0"><span style="font-weight:bolder;font-size:35px;color:#ffd04b">LIU SHOU</span></el-menu-item>
              </el-col>
              <el-col :span="17">
                <el-menu-item index="1"><router-link to="/shouye">网站首页</router-link></el-menu-item>
                <el-submenu index="2">
                    <template slot="title">留守之家</template>
                    <el-menu-item index="2-1"><router-link to="/home/child">关爱留守</router-link></el-menu-item>
                    <el-menu-item index="2-2"><router-link to="/home/help">寻求爱心</router-link></el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">爱心公益</template>
                    <el-menu-item index="3-1"><router-link to="/home/loveUser">公益新闻</router-link></el-menu-item>
                    <el-menu-item index="3-2"><router-link to="/home/assist">为他助力</router-link></el-menu-item>
                </el-submenu>
                <el-menu-item index="4">心灵大使</el-menu-item>
                <el-menu-item index="5">亲子互动</el-menu-item>
              </el-col>
              <el-col v-if="nickName"  :span="3">
                <el-submenu index="6">
                    <template slot="title"><img :src="headImg" style="width:38px;height:38px;border-radius:120px;margin-right:5px">{{nickName}}</template>
                    <el-menu-item index="6-1"><router-link to="/update">修改资料</router-link></el-menu-item>
                    <el-menu-item index="6-2" @click="exit">退出登陆</el-menu-item>
                </el-submenu>
              </el-col>
              <el-col v-else :span="3">
                <el-menu-item index="6"><router-link to="/login">登陆</router-link></el-menu-item>
                <el-menu-item index="7"><router-link to="/register">注册</router-link></el-menu-item>
              </el-col>
            </el-row>
        </el-menu>
      </div>
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
        headImg: sessionStorage.getItem('headImg')
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      exit: function(){
        this.dialogVisible = true;
      },
      cancleSubmit: function(){
        this.dialogVisible = false;
        // 从sessionStorage删除所有保存的数据
        sessionStorage.clear();
        location.reload(); // 刷新页面
      }
    }
}
</script>
<style>

</style>


