import Vue from 'vue'
import Router from 'vue-router'
// 加载自己的组件
import Home from '../components/home/Home.vue'
import Bar from '../components/home/bar.vue'
import Foo from '../components/home/foo.vue'

Vue.use(Router)

// 配置自己的路由
export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/bar',
      component: Bar
    },
    {
      path: '/foo',
      component: Foo
    }
  ],
  linkActiveClass: 'active'
})
