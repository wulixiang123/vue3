<template>
  <div class="box">
    <div 
    v-for="(todo,index) in todos"
    :key="todo.id"
    >
    <slot :row="todo" :$index="index">{{ todo.text }}</slot>
  </div>
  </div>
</template>

<script lang="ts" setup>
import type { Users, User } from './types'
defineProps<{
  todos:Users
}>()
</script>