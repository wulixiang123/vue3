<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>
    <div @click="changeUsername">userInfo.username:{{ userInfo.username }}</div>
    <div>userInfo.intro:{{ userInfo.intro }}</div>
    <hr>
    <div>username:{{ username }}</div>
    <div>age:{{ age }}</div>
    <div>intro:{{ intro }}</div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    const userInfo = reactive({
      username:'悟空',
      age:23,
      intro:'保护唐僧'
    })
    // 页面中写姓名的时候太长了,能不能写短点呢?
    // userInfo.username --->  username

    console.log(userInfo);
    console.log(userInfo.username);
    console.log(userInfo.age);
    console.log(userInfo.intro);


    const changeUsername = () => {
      userInfo.username = '齐天大圣'
    }

    // toRefs 目的是为了让传入的对象的属性变成响应式的
    const userInfo2 = toRefs(userInfo)
    console.log(userInfo2);
    console.log(userInfo2.username);
    console.log(userInfo2.age);
    console.log(userInfo2.intro);


    // ...userInfo,
      // 等价于
      // username: userInfo.username,
      // age: userInfo.age,
      // intro: userInfo.intro,
    return {changeUsername,userInfo,...userInfo2}
  }
}
</script>

<style lang="scss" scoped>

</style>