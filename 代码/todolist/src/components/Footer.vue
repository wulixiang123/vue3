<template>
    <div class="todo-footer">
      <label>
        <input type="checkbox" v-model="isSelAll"/>
      </label>
      <span>
        <span>已完成{{ selCount }}</span> / 全部{{ todos.length }}
      </span>
      <button class="btn btn-danger" @click="deleteSelTodo">清除已完成任务</button>
    </div>
  </template>
  
  <script setup lang="ts">
import { computed } from 'vue';
import type { TodoModel,TodosModel } from '@/App.vue';

interface PropsModel{
  todos:TodosModel,
  checkAll:(bool:boolean) => void
  deleteSelTodo:() => void
}

//   defineProps(['todos'])//这样只能给模板用,js拿不到 所以
const props =  defineProps<PropsModel>()

// 全选
const isSelAll = computed({
    get(){
        return props.todos.every(todo => todo.isSel) && !!props.todos.length
    },
    set(val){
        console.log('全选反选',val);
    }
})

// 选中个数
const selCount = computed(()=>{
    return props.todos.reduce((pre,todo)=>{
        return pre + +(todo.isSel)
    },0)
})
  </script>
  
  <style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }
  
  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }
  
  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }
  
  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
  </style>