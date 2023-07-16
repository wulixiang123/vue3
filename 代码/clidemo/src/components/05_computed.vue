<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>firstName: {{ firstName }}</div>
    <div>lastName: {{ lastName }}</div>
    <div>fullName:{{ fullName }}</div>
    <input type="text" v-model="fullName">
    <hr>
    
  </div>
</template>

<script>
import { ref,computed } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {

    const firstName = ref('悟空')
    const lastName = ref('齐天大圣')

    // 函数写法---只有get方法,只能读取不能修改
    // const fullName = computed(()=>{
    //   return firstName.value + '-' + lastName.value
    // })

    // 对象写法---get-set,可读取可修改
    const fullName = computed({
      get(){
        return firstName.value + '-' + lastName.value
      },
      set(val){
        firstName.value = val.split('-')[0]
        lastName.value = val.split('-')[1]
      }
    })

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
