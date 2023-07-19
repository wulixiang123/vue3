<template>
  <div class="box">
    <h3>Event1组件</h3>
    <button @click="btnHandler">触发父组件的自定义事件xxx</button>
    <button @click="btnHandler2">触发父组件的自定义事件click</button>
  </div>
</template>

<script lang="ts" setup>
// 不加TS类型的写法
// const emits = defineEmits(['xxx', 'click'])

// 加TS类型写法
const emits = defineEmits<{
  (e:'xxx',n:number):void
  (e:'click',s:MouseEvent):void
}>()

const btnHandler = () => {
  emits('xxx',11)//触发自定义事件
}
const btnHandler2 = (r:MouseEvent) => {
  emits('click',r)
}
</script>
