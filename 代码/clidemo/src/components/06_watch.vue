<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>firstName: {{ firstName }}</div>
    <div>lastName: {{ lastName }}</div>
    <div>fullName:{{ fullName }}</div>
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
  </div>
</template>

<script>
import { ref,watch } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {

    const firstName = ref('悟空')
    const lastName = ref('齐天大圣')
    const fullName = ref('')

    // 参数一: 监听的数据
    // 参数二: 回调
    // 参数三: 配置项
    //        immediate --  立即监听
    //        deep  --  深度监听
    watch(firstName,(navl,oval) => {
      fullName.value = navl + '-' + lastName.value
    })

    watch(lastName,(nval,oval)=>{
      fullName.value = firstName.value + '-' + nval
    },{immediate:true})
    return {
      firstName,
      lastName,
      fullName
    }
  },
}
</script>

<style scoped>
</style>
