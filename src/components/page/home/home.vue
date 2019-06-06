<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './../../common/header'
export default {
  name: 'home',
  components: {
    'v-header': header
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
