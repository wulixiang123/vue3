<template>
  <div>
    <h1>{{ msg }}</h1>
    <hr>
    <div>name:{{ name }}</div>
    <input type="text" v-model="name">
    <div>age:{{ age }}</div>
    <input type="text" v-model="age">
    <div>job:{{ job }}</div>
    <input type="text" v-model="job">
    <hr>
    <div>intro:{{ intro }}</div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    let name = ref('悟空')
    let age = ref(18)
    let job = ref('齐天大圣')
    let intro = ref(`我叫${name.value},今年${age.value},是个${job.value}`)

    // watch(name,(newval)=>{
    //   intro.value = `我叫${newval},今年${age.value},是个${job.value}`
    // })
    // watch(age,(newval)=>{
    //   intro.value = `我叫${name.value},今年${newval},是个${job.value}`
    // })
    // watch(job,(newval)=>{
    //   intro.value = `我叫${name.value},今年${age.value},是个${newval}`
    // })

    // // 太麻烦,写成数组形式
    // watch([name,age,job],(newval)=>{
    //   intro.value = `我叫${newval[0]},今年${newval[1]},是个${newval[2]}`
    // })

    // watchEffect 有点像computed
    // 在watchEffect会自动寻找依赖的数据,当依赖的数据发生变化的时候,自动执行这个回调
    watchEffect(() => {
      intro.value = `我叫${name.value},今年${age.value},是个${job.value}`
    })

    return {
      name,
      age,
      job,
      intro
    }
  }
}
</script>

<style lang="scss" scoped>

</style>