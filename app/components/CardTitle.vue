<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
  guideUrl?: string
}>()
</script>

<template>
  <div class="flex flex-col justify-between gap-1 md:flex-row md:items-center">
    <div class="flex flex-row items-baseline gap-1">
      <span
        class="font-bold"
        v-html="title"
      />
      <span
        v-if="description"
        class="text-muted text-sm font-medium"
      >
        {{ description }}
      </span>
    </div>

    <ULink
      v-if="guideUrl"
      :to="guideUrl"
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
