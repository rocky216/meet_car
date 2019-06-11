<template>
  <div class="login">
    <div class="logo">
      用户登录
    </div>
    <van-cell-group>
      <van-field 
        label="输入账号"
        required
        error-message=""
        label-align=""
        v-model="username" 
        placeholder="请输入用户名" 
        />
        <van-field 
        label="输入密码"
        required
        label-align=""
        v-model="username" 
        placeholder="请输入密码" 
        />
    </van-cell-group>
    <div style="margin-top: 30px;">
      <van-button type="primary" block  size="small">登录</van-button>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header"

export default {
  data(){
    return {
      username: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  padding: 50px;
}
.logo {
  text-align: center;
  padding: 50px 0;
}
</style>
