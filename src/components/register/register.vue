<template>
<div>
   <el-container style="background-image:url('static/images/common/back7.jpg');height:850px;">
       <el-main style="background-color:#FFFFFF;width:400px;margin:50px 350px;">
           <div style="text-align:center;font-family:blod;font-size:35px;"><span style="font-color:red">注册</span></div>
           <el-form :model="user" :rules="rules" ref="ruleForm" label-width="110px" class="demo-ruleForm">
                <el-form-item label="用户昵称" prop="nickName">
                    <el-input v-model="user.nickName" suffix-icon="el-icon-edit"></el-input>
                </el-form-item>
                <el-form-item label="用户密码" prop="password">
                    <el-input  v-model="user.password" suffix-icon="el-icon-edit"></el-input>
                </el-form-item>
                <el-form-item label="真实姓名" prop="name">
                    <el-input v-model="user.name" suffix-icon="el-icon-edit"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="gender">
                   <el-radio-group v-model="user.gender">
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                        </el-radio-group>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input v-model="user.age" suffix-icon="el-icon-date"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="tel">
                    <el-input v-model="user.tel" suffix-icon="el-icon-mobile-phone"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="user.email" suffix-icon="el-icon-message"></el-input>
                </el-form-item>
                <el-form-item label="是否是留守儿童" prop="isLeftChild">
                    <el-radio-group v-model="user.isLeftChild">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="支付宝账号" prop="payNo">
                    <el-input v-model="user.payNo" suffix-icon="el-icon-tickets" placeholder="请输入一个可收款的支付宝账号"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
       </el-main>
   </el-container> 
</div>
</template>
<script>
  export default {
    data() {
      return {
        user: {
          nickName: '',
          password: '',
          name: '',
          gender: '',
          age: '',
          tel: '',
          email: '',
          isLeftChild: '',
          headImg: '',
          createdTime: '',
          pay: {
            payType: '',
            payNo: ''
          }
        },
        rules: {
          nickName: [
            { required: true, message: '请输入用户昵称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入真实姓名', trigger: 'blur' }
          ],
          age: [
            { required: true, message: '请输入年龄', trigger: 'blur' }
          ],
          tel: [
            { required: true, message: '请输入电话', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' }
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


