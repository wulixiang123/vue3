<template>
    <div class="box">
      <h3>Child2组件-发送数据</h3>
      <button @click="sendData">发送数据</button>
    </div>
  </template>
  
  <script setup lang="ts">
    import mitter from '../../utils/mitter'

    const sendData = () => {
        mitter.emit('receiveData','我是参数')
    }
  </script>
  
  <style scoped>
  
  </style>