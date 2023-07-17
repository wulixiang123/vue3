<template>
  <div>
    count:{{ count }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

  const count = ref(2)
</script>

<style lang="scss" scoped>

</style>