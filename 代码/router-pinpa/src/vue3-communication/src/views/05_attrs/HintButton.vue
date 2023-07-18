<template>
  <el-popover placement="top-start" title="Title" :width="200" trigger="hover"
    content="this is content, this is content, this is content">
    <template #reference>
      <el-button class="m-2">Hover to activate</el-button>
    </template>
  </el-popover>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped></style>
