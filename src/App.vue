<template>
  <div id="app">
    <!-- header component -->
    <AppHeader></AppHeader>

    <!-- other structure -->
    <div class="container-fluid">
      <div class="row">
        <!-- sidebar component-->
        <AppSidebar></AppSidebar>

        <!-- main container SPA page replace -->
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // 引入 AppHeader 组件
  import AppHeader from './components/common/AppHeader.vue'
  // 引入 AppSidebar 组件
  import AppSidebar from './components/common/AppSidebar.vue'

  export default {
    name: 'app',
    components: {
      AppHeader,
      AppSidebar
    }
  }
</script>

<style>

</style>
