<template>
  <div>
    <h1>{{ msg }}</h1>
    <hr>
    <div @click="changeName">obj.name:{{ obj.name }}</div>
    <div>obj.age:{{ obj.age }}</div>
    <hr>
    <div @click="changeName2">obj2.name:{{ obj2.name }}</div>
    <div>obj2.age:{{ obj2.age }}</div>
  </div>
</template>

<script>
// reactive
// 作用: 包裹一个对象,让这个对象具有响应式
// 参数: 普通对象
// 返回值: 一个新的 proxy 对象
// obj2 = reactive(obj)
// obj叫做源对象(是一个普通对象),不具有响应式
// obj2是代理对象,是一个proxy对象,具有响应式
import { reactive } from 'vue'
export default {
  name:'HelloWorld',
  props:{
    msg: String
  },
  setup () {
    // 普通对象不具有响应式
    let obj = {
      name:'悟空',
      age:18
    }
    let obj2 = reactive(obj)
    console.log(obj2);
    console.log(obj2.name);

    let changeName = () => {
      console.log(11);
      obj.name += '弼马温'
    }

    let changeName2 = () => {
      obj2.name += '齐天大圣'
    }

    return {
      obj,
      changeName,
      obj2,
      changeName2
    }
  }
}
</script>

<style lang="scss" scoped>

</style>