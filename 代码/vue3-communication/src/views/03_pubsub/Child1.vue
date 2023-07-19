<template>
  <div class="box">
    <h3>Child1-接收数据</h3>
  </div>
</template>

<script lang="ts" setup>
import Pubsub from 'pubsub-js'
const receiveData = (type:string,n:number) => {
  console.log(type,n);
}

Pubsub.subscribe('receiveData',receiveData)
let a:abc = 'qwer'
</script>
