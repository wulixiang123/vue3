<template>
  <div class="box">
    <h4>Child2</h4>
    <div>text:{{ text }}</div>
    <input type="text" :value="text" @input="inputHandler">
  </div>
</template>

<script lang="ts" setup>
// 接收数据并定义类型
const props = defineProps<{
  text:string
}>()
// 接收方法并定义方法类型
const emits = defineEmits<{
  (e:'update:text',v:string):void
}>()
// 使用方法完成数据同步
const inputHandler = (e:Event) => {
  emits('update:text',(e.target as HTMLInputElement).value)
}
</script>
