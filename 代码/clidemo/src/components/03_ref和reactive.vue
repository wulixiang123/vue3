<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>
    <div @click="changeA1">message1回调修改:{{ message1 }}</div>
    <div @click="changeA2">message2回调修改:{{ message2 }}</div>
    <hr>
    <div @click="message1 += '烦死了'">message1行内改:{{ message1 }}</div>
    <!-- 这里修改的message2是setup中return对象的属性message2,里面存的是"高圆圆这个字符串",但是修改之后没有响应式 -->
    <div @click="message2 += '烦死了了了了'">message2行内改:{{ message2 }}</div>
    <hr>
    <div @click="changeObj1">obj1.name回调改:{{ obj1.name }}</div>
    <div>obj1.age:{{ obj1.age }}</div>
    <div @click="changeObj2">obj2.name回调改:{{ obj2.name }}</div>
    <div>obj2.age:{{ obj2.age }}</div>
    <hr>
    <div @click="obj1.name = ',,,'">obj1.name行内改:{{ obj1.name }}</div>
    <div @click="obj2.name = 'xxx'">obj2.name行内改:{{ obj2.name }}</div>
  </div>
</template>

<script>
// #region
// ref 和 reactive 区别?
// 相同点
//    ref对象和reactive对象在 模板中使用的时候,都直接去修改属性即可
//    (ref对象在模板中不用.value)
// 不同点:
//    1. ref可以包裹进本数据类型,reactive不可以
//    2. 当ref包裹一个对象的时候,会把这个对象交给 reactive 先进行处理,变成一个proxy对象
//        当变成一个proxy对象之后会放在 ref对象的.value属性上
//    3. ref对象在使用的时候,需要.value,reactive在使用的时候不需要.value 直接.属性即可
//    4. ref对象.value属性具有响应式,reactive中的属性也具有响应式
// #endregion
import { ref,reactive } from 'vue'
export default {
  name:'HelloWord',
  props:{
    msg:String
  },
  setup () {
    // 基本数据类型
    let a1 = ref('哦吼')
    let a2 = reactive('吼吼吼吼')
    let changeA1 = () =>{
      a1.value += '???'
    }
    let changeA2 = () =>{
      a2 = '...'// 这里改的是a2这个变量,和retuen对象里面的message2没关系
    }

    // 引用数据类型
    let obj1 = ref({
      name:'jack',
      age:8
    })

    let obj2 = reactive({
      name:'rose',
      age:10
    })
    // ref对象修改
    let changeObj1 = () =>{
      // obj1 = {}  // 不能直接这么改,这么改的是obj1变量中存的内容,和return对象中的obj1没关系了
      console.log(obj1)
      console.log(obj1.value);// 读到的是一个reactive处理过后的proxy对象
      // obj1.value.name = '刘能' // 这个改的是reactive对象的属性

      obj1.value = reactive({// 这个改的是ref对象下的.value属性,赋值了一个新的 proxy对象
        name:'谁啊',
        age:11
      })
  }
  // reactive对象修改
    let changeObj2 = () => {
      console.log(obj2);
      obj1.name = '马冬梅'
    }

    return {
      message1:a1,// 抛出的是一个ref对象
      message2:a2,// 抛出的就是一个字符串 "高圆圆"
      changeA1:changeA1,
      changeA2:changeA2,
      obj1,
      obj2,
      changeObj1,
      changeObj2
    }
  }
}
</script>

<style lang="scss" scoped>

</style>