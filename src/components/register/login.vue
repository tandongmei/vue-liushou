<template>
<div>
   <el-container style="background-image:url('static/images/common/back7.jpg');height:850px;">
       <el-main style="background-color:#FFFFFF;width:400px;margin:50px 350px 450px 350px;border-radius:25px;">
           <div style="text-align:center;font-family:blod;font-size:35px;"><span style="font-color:red">登陆</span></div>
           <el-form :model="user" :rules="rules" ref="userForm" label-width="110px" class="demo-ruleForm">
                <el-form-item label="用户昵称" prop="nickName">
                    <el-input v-model.trim="user.nickName" suffix-icon="el-icon-edit"></el-input>
                </el-form-item>
                <el-form-item label="用户密码" prop="password">
                    <el-input  v-model.trim="user.password" type="password" suffix-icon="el-icon-edit"></el-input>
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
          ]
         
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var nickName = this.user.nickName;
            var password = this.user.password;
            let _this = this;
            this.$Axios.post(this.$API.apiUri.user.login+ "?nickName=" + nickName + "&password=" + password).then((res) => {
                let {code,msg,data} = res.data;
                if(code === 0){
                  // 登陆成功
                  this.$refs['userForm'].resetFields();
                  this.$message.success('登陆成功');
                // console.log("1---带数据："+data.nickName);
                _this.$emit('userSignIn', data.nickName); // 向父组件传值
                this.$router.push({path:'/shouye'});
                location.reload();
                }else if(code === 1001){
                    this.$message.error('用户不存在');
                }else if(code === -2){
                    this.$message.error('密码错误');
                }else{
                    this.$message.error('系统异常');
                }
            })
          } else {
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


