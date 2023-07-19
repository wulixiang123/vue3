<template>
  <div class="box">
    <h1>组件间通信: v-model</h1>
    <div>text:{{ text }}</div>
    <!--
      v-model 父子组件间的数据同步
      在vue2中,v-model 的实现条件是 :value 和 @input
      我们猜测vue3也是
      测试了一下发现不好使,猜错了
    -->

    <!--                        @input自定义事件           -->
    <CustomInput :value="text" @input="inputHandler"></CustomInput>
    <!-- <CustomInput v-model="text"></CustomInput> -->

    <CustomInput2 :text="text" @update:text="inputHandler"></CustomInput2>
    <CustomInput2 :text.sync="text"></CustomInput2><!-- 可见.sync不好使 -->
    <CustomInput2 v-model:text="text"></CustomInput2>

    <hr>
    <CustomInput3 v-model:text="text" :modelValue="msg" @update:modelValue="msg = $event"></CustomInput3>
    <CustomInput3 v-model:text="text" v-model:modelValue="msg"></CustomInput3>
    <!--                                     :modelValue可以简写 -->
    <CustomInput3 v-model:text="text" v-model="msg"></CustomInput3>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CustomInput from './CustomInput.vue';
import CustomInput2 from './CustomInput2.vue';
import CustomInput3 from './CustomInput3.vue';

const text = ref('悟空')
const msg = ref('齐天大圣')

const inputHandler = (val:string) => {
  console.log(val);
  text.value = val
}
</script>
