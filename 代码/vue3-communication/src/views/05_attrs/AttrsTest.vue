<template>
  <div class="box">
    <h1>组件间通信: attrs</h1>
    <!--
      在vue2中
        $attrs 获取到所有绑定在组件标签上的属性,除了props接收过的和class和style
        $listeners 获取到所有绑定在组件标签上的事件
      在vue3中 $listeners 移除了~~~~~~~~~~~
        保留了attrs这个对象,使用方式:
        import { useAttrs } from 'vue'
        const attrs = useAttrs() // 拿到attrs这个对象
        可以接到所有绑定组件标签上的【属性】和【事件】,除了 props 接过的属性
    -->

    <!-- 一般用于二次封装常用属性方法 -->

    <Child
    :msg="msg"
    :text="text"
    content="沙僧"
    class="wrapper"
    style="background-color: #bfa;"
    @click="clickHandler"
    @xxx="xxxHandler"
    ></Child>

    <HintButton
    title="编辑"
    content="编辑用户信息"
    type="primary"
    :icon="Edit"
    circle
    ></HintButton>

    <hr>

    <HintButton
    title="删除"
    content="删除用户信息"
    type="danger"
    :icon="Delete"
    circle
    @click="deleteHandler"
    ></HintButton>
  </div>
</template>

<script lang="ts" setup>
import { Edit, Delete } from '@element-plus/icons-vue'
import { ref } from 'vue';
import Child from './Child.vue'
import HintButton from './HintButton.vue';

const msg = ref('悟空')
const text = ref('八戒')

const clickHandler = () => {
  console.log('原生click触发');
}

const xxxHandler = () =>{
  console.log('自定义事件触发');
}

const deleteHandler = () => {
  console.log('触发delete');
}
</script>

<style lang="less" scoped>

</style>