<template>
<div>
   <el-container style="background-image:url('static/images/common/back7.jpg');height:850px;">
       <el-main style="background-color:#FFFFFF;width:400px;margin:50px 350px;">
           <div style="text-align:center;font-family:blod;font-size:35px;"><span style="font-color:red">注册</span></div>
           <el-form :model="user" :rules="rules" ref="userForm" label-width="110px" class="demo-ruleForm">
                <el-form-item label="用户昵称" prop="nickName">
                    <el-input v-model.trim="user.nickName" suffix-icon="el-icon-edit"></el-input>
                </el-form-item>
                <el-form-item label="用户密码" prop="password">
                    <el-input  v-model.trim="user.password" suffix-icon="el-icon-edit"></el-input>
                </el-form-item>
                <el-form-item label="真实姓名" prop="name">
                    <el-input v-model.trim="user.name" suffix-icon="el-icon-edit"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="gender">
                   <el-radio-group v-model="user.gender">
                        <el-radio :label="1">男</el-radio>
                        <el-radio :label="0">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input v-model.trim="user.age" suffix-icon="el-icon-date"></el-input>
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
                    <el-button type="primary" @click="submitForm('userForm')">注册</el-button>
                    <el-button @click="resetForm('userForm')">重置</el-button>
                </el-form-item>
            </el-form>
       </el-main>
   </el-container> 
</div>
</template>
<script>
import {valiTel,valiEmail} from './../../utils/validateUtil';


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
        if (!value) {
          callback(new Error('请输入年龄'));
        }else if(value < 1 || value > 200){
          callback(new Error('年龄格式错误'));
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
      const validateTel = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入电话'));
        }else if(!valiTel(value)){
          callback(new Error('电话格式错误'));
        } else {
          callback();
        }
      };
      const validateEmail = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入邮箱'));
        }else if(!valiEmail(value)){
          callback(new Error('邮箱格式错误'));
        } else {
          callback();
        }
      };
      return {
        user: {
          nickName: '',
          password: '',
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
          password: [
            { required: true, trigger: 'blur', validator: validatePassword }
          ],
          name: [
            { required: true, message: '请输入真实姓名', trigger: 'blur' }
          ],
          age: [
            { required: true, trigger: 'blur', validator: validateAge }
          ],
          tel: [
            { required: true, trigger: 'blur', validator: validateTel }
          ],
          email: [
            { required: true, trigger: 'blur', validator: validateEmail }
          ]
          
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
              console.log("注册成功");
                // 注册成功
              }
            });
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


