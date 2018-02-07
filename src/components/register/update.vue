<template>
<div>
   <el-container style="background-image:url('static/images/common/back7.jpg');">
       <el-main style="background-color:#FFFFFF;width:400px;margin:50px 350px 450px 350px;border-radius:25px;">
           <div style="text-align:center;font-family:blod;font-size:35px;"><span style="font-color:red">修改资料</span></div>
           <el-form :model="user" :rules="rules" ref="userForm" label-width="110px" class="demo-ruleForm">
                <el-form-item label="用户昵称" prop="nickName">
                    <el-input v-model.trim="user.nickName" suffix-icon="el-icon-edit"></el-input>
                </el-form-item>
                <el-form-item label="真实姓名" prop="name">
                    <el-input v-model.trim="user.name" suffix-icon="el-icon-edit"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="gender">
                   <el-radio-group v-model="user.gender">
                        <el-radio label="1">男</el-radio>
                        <el-radio label="0">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="上传头像" prop="headImg">
                  <el-upload
                      class="avatar-uploader"
                      action="https://up.qiniup.com"
                      :data="postData"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload">
                      <img v-if="user.headImg" :src="user.headImg" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input v-model.trim="user.age" type="number" min="1" suffix-icon="el-icon-date"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="tel">
                    <el-input v-model.trim="user.tel" suffix-icon="el-icon-mobile-phone"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model.trim="user.email" suffix-icon="el-icon-message"></el-input>
                </el-form-item>
                <el-form-item label="是否是留守儿童" prop="isLeftChild">
                    <el-radio-group v-model="user.isLeftChild">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="支付宝账号" prop="payNo">
                    <el-input v-model.trim="user.payNo" suffix-icon="el-icon-tickets" placeholder="请输入一个可收款的支付宝账号"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('userForm')">提交</el-button>
                    <el-button @click="resetForm('userForm')">重置</el-button>
                </el-form-item>
            </el-form>
       </el-main>
   </el-container> 
</div>
</template>
<script>
import {valiTel,valiEmail,valiPayNo} from './../../utils/validateUtil';


  export default {
    data() {
       const validateNickName = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入用户昵称'));
        } else {
          callback();
        }
      };
       const validateAge = (rule, value, callback) => {
        if(value){
           if(value < 1 || value > 200){
              callback(new Error('年龄格式错误'));
            } else {
            callback();
         }
        }else {
          callback();
        }
      };
      const validateTel = (rule, value, callback) => {
       if(value){
          if(!valiTel(value)){
          callback(new Error('电话格式错误'));
        } else {
          callback();
        }
       }else {
          callback();
        }
       
      };
      const validateEmail = (rule, value, callback) => {
        if(value){
            if(!valiEmail(value)){
            callback(new Error('邮箱格式错误'));
            } else {
            callback();
            }
        }else {
          callback();
        }
      };
      const validatePayNo = (rule, value, callback) => {
        if(value){
            if(!valiPayNo(value)){
            callback(new Error('支付宝账号格式错误'));
            } else {
            callback();
            }
        }else {
          callback();
        }
      };
      return {
        postData: {
            token: '',
            key: ''
        },
        filters: { nickName: sessionStorage.getItem('nickName')},
        user: {
          userId: '',
          nickName: '',
          name: '',
          gender: 1,
          age: '',
          tel: '',
          email: '',
          isLeftChild: 1,
          headImg: '',
          payNo: ''
        },
        rules: {
          nickName: [
            { required: true, message: '请输入用户昵称', trigger: 'blur' }
          ],
          age: [
            {  trigger: 'blur', validator: validateAge }
          ],
          tel: [
            {  trigger: 'blur', validator: validateTel }
          ],
          email: [
            {  trigger: 'blur', validator: validateEmail }
          ],
          payNo: [
            {  trigger: 'blur', validator: validatePayNo }
          ]
          
        }
      };
    },
    methods: {
        getUser: function(){
            let para = {
                filters: JSON.stringify(this.filters)
            };
            this.$Axios.get(this.$API.apiUri.user.base,{params: para}).then((res) => {
                let { code, msg, data } = res.data;
                if(code === 0){
                    this.user = data[0];
                }
            })
        },
        submitForm(userForm) {
            this.$refs[userForm].validate((valid) => {
            if (valid) {
                let para = this.user;
                let id = this.user.userId;
                let _this = this;
                this.$Axios.put(this.$API.apiUri.user.base+"/"+id,{
                    nickName: this.user.nickName,
                    name: this.user.name,
                    gender: this.user.gender,
                    age: this.user.age,
                    tel: this.user.tel,
                    email: this.user.email,
                    isLeftChild: this.user.isLeftChild,
                    headImg: this.user.headImg,
                    payNo: this.user.payNo
                }).then((res) => {
                let {code,msg,data} = res.data;
                if(code === 0){
                    this.$refs['userForm'].resetFields();
                    this.$message.success('修改成功');
                     _this.$emit('userSignIn', [data.nickName,data.headImg]); // 向父组件传值,传过去的是一个数组
                    this.$router.push({path:'/shouye'});
                    location.reload(); // 刷新页面
                }else if(code === 1002){
                    // 用户名已经存在
                    this.$message.error('用户名已经存在');
                }else{
                    // 注册失败
                    this.$message.error('系统异常');
                }
                });
            } else {
                return false;
            }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        handleAvatarSuccess(res, file) {
            console.log("file:"+file.name);
            // this.user.headImg = URL.createObjectURL(file.raw);
            this.user.headImg = "http://p3ga0tg9o.bkt.clouddn.com/"+file.name;
            console.log("this.user.headImg:"+this.user.headImg);
        },
        beforeAvatarUpload(file) {
            let suffix = file.name;
            let key = encodeURI(`${suffix}`);
            this.postData.key = key;
            return this.postData;
        },
        // 获取上传token
        getToken(){
            // 请求后台获取token
            this.$Axios.get(this.$API.apiUri.file.base).then((res) => {
                let { code, msg, data } = res.data;
                if(code === 0){
                    this.postData.token = data;
                }
            })
        }
    },
    mounted() {
       this.getUser();
       this.getToken();
    }
  }
</script>
<style>
.avatar-uploader .el-upload {
    border: 1px dashed #909399;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>


