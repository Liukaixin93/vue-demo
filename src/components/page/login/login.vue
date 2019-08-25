/* eslint-disable */
<template>
  <form class="col-md-6 form-box">
		<div class="form-group">
      <label>用户名</label>
      <input type="text" class="form-control" placeholder="用户名" v-model="username">
    </div>
		<div class="form-group">
			<label>密码</label>
			<input type="password" class="form-control" placeholder="密码" v-model="password">
		</div>
		<button type="submit" class="btn btn-default" @click="login()">登录</button>
	</form>
</template>

<script>

import { login } from "@/util/api"; // 导入api接口

export default {
  name: "login",
  data() {
    return {
      username: "13800138000",
      password: "123"
    };
  },
  methods: {
    login() {
      let params = {
        phone: this.username,
        pwd: this.$md5(this.password),
        os: "pc",
        version: "1.0.0"
      };
      console.log(params);
      login(params).then(res => {
        if(res.errno == 0) {
          window.localStorage.setItem('token', res.data.access_token)
          this.$router.push({ name: 'orderList' });
        }
      });
      // if(username && password){
      //   localStorage.setItem('username', username);
      //   this.$router.push({
      //     name: 'home'
      //   })
      // }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-box {
  margin: 0 auto;
}
.form-group {
  text-align: left;
}
</style>