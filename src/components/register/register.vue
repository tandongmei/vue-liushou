<template>
<div>
   <el-container style="background-image:url('static/images/common/back7.jpg');height:850px;">
       <el-main style="background-color:#FFFFFF;width:400px;margin:50px 350px 450px 350px;border-radius:25px;">
           <div style="text-align:center;font-family:blod;font-size:35px;"><span style="font-color:red">注册</span></div>
           <el-form :model="user" :rules="rules" ref="userForm" label-width="110px" class="demo-ruleForm">
                <el-form-item label="用户昵称" prop="nickName">
                    <el-input v-model.trim="user.nickName" suffix-icon="el-icon-edit"></el-input>
                </el-form-item>
                <el-form-item label="用户密码" prop="password">
                    <el-input  v-model.trim="user.password" suffix-icon="el-icon-edit"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="rePassword">
                    <el-input  v-model.trim="user.rePassword" suffix-icon="el-icon-edit"></el-input>
                </el-form-item>
                <!-- <el-form-item label="真实姓名" prop="name">
                    <el-input v-model.trim="user.name" suffix-icon="el-icon-edit"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="gender">
                   <el-radio-group v-model="user.gender">
                        <el-radio :label="1">男</el-radio>
                        <el-radio :label="0">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="上传头像" prop="headImg">
                  <el-upload
                      class="avatar-uploader"
                      action="http://localhost:8080/api/user/upload"
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
                </el-form-item> -->
                <el-form-item>
                    <el-button type="primary" @click="submitForm('userForm')">注册</el-button>
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
      const validatePassword = (rule, value, callback) => {
        if (!value || value.length < 6) {
          callback(new Error('密码不能为空,至少6位'));
        } else {
          callback();
        }
      };
      const validateRePassword = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入确认密码'));
        }else if(value != this.user.password){
          callback(new Error('两次密码输入不一致'));
        } else {
          callback();
        }
      };
      //  const validateAge = (rule, value, callback) => {
      //   if (!value) {
      //     callback(new Error('请输入年龄'));
      //   }else if(value < 1 || value > 200){
      //     callback(new Error('年龄格式错误'));
      //   } else {
      //     callback();
      //   }
      // };
      // const validateTel = (rule, value, callback) => {
      //   if (!value) {
      //     callback(new Error('请输入电话'));
      //   }else if(!valiTel(value)){
      //     callback(new Error('电话格式错误'));
      //   } else {
      //     callback();
      //   }
      // };
      // const validateEmail = (rule, value, callback) => {
      //   if (!value) {
      //     callback(new Error('请输入邮箱'));
      //   }else if(!valiEmail(value)){
      //     callback(new Error('邮箱格式错误'));
      //   } else {
      //     callback();
      //   }
      // };
      // const validatePayNo = (rule, value, callback) => {
      //   if (!value) {
      //     callback(new Error('请输入支付宝账号'));
      //   }else if(!valiPayNo(value)){
      //     callback(new Error('支付宝账号格式错误'));
      //   } else {
      //     callback();
      //   }
      // };
      return {
        user: {
          nickName: '',
          password: '',
          rePassword: ''
          // name: '',
          // gender: 1,
          // age: '',
          // tel: '',
          // email: '',
          // isLeftChild: 1,
          // headImg: '',
          // payNo: ''
        },
        rules: {
          nickName: [
            { required: true, message: '请输入用户昵称', trigger: 'blur' }
          ],
          password: [
            { required: true, trigger: 'blur', validator: validatePassword }
          ],
          rePassword: [
            { required: true, trigger: 'blur', validator: validateRePassword }
          ]
          // name: [
          //   { required: true, message: '请输入真实姓名', trigger: 'blur' }
          // ],
          // headImg: [
          //   { required: true, message: '请上传头像', trigger: 'blur' }
          // ],
          // age: [
          //   { required: true, trigger: 'blur', validator: validateAge }
          // ],
          // tel: [
          //   { required: true, trigger: 'blur', validator: validateTel }
          // ],
          // email: [
          //   { required: true, trigger: 'blur', validator: validateEmail }
          // ],
          // payNo: [
          //   { required: true, trigger: 'blur', validator: validatePayNo }
          // ]
          
        }
      };
    },
    methods: {
      submitForm(userForm) {
        this.$refs[userForm].validate((valid) => {
          if (valid) {
            let para = this.user;
            
            this.$Axios.post(this.$API.apiUri.user.base,para).then((res) => {
              let {code,msg,data} = res.data;
              if(code === 0){
                this.$refs['userForm'].resetFields();
                this.$message.success('注册成功');
                this.$router.push({path:'/shouye'});
                // 注册成功
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
        this.user.headImg = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
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


