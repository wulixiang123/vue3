<template>
  <div class="box">
    <h1>组件间通信: provide + inject</h1>
    <div>content1:{{ content1 }}</div>
    <div>content2.name:{{ content2.name }}</div>
    <div>content2.price:{{ content2.price }}</div>

    <button @click="changeContent1">修改content1</button>
    <button @click="changeContent2">修改content2</button>
    <Child></Child>

    <div>text1:{{ text1 }}</div>
    <div>text2.name:{{ text2.name }}</div>
    <div>text2.price:{{ text2.price }}</div>

    <button @click="changeText1">修改text1</button>
    <button @click="changeText2">修改text2</button>
  </div>
</template>

<script lang="ts" setup>
// provide 和 inject 用于祖孙之间的通信
// 在vue2当中,只有初始化的时候才会传一次参数
// 我们猜测在vue3中也是一样的(初始化的时候传一次数据)
// 目前来看,祖先数据的改变,后代数据也可以更新吧(意思是目前和我们的猜测不一致)
// 其实还是初始化只传递一次数据,只是我们使用的时候,传给后代的是ref对象的地址
// 当ref对象中的.value属性发生变化的时候,是对象中的属性改变,这个本来后代就可以接收到
import { provide, reactive, ref } from 'vue';
import Child from './Child.vue'

export interface Model{
  name:string,
  price:number
}

const content1 = ref('jack')
const content2 = ref<Model>({
  name:'鱼香肉丝',
  price:15
  })

  const changeContent1 = () =>{
    content1.value = 'rose'
  }

  const changeContent2 = () => {
    // content2.value = reactive({
    //   name:'鱼香肉丝贵吗',
    //   price:11
    // })
    content2.value.name = '不贵不贵'
    content2.value.price = 11
  }

  // 抛出
  provide('qwer',content1)
  provide('abc',content2)
  // 这里抛出的都是ref对象的地址,看不出来是不是只初始化了一次数据
  // -------------

  let text1 = '麻辣鸭头'
  let text2 = {
    name:'麻辣兔头',
    price:30
  }

  const changeText1 = () => {
    // text1 = '不辣'//不具有响应式
  }
  const changeText2 = () => {
    // text2 = {//地址不能修改
    //   name:'不辣',
    //   price:29
    // }
    text2.name = '哈哈哈'
    text2.price = 234
  }

  provide('text1',text1)
  provide('text2',text2)
</script>
