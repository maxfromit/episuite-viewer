<script setup lang="ts">
defineProps<{
  label?: string
  value?: string
}>()
</script>

<template>
  <div class="flex flex-col">
    <div class="text-muted text-sm">
      {{ label }}
      <slot name="label" />
    </div>
    <div class="text-primary text-lg font-bold">
      {{ value }}
    </div>
  </div>
</template>
