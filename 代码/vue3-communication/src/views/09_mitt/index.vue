<template>
    <div class="box">
        <h1>mitt</h1>
        <Child1></Child1>
        <Child2></Child2>
    </div>
</template>

<script setup lang="ts">
// 1. 下载安装
//      npm install --save mitt
// 2. 创建一个mitt实例,用这个实力进行跨组件间的通信
//    src/utils/mitt.ts
//      import mitt from 'mitt'
//      export default mitt()
// 3. 在接收数据的组件中,找到mitt实例,绑定事件,留下回调,接收参数
//      mitter.on('receiveData', receiveData)
// 4. 在发送数据的组件中,找到mitt实例,触发事件,传递参数
//      mitter.emit('receiveData', '我爱你')


// 通过on监听/emit触发/off移除事件
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';
</script>

<style scoped>

</style>