<template>
  <div class="box">
    <h3>Child2</h3>
    <button @click="clickHandler">发送数据</button>
  </div>
</template>

<script lang="ts" setup>
import Pubsub from 'pubsub-js'
const clickHandler = () => {
  Pubsub.publish('receiveData',11)
}
</script>