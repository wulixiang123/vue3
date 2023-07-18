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
// props 用于父子组件之间的通信，父给子传
// 非函数数据类型
//    基本数据类型 - 子组件不能修改
//    引用数据类型 - 子组件不能修改地址，可以修改属性，但是违反了单项数据流
// 函数数据类型
//    为了让子组件调用函数,修改父组件的数据
// ------------------
// 写法3种
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


<!-- 
  props用于父子之间的通信,有函数类型与非函数类型,其中非函数类型
  又包括基本数据类型与引用数据类型,子组件不可以修改父组件的任意类型,
  虽然可以修改,但是违反了单向数据流
  为了让子组件可以正常修改父组件数据,可以写为函数数据类型,也就是在父组件中
  定义修改的方法,在子组件中调用父组件的方法,比较合理
 -->