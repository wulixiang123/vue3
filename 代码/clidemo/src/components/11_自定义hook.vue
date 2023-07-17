<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>
    <div>鼠标的水平位置: {{ pageX }} ---  鼠标的垂直位置: {{ pageY }}</div>
  </div>
</template>

<script>
import getMouseLocation from './js/1.js'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const {pageX,pageY} = getMouseLocation()
    return {
      pageX,
      pageY,
    }
  },
}
</script>

<style scoped>
</style>
