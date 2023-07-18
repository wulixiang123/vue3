<template>
    <div role="tabpanel" class="tab-pane active" id="home">
      <!-- Nav tabs -->
      <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active">
            <RouterLink to="/home/message" aria-controls="Message" role="tab" data-toggle="tab">Message</RouterLink>
            <!-- <a href="#Message" aria-controls="Message" role="tab" data-toggle="tab">Message</a> -->
        </li>
        <li role="presentation">
            <RouterLink to="/home/news" aria-controls="News" role="tab" data-toggle="tab">News</RouterLink>
            <!-- <a href="#News" aria-controls="News" role="tab" data-toggle="tab">News</a> -->
        </li>
      </ul>
      <!-- Tab panes -->
      <div class="tab-content">
        <RouterView></RouterView>
        
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { RouterLink,RouterView } from 'vue-router'
  </script>
  
  <style scoped></style>