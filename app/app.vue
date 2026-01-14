<script setup>
// useHead({
//   meta: [
//     { name: 'viewport', content: 'width=device-width, initial-scale=1' }
//   ],
//   link: [
//     { rel: 'icon', href: '/favicon.ico' }
//   ],
//   htmlAttrs: {
//     lang: 'en'
//   }
// })

useSeoMeta({ title: 'Epi Suite viewer' })
</script>

<template>
  <UApp>
    <UMain>
      <NuxtPage />
    </UMain>

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          Maxim Polyakov • © 2026
        </p>
      </template>

      <template #right>
        <!-- <UButton
          to="https://github.com/nuxt-ui-templates/starter"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        /> -->
      </template>
    </UFooter>
  </UApp>
</template>
