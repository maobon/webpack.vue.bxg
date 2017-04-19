<template>
  <!-- sidebar container -->
  <div class="col-sm-3 col-md-2 sidebar">

    <!-- navi item group -->
    <!-- Vue.js推荐不要使用a链接 需要使用router-link -->
    <!-- router-link 会被渲染为a链接 to属性指定导航路径 不需要加# 中间是a链接的文本 -->
    <ul class="nav nav-sidebar">
      <router-link to="/" tag="li" exact>
        <a>Home</a>
      </router-link>

      <router-link to="/foo" tag="li">
        <a>Foo</a>
      </router-link>

      <router-link to="/bar" tag="li">
        <a>Bar</a>
      </router-link>
    </ul>

  </div>
</template>

<script>

</script>

<style>

</style>
