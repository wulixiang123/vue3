<template>
    <ul class="todo-main">
      <Item
      v-for="(todo,index) in todos"
      :key="todo.id"
      :todo="todo"
      :index="index"
      :selTodo="selTodo"
      :deleteTodo="deleteTodo"
      ></Item>
    </ul>
  </template>
  
  <script setup lang="ts">
  import type { TodosModel } from '@/App.vue';
import Item from '@/components/Item.vue'

// defineProps(['todos'])//相当于下面的写法 只不过定义了类型

  defineProps<{
    todos:TodosModel,
    selTodo:(idx:number) => void,
    deleteTodo:(idx:number) => void
  }>()
  </script>
  
  <style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }
  
  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
  </style>