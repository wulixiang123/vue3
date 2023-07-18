<template>
  <div class="box">
    <h1>组件间通信: provide + inject</h1>
  </div>
</template>

<script lang="ts" setup>
import { provide, reactive, ref } from 'vue';
import Child from './Child.vue'
</script>
