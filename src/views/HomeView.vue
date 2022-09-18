<template>
  <div class="login">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
      <h3 class="title">老逼登管理系统</h3>
      <el-form-item prop="username">
        <el-input
            v-model="loginForm.username"
            type="text"
            auto-complete="off"
            placeholder="账号"
        >

        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
            v-model="loginForm.password"
            type="password"
            auto-complete="off"
            placeholder="密码"
            @keyup.enter.native="handleLogin"
        >
        </el-input>
      </el-form-item>
      <el-checkbox v-model="loginForm.rememberMe" style="margin:0px 0px 25px 0px;">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button
            :loading="loading"
            size="medium"
            type="primary"
            style="width:100%;"
            @click.native.prevent="handleLogin"
        >
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
    </el-form>
    <!--  底部  -->
    <div class="el-login-footer">
      <span>Copyright © 2022-2056 laobideng.vip All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>
import {postKeyValueRequest} from "@/utils/api";

export default {
  name: "HomeView",
  data() {
    return {
      codeUrl: "",
      loginForm: {
        username: "admin",
        password: "123",
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "请输入您的账号" }
        ],
        password: [
          { required: true, trigger: "blur", message: "请输入您的密码" }
        ]
      },
      loading: false,

    };
  },
  created() {

  },
  methods: {
    handleLogin(){
      this.$refs.loginForm.validate((valid)=>{
        if (valid){
          postKeyValueRequest('/doLogin',this.loginForm).then(response=>{
            if (response){
             window.sessionStorage.setItem("user",JSON.stringify(response.obj))
              this.$router.replace("/index")
            }
          })
        }
      })
    }


  }
};
</script>
<style>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 947px;
  background-image: url("../assets/images/login.jpeg");
  background-size: cover;
}
.title{
  marging: 0px auto 30px auto;
  text-align: center;
  color: #0b0b0b
}
.login-form {
  border-radius: 6px;
  background: #fff;
  width: 400px;
  padding: 25px 25px 5px 25px;
}
.login-form el-input{
  height: 38px;
}
.login-form el-input input {
  height: 38px;
}
.login-code {
  width: 33%;
  height: 38px;
  float: right;
}
.login-code img{
  cursor: pointer;
  vertical-align: middle;
}
.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}
.login-code-img {
  height: 38px;
}
</style>
