<template>
  <div class="container">
    <div class="page-header">
      <h1>路由组件的练习</h1>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <!-- Nav tabs -->
      <ul class="nav nav-stacked col-md-6" role="tablist">
        <li role="presentation" class="active">
          <router-link to="/home" aria-controls="home" role="tab" data-toggle="tab">Home</router-link>
        </li>
        <li role="presentation">
          <router-link to="/about" aria-controls="About" role="tab" data-toggle="tab">About</router-link>
        </li>
      </ul>
      <!-- Tab panes -->
      <div class="tab-content col-md-6">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 静态搭建
//    定义、注册(路由)、使用(点击的位置、渲染的位置)
// 初始化数据展示
// 交互
</script>

<style scoped></style>