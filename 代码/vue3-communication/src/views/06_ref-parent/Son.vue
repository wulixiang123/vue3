<template>
  <div class="box">
    <h3>儿子小明: 有存款: {{ money }}</h3>
    <button @click="giveMoney($parent)">给BABA钱: 50</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const money = ref(20000)

const giveMoney = (parent:any ) => {
  money.value -= 50
  parent.money += 50
}
defineExpose({//注意调用加对象写法 ({})
  money
})
</script>
