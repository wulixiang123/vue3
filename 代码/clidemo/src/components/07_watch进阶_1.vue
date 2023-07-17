<template>
  <div>
    <h1>{{ msg }}</h1>
    <hr>
    <div @click="changeText">text:{{ text }}</div>
    <hr>
    <div @click="changeDog">dog.name:{{ dog.name }}</div>
    <hr>
    <div>dog.age:{{ dog.age }}</div>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
  name: 'HelloWorld',
  props: {
  msg: String
  },
  setup () {
    const text = ref('悟空')// ref包裹基本数据类型 - 监听
    const changeText = () => {
      text.value += '齐天大圣'
    }

    watch(text,(newval,oldval)=>{
      console.log(newval);//悟空齐天大圣
    })

    const dog = ref({// ref包裹引用数据类型 - 监听
      name:'哮天犬',
      age:4
    })
    const changeDog = () => {
      // dog.value = reactive({// 修改的是 ref 对象下得value属性 - 可以监听到
      //   name:'二郎神?',
      //   age:2
      // })

      dog.value.name = '狗子'// 修改的是ref对象下value存得proxy对象得属性 - 监听不到
      dog.value.age = 1
    }

    watch(dog,(newval,oldval)=>{
      console.log(newval);
    })
    // 结论1: 监听的是 ref 对象的.value属性的改变(在没有开启深度监听)

    // 参数一放的是 proxy对象, 当proxy对象下的属性发生变化的时候可以监听到
    watch(dog.value,(newval,oldval)=>{
      console.log('dog.value',newval);//dog.value Proxy(Object) {name: '狗子', age: 1}
    })

    // 总结: 在未开启深度监听的情况下
    //      监听ref对象监听的是 ref.value 属性
    //      监听proxy对象监听的是 proxy 对象的属性
    //    本质上实在监听对象的下一层属性

    // // 直接监听到proxy对象下的属性了
    // watch(dog.value.name,(newval)=>{
    //   console.log(newval);
    // })
    // // 等价于下面这个
    // watch('哮天犬',(newval)=>{
    //   console.log(newval);
    // })
    // 需要注意,watch的参数一必须是函数/ref对象/reactive对象/数组

    // 如果非要想监听一个字符串,如何写? 写成函数形式
    watch(()=>dog.value.name,(newval,oldval)=>{
      console.log('直接监听字符串',newval);//直接监听字符串 狗子
    })

    return {
      text,
      changeText,
      dog,
      changeDog
    }
  }
}
</script>

<style lang="scss" scoped>

</style>