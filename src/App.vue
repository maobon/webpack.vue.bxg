<template>
  <div id="app">
    <h2>Webpack + Vue.js 项目起步</h2>
    <h3>vue init webpack template 支持热更新(vue-cli)</h3>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
