<script lang="ts" setup>
import { User, Lock } from "@element-plus/icons-vue"
import { reactive } from "vue"
const loginForm = reactive({ username: "admin", password: "111111" })
</script>

<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login-form">
          <h1>HELLO</h1>
          <h2>歡迎使用後台系統</h2>
          <el-form-item>
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login-btn">登入</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;

  .login-form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url("@/assets/images/login_form.jpg") no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      color: white;
      font-size: 20px;
      margin: 20px 0;
    }

    .login-btn {
      width: 100%;
    }
  }
}
</style>
