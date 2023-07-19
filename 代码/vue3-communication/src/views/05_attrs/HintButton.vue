<template>
  <el-popover 
  placement="top" 
  :title="title" 
  trigger="hover"
  :content="content">
  <!-- v-bind="attrs"不能简写 -->
    <template #reference>
      <el-button v-bind="attrs"  />
    </template>
  </el-popover>
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue'
defineProps<{
  title:string
  content:string
}>()
const attrs = useAttrs()//拿到组件上所有属性
</script>

<style lang="less" scoped></style>
