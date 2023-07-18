<template>
  <div class="box">
    <h3>Child</h3>
    <div @click="changeMsg">msg:{{ msg }}</div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  msg:string,
  userInfo:{
    name:string,
    age:number
  },
  changeUserInfo:()=>void
}>()

const changeMsg = () => {
  props.msg = 'aa'//不能直接修改父元素中的数据
}
</script>
