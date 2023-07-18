<template>
    <ul class="list-group">
      <li class="list-group-item">消息id: {{ route.params.msgId }}</li>
      <li class="list-group-item">消息content: {{ route.query.content }}</li>
      <hr>
      <li class="list-group-item">消息id: {{ msgId }}</li>
      <li class="list-group-item">消息content: {{ content }}</li>
      <li class="list-group-item">text: {{ text }}</li>
    </ul>
  </template>
  
  <script setup lang="ts">
  import { useRoute } from 'vue-router'
  const route = useRoute() // 调用useRoute得到当前路由
  
  defineProps(['msgId', 'content', 'text'])
  
  </script>
  
  <style scoped></style>