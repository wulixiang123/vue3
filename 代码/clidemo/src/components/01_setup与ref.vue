<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>
    <div @click="num++">num:{{ num }}</div>
    <div>count:{{ count }}</div>
    <div @click="count++">count:{{ count }}</div>
    <div @click="click">count:{{ count }}</div>
  </div>
</template>

<script>
// #region
// setup是一个钩子函数
// 钩子函数,最早执行,用来替代 beforeCreate 和 created
// 注意: 在这个钩子中获取不到 this (你可能还没有意识到问题的严重性)
//    以后【所有】页面中用到的东西都在setup这个钩子中写
//    页面中要用的时候需要在return中体现
// 
// ref
// ref是用来将数据变成响应式的,包裹数据之后生成一个ref对象
// 页面中使用这个数据的时候,可以把这个ref对象的地址,给return出去(放在return的对象中)
// ref对象下有一个value属性,这个属性才是在页面中真正展示的值
// 注意:
//    在模板中使用ref对象,不需要.value属性,模板自己默认会找ref对象的.value属性进行展示
//    在js中使用ref对象的时候,需要自己手动.value属性,去修改
// #endregion
import { ref } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // vue3写法
  setup(){
    // console.log('setup执行', this)

    // let num = 6//不具有响应式
    let num = ref(6)
    let abc = ref(5)

    const xxx = () => {
      console.log(999);

      // -> 必然不好使,abc这个变量声明的时候,要在页面中使用
      // -> 此时return对象像中的count拿到了abc这个变量的地址
      // 当点击页面再次执行这个回调的时候,只是把 abc 这个变量中存的地址给替换了
      // abc = 12

      // 这个也不好使,因为修改了abc的地址,这个新的地址和之前的ref对象的地址没关系
      // abc = ref(20)

      abc.value += 2
    }
    return{
      count:abc,
      num,
      click:xxx
    }
  },
  // beforeMount() {
  //   console.log('挂载前', this)
  // },
  // beforeCreate() {
  //   console.log('创建前', this)
  // }
  // vue2写法
  // data() {
  //   let count = 3
  //   return {
  //     count: count
  //   }
  // },
}
</script>

<style scoped>
</style>
