<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :todos="todos" :addTodo="addTodo"></Header>
      <Main :todos="todos"></Main>
      <Footer :todos="todos"></Footer>
    </div>
  </div>
</template>

<script setup lang="ts">
// #region
// 1.静态搭建 - 拆组件
//    注意: 引入的组件必须带有.vue后缀
// 2.初始化数据展示
//    App组件中书写数据
//    传给main组件循环展示item
//    传给footer组件进行计算展示
//    注意: 此时Footer组件飘红,到了必须添加TS类型的时候
//    ref<TodosModel>()
// 
//    interface PropsModel {
//      todos: TodosModel
//    }
//    defineProps<PropsModel>()
// 3.交互
//    3.1 Header组件交互
//        
// #endregion
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
import Footer from '@/components/Footer.vue'
import { ref } from 'vue';

export interface TodoModel{
  id:number
  content:string
  isSel:boolean
}
export type TodosModel = TodoModel[]

const todos = ref<TodosModel>([
  {id:1,content:'吃饭',isSel:true},
  {id:2,content:'睡觉',isSel:false},
  {id:3,content:'打豆豆',isSel:true}
])

const addTodo = (todo:TodoModel) => {
  todos.value.unshift(todo)
}

// // TS中最重要的 接口 和 泛型
// interface userInfo {
//   id?:number
//   username:string
//   age:number
// }
// let userInfo:userInfo = {
//   username:'悟空',
//   age:18
// }

// 泛型?
// 定义的时候定义泛型,使用的时候确定泛型(泛型不是一个具体的类型)

// 泛型函数
function fn1 () {}
function fn2 (n:number){}
function fn3 (n:number):number{return n}
function fn4 (n:string):string{return n}
function fn5 (n:boolean):boolean{return n}

let a1 = fn3(3)
let a2 = fn4('悟空')
let a3 = fn5(true)

function fn6<T>(n:T):T{return n}
let b1 = fn6(3)
let b2 = fn6('aa')
let b3 = fn6(true)
let b4 = fn6(null)

// 泛型接口
// interface UserInfo{
//   id?:number
//   username:string,
//   age:number,
//   hobby:any
// }

interface UserInfo<T> {
  id?:number
  username:string
  age:number
  hobby:T
}

let name1: UserInfo<string> = {
  username:'张三',
  age:18,
  hobby:'抽烟'
}

let name2:UserInfo<number> = {
  username:'李四',
  age:22,
  hobby:11
}
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
