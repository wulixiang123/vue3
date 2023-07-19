<template>
    <div class="box">
      <h3>Child1组件-接收数据</h3>
    </div>
  </template>
  
  <script setup lang="ts">
    import mitter from '../../utils/mitter'
    const a:(arg:string) => void = (arg:string) => {
        console.log(arg);
    }
    mitter.on('receiveData',a)
  </script>
  
  <style scoped>
  
  </style>