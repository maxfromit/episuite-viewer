<script setup>
useSeoMeta({ title: 'Epi Suite viewer' })
</script>

<template>
  <UApp>
    <UMain>
      <NuxtPage />
    </UMain>

    <UFooter>
      <template #left>
        <p class="text-muted text-sm">Maxim Polyakov • © 2026</p>
      </template>

      <template #right>
        <UButton
          to="https://github.com/maxfromit/episuite-viewer"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
