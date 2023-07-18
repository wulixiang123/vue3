<template>
  <div class="box">
    <h3>Child</h3>
    <div @click="changeMsg">msg:{{ msg }}</div>
    <div @click="changeName">userInfo.name:{{ userInfo.name }}</div>
    <button @click="changeHandler">修改userInfo</button>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
// 二、使用TS写法
const props = defineProps<{// 这里的大括号是interface,见到<>就是interface
  msg:string,
  userInfo:{
    name:string,
    age:number
  },
  changeUserInfo:()=>void
}>()

const changeMsg = () => {
  // props.msg = 'aa'//不能直接修改父元素中的数据
}

const changeName = () => {
  props.userInfo.name = '孙悟空'//只能改属性

  // props.userInfo = reactive({// 不能改地址
  //   name:'弼马温',
  //   age:11
  // })
}

const changeHandler = () => {
  props.changeUserInfo()//父组件传递过来的方法
}


// 一、不使用TS写法
// 1. 数组形式
// const props = defineProps(['msg'])
// 2. 对象形式
// const props = defineProps({
//   msg: String
// })
// 3. 配置对象
// const props = defineProps({
//   msg: {
//     type: String,
//     required: true, // 注意: required 和 default
//     default: 'qwer' // 注意: 引用类型(对象、数组、函数)默认值需要用函数返回值的形式
//   }
// })
</script>
