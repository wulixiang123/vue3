<template>
    <div role="tabpanel" class="tab-panel" id="About">
      <div class="panel panel-default">
        <div class="panel-body">
          Basic panel example
        </div>
      </div>
      <hr>
      <div>count:{{ count }}</div>
      <button @click="addHandler">自增</button>
      <button @click="count--">自减</button>
      <button @click="isEvenAddHandler">偶数自增</button>
      <button @click="asyncAddHandler">2秒后自增</button>
      <hr>
      <div>使用store:{{ numStore.num }}</div>
      <button @click="numStore.increment">自增</button>
      <button @click="numStore.num--">自减</button>
      <button @click="isEvenHandler">偶数自增</button>
      <button @click="asyncHandler">2秒后自增</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import useNumStore from '@/store/numStore'
import { ref } from 'vue';
  const numStore = useNumStore()// 得到store仓库
  
  const count = ref(2)
  const addHandler = () => {
    count.value++
  }
  const isEvenAddHandler = () => {
    if(count.value % 2 == 0){
      count.value++
    }
  }
  const asyncAddHandler = () => {
    setTimeout(()=>{
      count.value++
    },2000)
  }

  const isEvenHandler = () => {
    numStore.isEvenIncrement('oh',11)
  }
  const asyncHandler = () => {
    numStore.asyncIncrement()
  }
  </script>
  
  <style scoped></style> 