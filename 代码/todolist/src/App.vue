<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header></Header>
      <Main :todos="todos"></Main>
      <Footer :todos="todos"></Footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
import Footer from '@/components/Footer.vue'
import { ref } from 'vue';

const todos = ref([
  {id:1,content:'吃饭',isSel:true},
  {id:2,content:'睡觉',isSel:false},
  {id:3,content:'打豆豆',isSel:true}
])
</script>

<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
