<template>
  <div class="box">
    <h1>组件间通信: 消息订阅与发布</h1>
    <Child1 />
    <Child2 />
  </div>
</template>

<script lang="ts" setup>
// 1. 安装
//    npm i pubsub-js
// 2. 接收数据的组件中,找到pubsub,绑定事件(订阅消息),留下回调,接收参数
//    Pubsub.subscribe('receiveData', receiveData)
// 3. 发送数据的组件中,找到pubsub,触发事件(发布消息),传递参数
//    Pubsub.publish('receiveData', 128)
// -------------------
// 问题: 引入'pubsub-js'会飘红,飘红是因为TS不认识'pubsub-js'这个包
// 解决方案:
//    1. 手动解决
//        在 env.d.ts文件中, declare module 'pubsub-js' 全局声明模块
//    2. 自定解决
//        鼠标移动到飘红的位置,提示
//            npm i --save-dev @types/pubsub-js
//        安装一个类型的包,如果这个包存在,安装上就好
//        如果不存在,安装不上,还是需要自己手动解决
//        注意: 在vue3+ts中有很多第三方包都不会自动安装类型
//              需要掌握自动解决和手动解决两种方案

import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
</script>