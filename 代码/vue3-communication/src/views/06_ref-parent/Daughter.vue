<template>
  <div class="box">
    <h3>女儿小红: 有存款:{{ money }}</h3>
    <button @click="giveMoney($parent)">给BABA钱: 100</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const money = ref(100000)

const giveMoney = (parent:any) =>{
  money.value -= 100
  console.log(parent);
  
  parent.money += 100
}

defineExpose({
  money
})
</script>
