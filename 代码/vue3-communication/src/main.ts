import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

// 1. 创建项目、清空没有用到的东西
// 2. 准备router
// 3. 安装less
//      npm  i  less  -D
// 4. 把views这个文件夹复制到src文件夹下
//    替换routes,替换App.vue文件内容
// 项目准备完毕
