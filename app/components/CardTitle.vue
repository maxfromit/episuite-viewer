<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
  url?: string
}>()
</script>

<template>
  <div class="flex flex-col justify-between gap-1 lg:flex-row lg:items-center">
    <div class="flex flex-row items-baseline gap-1">
      <span class="font-bold"> {{ title }} <slot name="title" /> </span>
      <span
        v-if="description"
        class="text-muted text-sm font-medium"
      >
        {{ description }}
      </span>
    </div>

    <ULink
      v-if="url"
      :to="url"
      target="_blank"
    >
      <div class="text-primary flex flex-row items-center-safe gap-1">
        <div class="font-medium">User Guide</div>
        <UIcon
          name="i-lucide-info"
          class="text-primary"
        />
      </div>
    </ULink>
  </div>
</template>
