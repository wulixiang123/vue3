<template>
  <div class="box">
    <h1>组件间通信: $ref & $parent</h1>

    <p>BABA有存款:{{ money }}</p>
    <button @click="borrowMoneyFromXM">找小明借钱100</button><br>
    <button @click="borrowMoneyFromXH">找小红借钱150</button><br>

    <br>
    <Son ref="sonRef" />

    <br>
    <Daughter ref="dauRef" />
  </div>
</template>


<script lang="ts" setup>
// 在vue2中拿到组件实例可以直接修改组件实例中的数据
// 在vue3中不行,需要在组件内部往外暴露一下数据,外部拿到组件实例才能修改
// 往外暴露数据,使用 defineExpose 即可
// $parent 可以在模板中获取到,慎用
// $children 移除了
import Son from './Son.vue'
import Daughter from './Daughter.vue'
import { onMounted, ref } from 'vue'
const money = ref(1000)

const sonRef = ref()//拿到组件实例
const dauRef = ref()

const borrowMoneyFromXM = () => {
  money.value += 100//自己的钱加100
  sonRef.value.money -= 100//你会发现不能修改son组件的money,需要son组件把money暴露才能修改
}

const borrowMoneyFromXH = () => {
  money.value += 150
  dauRef.value.money -= 150
}

defineExpose({
  money
})
</script>
