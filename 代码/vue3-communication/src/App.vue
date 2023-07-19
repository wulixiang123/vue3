<template>
  <div class="com">
    <h1>
      各种Vue组件间通信/传值
      <span style="color: red;">非常重要, 面试必备</span>
    </h1>
    <div class="box">
      <router-link to="/props">props</router-link>&nbsp;&nbsp;
      <router-link to="/event">custom event</router-link>&nbsp;&nbsp;
      <router-link to="/bus">PubSub</router-link>&nbsp;&nbsp;
      <router-link to="/model">v-model</router-link>&nbsp;&nbsp;
      <router-link to="/attrs">attrs</router-link>&nbsp;&nbsp;
      <router-link to="/ref-parent">ref & parent</router-link>&nbsp;&nbsp;
      <router-link to="/provide-inject">provide-inject</router-link>&nbsp;&nbsp;
      <router-link to="/slot">slot</router-link>&nbsp;&nbsp;
      <router-link to="/mitt">mitt</router-link>&nbsp;&nbsp;
    </div>
    <br>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
}
</script>
<script lang="ts" setup>

</script>
<style lang="less" scoped>
.com {
  margin: 10px;

  a {
    font-size: 16px;
    margin-right: 5px;

    &.router-link-active {
      color: red;
    }
  }
}
</style>
<style>
.box {
  border: solid 1px #aaa;
  margin: 5px;
  padding: 5px;
}
</style>