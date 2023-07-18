<template>
    <div class="todo-header">
      <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="keyword" @keyup.enter="addTodoHandler"/>
    </div>
  </template>
  
  <script setup lang="ts">
import type { TodosModel } from '@/App.vue';
import { ref } from 'vue';

// interface PropsModel {
//   addTodo: Function,
//   todos: TodosModel
// }
// const props = defineProps<PropsModel>()

  const props = defineProps<{
    addTodo:Function,
    todos:TodosModel
  }>()


  const keyword = ref('')

  const addTodoHandler = () => {
    console.log(keyword.value);
    // 重复和非空校验
    let text = keyword.value.trim()
    if(!text){
      alert('输入的内容不能为空')
      keyword.value = ''
      return
    }

    let isRepeat = props.todos.some(todo=>todo.content == text)
    if(isRepeat){
      alert('输入的内容重复')
      keyword.value = ''
      return
    }
    
    // 组装数据
    const todo = {
      id:Date.now(),
      content:keyword.value,
      isSel:false
    }

    props.addTodo(todo)
    keyword.value = ''

  }

  </script>
  
  <style scoped>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }
  
  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
  </style>