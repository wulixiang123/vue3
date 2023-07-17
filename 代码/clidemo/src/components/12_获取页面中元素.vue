<template>
  <div>
    <h1>{{ msg }}</h1>
    <hr>
    <button @click="inputFocusHandler">点击获取input框焦点</button>
    <br>
    <input type="text" ref="inputRef">
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    // 需求: 获取input框焦点(如何获取页面中元素)
    // 1. 给标签绑定ref属性
    // 2. 在setup的return对象中必须有和 input框上ref属性值一致的 名称

    let aa = ref()
    const inputFocusHandler = () => {
      console.log(aa.value);
      aa.value.focus()
    }
    return {
      inputFocusHandler,inputRef:aa
    }
  }
}
</script>

<style lang="scss" scoped>

</style>