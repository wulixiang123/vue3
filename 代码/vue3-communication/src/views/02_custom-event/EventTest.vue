<template>
  <div class="box">
    <h1>组件间通信: custom_event</h1>
    <!-- 给标签绑定 -->
    <button @click="clickHandler" @xxx="xxxHandler">原生与自定义事件</button>
    <button @click="clickHandler">原生事件</button>
    <button @xxx="xxxHandler">自定义事件</button>
    <!-- 给组件标签绑定 -->
    <Event1 @click="clickHandler" @xxx="xxxHandler"></Event1>
  </div>
</template>

<script lang="ts" setup>
// #region
// 自定义事件 - 自己定义的事件叫自定义事件,用于父子组件之间的通信,子给父传参
// ------------------------------------------------------------------
// 原生标签
//    绑定原生事件
//        事件类型 - click
//        触发机制 - 浏览器触发
//    绑定自定义事件
//        -- 没有意义,无法触发
// 组件标签
//    绑定原生事件
//        事件类型 - click
//        触发机制 - 像click这种事件在vue3中会被理解成原生事件,移出了.native
//                  事件将绑定在子组件的根标签上
//                  1. 如果没有根标签的话,会被理解为自定义事件
//                      需要我们自己手动触发
//                  2. 如果有根标签,但是通过 defineEmits 接过 click 事件
//                      那么这个click事件将变为自定义事件
//    绑定自定义事件
//        事件类型 -  xxx 自己起名字
//        触发机制
//                  使用 const emits = defineEmits(['xxx']) 接一下绑定的自定义事件
//                  得到 emits 函数,用这个函数取触发自定义事件
// ------------------------------
// 关于 $event 规则和vue2保持一致
// #endregion
import Event1 from './Event1.vue';
import Event2 from './Event2.vue';

// MouseEvent 是事件对象的类型,记这一个就好
// 所有事件的事件对象都有类型,这些类型是TS帮我们内置好的,我们拿过来用即可
// 但是事件类型太多了,记不住
// 记住 MouseEvent 之后,写一个 MouseEvent,然后 'ctrl + 鼠标左键' 点击 MouseEvent
// 进入 TS 类型的声明文件中(这个文件是安装依赖就有的),使用 查找,找到所有类型的声明位置,找你需要的事件类型即可

const clickHandler = (e:MouseEvent) => {
  console.log('触发了原生click事件',e);
}
const xxxHandler = (n:number) => {
  console.log('触发了自定义事件',n);
}

// -----------
// 给变量添加一个函数类型
// const fn: (abc: number) => void = (a) => {}
</script>
