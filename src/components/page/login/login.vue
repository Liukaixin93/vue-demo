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

import { apiAddress } from '@/util/api';// 导入api接口
import { postTest } from '@/util/api';// 导入api接口

export default {
  name: 'login',
  data () {
    return {
      username: 'aaa',
      password: 'bbb',
    }
  },
  methods: {
    login() {
      let username = this.username;
      let password = this.password;
      // let params = {
      //   time: 1559791556535,
      //   tribe_name: '',
      //   tribe_type: '',
      //   city: '',
      //   codelevel: '',
      //   xddm: '',
      //   zxxkcdm: '',
      //   search_type: 7,
      //   page: 1,
      //   rows: 10,
      //   _: 1559791540139,
      // }
      // console.log(params);
      // apiAddress(params).then(res => {
      //   console.log(res);
      // })

      let params = {
        access_token: '1a6baea1162a78c9aacde1e1b85202f6',
        os: 'applet',
        version: '1.0.0'
      }
      console.log(params);
      postTest(params).then(res => {
        console.log(res);
      })

      // if(username && password){
      //   localStorage.setItem('username', username);
      //   this.$router.push({
      //     name: 'home'
      //   })
      // }

    } 
  },
}
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