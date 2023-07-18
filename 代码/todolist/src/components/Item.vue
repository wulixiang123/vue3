<template>
    <li @mouseenter="isShow = true" @mouseleave="isShow = false">
      <label>
        <input type="checkbox" :checked="todo.isSel" @change="checkTodo"/>
        <span>{{ todo.content }}</span>
      </label>
      <button class="btn btn-danger" v-show="isShow" @click="deleteTodo(index)">删除</button>
    </li>
  </template>
  
  <script setup lang="ts">
import type { TodoModel } from '@/App.vue';
import { ref } from 'vue';

  const props = defineProps<{
    todo:TodoModel,
    index:number,
    selTodo:(idx:number) => void,
    deleteTodo:(idx:number) => void
  }>()

  const isShow = ref(false)

  const checkTodo = () => {
    props.selTodo(props.index)
  }


// 1.数组写法
  // defineProps(['todo'])
//2.对象写法
//   defineProps({
//     todo:Object
//   })
// 配置对象写法
// defineProps({
//     todo:{
//         type:Object,
//         required:true,
//         default:()=>{//required与default是互斥的
//             return {}
//         }
//     }
// })
  </script>
  
<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>