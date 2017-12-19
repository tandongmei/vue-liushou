<template>
<div>
   <el-container style="background-image:url('static/images/common/back7.jpg');height:850px;">
       <el-main style="background-color:#FFFFFF;width:400px;margin:50px 350px 450px 350px;">
           <div style="text-align:center;font-family:blod;font-size:35px;"><span style="font-color:red">登陆</span></div>
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
                <el-form-item>
                    <el-button type="primary" @click="submitForm('userForm')">登陆</el-button>
                    <el-button @click="resetForm('userForm')">重置</el-button>
                </el-form-item>
            </el-form>
       </el-main>
   </el-container> 
</div>
</template>
<script>
  export default {
    data() {
      const validateRePassword = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入确认密码'));
        }else if(value != this.user.password){
          callback(new Error('两次密码输入不一致'));
        } else {
          callback();
        }
      };

      return {
        user: {
          nickName: '',
          password: '',
          rePassword: ''
        },
        rules: {
          nickName: [
            { required: true, message: '请输入用户昵称', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          rePassword: [
            { required: true, trigger: 'blur', validator: validateRePassword }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>

</style>


