<template>
  <div class="box">
    <h4>孙组件标题</h4>
    <div>content1:{{ content1 }}</div>
    <!--
      这里content2飘红是两个不同的原因飘红的:
      1. content2没有没有是 unknown
      2. 当我们使用 inject<Model>('abc') 定义类型之后
        还会飘红的原因是因为可能为 undefined
    -->
    <div>content2.name:{{ content2?.name }}</div>
    <div>content2.price:{{ content2?.price }}</div>

    <div>text1:{{ text1 }}</div>
    <div>text2.name:{{ text2?.name }}</div>
    <div>text2.price:{{ text2?.price }}</div>
  </div>
</template>

<script  lang="ts">
export default {
  name: 'GrandChild',
}
</script>
<script lang="ts" setup>
import { inject } from 'vue';
import type { Model } from './ProvideInjectTest.vue'

const content1 = inject('qwer')
const content2 = inject<Model>('abc')

const text1 = inject('text1')
const text2 = inject<Model>('text2')

setInterval(()=>{
  console.log(text1);
  console.log(text2);
},1000)
</script>
