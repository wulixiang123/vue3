<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>
    <div>鼠标的水平位置: {{ pageX }} ---  鼠标的垂直位置: {{ pageY }}</div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {

    // 获取鼠标实时位置 - 需求
    const pageX = ref(0)
    const pageY = ref(0)

    const mouseMoveHandler = (e) => {
      let { pageX: x, pageY: y } = e
      console.log(x, y)

      pageX.value = x
      pageY.value = y
    }

    onMounted(() => {
      document.addEventListener('mousemove', mouseMoveHandler)
    })

    onUnmounted(() => {
      document.removeEventListener('mousemove', mouseMoveHandler)
    })

    return {
      pageX,
      pageY,
    }
  },
}
</script>

<style scoped>
</style>
