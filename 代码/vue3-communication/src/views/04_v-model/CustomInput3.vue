<template>
  <div class="box">
    <h4>Child3</h4>
    <div>text:{{ text }}</div>
    <input type="text" :value="text" @input="inputHandler">

    <div>msg:{{ modelValue }}</div>
    <input type="text" :value="modelValue" @input="msgHandler">
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  text:string
  modelValue:string
}>()

const emits = defineEmits<{
  (e:'update:text',v:string):void
  (e:'update:modelValue',v:string):void
}>()

const inputHandler = (e:Event) => {
  emits('update:text',(e.target as HTMLInputElement).value)
}

const msgHandler = (e:Event) => {
  emits('update:modelValue',(e.target as HTMLInputElement).value)
}
</script>
