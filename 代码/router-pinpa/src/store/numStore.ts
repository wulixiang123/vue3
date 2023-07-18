// 直接创建单独的一个模块(单独模块单独使用)

import { defineStore } from 'pinia'

// defineStore 是用来定义一个store的
// 参数一: 叫做id,唯一标识(可以理解成我们之前命名空间的名称)
// 参数二: 配置对象
//        state -- 必须是函数返回对象的形式,数据都放在返回的这个对象中
//        actions
//        getters
//    这里把 mutations 干掉了
// 返回值: 返回的是一个函数,这个函数需要暴露出去,在使用store的位置引入调用即可获取到当前store
const useNumStore = defineStore('numStore', {
  // state必须是函数返回值的形式
  state() {
    return {
      num: 5
    }
  },
  actions: {
    increment() {
      this.num++
    },
    isEvenIncrement(str1: string, str2: number) { // 参数随便传,类型保持一致即可
      console.log(str1, str2)
      if (this.num % 2 == 0) {
        this.num++
      }
    },
    asyncIncrement() {
      setTimeout(() => {
        this.num++
      }, 2000)
    }
  },
  getters: {

  }
})

export default useNumStore