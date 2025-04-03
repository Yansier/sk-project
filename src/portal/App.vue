<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <section class="content">
    <RouterView />
  </section>
  <el-backtop :right="15" :bottom="65">
    <template #default>
      <el-icon><Upload /></el-icon>
    </template>
  </el-backtop>
</template>

<style scoped>
</style>
