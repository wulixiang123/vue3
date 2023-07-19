<template>
  <div class="box">
    <h3>Child</h3>
  </div>
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue'
defineProps<{
  text:string
}>()

const attrs = useAttrs()
console.log(attrs);

</script>

<style lang="less" scoped>
</style>
