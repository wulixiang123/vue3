<template>
  <div class="box">
    <h4>Child1</h4>
    <div>父组件传递来的text:{{ value }}</div>
    <input type="text" :value="value" @input="childInputHandler">
  </div>
</template>

<script lang="ts" setup>
// 接收的数据
const props =  defineProps<{
  value:string
}>()
// 接收的方法
const emits = defineEmits<{
  (e:'input',v:string):void
}>()

// 注意:
// 所有的DOM对象都有类型
// 我们这里的e.target是一个input元素(input的DOM对象)
// 它的类型是 HTMLInputElement, 这个类型需要记住
// 其他的类型记不住,通过 'ctrl + 鼠标左键' 点进去查看
// 全局搜索这个类型,可以看到所有DOM元素的类型(大概在 26709 行)
const childInputHandler = (e:Event) => {
  emits('input',(e.target as HTMLInputElement).value)
}
</script>
