<template>
    <ul class="list-group">
        <li class="list-group-item">{{ route.params.newsId }}</li>
        <li class="list-group-item">{{ route.query.content }}</li>
    </ul>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style scoped></style>