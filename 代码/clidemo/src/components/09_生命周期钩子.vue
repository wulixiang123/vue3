<template>
  <div>
    <h1>{{ msg }}</h1>
    <hr>
    <div>text:{{ text }}</div>
  </div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {// 用来替换 beforeCreate 和 created
    console.log('setup');
    const text = ref('悟空')
    setTimeout(()=>{
      text.value += '大圣'
    },2000)

    onBeforeMount(()=>{// 挂载前获取不到真实DOM
      console.log('挂载前');
    })

    onMounted(()=>{// 挂载后可以获取真实DOM
      console.log('挂载后');
    })

    onBeforeUpdate(()=>{// 数据更新引发DOM更新,更新前指的是DOM更新前
      console.log('更新前');
    })

    onUpdated(()=>{// 更新后指的是DOM更新后
      console.log('更新后');
    })

    // 如何触发卸载?
    // v-if 在组件上用行
    // app.unmount()
    // 和vue2卸载的差异,v2卸载之后还可以看见页面中的内容,v3直接看不见
    onBeforeUnmount(()=>{
      console.log('卸载前');
    })
    onUnmounted(()=>{
      console.log('卸载后');
    })
    return {
      text,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>