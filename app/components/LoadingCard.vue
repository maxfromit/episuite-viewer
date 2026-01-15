<script setup lang="ts">
const { index, length } = defineProps<{
  index: number
  length: number
}>()
</script>

<template>
  <USkeleton class="text-primary h-70 p-4">
    <div>Loading Card {{ index + 1 }} of {{ length }}</div>
  </USkeleton>
</template>
