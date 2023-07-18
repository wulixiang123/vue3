// 1. 下载安装
//    npm i vue-router
// 2. 引入使用
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import routes from './routes'

// 3.创建并暴露实例
export default createRouter({
  // 在vue2中我们的路径:
  // http://localhost:8080/#/home  --> hash模式   --->   mode: 'hash'
  // http://localhost:8080/home  -->  history模式 --->   mode: 'history'
  // 在vue3中我们也支持这两种模式,不在使用 mode 来配置模式,使用 history 字段来配置模式
  // history: createWebHashHistory(), // hash模式 - 带#号
  history: createWebHistory(), // history模式 - 不带#号
  routes
})
// 4. 关联到main.ts