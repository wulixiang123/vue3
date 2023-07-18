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

const props = defineProps<{
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
</script>
