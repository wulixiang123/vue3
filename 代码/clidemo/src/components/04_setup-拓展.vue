<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>
    <div @click="clickHandler">count: {{ count }}</div>
    <div @click="changeNum">num: {{ num }}</div>
  </div>
</template>

<script>
// setup 和 vue2选项式api配合使用 - 看看就行,不用记,没人这么用
// 需求: 修改count值
// 1. setup写数据 methods写方法 - 好使
// 2. data写数据 setup写方法
// 注意: 当setup和data中有重名数据的时候,谁配置在后面,以谁为准
import { ref, reactive, getCurrentInstance } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const count = ref(2)

    let ins = getCurrentInstance() // 获取当前实例
    const changeNum = () => {
      // console.log(ins)
      // console.log(ins.data)
      ins.data.num++
    }
    return {
      count,
      changeNum
    }
  },
  data() {
    return {
      num: 5,
      count: 22
    }
  },
  methods: {
    clickHandler() {
      this.count++
    }
  }
}
</script>

<style scoped>
</style>
