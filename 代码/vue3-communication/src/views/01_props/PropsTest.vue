<template>
  <div class="box">
    <h1>组件间通信: props</h1>
    <div>msg:{{ msg }}</div>
    <div>userInfo.name:{{ userInfo.name }}</div>
    <div>userInfo.age:{{ userInfo.age }}</div>
    <Child :msg="msg" :userInfo="userInfo" :changeUserInfo="changeUserInfo"></Child>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import Child from './Child.vue';
const msg = ref('我爱你')
const userInfo = ref({
  name:'齐天大圣',
  age:18
})

const changeUserInfo = () => {
  userInfo.value = reactive({
    name:'孙悟空',
    age:19
  })
}
</script>
